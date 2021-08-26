package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.utils.Opt;

public class DealFullMob extends DealMob {
	
	private final OfferMob matchedOffer;
	private final ProductMob matchedProductGroup;
	
	private final UserCtx userContext;
	
	public static DealFullMob of(Deal deal, UserCtx userCtx) {
		return Opt.get(deal, d -> new DealFullMob(d, userCtx));
	}
	
	private DealFullMob(Deal deal, UserCtx userCtx) {
		super(deal);
		
		this.matchedOffer = OfferMob.of(deal.getMatchedOffer());
		this.matchedProductGroup = Opt.get(deal, Deal::getMatchedGroup, Product::init, ProductFullMob::of);
		
		this.userContext = userCtx;
	}
	
	public DealFullMob(Deal deal) {
		this(deal, null);
	}
	
	public OfferMob getMatchedOffer() {
		return matchedOffer;
	}
	
	public ProductMob getMatchedProductGroup() {
		return matchedProductGroup;
	}

	public UserCtx getUserContext() {
		return userContext;
	}
}
