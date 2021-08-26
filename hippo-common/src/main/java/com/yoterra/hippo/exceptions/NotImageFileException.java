package com.yoterra.hippo.exceptions;

public class NotImageFileException extends IllegalArgumentException {

	private static final long serialVersionUID = -5386754868366049061L;

	public NotImageFileException() {
		super();
	}

	public NotImageFileException(String message, Throwable cause) {
		super(message, cause);
	}

	public NotImageFileException(String s) {
		super(s);
	}

	public NotImageFileException(Throwable cause) {
		super(cause);
	}

	
}
