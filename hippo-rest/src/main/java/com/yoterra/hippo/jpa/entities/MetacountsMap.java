package com.yoterra.hippo.jpa.entities;

import java.util.Map;

public interface MetacountsMap extends Metacounts {

	public Map<String, Integer> metacountsMap();
	
	public default Integer getMetacount(String name) {
		return metacountsMap().get(name);
	}
	
	public default void setMetacount(String name, int count) {
		metacountsMap().put(name, count);
	}
	
	@Override
	public default Integer deleteMetacount(String name) {
		return metacountsMap().remove(name);
	}
}
