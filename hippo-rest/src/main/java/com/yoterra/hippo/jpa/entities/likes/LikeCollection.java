package com.yoterra.hippo.jpa.entities.likes;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.collections.Collection;

@Entity
@DiscriminatorValue(value=LikeableType.Values.COLLECTION)
public class LikeCollection extends Like<Collection> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="COLLECTION_ID")
	private Collection collection;

	@Override
	public Collection getParent() {
		return collection;
	}
	
	public Collection getCollection() {
		return collection;
	}
	
	public void setCollection(Collection collection) {
		this.collection = collection;
	}

	@Override
	public void setParent(Collection parent) {
		setCollection(parent);
	}

	@Override
	public LikeableType getType() {
		return LikeableType.COLLECTION;
	}
}