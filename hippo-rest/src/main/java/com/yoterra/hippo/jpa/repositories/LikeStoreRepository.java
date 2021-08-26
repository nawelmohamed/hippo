package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.jpa.entities.likes.LikeStore;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface LikeStoreRepository extends LikeRepository<Long, Store, LikeStore> {

	public long countByStore(Store store);
	public long countByStoreAndAuthor(Store store, User author);
	public Page<LikeStore> findAllByStore(Store store, Pageable pageable);
	public LikeStore findByStoreAndAuthor(Store store, User author);
	
	@Override
	public default Page<LikeStore> getByParent(Store parent, Pageable pageable){
		return findAllByStore(parent, pageable);
	}
	
	@Override	
	public default LikeStore getByParentAndAuthor(Store parent, User author) {
		return findByStoreAndAuthor(parent, author);
	}
	
	@Override
	public default long getCountByParent(Store likeable){
		return countByStore(likeable);
	}
	
	@Override
	public default long getCountByParentAndAuthor(Store parent, User author){
		return countByStoreAndAuthor(parent, author);
	}
	
	@Query("SELECT l.store.id as id, count(l) as cnt FROM LikeStore l WHERE l.store IN ( :stores ) GROUP BY l.store")
	public List<Count<Long>> getPerParentCounts(@Param("stores") java.util.Collection<Store> stores);
	
}

