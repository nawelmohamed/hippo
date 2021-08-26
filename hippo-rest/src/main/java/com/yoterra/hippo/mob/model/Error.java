package com.yoterra.hippo.mob.model;

public class Error {
	
	private String message = null;

	public Error message(String message) {
		this.message = message;
		return this;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
