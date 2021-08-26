package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface CollectionDealRepository extends CollectionItemRepository<String, Deal, CollectionDeal> {

	public long countByCollectionAndDeal(Collection collection, Deal deal);

	public long countByCollectionIdAndDealId(Long collectionId, String dealId);
	
	@Override
	public default long countByCollectionIdAndItemId(Long collectionId, String itemId) {
		return countByCollectionIdAndDealId(collectionId, itemId);
	}
	
	public long countByDeal(Deal deal);

	@Query("SELECT DISTINCT cd.collection.owner FROM CollectionDeal cd WHERE cd.deal = :deal")
	public Page<User> getCollectionOwnersContainingDeal(@Param("deal") Deal deal, Pageable pageable);
	
	@Query("SELECT cd.deal.id as id, count(cd) as cnt FROM CollectionDeal cd WHERE cd.deal IN ( :deals ) GROUP BY cd.deal")
	public List<Count<String>> getPerCollectableItemCounts(@Param("deals") java.util.Collection<Deal> deals);
}
