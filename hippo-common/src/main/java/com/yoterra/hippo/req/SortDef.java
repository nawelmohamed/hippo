package com.yoterra.hippo.req;

import org.springframework.data.domain.Sort.Direction;

public interface SortDef {

	public String field();
	public Direction defaultDirection();
}
