package com.yoterra.hippo.services;

import java.util.Collection;

import com.yoterra.hippo.jpa.entities.Metacounts;

public interface IMetacountsResolver<E extends Metacounts>{
	
	void resolveMetacounts(E entity);
	default void resolveMetacounts(Collection<E> entities) {			// should be optimized in the implementations 
		for (E e : entities) {
			resolveMetacounts(e);
		}
	}
}
