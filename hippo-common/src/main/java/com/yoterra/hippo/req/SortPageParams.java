package com.yoterra.hippo.req;

import org.springdoc.api.annotations.ParameterObject;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class SortPageParams<T extends Enum<? extends SortDef>> extends PageParams {
	
	@Parameter(description = "Field to sort by")
	private T sortBy;
	
	@Parameter(description = "Sort direction")
	private Direction sortDir;
	
	public T getSortBy() {
		return sortBy;
	}
	public void setSortBy(T sortBy) {
		this.sortBy = sortBy;
	}
	public Direction getSortDir() {
		return sortDir;
	}
	public void setSortDir(Direction sortDir) {
		this.sortDir = sortDir;
	}

	@Override
	public Sort getSort() {
		if(sortBy == null)
			return Sort.unsorted();
		
		SortDef sortDef = (SortDef) sortBy;
		String field = sortDef.field();
		Direction dir = Opt.lazyDefVal(sortDir, sortDef::defaultDirection);
		
		return dir == null ?
			Sort.by(field): 
			Sort.by(dir, field);
	}
}
