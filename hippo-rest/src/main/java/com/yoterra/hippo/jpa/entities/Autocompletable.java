package com.yoterra.hippo.jpa.entities;

public interface Autocompletable<ID> extends IdEntity<ID> {
	String getDisplayName();
}
