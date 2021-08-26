package com.yoterra.hippo.services.casandra;

import java.io.IOException;
import java.util.List;
import java.util.Map.Entry;
import java.util.TreeMap;

import javax.annotation.PostConstruct;

import org.apache.avro.Schema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.cassandra.model.CAvroSchema;
import com.yoterra.hippo.cassandra.repositories.CAvroSchemaRepository;

@Service
public class AvroSchemaRegistryCassandra implements AvroSchemaRegistry {
	
	@Autowired
	private CAvroSchemaRepository cAvroSchemaRepository;
	
	private TreeMap<Integer,Schema> schemas;
	
	@PostConstruct
	public void load() {
		schemas = new TreeMap<>();
		List<CAvroSchema> allSchemas = cAvroSchemaRepository.findAll();
		for( CAvroSchema schema : allSchemas ) {
			schemas.put(schema.getVersion(),initSchema(schema));
		}
	}
	
	private static Schema initSchema(CAvroSchema schema) {
		return new Schema.Parser().parse(schema.getSchema());
	}

	@Override
	public Schema getByVersion(int version) {
		return schemas.get(version);
	}
	
	@Override
	public int getOrAddSchema(Schema schema) throws IOException {
		int version=-1;
		synchronized(this) {
			for( Entry<Integer, Schema> entry : schemas.entrySet() ) {
				if( entry.getValue().equals(schema) ) {
					return entry.getKey();
				}
			}
			int last = schemas.isEmpty() ? -1 : schemas.lastKey();
			version = last+1;
			schemas.put(version,schema);
		}
		try {
			CAvroSchema cAvroSchema = new CAvroSchema();
			cAvroSchema.setSchema(schema.toString());
			cAvroSchema.setVersion(version);
			cAvroSchemaRepository.save(cAvroSchema);
			return version;
		} catch(Exception e ) { // TODO which exception
			schemas.remove(version);
			throw new IOException(e);
		}
	}
}
