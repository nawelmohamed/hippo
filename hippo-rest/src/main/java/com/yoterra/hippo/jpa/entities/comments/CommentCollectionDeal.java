package com.yoterra.hippo.jpa.entities.comments;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;

@Entity
@DiscriminatorValue(value=CommentableType.Values.COLLECTION_DEAL)
public class CommentCollectionDeal extends CommentCollectionItem<CollectionDeal> {

	@Override
	public CommentableType getType() {
		return CommentableType.COLLECTION_DEAL;
	}

}
