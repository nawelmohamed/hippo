package com.yoterra.hippo.jpa.entities.collections;

public enum CollectionItemType {
	PRODUCT(Values.PRODUCT), DEAL(Values.DEAL);
	
	private CollectionItemType(String val) {
	     if (!this.name().equals(val))
	        throw new IllegalArgumentException();
	  }

	public static class Values {
		public static final String PRODUCT = "PRODUCT";
		public static final String DEAL = "DEAL";
	}
}
