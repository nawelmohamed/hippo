package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.comments.CommentDeal;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface CommentDealRepository extends CommentRepository<String, Deal, CommentDeal>{
	
	public long countByDeal(Deal deal);
	
	@Override
	public default long countByParent(Deal commentable){
		return countByDeal(commentable);
	}
	public Page<CommentDeal> findAllByDeal(Deal deal, Pageable pageable);
	public Page<CommentDeal> findByDealAndAuthor(Deal deal, User author, Pageable pageable);
	
	@Override
	public default Page<CommentDeal> getByParent(Deal parent, Pageable pageable){
		return findAllByDeal(parent, pageable);
	}

	@Override
	public default Page<CommentDeal> getByParentAndAuthor(Deal parent, User author, Pageable pageable) {
		return findByDealAndAuthor(parent, author, pageable);
	}
	
	@Query("SELECT c.deal.id as id, count(c) as cnt FROM CommentDeal c WHERE c.deal IN ( :deals ) GROUP BY c.deal")
	public List<Count<String>> getPerParentCounts(@Param("deals") java.util.Collection<Deal> deals);
}

