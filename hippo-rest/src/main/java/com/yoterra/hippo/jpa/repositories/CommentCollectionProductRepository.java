package com.yoterra.hippo.jpa.repositories;

import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionProduct;

@Repository
public interface CommentCollectionProductRepository extends CommentCollectionItemRepository<CollectionProduct, CommentCollectionProduct> {
	
}

