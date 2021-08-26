package com.yoterra.hippo.mob.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionDeal;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionDeal;
import com.yoterra.hippo.mob.model.CollectionDealFullMob;
import com.yoterra.hippo.mob.model.CollectionDealMob;
import com.yoterra.hippo.mob.model.CommentMob.CollectionDealCommentMob;
import com.yoterra.hippo.mob.model.DealMob;
import com.yoterra.hippo.mob.model.LikeMob.CollectionDealLikeMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.services.CollectionDealService;


@RestController
@RequestMapping("/collections/deals")										// IT'S TOO MUCH, REDUCT THE GENERICS !!!! FIXME
public class CollectionDealController extends CollectionItemController<String, 
																		Deal, 
																		CollectionDealMob<DealMob>, 
																		CollectionDealFullMob, 
																		CollectionDeal, 
																		LikeCollectionDeal, 
																		CommentCollectionDeal, 
																		CollectionDealLikeMob, 
																		CollectionDealCommentMob,
																		CollectionDealService> {
	
	private static final Logger log = LoggerFactory.getLogger(CollectionDealController.class);

	@Override
	public Logger getLogger() {
		return log;
	}

	@Override
	protected CollectionDealMob<DealMob> collectionItemToMob(CollectionDeal ci) {
		return CollectionDealMob.of(ci);
	}

	@Override
	protected CollectionDealFullMob collectionItemToFullMob(CollectionDeal ci, UserCtx iCtx, UserCtx ciCtx) {
		return CollectionDealFullMob.of(ci, iCtx, ciCtx);
	}
	
}
