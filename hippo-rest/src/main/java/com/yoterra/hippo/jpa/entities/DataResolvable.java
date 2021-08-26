package com.yoterra.hippo.jpa.entities;

public interface DataResolvable<ID> extends IdEntity<ID> {

	boolean isDataResolved();
}
