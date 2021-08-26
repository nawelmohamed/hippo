package com.yoterra.hippo.mob.model;

import com.yoterra.commons.ProductImageWebUtils;
import com.yoterra.data.records.Availability;
import com.yoterra.data.records.Condition;
import com.yoterra.data.records.ProductOffer;
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.utils.Opt;

public class OfferMob {
//	private String id = null;
	private final String goUrl;
	private final PriceMob salePrice;
	private final PriceMob retailPrice;

	private final Condition condition;
	private final Availability availability;
	private final StoreMob store;
	private final String image;

	public static OfferMob of(ProductOffer offer) {
		return Opt.get(offer, OfferMob::new);
	}

	public OfferMob(ProductOffer offer){
		this.goUrl = offer.getGoUrl();
		this.salePrice = PriceMob.of(offer.getSalePrice());
		this.retailPrice = PriceMob.of(offer.getRetailPrice());
		this.availability = offer.getAvailability();
		this.condition = Opt.getOrDef(offer.getCondition(), Condition.NEW, Opt.qDef(Condition::valueOf, Condition.NEW));
		this.store = StoreMob.of(Store.fromIndexCompany(offer.getStore()));
		this.image = ProductImageWebUtils.getBestImage(offer.getImages());
	}

	public String getGoUrl() {
		return goUrl;
	}

	public PriceMob getSalePrice() {
		return salePrice;
	}

	public PriceMob getRetailPrice() {
		return retailPrice;
	}

	public Condition getCondition() {
		return condition;
	}

	public Availability getAvailability() {
		return availability;
	}

	public StoreMob getStore() {
		return store;
	}
	
	public String getImage() {
		return image;
	}
}
