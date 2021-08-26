//package com.yoterra.hippo.services.avro;
//
//import org.apache.avro.Schema;
//import org.apache.commons.collections4.map.LRUMap;
//import org.apache.solr.client.solrj.SolrClient;
//import org.springframework.beans.factory.annotation.Autowired;
//
//// @Service
//public class IndexSchemaRegistry {
//	
//	@Autowired
//	private SolrClient solrClient;
//	
//	private LRUMap<Long,Schema> schemas = new LRUMap<>(10);
//
//	public Schema getSchema(long timestamp) {
//		// TODO Auto-generated method stub
//		Schema schema = schemas.get(timestamp);
//		if( schema == null ) {
//			schema = fetchSchema(timestamp);
//			schemas.put(timestamp, schema);
//		}
//		return schema;
//	}
//
//	private Schema fetchSchema(long timestamp) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//}
