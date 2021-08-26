package com.yoterra.hippo.search.requests.sort;

import org.apache.commons.lang.Validate;
import org.springframework.data.domain.Sort.Direction;

import com.yoterra.hippo.jpa.entities.collections.Collection_;
import com.yoterra.hippo.req.SortDef;

public enum CollectionSort implements SortDef{
	
	date_created(Collection_.CREATED, Direction.DESC);
	
//	static {
//		Collection_.class.getName();		// just loading the class
//	}
	
	private final String field;
	private final Direction defDir;
	
	private CollectionSort(String field, Direction defDir) {
		Validate.notNull(field);
		Validate.notNull(defDir);
		this.field = field;
		this.defDir = defDir;
	}

	@Override
	public String field() {
		return field;
	}
	
	@Override
	public Direction defaultDirection() {
		return defDir;
	}
}
