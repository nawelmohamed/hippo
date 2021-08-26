package com.yoterra.hippo.exceptions;

public class LimitExceededException extends Exception {

	private static final long serialVersionUID = -7547800334160228385L;

	public LimitExceededException() {
		super();
	}

	public LimitExceededException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public LimitExceededException(String message, Throwable cause) {
		super(message, cause);
	}

	public LimitExceededException(String message) {
		super(message);
	}

	public LimitExceededException(Throwable cause) {
		super(cause);
	}

	
}
