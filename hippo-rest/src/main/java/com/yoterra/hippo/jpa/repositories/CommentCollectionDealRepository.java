package com.yoterra.hippo.jpa.repositories;

import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionDeal;

@Repository
public interface CommentCollectionDealRepository extends CommentCollectionItemRepository<CollectionDeal, CommentCollectionDeal> {
	
}

