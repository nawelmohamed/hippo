package com.yoterra.hippo.search.requests;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.req.PageParams;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public abstract class SearchRequest extends PageParams implements KeywordsRequest {
	
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
