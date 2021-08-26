package com.yoterra.hippo.config.props;


import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "com.hippo.cassandra.products")
public class CassandraProductsProperties {
	
	private String keyspace;
	private String tableprefix;
	private String hosts;
	
	public String getKeyspace() {
		return keyspace;
	}
	public void setKeyspace(String keyspace) {
		this.keyspace = keyspace;
	}
	public String getTableprefix() {
		return tableprefix;
	}
	public void setTableprefix(String tableprefix) {
		this.tableprefix = tableprefix;
	}
	public String getHosts() {
		return hosts;
	}
	public void setHosts(String hosts) {
		this.hosts = hosts;
	}
}
