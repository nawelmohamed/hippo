package com.yoterra.hippo.mob.model;

import java.util.function.Function;

import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.hippo.jpa.entities.data.Deal;

public class CollectionDealMob<D extends DealMob> extends CollectionItemMob {
	
	protected final D deal;
	
	public static CollectionDealMob<DealMob> of (CollectionDeal cDeal){
		return new CollectionDealMob<DealMob>(cDeal, DealMob::of);
	}
	
	protected CollectionDealMob(CollectionDeal cDeal, Function<Deal, D> instFunc){
		super(cDeal);
		Deal d = cDeal.getItem();
		this.deal = instFunc.apply(d);
	}

	public D getDeal() {
		return deal;
	}
}
