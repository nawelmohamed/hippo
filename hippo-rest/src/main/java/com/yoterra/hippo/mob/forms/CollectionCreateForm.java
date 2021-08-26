package com.yoterra.hippo.mob.forms;

import javax.validation.constraints.NotNull;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.jpa.entities.collections.CollectionType;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class CollectionCreateForm extends CollectionForm {

	@Parameter(required = true, description = "Collection type.")
	@NotNull(groups = Create.class, message = "Collection type is mandatory")
	private CollectionType type;
	
	public CollectionType getType() {
		return type;
	}
	public void setType(CollectionType type) {
		this.type = type;
	}
	public void setType(String typeAlias) {
		this.type = CollectionType.fromAlias(typeAlias);
	}
}
