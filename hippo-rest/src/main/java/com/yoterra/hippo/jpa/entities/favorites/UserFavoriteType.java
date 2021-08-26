package com.yoterra.hippo.jpa.entities.favorites;

import java.util.Objects;

public enum UserFavoriteType {

	CATEGORY(Aliases.CATEGORY, Limits.CATEGORY),
	BRAND(Aliases.BRAND, Limits.BRAND),
	STORE(Aliases.STORE, Limits.STORE);
	
	private final String alias;
	private final int limit;
	private static final UserFavoriteType [] VALUES = values();
	
	private UserFavoriteType(String alias, int limit) {
		this.alias = alias;
		this.limit = limit;
	}
	
	public static UserFavoriteType fromAlias(String alias) {
		for (UserFavoriteType uft : VALUES) {
			if(Objects.equals(alias, uft.getAlias()))
				return uft;
		}
		return null;
	}
	
	public String getAlias() {
		return alias;
	}
	
	public int getLimit() {
		return limit;
	}
	
	public static class Aliases {
		public static final String CATEGORY = "c";
		public static final String BRAND = "b";
		public static final String STORE = "s";
	}
	
	public static class Limits {
		public static final int CATEGORY = 10;
		public static final int BRAND = 10;
		public static final int STORE = 10;
	}
}
