package com.yoterra.hippo.search.requests;

import javax.validation.constraints.Min;

import org.springdoc.api.annotations.ParameterObject;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class TaxonomySearchRequest extends SearchRequest {

	@Parameter(required = false, description = "Filter by tuple element name.")
	private String name;
	
	@Parameter(required = false, description = "Filter by tuple element name prefix.")
	private String namePrefix;
	
	@Parameter(required = false, description = "Filter by tuple element level. Use '0' to get only majors. ")
	@Min(value = 0, message = "The minimum level is 0")
	private Integer level;
	
	@Parameter(required = false, description = "Filter by parent taxonomy id.")
	private Long parent;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNamePrefix() {
		return namePrefix;
	}
	public void setNamePrefix(String namePrefix) {
		this.namePrefix = namePrefix;
	}
	public Integer getLevel() {
		return level;
	}
	public void setLevel(Integer level) {
		this.level = level;
	}
	public Long getParent() {
		return parent;
	}
	public void setParent(Long parent) {
		this.parent = parent;
	}
	
	public TaxonomySearchRequest initAutocompleteReq(String q, Integer level){
		setNamePrefix(q);		
		setLevel(level);
		this.setSize(AUTOCOMPLETE_PAGE_SIZE);
		return this;
	}
}
