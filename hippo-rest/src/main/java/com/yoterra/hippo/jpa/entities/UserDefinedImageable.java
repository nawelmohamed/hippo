package com.yoterra.hippo.jpa.entities;

import java.nio.charset.Charset;

public interface UserDefinedImageable<ID> extends Imageable {
	
	public enum ImageableType{
		USER("u".getBytes(Charset.defaultCharset())),				
		COLLECTION("c".getBytes(Charset.defaultCharset()));
		
		private ImageableType(byte[] tbytes) {
			this.tbytes = tbytes;
		}

		private final byte[] tbytes;
		
		public byte[] tbytes() {
			return tbytes;
		}
	}
	
	byte[] getIdBytes();
	ImageableType getImageableType();
}
