package com.yoterra.hippo.jpa.entities.likes;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;

@Entity
@DiscriminatorValue(value=LikeableType.Values.COLLECTION_PRODUCT)
public class LikeCollectionProduct extends LikeCollectionItem<CollectionProduct> {

	@Override
	public LikeableType getType() {
		return LikeableType.COLLECTION_PRODUCT;
	}
}
