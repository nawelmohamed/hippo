package com.yoterra.hippo.jpa.entities.events;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.collections.Collection;


@Entity
@DiscriminatorValue(EventType.Aliases.CREATED_COLLECTION)
public class CollectionCreatedEvent extends Event<Collection>{

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "collection_id")
	private Collection collection;
	
	@Override
	public EventType getType() {
		return EventType.CREATED_COLLECTION;
	}

	@Override
	public Collection getItem() {
		return getCollection();
	}
	
	public Collection getCollection() {
		return collection;
	}

	public void setCollection(Collection collection) {
		this.collection = collection;
	}
}
