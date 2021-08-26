package com.yoterra.hippo.mob.forms;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.req.Form;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public abstract class CollectionForm implements Form {

	@Parameter(required = true, description = "Collection name. Min-max length: ("+Collection.NAME_MIN_LEN+"-"+Collection.NAME_MAX_LEN+")")
	@NotBlank(groups = {Create.class, Edit.class}, message = "Collection name is mandatory")
	@Size(groups = {Create.class, Edit.class}, min = Collection.NAME_MIN_LEN, message = "Collection name minimum length is " + Collection.NAME_MIN_LEN)
	@Size(groups = {Create.class, Edit.class}, max = Collection.NAME_MAX_LEN, message = "Collection name maximum length is " + Collection.NAME_MAX_LEN)
	private String name;
	
	@Parameter(required = true, description = "Collection description. Min-max length: ("+Collection.DESC_MIN_LEN+"-"+Collection.DESC_MAX_LEN+")")
	@NotBlank(groups = {Create.class, Edit.class}, message = "Collection description is mandatory")
	@Size(groups = {Create.class, Edit.class}, min = Collection.DESC_MIN_LEN, message = "Collection description minimum length is " + Collection.DESC_MIN_LEN)
	@Size(groups = {Create.class, Edit.class}, max = Collection.DESC_MAX_LEN, message = "Collection description maximum length is " + Collection.DESC_MAX_LEN)
	private String description;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
