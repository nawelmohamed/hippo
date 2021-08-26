package com.yoterra.hippo.mob.forms;

import javax.annotation.Nullable;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.req.Form;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class UserForm implements Form {
	
	// split up the form based on the usecases (set/change avatar, change password, change personal info, register, ...)
	
	// https://www.baeldung.com/java-regex-validate-phone-numbers
	public static final String PHONE_NUMBER_REGEX = "^$"		// blank or [pattern]
												+ "|^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$" 
		    	      							+ "|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?){2}\\d{3}$" 
		    	      							+ "|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?)(\\d{2}[ ]?){2}\\d{2}$";

	@Parameter(description = "First name field. Min-max length: (" + User.FIRST_NAME_MIN_LEN + "-" + User.FIRST_NAME_MAX_LEN + ")")
	@NotBlank(groups = {Create.class, Edit.class}, message = "First name is mandatory")
	@Size(groups = {Create.class, Edit.class}, min = User.FIRST_NAME_MIN_LEN, message = "First name minimum length is " + User.FIRST_NAME_MIN_LEN)
	@Size(groups = {Create.class, Edit.class}, max = User.FIRST_NAME_MAX_LEN, message = "First name maximum length is " + User.FIRST_NAME_MAX_LEN)
	private String firstName;
	
	@Parameter(required = false, description = "Last name field. Max length: " + User.LAST_NAME_MAX_LEN)
	@Nullable
	@Size(groups = {Create.class, Edit.class}, max = User.LAST_NAME_MAX_LEN, message = "Last name maximum length is " + User.LAST_NAME_MAX_LEN)
	private String lastName;

	@Parameter(required = false, description = "Phone number.")
	@Pattern(groups = {Create.class, Edit.class}, regexp = UserForm.PHONE_NUMBER_REGEX, message = "The phone number does not have expected format.")
//	@Size(groups = {Create.class, Edit.class}, min = User.PHONE_NUMBER_MIN_LEN, message = "Phone number minimum length is " + User.PHONE_NUMBER_MIN_LEN)
//	@Size(groups = {Create.class, Edit.class}, max = User.PHONE_NUMBER_MAX_LEN, message = "Phone number maximum length is " + User.PHONE_NUMBER_MAX_LEN)
	private String phoneNumber;
	
//	@URL(groups = {Create.class, Edit.class})
//	private String avatarUrl;
//	
//	private MultipartFile avatarFile;
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@Override
	public String toString() {
		return "UserForm [firstName=" + firstName + ", lastName=" + lastName + ", phoneNumber=" + phoneNumber + "]";
	}

//	public String getAvatarUrl() {
//		return avatarUrl;
//	}
//
//	public void setAvatarUrl(String avatarUrl) {
//		this.avatarUrl = avatarUrl;
//	}
//
//	public MultipartFile getAvatarFile() {
//		return avatarFile;
//	}
//
//	public void setAvatarFile(MultipartFile avatarFile) {
//		this.avatarFile = avatarFile;
//	}
}