package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.utils.Opt;

public class CollectionDealFullMob extends CollectionDealMob<DealFullMob> {
	
	private final UserCtx userContext;
	
	public static CollectionDealFullMob of (CollectionDeal cDeal, UserCtx dUserCtx, UserCtx cdUserCtx){
		return Opt.get(cDeal,  cd -> new CollectionDealFullMob(cd, dUserCtx, cdUserCtx));
	}
	
	private CollectionDealFullMob(CollectionDeal cDeal, UserCtx dUserCtx, UserCtx cdUserCtx){
		super(cDeal, d -> DealFullMob.of(d, dUserCtx));
		this.userContext = cdUserCtx;
	}
	
	public UserCtx getUserContext() {
		return userContext;
	}
}
