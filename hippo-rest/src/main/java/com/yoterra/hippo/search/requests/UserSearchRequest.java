package com.yoterra.hippo.search.requests;

import org.springdoc.api.annotations.ParameterObject;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class UserSearchRequest extends SearchRequest {

	@Parameter(required = false, description = "Filter by username prefix (case insensitive)")
	private String usernamePrefix;
	
	@Parameter(required = false, description = "Filter by user first name prefix (case insensitive)")
	private String firstNamePrefix;
	
	@Parameter(required = false, description = "Filter by user last name prefix (case insensitive)")
	private String lastNamePrefix;
	
	public String getUsernamePrefix() {
		return usernamePrefix;
	}
	public void setUsernamePrefix(String usernamePrefix) {
		this.usernamePrefix = usernamePrefix;
	}
	
	public String getFirstNamePrefix() {
		return firstNamePrefix;
	}
	public void setFirstNamePrefix(String firstNamePrefix) {
		this.firstNamePrefix = firstNamePrefix;
	}
	public String getLastNamePrefix() {
		return lastNamePrefix;
	}
	public void setLastNamePrefix(String lastNamePrefix) {
		this.lastNamePrefix = lastNamePrefix;
	}
	
	public UserSearchRequest initAutocompleteReq(String q){
		setUsernamePrefix(q);		
		this.setSize(AUTOCOMPLETE_PAGE_SIZE);
		return this;
	}
}
