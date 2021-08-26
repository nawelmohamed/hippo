package com.yoterra.hippo.search.requests;

public interface KeywordsRequest{
	
	public static final int AUTOCOMPLETE_PAGE_SIZE = 8;
	
	public default String getKeywords() {
		return null;
	}
	
}
