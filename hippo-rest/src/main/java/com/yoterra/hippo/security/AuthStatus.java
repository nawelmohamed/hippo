package com.yoterra.hippo.security;

public enum AuthStatus {
	NONE("none", false),         // null or NONE auth status should be equivalent
	NV_EMAIL("nv_email", false), // e-mail address is not verified               
	NO_USER("no_user", false),   // no user info including username              
	NEW_USER("new_user", false), // no user info including username              
	FULL("full", false);         // fully authencticated                         
	
	private final String code;
	private final boolean authenticated;
	
	private AuthStatus(String code, boolean authenticated) {
		this.code = code;
		this.authenticated = authenticated;
	}
	
	public String getCode() {
		return code;
	}
	
	public boolean isAuthenticated() {
		return authenticated;
	}
}

