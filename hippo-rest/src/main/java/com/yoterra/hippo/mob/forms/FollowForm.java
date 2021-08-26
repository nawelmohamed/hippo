package com.yoterra.hippo.mob.forms;

import javax.validation.constraints.NotNull;

import org.springdoc.api.annotations.ParameterObject;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;

@ParameterObject
public class FollowForm<ID> extends NotificationPreferencesForm {
	
	@ParameterObject
	public static final class LongFollowForm extends FollowForm<Long> {}
	
	@ParameterObject
	public static final class StringFollowForm extends FollowForm<String> {}
	
	@Parameter(required = true, schema = @Schema(anyOf = {Long.class,String.class}),
			description = "ID of the entity to follow. Depending on the item type, the parameter type is an integer (long) number or a string.")
	@NotNull(message = "ID is mandatory", groups = Create.class)
	private ID id;					//  
	
	public ID getId() {
		return id;
	}

	public void setId(ID id) {
		this.id = id;
	}
}