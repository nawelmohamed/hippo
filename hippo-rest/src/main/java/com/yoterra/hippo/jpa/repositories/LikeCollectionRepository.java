package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.likes.LikeCollection;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface LikeCollectionRepository extends LikeRepository<Long, Collection, LikeCollection> {
	
	public long countByCollection(Collection collection);
	public long countByCollectionAndAuthor(Collection collection, User author);
	public Page<LikeCollection> findAllByCollection(Collection collection, Pageable pageable);
	public Page<LikeCollection> findAllByCollectionId(Long collectionId, Pageable pageable);
	public LikeCollection findByCollectionAndAuthor(Collection collection, User author);
	
	@Override
	public default Page<LikeCollection> getByParent(Collection parent, Pageable pageable){
		return findAllByCollection(parent, pageable);
	}

	@Override
	public default LikeCollection getByParentAndAuthor(Collection parent, User author) {
		return findByCollectionAndAuthor(parent, author);
	}
	
	@Override
	public default long getCountByParent(Collection likeable){
		return countByCollection(likeable);
	}

	@Override
	public default long getCountByParentAndAuthor(Collection parent, User author){
		return countByCollectionAndAuthor(parent, author);
	}
	@Query("SELECT l.collection.id as id, count(l.id) as cnt FROM LikeCollection l WHERE l.collection IN ( :collections ) GROUP BY l.collection.id")
	public List<Count<Long>> getPerParentCounts(@Param("collections") java.util.Collection<Collection> collections);
	
}

