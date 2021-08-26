package com.yoterra.hippo.mob.forms;

import javax.validation.constraints.NotNull;

import org.springdoc.api.annotations.ParameterObject;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class FollowUpdateForm extends NotificationPreferencesForm {
	
	@Parameter(required = true, description = "ID of the follow relation (<b>not the user ID or the followed item ID</b>)")
	@NotNull(message = "Follow relation ID is mandatory", groups = Edit.class)
	private Long followRelId;

	public Long getFollowRelId() {
		return followRelId;
	}
	
	public void setFollowRelId(Long followRelId) {
		this.followRelId = followRelId;
	}
}