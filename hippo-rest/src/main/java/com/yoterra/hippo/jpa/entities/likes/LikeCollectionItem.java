package com.yoterra.hippo.jpa.entities.likes;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;

@Entity
public abstract class LikeCollectionItem<CI extends CollectionItem<?>> extends Like<CI> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="COLLECTION_ITEM_ID")
	private CollectionItem<?> collectionItem;

	@Override
	public CI getParent() {
		return getCollectionItem();
	}
	
	@SuppressWarnings("unchecked")
	public CI getCollectionItem() {
		return (CI)collectionItem;
	}
	
	public void setCollectionItem(CI collectionItem) {
		this.collectionItem = collectionItem;
	}

	@Override
	public void setParent(CI parent) {
		setCollectionItem(parent);
	}
	
	@Override
	public Iterable<DataResolvablesContainer<?>> getOtherContainers() {
		return Arrays.asList(collectionItem);
	}
}