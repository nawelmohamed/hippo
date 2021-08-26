package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.jpa.entities.followers.FollowerStore;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface FollowerStoreRepository extends FollowerRepository<Long, Store, FollowerStore> {
	
	@Override
	public default long countByFollowee(Store followee) {
		return countByStore(followee);
	}

	
	@Override
	public default long countByFollowerAndFollowee(User follower, Store followee) {
		return countByFollowerAndStore(follower, followee);
	}
	
	public long countByFollowerAndStore(User follower, Store store);
	
	public long countByStore(Store store);
	
	public Page<FollowerStore> findAllByStore(Store store, Pageable pageable);
	
	public Page<FollowerStore> findAllByStoreId(Long storeId, Pageable pageable);
	public FollowerStore findOneByStoreAndFollower(Store store, User follower);
	
	@Override
	public default Page<FollowerStore> getByFollowee(Store followee, Pageable pageable){
		return findAllByStore(followee, pageable);
	}
	
	@Override
	public default FollowerStore getByFolloweeAndFollower(Store followee, User follower) {
		return findOneByStoreAndFollower(followee, follower);
	}
	
	@Override
	public default Page<FollowerStore> getByFolloweeId(Long followeeId, Pageable pageable){
		return findAllByStoreId(followeeId, pageable);
	}
	
	@Override
	@Query("SELECT f.store.id as id, count(f) as cnt FROM FollowerStore f WHERE f.store IN ( :stores ) GROUP BY f.store")
	public List<Count<Long>> getPerFolloweeCounts(@Param("stores") java.util.Collection<Store> stores);

	@Query("SELECT f.follower FROM Follower f WHERE f.store = :followee")
	public Page<User> getUserFollowersByStore(@Param("followee") Store followee, Pageable pageable);				// do we need this ???
}

