package com.yoterra.hippo.jpa.entities.likes;

import com.yoterra.hippo.jpa.entities.IdEntity;
import com.yoterra.hippo.jpa.entities.Metacounts;

public interface Likeable<ID> extends Metacounts, IdEntity<ID> {

	public static final String LIKE_METACOUNT = "mc.like";
	
	LikeableType getLikeableType();
	
	public default Integer getLikeMetacount() {
		return getMetacount(LIKE_METACOUNT);
	}
	
	public default void setLikeMetacount(int count) {
		setMetacount(LIKE_METACOUNT, count);
	}
	
	public default Integer deleteLikeMetacount() {
		return deleteMetacount(LIKE_METACOUNT);
	}
}
