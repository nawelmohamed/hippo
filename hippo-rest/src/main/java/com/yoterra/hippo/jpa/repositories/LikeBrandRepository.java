package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.jpa.entities.likes.LikeBrand;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface LikeBrandRepository extends LikeRepository<Long, Brand, LikeBrand> {
	
	
	public long countByBrand(Brand brand);
	public long countByBrandAndAuthor(Brand brand, User author);
	public Page<LikeBrand> findAllByBrand(Brand brand, Pageable pageable);
	public LikeBrand findByBrandAndAuthor(Brand brand, User author);

	@Override
	public default Page<LikeBrand> getByParent(Brand parent, Pageable pageable){
		return findAllByBrand(parent, pageable);
	}

	@Override
	public default LikeBrand getByParentAndAuthor(Brand parent, User author) {
		return findByBrandAndAuthor(parent, author);
	}
	
	@Override
	public default long getCountByParent(Brand likeable){
		return countByBrand(likeable);
	}

	@Override
	public default long getCountByParentAndAuthor(Brand parent, User author){
		return countByBrandAndAuthor(parent, author);
	}
	
	@Query("SELECT l.brand.id as id, count(l) as cnt FROM LikeBrand l WHERE l.brand IN ( :brands ) GROUP BY l.brand")
	public List<Count<Long>> getPerParentCounts(@Param("brands") java.util.Collection<Brand> brands);
	
}

