package com.yoterra.hippo.jpa.entities;

public interface DataResolvablesContainer<ID> extends IdEntity<ID>  {
	
	public default Iterable<DataResolvable<?>> getDataResolvables(){
		return null;
	}
	public default Iterable<DataResolvablesContainer<?>> getOtherContainers(){
		return null;
	}
}
