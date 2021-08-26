package com.yoterra.hippo.jpa.entities.likes;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;

@Entity
@DiscriminatorValue(value=LikeableType.Values.COLLECTION_DEAL)
public class LikeCollectionDeal extends LikeCollectionItem<CollectionDeal> {

	@Override
	public LikeableType getType() {
		return LikeableType.COLLECTION_DEAL;
	}
}
