package com.yoterra.hippo.jpa.repositories;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.followers.Followable;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.utils.Opt;

public interface FollowerRepository<ID, 
									F extends Followable<ID>, 
									T extends Follower<F>
								> extends JpaRepository<T,Long>, JpaSpecificationExecutor<T> {
	
	
	public default long countByFollowee(F followee) {
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	long countByFollower(User follower);
	
	public default long countByFollowerAndFollowee(User follower, F followee) {
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	Page<T> findAllByFollower(User follower, Pageable pageable);
	
	Page<T> findAllByFollowerId(Long followerId, Pageable pageable);
	
	public default Page<T> getByFollowee(F followee, Pageable pageable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default T getByFolloweeAndFollower(F followee, User follower){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default Page<T> getByFolloweeId(ID followeeId, Pageable pageable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default List<Count<ID>> getPerFolloweeCounts(java.util.Collection<F> followees){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default Map<ID, Long> getPerFolloweeCountsMap(java.util.Collection<F> followees){
		List<Count<ID>> ppc = getPerFolloweeCounts(followees);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}
	
	@Query("SELECT f.follower.id as id, count(f) as cnt FROM Follower f WHERE f.follower IN ( :followers ) GROUP BY f.follower ")
	public List<Count<Long>> getPerFollowerCounts(@Param("followers")java.util.Collection<User> followers);
	
	public default Map<Long, Long> getPerFollowerCountsMap(java.util.Collection<User> followers){
		List<Count<Long>> ppc = getPerFollowerCounts(followers);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}
	
}

