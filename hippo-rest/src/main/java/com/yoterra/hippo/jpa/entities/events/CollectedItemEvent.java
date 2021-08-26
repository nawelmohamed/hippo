package com.yoterra.hippo.jpa.entities.events;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;


@Entity
@DiscriminatorValue(EventType.Aliases.COLLECTED_ITEM)
public class CollectedItemEvent extends Event<CollectionItem<?>>{

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "collection_item_id")
	private CollectionItem<?> collectionItem;
	
	@Override
	public EventType getType() {
		return EventType.COLLECTED_ITEM;
	}

	@Override
	public CollectionItem<?> getItem() {
		return getCollectionItem();
	}
	
	public CollectionItem<?> getCollectionItem() {
		return collectionItem;
	}

	public void setCollectionItem(CollectionItem<?> collectionItem) {
		this.collectionItem = collectionItem;
	}

	@Override
	public Iterable<DataResolvablesContainer<?>> getOtherContainers() {
		return Arrays.asList(collectionItem);
	}
	
}
