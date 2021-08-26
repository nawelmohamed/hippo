package com.yoterra.hippo.jpa.repositories;

import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionDeal;

@Repository
public interface LikeCollectionDealRepository extends LikeCollectionItemRepository<CollectionDeal, LikeCollectionDeal> {
	
}

