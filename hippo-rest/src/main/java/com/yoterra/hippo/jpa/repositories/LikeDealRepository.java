package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.likes.LikeDeal;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface LikeDealRepository extends LikeRepository<String, Deal, LikeDeal> {
	

	public long countByDeal(Deal deal);
	public long countByDealAndAuthor(Deal deal, User author);
	public Page<LikeDeal> findAllByDeal(Deal deal, Pageable pageable);
	public LikeDeal findByDealAndAuthor(Deal deal, User author);
	
	@Override
	public default Page<LikeDeal> getByParent(Deal parent, Pageable pageable){
		return findAllByDeal(parent, pageable);
	}

	@Override
	public default LikeDeal getByParentAndAuthor(Deal parent, User author) {
		return findByDealAndAuthor(parent, author);
	}
	
	@Override
	public default long getCountByParent(Deal likeable){
		return countByDeal(likeable);
	}
	
	@Override
	public default long getCountByParentAndAuthor(Deal parent, User author){
		return countByDealAndAuthor(parent, author);
	}
	
	@Query("SELECT l.deal.id as id, count(l) as cnt FROM LikeDeal l WHERE l.deal IN ( :deals ) GROUP BY l.deal")
	public List<Count<String>> getPerParentCounts(@Param("deals") java.util.Collection<Deal> deals);
	
}

