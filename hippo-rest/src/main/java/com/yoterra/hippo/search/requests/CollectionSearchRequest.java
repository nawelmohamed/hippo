package com.yoterra.hippo.search.requests;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.hippo.search.requests.sort.CollectionSort;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class CollectionSearchRequest extends SortSearchRequest<CollectionSort> {
	
	@Parameter(required = false, description = "Filter by collection type. If not set, collections of different types might be returned.")
	private CollectionType type;
	
	@Parameter(required = false, description = "Filter by collection name. The names must contain that text (case insensitive).")
	private String nameContains;
	
	@Parameter(required = false, description = "Filter by collection description. The descriptions must contain that text (case insensitive).")
	private String descriptionContains;

	@Parameter(required = false, description = "Fiter by collection owner.")
	private Long ownerId;
	
	@Parameter(required = false, description = "Filter by item contained in the collection. "
			+ "If specified, the corresponding collection type has to be specified as well, otherwise it has not effect.")
	private String containsItemId; 
	
	public String getNameContains() {
		return nameContains;
	}
	public void setNameContains(String nameContains) {
		this.nameContains = nameContains;
	}
	public String getDescriptionContains() {
		return descriptionContains;
	}
	public void setDescriptionContains(String descriptionContains) {
		this.descriptionContains = descriptionContains;
	}
	public CollectionType getType() {
		return type;
	}
	public void setType(CollectionType type) {
		this.type = type;
	}
	public void setType(String typeAlias) {
		this.type = CollectionType.fromAlias(typeAlias);
	}
	public Long getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(Long ownerId) {
		this.ownerId = ownerId;
	}
	public String getContainsItemId() {
		return containsItemId;
	}
	public void setContainsItemId(String itemId) {
		this.containsItemId = itemId;
	}
	public CollectionSearchRequest initAutocompleteReq(String q){
		setNameContains(q);			// USE NAME PREFIX INSTEAD TODO
		this.setSize(AUTOCOMPLETE_PAGE_SIZE);
		return this;
	}
}
