package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.utils.Opt;

public class CollectionProductFullMob extends CollectionProductMob<ProductFullMob> {
	
	private final UserCtx userContext;
	
	public static CollectionProductFullMob of (CollectionProduct cProduct, UserCtx pUserCtx, UserCtx cpUserCtx){
		return Opt.get(cProduct,  cp -> new CollectionProductFullMob(cp, pUserCtx, cpUserCtx));
	}
	
	private CollectionProductFullMob(CollectionProduct cProduct, UserCtx pUserCtx, UserCtx cpUserCtx){
		super(cProduct, p->ProductFullMob.of(p, pUserCtx));
		this.userContext = cpUserCtx;
	}
	
	public UserCtx getUserContext() {
		return userContext;
	}
	
}
