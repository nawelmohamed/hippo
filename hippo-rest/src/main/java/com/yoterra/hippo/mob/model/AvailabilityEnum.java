package com.yoterra.hippo.mob.model;

public enum AvailabilityEnum {
	IN_CTOCK("in_ctock"),

	OUT_OF_STOCK("out_of_stock");

	private String value;

	AvailabilityEnum(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return String.valueOf(value);
	}

	public static AvailabilityEnum fromValue(String text) {
		for (AvailabilityEnum b : AvailabilityEnum.values()) {
			if (String.valueOf(b.value).equals(text)) {
				return b;
			}
		}
		return null;
	}
}