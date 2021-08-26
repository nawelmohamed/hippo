package com.yoterra.hippo.exceptions;

public class DuplicateElementException extends Exception {
	
	private static final long serialVersionUID = 7042045717902906630L;

	public DuplicateElementException() {
		super();
	}

	public DuplicateElementException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public DuplicateElementException(String message, Throwable cause) {
		super(message, cause);
	}

	public DuplicateElementException(String message) {
		super(message);
	}

	public DuplicateElementException(Throwable cause) {
		super(cause);
	}

	
}
