package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.jpa.entities.followers.FollowerBrand;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface FollowerBrandRepository extends FollowerRepository<Long, Brand, FollowerBrand> {
	
	public long countByBrand(Brand brand);

	@Override
	public default long countByFollowee(Brand followee) {
		return countByBrand(followee);
	}
	
	public long countByFollowerAndBrand(User follower, Brand brand);
	
	@Override
	public default long countByFollowerAndFollowee(User follower, Brand followee) {
		return countByFollowerAndBrand(follower, followee);
	}
	
	public Page<FollowerBrand> findAllByBrand(Brand brand, Pageable pageable);
	
	public Page<FollowerBrand> findAllByBrandId(Long brandId, Pageable pageable);
	public FollowerBrand findOneByBrandAndFollower(Brand brand, User follower);
	
	@Override
	public default Page<FollowerBrand> getByFollowee(Brand followee, Pageable pageable){
		return findAllByBrand(followee, pageable);
	}
	
	@Override
	public default FollowerBrand getByFolloweeAndFollower(Brand followee, User follower) {
		return findOneByBrandAndFollower(followee, follower);
	}
	
	@Override
	public default Page<FollowerBrand> getByFolloweeId(Long followeeId, Pageable pageable){
		return findAllByBrandId(followeeId, pageable);
	}
	
	@Override
	@Query("SELECT f.brand.id as id, count(f) as cnt FROM FollowerBrand f WHERE f.brand IN ( :brands ) GROUP BY f.brand")
	public List<Count<Long>> getPerFolloweeCounts(@Param("brands") java.util.Collection<Brand> brands);

	@Query("SELECT f.follower FROM Follower f WHERE f.brand = :followee")
	public Page<User> getUserFollowersByBrand(@Param("followee") Brand followee, Pageable pageable);				// do we need this ???
}

