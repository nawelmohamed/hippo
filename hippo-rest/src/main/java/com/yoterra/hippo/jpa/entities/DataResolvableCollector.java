package com.yoterra.hippo.jpa.entities;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Function;
import java.util.stream.Collectors;

import com.datastax.oss.driver.shaded.guava.common.collect.Maps;
import com.yoterra.utils.Opt;

@SuppressWarnings("rawtypes")
public class DataResolvableCollector {
	
	private static Function<Class<? extends DataResolvable>, Map<Object, DataResolvable>> mapGen = clazz -> Maps.newHashMap();

	private Map<?, DataResolvablesContainer> visitedContainers;
	private Map<Class<? extends DataResolvable>, Map<Object, DataResolvable>> dataResolvables;
	
	public DataResolvableCollector() {
		this.visitedContainers = Maps.newHashMap();
		this.dataResolvables = Maps.newHashMap();
	}
	
	
	public void collect(Iterable<DataResolvable<?>> dRes){
		if(dRes != null) {
			for (DataResolvable<?> dr : dRes) {
				// not null, not resolved
				if(dr != null && !dr.isDataResolved() ) {
					Class<? extends DataResolvable> cls = dr.getClass();
					dataResolvables	.computeIfAbsent(cls, mapGen)
									.putIfAbsent(dr.getId(), dr);
				}
			}
		}
	}
	
	public void collect(DataResolvable ... dRes){
		collect(Arrays.asList(dRes));
	}
	
	public void visit(Iterable<DataResolvablesContainer<?>> conts){
		if(conts != null) {
			for (DataResolvablesContainer<?> drc : conts) {
				if(drc != null && !isVisited(drc)) {
					collect(drc.getDataResolvables());
					visit(drc.getOtherContainers());
				}
			}
		}
	}
	
	private boolean isVisited(DataResolvablesContainer<?> drc) {
		return visitedContainers.containsKey(drc.getId());
	}


	public void visit(DataResolvablesContainer<?> conts){
		visit(Arrays.asList(conts));
	}
	
	public Collection<Class<? extends DataResolvable>> getTypes(){
		return dataResolvables.keySet();
	}
	
	public Collection<List<DataResolvable>> getDataResolvablesChunked(Class<? extends DataResolvable> clazz, int chunkSize){
		Map<Object, DataResolvable> m = dataResolvables.getOrDefault(clazz, null);
		if(m == null) 
			return null;
		
		final AtomicInteger counter = new AtomicInteger();
		Collection<List<DataResolvable>> collOfChunks = Opt.strm(m.values())
			    .collect(Collectors.groupingBy(it -> counter.getAndIncrement() / chunkSize))
			    .values();
		return collOfChunks;
	}
	
	public static void main(String[] args) {
		final List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10,11, 12, 13);
		final int chunkSize = 3;
		final AtomicInteger counter = new AtomicInteger();

		final Collection<List<Integer>> result = numbers.stream()
		    .collect(Collectors.groupingBy(it -> counter.getAndIncrement() / chunkSize))
		    .values();

		System.out.println(result);
	}
}
