package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.comments.CommentStore;
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface CommentStoreRepository extends CommentRepository<Long, Store, CommentStore>{
	
	@Override
	public default long countByParent(Store commentable){
		return countByStore(commentable);
	}
	public long countByStore(Store store);
	
	public Page<CommentStore> findAllByStore(Store store, Pageable pageable);
	public Page<CommentStore> findByStoreAndAuthor(Store store, User author, Pageable pageable);

	@Override
	public default Page<CommentStore> getByParent(Store parent, Pageable pageable){
		return findAllByStore(parent, pageable);
	}
	
	@Override
	public default Page<CommentStore> getByParentAndAuthor(Store parent, User author, Pageable pageable) {
		return findByStoreAndAuthor(parent, author, pageable);
	}
	
	@Query("SELECT c.store.id as id, count(c) as cnt FROM CommentStore c WHERE c.store IN ( :stores ) GROUP BY c.store")
	public List<Count<Long>> getPerParentCounts(@Param("stores") java.util.Collection<Store> stores);
	
}

