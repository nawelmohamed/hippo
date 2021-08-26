package com.yoterra.hippo.services;

public interface IEntityParentProvider<ID, P> {
	public P getParentById(ID id, boolean persist, boolean fetchData);	
}


