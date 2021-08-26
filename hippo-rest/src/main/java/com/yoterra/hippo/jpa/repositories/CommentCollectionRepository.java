package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.comments.CommentCollection;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface CommentCollectionRepository extends CommentRepository<Long, Collection, CommentCollection> {
	
	public long countByCollection(Collection collection);
	@Override
	public default long countByParent(Collection commentable){
		return countByCollection(commentable);
	}
	public Page<CommentCollection> findAllByCollection(Collection collection, Pageable pageable);
	public Page<CommentCollection> findByCollection(Collection collection, Pageable page);

	public Page<CommentCollection> findByCollectionAndAuthor(Collection collection, User author, Pageable pageable);
	
	@Override
	public default Page<CommentCollection> getByParent(Collection parent, Pageable pageable){
		return findAllByCollection(parent, pageable);
	}
	
	@Override
	public default Page<CommentCollection> getByParentAndAuthor(Collection parent, User author, Pageable pageable) {
		return findByCollectionAndAuthor(parent, author, pageable);
	}
	
	@Override
	@Query("SELECT c.collection.id as id, count(c) as cnt FROM CommentCollection c WHERE c.collection IN ( :collections ) GROUP BY c.collection")
	public List<Count<Long>> getPerParentCounts(@Param("collections") java.util.Collection<Collection> collections);
	
}

