package com.yoterra.hippo.mob.model;

import org.apache.commons.validator.routines.EmailValidator;

public class EmailUserStatusMob {

	public enum EmailUserStatus {
		ACTIVE, DEACTIVATED, NOT_REGISTERED, INVALID_EMAIL
	}
	
	private final EmailUserStatus status;
	private final Long id;
	private final String email;
	private final String username;
	private final String avatar;
	
	public static EmailUserStatusMob ofTuple(Object [] row) {
		Long id = ((java.math.BigInteger) row[0]).longValue();
		EmailUserStatus status = id > 0 ? EmailUserStatus.ACTIVE : EmailUserStatus.DEACTIVATED;
		String email = null, username = null, avatar = null;
		if(status == EmailUserStatus.ACTIVE) {
			email = (String) row[1];
			username = (String) row[2];
			avatar = (String) row[3];
		}
		return new EmailUserStatusMob(status, id, email, username, avatar);
	}
	
	public static EmailUserStatusMob notFound(String email) {
		EmailUserStatus st = EmailValidator.getInstance().isValid(email) ? EmailUserStatus.NOT_REGISTERED : EmailUserStatus.INVALID_EMAIL ;
		return new EmailUserStatusMob(st, null, email, null, null);
	}
	
	public static EmailUserStatusMob invEmail(String email) {
		return new EmailUserStatusMob(EmailUserStatus.INVALID_EMAIL, null, email, null, null);
	}
	
	private EmailUserStatusMob(EmailUserStatus status, Long id, String email, String username, String avatar) {
		super();
		this.status = status;
		this.id = id;
		this.email = email;
		this.username = username;
		this.avatar = avatar;
	}

	public EmailUserStatus getStatus() {
		return status;
	}

	public Long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getUsername() {
		return username;
	}

	public String getAvatar() {
		return avatar;
	}
}
