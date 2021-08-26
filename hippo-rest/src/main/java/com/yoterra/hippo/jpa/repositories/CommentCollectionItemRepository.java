package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionItem;
import com.yoterra.hippo.jpa.entities.users.User;

public interface CommentCollectionItemRepository<CI extends CollectionItem<?>, CCI extends CommentCollectionItem<CI>> 
			extends CommentRepository<Long, CI, CCI> {
	
	public long countByCollectionItem(CollectionItem<?> collectionItem);
	@Override
	public default long countByParent(CI commentable){
		return countByCollectionItem(commentable);
	}
	public Page<CCI> findAllByCollectionItem(CollectionItem<?> collectionItem, Pageable pageable);

	public Page<CCI> findByCollectionItemAndAuthor(CI collectionItem, User author, Pageable pageable);
	
	
	@Override
	public default Page<CCI> getByParent(CI parent, Pageable pageable){
		return findAllByCollectionItem(parent, pageable);
	}
	
	@Override
	public default Page<CCI> getByParentAndAuthor(CI parent, User author, Pageable pageable) {
		return findByCollectionItemAndAuthor(parent, author, pageable);
	}
	
	@Override
	@Query("SELECT c.collectionItem.id as id, count(c) as cnt FROM CommentCollectionItem c WHERE c.collectionItem IN ( :collectionItems ) GROUP BY c.collectionItem")
	public List<Count<Long>> getPerParentCounts(@Param("collectionItems") java.util.Collection<CI> collectionItems);
	
}

