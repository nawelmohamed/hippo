package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.collections.CollectionItemType;

public abstract class CollectionItemMob {
	
	protected final Long id;
	protected final CollectionItemType type;
	protected final CollectionMob collection;
	protected final Long addedTime;
	 
	protected final Integer likeCount;
	protected final Integer commentCount;
	
	protected CollectionItemMob(CollectionItem<?> item){
		this.id = item.getId();
		this.type = item.getType();
		this.collection = CollectionMob.of(item.getCollection());
		this.addedTime = item.getAdded().getTimeInMillis();
		
		this.likeCount = item.getLikeMetacount();
		this.commentCount = item.getCommentMetacount();
	}

	public Long getId() {
		return id;
	}

	public CollectionItemType getType() {
		return type;
	}
	
	public CollectionMob getCollection() {
		return collection;
	}

	public Long getAddedTime() {
		return addedTime;
	}

	public Integer getLikeCount() {
		return likeCount;
	}

	public Integer getCommentCount() {
		return commentCount;
	}
}
