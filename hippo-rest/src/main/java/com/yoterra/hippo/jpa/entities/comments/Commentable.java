package com.yoterra.hippo.jpa.entities.comments;

import com.yoterra.hippo.jpa.entities.IdEntity;
import com.yoterra.hippo.jpa.entities.Metacounts;

public interface Commentable<ID> extends Metacounts, IdEntity<ID> {
	
	public static final String COMMENT_METACOUNT = "mc.comment";

	CommentableType getCommentableType();
	
	public default Integer getCommentMetacount() {
		return getMetacount(COMMENT_METACOUNT);
	}
	
	public default void setCommentMetacount(int count) {
		setMetacount(COMMENT_METACOUNT, count);
	}
	
	public default Integer deleteCommentMetacount() {
		return deleteMetacount(COMMENT_METACOUNT);
	}
	
}
