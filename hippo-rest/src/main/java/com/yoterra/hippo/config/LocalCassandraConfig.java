package com.yoterra.hippo.config;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.apache.cassandra.exceptions.ConfigurationException;
import org.apache.thrift.transport.TTransportException;
import org.cassandraunit.utils.EmbeddedCassandraServerHelper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.cassandra.config.AbstractCassandraConfiguration;
import org.springframework.data.cassandra.config.SchemaAction;
import org.springframework.data.cassandra.core.mapping.CassandraMappingContext;
import org.springframework.data.cassandra.repository.config.EnableCassandraRepositories;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.SimpleStatement;
import com.datastax.oss.driver.api.core.metadata.schema.ClusteringOrder;
import com.datastax.oss.driver.api.core.type.DataTypes;
import com.datastax.oss.driver.api.querybuilder.QueryBuilder;
import com.datastax.oss.driver.api.querybuilder.SchemaBuilder;
import com.datastax.oss.driver.api.querybuilder.term.Term;
import com.yoterra.hippo.annotations.profiles.Local;
import com.yoterra.hippo.notifications.data.NotificationType;

@Configuration
@EnableCassandraRepositories(basePackages = "com.yoterra.hippo.cassandra.repositories")
//@Profile("testing")
@Local
public class LocalCassandraConfig extends AbstractCassandraConfiguration {

	@Value("${spring.data.cassandra.keyspace-name}")
	private String keyspace;
	
	@Value("${spring.data.cassandra.contact-points}")
	private String contactPoints;
	
	@Value("${spring.data.cassandra.port}")
	private int port;
	
	@Value("${spring.data.cassandra.local-datacenter}")
	private String datacenter;

	@PostConstruct
	public void setup() throws ConfigurationException, TTransportException, IOException, InterruptedException {
		EmbeddedCassandraServerHelper.startEmbeddedCassandra();

		try (CqlSession session = CqlSession.builder().addContactPoint(new InetSocketAddress(contactPoints, port))
				.withLocalDatacenter(datacenter).build()) {
			
			SimpleStatement keyspaceStatement = SchemaBuilder.createKeyspace(keyspace).ifNotExists().withSimpleStrategy(1).build();
			session.execute(keyspaceStatement);
			
			SimpleStatement tableStatement = SchemaBuilder.createTable(keyspace,"notifications").ifNotExists()
					.withPartitionKey("user", DataTypes.BIGINT)
					.withClusteringColumn("timestamp", DataTypes.TIMESTAMP)
					.withClusteringColumn("event", DataTypes.BIGINT)
					.withClusteringColumn("type", DataTypes.ASCII)
					.withColumn("seen", DataTypes.BOOLEAN)
					.withClusteringOrder("timestamp", ClusteringOrder.DESC)
					.build();
			session.execute(tableStatement);
			
			Map<String, Term> terms = new HashMap<>();
			terms.put("user",QueryBuilder.literal(0l));
			terms.put("timestamp",QueryBuilder.literal(1615941161000l));
			terms.put("seen",QueryBuilder.literal(true));
			terms.put("type",QueryBuilder.literal(NotificationType.INVITATION_ACCEPTED_TO_INVITER.name()));
			terms.put("event",QueryBuilder.literal(1l));
			SimpleStatement insertStatement = QueryBuilder.insertInto(keyspace, "notifications")
					.values(terms).build();
			session.execute(insertStatement);
			
			terms = new HashMap<>();
			terms.put("user",QueryBuilder.literal(0l));
			terms.put("timestamp",QueryBuilder.literal(1615941161001l));
			terms.put("seen",QueryBuilder.literal(true));
			terms.put("type",QueryBuilder.literal(NotificationType.COLLECTED_ITEM_TO_COLLECTION_FOLLOWER.name()));
			terms.put("event",QueryBuilder.literal(2l));
			insertStatement = QueryBuilder.insertInto(keyspace, "notifications")
					.values(terms).build();
			session.execute(insertStatement);
			
			SimpleStatement avroSchemaTableStatement = SchemaBuilder.createTable(keyspace,"avro_schema").ifNotExists()
					.withPartitionKey("version", DataTypes.INT)
					.withColumn("jschema", DataTypes.TEXT)
					.build();
			session.execute(avroSchemaTableStatement);
			
			SimpleStatement permanentProductsTalbeStatement = SchemaBuilder.createTable(keyspace,"permanent_products").ifNotExists()
					.withPartitionKey("id", DataTypes.ASCII)
					.withColumn("avro_version", DataTypes.INT)
					.withColumn("product", DataTypes.BLOB)
					.build();
			session.execute(permanentProductsTalbeStatement);
			
			SimpleStatement permanentDealsTalbeStatement = SchemaBuilder.createTable(keyspace,"permanent_deals").ifNotExists()
					.withPartitionKey("id", DataTypes.ASCII)
					.withColumn("avro_version", DataTypes.INT)
					.withColumn("deal", DataTypes.BLOB)
					.build();
			session.execute(permanentDealsTalbeStatement);
		}
	}
	
	@PreDestroy
	public void close() {
	    EmbeddedCassandraServerHelper.cleanEmbeddedCassandra();
	}

	@Override
	protected String getKeyspaceName() {
		return keyspace;
	}
	
	
	@Override
	protected String getContactPoints() {
		return contactPoints;
	}
	
	@Override
	protected int getPort() {
		return port;
	}
	
	@Override
	protected String getLocalDataCenter() {
		return datacenter;
	}
	
	@Override
	public SchemaAction getSchemaAction() {
		return SchemaAction.CREATE_IF_NOT_EXISTS;
	}
	
    @Bean
    public CassandraMappingContext cassandraMapping() 
      throws ClassNotFoundException {
        return new CassandraMappingContext();
    }
    
    @Override
    public String[] getEntityBasePackages() {
    	return new String[] {"com.yoterra.hippo.cassandra.model"};
    }
}
