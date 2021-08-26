package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.followers.FollowerCollection;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface FollowerCollectionRepository extends FollowerRepository<Long, Collection, FollowerCollection> {
	
	public long countByCollection(Collection collection);

	@Override
	public default long countByFollowee(Collection followee) {
		return countByCollection(followee);
	}
	
	public long countByFollowerAndCollection(User follower, Collection collection);
	
	@Override
	public default long countByFollowerAndFollowee(User follower, Collection followee) {
		return countByFollowerAndCollection(follower, followee);
	}
	
	public Page<FollowerCollection> findAllByCollection(Collection collection, Pageable pageable);
	
	public Page<FollowerCollection> findAllByCollectionId(Long collectionId, Pageable pageable);
	public FollowerCollection findOneByCollectionAndFollower(Collection collection, User follower);
	
	@Override
	public default Page<FollowerCollection> getByFollowee(Collection followee, Pageable pageable){
		return findAllByCollection(followee, pageable);
	}
	
	@Override
	public default FollowerCollection getByFolloweeAndFollower(Collection followee, User follower) {
		return findOneByCollectionAndFollower(followee, follower);
	}
	
	@Override
	public default Page<FollowerCollection> getByFolloweeId(Long followeeId, Pageable pageable){
		return findAllByCollectionId(followeeId, pageable);
	}
	
	@Override
	@Query("SELECT f.collection.id as id, count(f) as cnt FROM FollowerCollection f WHERE f.collection IN ( :collections ) GROUP BY f.collection")
	public List<Count<Long>> getPerFolloweeCounts(@Param("collections") java.util.Collection<Collection> collections);

	@Query("SELECT f.follower FROM Follower f WHERE f.collection = :followee")
	public Page<User> getUserFollowersByCollection(@Param("followee") Collection followee, Pageable pageable);				// do we need this ???
}

