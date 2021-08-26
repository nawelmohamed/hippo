package com.yoterra.hippo.services.dataresv;

import java.util.Arrays;
import java.util.Collection;
import java.util.Hashtable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.DataResolvableCollector;
import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;

@SuppressWarnings({"rawtypes","unchecked"})
@Component
public final class DataResolverManager {
	
	
	public static interface IDataResolver<T extends DataResolvable<?>>{
		
		Class<? extends DataResolvable> getRecordClass();
		void resolveRecordData(T record);
		default void resolveRecordsData(Iterable<T> records) {				// the implementations should optimize this
			for (T r : records) {
				resolveRecordData(r);
			}
		}
	}
	
	private final Hashtable<Class<? extends DataResolvable>, IDataResolver> table;
	
	@Autowired
	public DataResolverManager(List<IDataResolver> dataResolvers) {
		this.table = new Hashtable<>();
		for (IDataResolver iDataResolver : dataResolvers) {
			table.put(iDataResolver.getRecordClass(), iDataResolver);
		}
	}
	
	private <R extends DataResolvable> IDataResolver getDataResolver(Class<R> clazz, boolean required){
		IDataResolver dres = (IDataResolver) table.getOrDefault(clazz, null);
		if(dres == null && required)
			throw new UnsupportedOperationException("No data resolver for: " + clazz);
		return dres;
	}
	
	private <R extends DataResolvable> IDataResolver getDataResolver(Class<R> clazz){
		return getDataResolver(clazz, true);
	}
	
	public void resolveData(DataResolvable<?> dataResolvable){
		resolveData(Arrays.asList(dataResolvable));
	}
	
	public <T extends DataResolvable<?>> void resolveData(Iterable<T> dataResolvables){
		DataResolvableCollector collector = new DataResolvableCollector();
		collector.collect((Iterable<DataResolvable<?>>)dataResolvables);
		resolveCollectedData(collector);
	}
	
	public void resolveContainedData(DataResolvablesContainer dataResolvableContainer){
		resolveContainedData(Arrays.asList(dataResolvableContainer));
	}

	public <T extends DataResolvablesContainer<?>> void resolveContainedData(Iterable<T> dataResolvableContainers){
		DataResolvableCollector collector = new DataResolvableCollector();
		collector.visit((Iterable<DataResolvablesContainer<?>>) dataResolvableContainers);
		resolveCollectedData(collector);
	}
	
	private void resolveCollectedData(DataResolvableCollector collector) {
		Collection<Class<? extends DataResolvable>> types = collector.getTypes();
		for (Class<? extends DataResolvable> clazz : types) {
			IDataResolver dataResolver = getDataResolver(clazz);
			Collection<List<DataResolvable>> dataResolvablesChunked = collector.getDataResolvablesChunked(clazz, 50);
			for (List<DataResolvable> chunk : dataResolvablesChunked) {
				dataResolver.resolveRecordsData(chunk);
			}
		}
	}
}
