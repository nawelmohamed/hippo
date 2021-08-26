package com.yoterra.hippo.jpa.entities.collections;

import com.yoterra.hippo.jpa.entities.Autocompletable;
import com.yoterra.hippo.jpa.entities.Metacounts;

public interface Collectable<ID> extends Metacounts, Autocompletable<ID> {
	
	public static final String COLLECTIONS_IN_METACOUNT = "mc.colls_in";
	
	ID getId();
	CollectionItemType getCollectableType();

	public default Integer getCollectionsInMetacount() {
		return getMetacount(COLLECTIONS_IN_METACOUNT);
	}
	
	public default void setCollectionsInMetacount(int count) {
		setMetacount(COLLECTIONS_IN_METACOUNT, count);
	}
	
	public default Integer deleteCollectionsInMetacount() {
		return deleteMetacount(COLLECTIONS_IN_METACOUNT);
	}
	
}
