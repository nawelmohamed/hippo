package com.yoterra.hippo.services.casandra;

import java.io.IOException;

import org.apache.avro.Schema;

public interface AvroSchemaRegistry {

	Schema getByVersion(int version);
	
	public int getOrAddSchema(Schema schema) throws IOException;
}
