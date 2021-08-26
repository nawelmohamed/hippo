package com.yoterra.hippo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionDeal;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionDeal;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.repositories.CollectionDealRepository;
import com.yoterra.hippo.jpa.repositories.CollectionItemRepository;
import com.yoterra.hippo.jpa.repositories.CommentCollectionDealRepository;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.jpa.repositories.LikeCollectionDealRepository;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.repositories.DealResolverRepository;

@Service
public class CollectionDealService extends CollectionItemService<String, Deal, CollectionDeal, LikeCollectionDeal, CommentCollectionDeal>{
	
	@Autowired
	private CommentCollectionDealRepository commentCollectionDealRepository;
	
	@Autowired
	private LikeCollectionDealRepository likeCollectionDealRepository;
	
	@Autowired
	private CollectionDealRepository collectionDealRepository;
	
	@Autowired
	private DealResolverRepository dealResolverRepository;
	
	@Autowired
	private DealService dealService;
	
	@Override
	public CommentRepository<Long, CollectionDeal, CommentCollectionDeal> getCommentsRepository() {
		return commentCollectionDealRepository;
	}

	@Override
	public CommentCollectionDeal newEmptyCommentInstance() {
		return new CommentCollectionDeal();
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.COLLECTION_DEAL;
	}

	@Override
	public LikeRepository<Long, CollectionDeal, LikeCollectionDeal> getLikeRepository() {
		return likeCollectionDealRepository;
	}

	@Override
	public LikeCollectionDeal newEmptyLikeInstance() {
		return new LikeCollectionDeal();
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.COLLECTION_DEAL;
	}

	@Override
	protected CollectionItemRepository<String, Deal, CollectionDeal> getRepository() {
		return collectionDealRepository;
	}

	@Override
	public CollectionType getCollectionType() {
		return CollectionType.DEAL;
	}

	@Override
	protected CollectionDeal initItem(String itemId) {
		Deal deal = dealResolverRepository.findOneById(itemId,true,true,true);
		CollectionDeal cd = new CollectionDeal();
		cd.setDeal(deal);
		return cd;
	}

	@Override
	public UserCtx getUserContextOfItem(CollectionDeal ci) {
		return dealService.getUserContext(ci.getDeal());
	}
}
