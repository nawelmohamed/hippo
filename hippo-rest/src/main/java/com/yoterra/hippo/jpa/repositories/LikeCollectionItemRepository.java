package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionItem;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface LikeCollectionItemRepository <CI extends CollectionItem<?>, LCI extends LikeCollectionItem<CI>>
		extends LikeRepository<Long, CI, LCI> {
	
	public long countByCollectionItem(CI collectionItem);
	public long countByCollectionItemAndAuthor(CI collectionItem, User author);
	public Page<LCI> findAllByCollectionItem(CollectionItem<?> collectionItem, Pageable pageable);
	public LCI findByCollectionItemAndAuthor(CI collectionItem, User author);
	
	@Override
	public default Page<LCI> getByParent(CI parent, Pageable pageable){
		return findAllByCollectionItem(parent, pageable);
	}
	
	@Override
	public default LCI getByParentAndAuthor(CI parent, User author) {
		return findByCollectionItemAndAuthor(parent, author);
	}
	
	@Override
	public default long getCountByParent(CI likeable){
		return countByCollectionItem(likeable);
	}

	@Override
	public default long getCountByParentAndAuthor(CI parent, User author){
		return countByCollectionItemAndAuthor(parent, author);
	}
	
	@Query("SELECT l.collectionItem.id as id, count(l) as cnt FROM LikeCollectionItem l WHERE l.collectionItem IN ( :collectionItems ) GROUP BY l.collectionItem")
	public List<Count<Long>> getPerParentCounts(@Param("collectionItems") java.util.Collection<CI> collectionItems);
	
}

