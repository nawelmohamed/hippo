//package com.yoterra.hippo.services.casandra;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.List;
//import java.util.Map;
//import java.util.UUID;
//import java.util.concurrent.CompletableFuture;
//import java.util.concurrent.CompletionStage;
//import java.util.concurrent.ExecutionException;
//import java.util.stream.Collectors;
//import java.util.stream.IntStream;
//
//import org.apache.avro.Schema;
//import org.apache.avro.io.DatumReader;
//import org.apache.avro.specific.SpecificDatumReader;
//import org.apache.commons.collections4.map.LRUMap;
//import org.apache.commons.lang3.Validate;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
//import org.springframework.stereotype.Service;
//
//import com.datastax.oss.driver.api.core.CqlSession;
//import com.datastax.oss.driver.api.core.cql.AsyncResultSet;
//import com.datastax.oss.driver.api.core.cql.PreparedStatement;
//import com.datastax.oss.driver.api.core.cql.Row;
//import com.yoterra.commons.AvroUtils;
//import com.yoterra.data.fetcher.Fetcher;
//import com.yoterra.data.records.Product;
//import com.yoterra.data.records.RecordId;
//import com.yoterra.hippo.services.avro.IndexSchemaRegistry;
//
//@Service
//public class CassandraFetcher implements Fetcher<Product> {
//
//	private static final String BIN = "b";
//	
//	@Autowired
//	private CqlSession cqlSession;
//	
//	@Autowired
//	private CassandraProperties cassandraProperties;
//	
//	@Autowired
//	private IndexSchemaRegistry indexSchemaRegistry;
//	
//	@Value("")
//	private String tablePrefix;
//	
//	private Map<Long,PreparedStatement> statements = new LRUMap<>(10);
//	private Map<Long,DatumReader<Product>> readers = new LRUMap<>(10);
//
//	@Override
//	public List<Product> fetchAll(List<RecordId> recordIds) {
//		return fetchAll(recordIds, -1);
//	}
//	
//	@Override
//	public List<Product> fetchAll(List<RecordId> recordIds, long timestamp) {
//		List<CompletionStage<AsyncResultSet>> stages = new ArrayList<>();
//		for (int i = 0; i < recordIds.size(); i++) {
//			UUID uuid = UUID.nameUUIDFromBytes(recordIds.get(i).bytes());
//			PreparedStatement statement = statements.get(timestamp);
//			if( statement == null ) {
//				statement = cqlSession.prepare("SELECT * FROM " + cassandraProperties.getKeyspaceName() + "." + tablePrefix + "_" + timestamp + " where id = ?");
//				statements.put(timestamp,statement);
//			}
//			CompletionStage<AsyncResultSet> resultSetFuture = cqlSession.executeAsync(statement.bind(uuid.toString()));
//			stages.add(resultSetFuture);
//		}
//		
//		List<Product> results = new ArrayList<>();
//		for ( CompletionStage<AsyncResultSet> stage : stages) {
//			CompletableFuture<AsyncResultSet> future = stage.toCompletableFuture();
//			AsyncResultSet rows;
//			try {
//				rows = future.get();
//				Row row = rows.one();
//				DatumReader<Product> reader = getReader(timestamp);
//				results.add(mapFromCassandra(row,reader ));
//			} catch (InterruptedException | ExecutionException e) {
//				throw new RuntimeException(); // TODO IOException
//			}
//		}
//		return results;
//	}
//
//	private DatumReader<Product> getReader(long timestamp) {
//		DatumReader<Product> reader = readers.get(timestamp);
//		if( reader == null ) {
//			Schema writerSchema = indexSchemaRegistry.getSchema(timestamp);
//			reader = new SpecificDatumReader<>(writerSchema, Product.SCHEMA$);
//			readers.put(timestamp, reader);
//		}
//		return reader;
//	}
//
//	@Override
//	public Map<RecordId,Product> fetch(List<RecordId> recordIds) {
//		List<Product> products = fetchAll(recordIds);
//		Validate.isTrue(products.size()==recordIds.size());
//		
//		return IntStream.range(0, products.size())
//				.mapToObj(i->i)
//				.collect(Collectors.toMap(
//						recordIds::get,products::get));
//		
//	}
//	
//	@Override
//	public Product fetch(RecordId id) {
//		return fetchAll(Arrays.asList(id)).get(0);
//	}
//	
//	@Override
//	public Product fetch(RecordId id, long timestamp) {
//		return fetchAll(Arrays.asList(id), timestamp).get(0);
//	}
//	
//	@Override
//	public List<Product> fetch(RecordId...ids) {
//		return fetchAll(Arrays.asList(ids));
//	}
//	
//	private Product mapFromCassandra(Row row, DatumReader<Product> reader) {
//		Product record = null;
//		if( row != null ) {
//			byte[] bytes = row.getByteBuffer(BIN).array();
//			if (bytes != null) {
//				try {
//					record = AvroUtils.fromBytes(bytes, reader, null);
//				} catch (IOException e) {
//					throw new IllegalStateException(e);
//				}
//			}
//		}
//		return record;
//	}
//	
//	@Override
//	public void close() {
//	}
//}
