package com.yoterra.hippo.cassandra.model;

import java.nio.ByteBuffer;

import org.springframework.data.annotation.Transient;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

@Table(value = "permanent_products")
public class CProduct {
	
	@PrimaryKey
	private String id;
	
	// the version of Avro schema used to serialize product
	@Column("avro_version")
	private int avroVersion;
	
	// avro serialized product
	@Column("product")
	private ByteBuffer product;
	
	@Transient
	private byte[] bytes;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getAvroVersion() {
		return avroVersion;
	}

	public void setAvroVersion(int avroVersion) {
		this.avroVersion = avroVersion;
	}
	
	public byte[] getProductBytes() {
		if( bytes == null ) {
			if( product.hasArray() ) {
				bytes = product.array();
			} else {
				byte[] bytes = new byte[product.remaining()];
				product.get(bytes);
			}
		}
		return bytes;
	}

	public void setProductBytes(byte[] product) {
		this.product = ByteBuffer.wrap(product);
		this.bytes = null;
	}
}
