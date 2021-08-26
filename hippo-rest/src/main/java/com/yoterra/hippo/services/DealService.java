package com.yoterra.hippo.services;

import java.util.Collection;
import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.jpa.entities.Metacounts;
import com.yoterra.hippo.jpa.entities.collections.Collectable;
import com.yoterra.hippo.jpa.entities.comments.CommentDeal;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.likes.LikeDeal;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.repositories.CollectionDealRepository;
import com.yoterra.hippo.jpa.repositories.CommentDealRepository;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.jpa.repositories.LikeDealRepository;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.repositories.DealResolverRepository;
import com.yoterra.hippo.search.requests.DealSearchRequest;

@Service
public class DealService implements ICommentService<String, Deal, CommentDeal>, 
									ILikeService<String, Deal, LikeDeal>, 
									IUserContextService<Deal, UserCtx>{
	
	@SuppressWarnings("unused")
	private Supplier<EntityNotFoundException> MISSING_DEAL_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The deal does not exist.");
			
	@Autowired
	private LikeDealRepository likeDealRepository;
	
	@Autowired
	private CommentDealRepository commentDealRepository;
	
	@Autowired
	private CollectionDealRepository collectionDealRepository;
	
	@Autowired
	private DealResolverRepository dealResolverRepository;
	
	public Page<Deal> searchDeals(DealSearchRequest req, boolean addMetacounts){
		Page<Deal> page = dealResolverRepository.searchDeals(req);
		
		if(addMetacounts) {
			resolveMetacounts(page.getContent());
		}
		
		return page;
	}
	
	public Deal getDeal(String id, boolean addCounts){
		
		Deal deal = dealResolverRepository.findOneById(id, true, false, true);
		
		if(addCounts) {
			resolveMetacounts(deal);
		}
		
		return deal;
	}
	
	@Override
	public void resolveMetacounts(Deal deal) {
		ILikeService.super.resolveMetacounts(deal);
		ICommentService.super.resolveMetacounts(deal);
		deal.setCollectionsInMetacount((int)collectionDealRepository.countByDeal(deal));
	}
	
	@Override
	public void resolveMetacounts(Collection<Deal> deals) {
		ILikeService.super.resolveMetacounts(deals);
		ICommentService.super.resolveMetacounts(deals);
		Metacounts.mergeMetacounts(deals, collectionDealRepository::getPerCollectableItemCountsMap, Deal::getId, Collectable.COLLECTIONS_IN_METACOUNT);
	}
	
	@Override
	public UserCtx getUserContext(Deal deal) {
		boolean hasLiked = hasLiked(deal);
		return new UserCtx(hasLiked, null, null, null);
	}
	
	@Override
	public Deal getParentById(String id, boolean persist, boolean fetchData) {
		return dealResolverRepository.findOneById(id, true, persist, fetchData);
	}

	@Override
	public LikeRepository<String, Deal, LikeDeal> getLikeRepository() {
		return likeDealRepository;
	}

	@Override
	public LikeDeal newEmptyLikeInstance() {
		return new LikeDeal();
	}

	@Override
	public CommentRepository<String, Deal, CommentDeal> getCommentsRepository() {
		return commentDealRepository;
	}

	@Override
	public CommentDeal newEmptyCommentInstance() {
		return new CommentDeal();
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.DEAL;
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.DEAL;
	}
}