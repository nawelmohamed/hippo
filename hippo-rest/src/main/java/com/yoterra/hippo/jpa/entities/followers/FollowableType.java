package com.yoterra.hippo.jpa.entities.followers;

public enum FollowableType {
	USER(Values.USER),
	COLLECTION(Values.COLLECTION),
	BRAND(Values.BRAND),
	STORE(Values.STORE)
	;
	
	private FollowableType(String val) {
		if (!this.name().equals(val))
			throw new IllegalArgumentException();
	}

	public static class Values {
		public static final String USER = "USER";
		public static final String COLLECTION = "COLLECTION";
		public static final String BRAND = "BRAND";
		public static final String STORE = "STORE";
	}

}
