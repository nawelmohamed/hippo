package com.yoterra.hippo.search.requests;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.req.SortDef;
import com.yoterra.hippo.req.SortPageParams;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public abstract class SortSearchRequest<T extends Enum<? extends SortDef>> extends SortPageParams<T> implements KeywordsRequest {
	
	@Parameter(required = false, description = "Query string")
	private String q;		// 'q' - query

	@Hidden
	@Override
	public String getKeywords() {
		return q;
	}
	
	public String getQ() {		
		return q;
	}

	public void setQ(String q) {
		this.q = q;
	}	
}
