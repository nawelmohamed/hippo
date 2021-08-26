package com.yoterra.hippo.jpa.entities.comments;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.collections.Collection;

@Entity
@DiscriminatorValue(value=CommentableType.Values.COLLECTION)
public class CommentCollection extends Comment<Collection> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="COLLECTION_ID")
	private Collection collection;

	@Override
	public Collection getParent() {
		return collection;
	}
	
	public void setCollection(Collection collection) {
		this.collection = collection;
	}
	
	public Collection getCollection() {
		return collection;
	}

	@Override
	public void setParent(Collection parent) {
		setCollection(parent);
	}

	@Override
	public CommentableType getType() {
		return CommentableType.COLLECTION;
	}
}