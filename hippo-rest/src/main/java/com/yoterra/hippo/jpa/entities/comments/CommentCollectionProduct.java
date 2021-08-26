package com.yoterra.hippo.jpa.entities.comments;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;

@Entity
@DiscriminatorValue(value=CommentableType.Values.COLLECTION_PRODUCT)
public class CommentCollectionProduct extends CommentCollectionItem<CollectionProduct> {

	@Override
	public CommentableType getType() {
		return CommentableType.COLLECTION_PRODUCT;
	}

}
