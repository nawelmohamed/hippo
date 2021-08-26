package com.yoterra.hippo.jpa.repositories;

import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionProduct;

@Repository
public interface LikeCollectionProductRepository extends LikeCollectionItemRepository<CollectionProduct, LikeCollectionProduct> {
	
}

