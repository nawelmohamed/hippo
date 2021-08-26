package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface CollectionProductRepository extends CollectionItemRepository<String, Product, CollectionProduct> {

	public long countByCollectionAndProduct(Collection collection, Product product);

	@Override
	public default long countByCollectionIdAndItemId(Long collectionId, String itemId) {
		return countByCollectionIdAndProductId(collectionId, itemId);
	}
	
	public long countByCollectionIdAndProductId(Long collectionId, String productId);
	
	public long countByProduct(Product product);

	@Query("SELECT DISTINCT cp.collection.owner FROM CollectionProduct cp WHERE cp.product = :product")
	public Page<User> getCollectionOwnersContainingProduct(@Param("product") Product product, Pageable pageable);
	
	@Query("SELECT cp.product.id as id, count(cp) as cnt FROM CollectionProduct cp WHERE cp.product IN ( :products ) GROUP BY cp.product")
	public List<Count<String>> getPerCollectableItemCounts(@Param("products") java.util.Collection<Product> products);

}
