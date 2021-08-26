package com.yoterra.hippo.jpa.queries;

import org.springframework.data.jpa.domain.Specification;

public abstract class QueryBuilder<T, SR> {

	public abstract Specification<T> build(SR request);
	
//	protected static <K> Specification<K> init_or_AND(Specification<K> spec, Specification<K> prevSpec){
//		return prevSpec == null ? spec : Specification.where(prevSpec).and(spec);
//	}
//	
//	protected static <K> Specification<K> init_or_OR(Specification<K> spec, Specification<K> prevSpec){
//		return prevSpec == null ? spec : Specification.where(prevSpec).or(spec);
//	}
}
