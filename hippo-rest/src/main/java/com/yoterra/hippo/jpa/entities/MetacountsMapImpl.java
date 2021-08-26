package com.yoterra.hippo.jpa.entities;

import java.util.Map;

import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;

import com.datastax.oss.driver.shaded.guava.common.collect.Maps;

@MappedSuperclass
public class MetacountsMapImpl implements MetacountsMap{

	@Transient
	private transient Map<String, Integer> metacountsMap = Maps.newHashMap();
	
	@Override
	public Map<String, Integer> metacountsMap() {
		return metacountsMap;
	}
}
