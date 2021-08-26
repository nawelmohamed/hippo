package com.yoterra.hippo.exceptions;

public class UpdatePermissionDeniedException extends RuntimeException {

	private static final long serialVersionUID = -5712180508999487190L;

	public UpdatePermissionDeniedException() {
		super();
	}

	public UpdatePermissionDeniedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public UpdatePermissionDeniedException(String message, Throwable cause) {
		super(message, cause);
	}

	public UpdatePermissionDeniedException(String message) {
		super(message);
	}

	public UpdatePermissionDeniedException(Throwable cause) {
		super(cause);
	}

}
