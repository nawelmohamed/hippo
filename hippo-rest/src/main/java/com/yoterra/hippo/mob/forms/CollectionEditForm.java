package com.yoterra.hippo.mob.forms;

import javax.validation.constraints.NotNull;

import org.springdoc.api.annotations.ParameterObject;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class CollectionEditForm extends CollectionForm {

	@Parameter(description = "Collection ID used only when updating collection info. Not used when creating a new collection.")
	@NotNull(groups = Edit.class, message = "Collection ID mandatory")
	private Long id;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
}
