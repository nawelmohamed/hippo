package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.comments.CommentBrand;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface CommentBrandRepository extends CommentRepository<Long, Brand, CommentBrand>{
	
	
	public long countByBrand(Brand brand);
	@Override
	public default long countByParent(Brand commentable){
		return countByBrand(commentable);
	}
	public Page<CommentBrand> findAllByBrand(Brand brand, Pageable pageable);
	
	public Page<CommentBrand> findByBrandAndAuthor(Brand brand, User author, Pageable pageable);

	@Override
	public default Page<CommentBrand> getByParent(Brand parent, Pageable pageable){
		return findAllByBrand(parent, pageable);
	}
	
	@Override
	public default Page<CommentBrand> getByParentAndAuthor(Brand parent, User author, Pageable pageable) {
		return findByBrandAndAuthor(parent, author, pageable);
	}
	
	@Override
	@Query("SELECT c.brand.id as id, count(c) as cnt FROM CommentBrand c WHERE c.brand IN ( :brands ) GROUP BY c.brand")
	public List<Count<Long>> getPerParentCounts(@Param("brands") java.util.Collection<Brand> brands);
}

