package com.yoterra.hippo.mob.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum ConditionEnum {
	NEW("new"),

	USED("used"),

	REFURBISHED("refurbished");

	private String value;

	ConditionEnum(String value) {
		this.value = value;
	}

	@Override
	@JsonValue
	public String toString() {
		return String.valueOf(value);
	}

	@JsonCreator
	public static ConditionEnum fromValue(String text) {
		for (ConditionEnum b : ConditionEnum.values()) {
			if (String.valueOf(b.value).equals(text)) {
				return b;
			}
		}
		return null;
	}
}