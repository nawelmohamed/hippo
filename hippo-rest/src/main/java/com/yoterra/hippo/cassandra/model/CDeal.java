package com.yoterra.hippo.cassandra.model;

import java.nio.ByteBuffer;

import org.springframework.data.annotation.Transient;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

@Table(value = "permanent_deals")
public class CDeal {
	
	@PrimaryKey
	private String id;
	
	// the version of Avro schema used to serialise deal
	@Column("avro_version")
	private int avroVersion;
	
	// Avro serialised deal
	@Column("deal")
	private ByteBuffer deal;
	
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
	
	public byte[] getDealBytes() {
		if( bytes == null ) {
			if( deal.hasArray() ) {
				bytes = deal.array();
			} else {
				byte[] bytes = new byte[deal.remaining()];
				deal.get(bytes);
			}
		}
		return bytes;
	}

	public void setDealBytes(byte[] dealBytes) {
		this.deal = ByteBuffer.wrap(dealBytes);
		this.bytes = dealBytes;
	}
}
