package com.yoterra.hippo.exceptions;

public class DeletePermissionDeniedException extends RuntimeException {

	private static final long serialVersionUID = -3656991540800807656L;

	public DeletePermissionDeniedException() {
		super();
	}

	public DeletePermissionDeniedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public DeletePermissionDeniedException(String message, Throwable cause) {
		super(message, cause);
	}

	public DeletePermissionDeniedException(String message) {
		super(message);
	}

	public DeletePermissionDeniedException(Throwable cause) {
		super(cause);
	}

}
