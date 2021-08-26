package com.yoterra.hippo.jpa.entities.likes;

public enum LikeableType {
	COMMENT(Values.COMMENT),
	PRODUCT(Values.PRODUCT),
	DEAL(Values.DEAL),
	STORE(Values.STORE),
	BRAND(Values.BRAND),
	COLLECTION(Values.COLLECTION),
	COLLECTION_PRODUCT(Values.COLLECTION_PRODUCT),
	COLLECTION_DEAL(Values.COLLECTION_DEAL)
	;
	
	private LikeableType(String val) {
		if (!this.name().equals(val))
			throw new IllegalArgumentException();
	}

	public static class Values {
		public static final String COMMENT = "COMMENT";
		public static final String COLLECTION = "COLLECTION";
		public static final String PRODUCT = "PRODUCT";
		public static final String DEAL = "DEAL";
		public static final String STORE = "STORE";
		public static final String BRAND = "BRAND";
		public static final String COLLECTION_PRODUCT= "COLLECTION_PRODUCT";
		public static final String COLLECTION_DEAL= "COLLECTION_DEAL";
	}

}
