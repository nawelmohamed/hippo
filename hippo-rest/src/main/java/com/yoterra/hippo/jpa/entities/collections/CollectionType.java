package com.yoterra.hippo.jpa.entities.collections;

import java.util.Objects;

public enum CollectionType {
	PRODUCT(Aliases.PRODUCT),
	DEAL(Aliases.DEAL);
	
	private static final CollectionType [] VALS = values();
	private final String alias;
	
	private CollectionType(String alias) {
		this.alias = alias;
	}
	
	public String getAlias() {
		return alias;
	}
	
	public static CollectionType fromAlias(String alias) {
		for (CollectionType ct : VALS) {
			if(Objects.equals(ct.alias, alias))
				return ct;
		}
		return null;
	}
	
	public static class Aliases {
		public static final String PRODUCT = "p";
		public static final String DEAL = "d";
	}
}
