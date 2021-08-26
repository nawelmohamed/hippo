package com.yoterra.hippo.mob.forms;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.jpa.entities.users.User;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class UserCreateForm extends UserForm {
	
//	@NotNull(groups = Edit.class, message = "User ID mandatory")
//	private Long id;
	
//	@Email
//	@NotBlank(groups = Create.class, message = "E-mail address is mandatory")
//	@Size(groups = Create.class, max = User.EMAIL_MAX_LEN, message = "E-mail address maximum length is " + User.EMAIL_MAX_LEN)
//	private String email;

	@Parameter(description = "Username field. Min-max length: (" + User.USERNAME_MIN_LEN + "-" + User.USERNAME_MAX_LEN + "). "
			+ "Once created and approved, this field can not be changed.")
	@NotBlank(groups = Create.class, message = "Username is mandatory")
	@Size(groups = Create.class, min = User.USERNAME_MIN_LEN, message = "Username minimum length is " + User.USERNAME_MIN_LEN)
	@Size(groups = Create.class, max = User.USERNAME_MAX_LEN, message = "Username maximum length is " + User.USERNAME_MAX_LEN)
	private String username;
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}