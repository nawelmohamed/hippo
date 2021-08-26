package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.followers.FollowerUser;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface FollowerUserRepository extends FollowerRepository<Long, User, FollowerUser> {
	
	@Override
	public default long countByFollowee(User followee) {
		return countByUser(followee);
	}
	
	@Override
	public default long countByFollowerAndFollowee(User follower, User followee) {
		return countByFollowerAndUser(follower, followee);
	}
	
	public long countByFollowerAndUser(User follower, User user);
	
	public long countByUser(User user);
	
	public Page<FollowerUser> findAllByUser(User user, Pageable pageable);
	
	public Page<FollowerUser> findAllByUserId(Long userId, Pageable pageable);
	public FollowerUser findOneByUserAndFollower(User user, User follower);
	
	
	@Override
	public default Page<FollowerUser> getByFollowee(User followee, Pageable pageable){
		return findAllByUser(followee, pageable);
	}
	
	@Override
	public default FollowerUser getByFolloweeAndFollower(User followee, User follower) {
		return findOneByUserAndFollower(followee, follower);
	}
	
	@Override
	public default Page<FollowerUser> getByFolloweeId(Long followeeId, Pageable pageable){
		return findAllByUserId(followeeId, pageable);
	}
	
	@Query("SELECT f.user.id as id, count(f) as cnt FROM FollowerUser f WHERE f.user IN ( :users ) GROUP BY f.user ")
	public List<Count<Long>> getPerFolloweeCounts(@Param("users") java.util.Collection<User> users);
	
	@Query("SELECT f.follower FROM FollowerUser f WHERE f.user = :user")
	public Page<User> getUserFollowersByUser(@Param("user") User user, Pageable pageable);
}

