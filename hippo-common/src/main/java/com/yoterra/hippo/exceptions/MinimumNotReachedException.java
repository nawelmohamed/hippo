package com.yoterra.hippo.exceptions;

public class MinimumNotReachedException extends Exception {
	
	private static final long serialVersionUID = -8731421665642338598L;

	public MinimumNotReachedException() {
		super();
	}

	public MinimumNotReachedException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public MinimumNotReachedException(String message, Throwable cause) {
		super(message, cause);
	}

	public MinimumNotReachedException(String message) {
		super(message);
	}

	public MinimumNotReachedException(Throwable cause) {
		super(cause);
	}
}
