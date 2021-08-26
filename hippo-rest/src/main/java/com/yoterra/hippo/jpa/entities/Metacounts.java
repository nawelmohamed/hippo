package com.yoterra.hippo.jpa.entities;

import java.util.Collection;
import java.util.Map;
import java.util.function.Function;

public interface Metacounts {

	public Integer getMetacount(String name);
	public void setMetacount(String name, int count);
	public Integer deleteMetacount(String name);

	public static <K, N extends Number, M extends Metacounts> void mergeMetacounts(Collection<M> metacountsCollection, Map<K, N> countsMap, 
			Function<M, K> keyResolver, String metacountName) {
		mergeMetacounts(metacountsCollection, countsMap, keyResolver, metacountName, 0);
	}
	
	public static <K, N extends Number, M extends Metacounts> void mergeMetacounts(Collection<M> metacountsCollection, Map<K, N> countsMap, 
			Function<M, K> keyResolver, String metacountName, int defaultCnt) {
		
		if(metacountsCollection != null) {
			for (M metacounts : metacountsCollection) {
				K key = keyResolver.apply(metacounts);
				N cnt = countsMap.get(key);
				metacounts.setMetacount(metacountName, cnt == null ? 0 : cnt.intValue());
			}
		}
	}
	
	public static <K, N extends Number, M extends Metacounts> void mergeMetacounts(Collection<M> metacountsCollection, Function<Collection<M>, Map<K, N>> countsMapGenerator, 
			Function<M, K> keyResolver, String metacountName) {
		mergeMetacounts(metacountsCollection, countsMapGenerator, keyResolver, metacountName, 0);
	}
	
	public static <K, N extends Number, M extends Metacounts> void mergeMetacounts(Collection<M> metacountsCollection, Function<Collection<M>, Map<K, N>> countsMapGenerator, 
			Function<M, K> keyResolver, String metacountName, int defaultCnt) {
		
		Map<K, N> countsMap = countsMapGenerator.apply(metacountsCollection);
		mergeMetacounts(metacountsCollection, countsMap, keyResolver, metacountName);
	}
}
