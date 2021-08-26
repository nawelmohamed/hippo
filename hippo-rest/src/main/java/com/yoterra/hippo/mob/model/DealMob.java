package com.yoterra.hippo.mob.model;

import java.util.List;

import com.yoterra.data.dealservice.DealCategory;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.utils.Opt;

public class DealMob {
	
	private final String id;
	private final String title;
	
	private final String trackingUrl;
	
	private final String imageUrl;
	
	private final DealCategory category;
	private final List<String> taxonomy;
	
	private final String coupon;
	private final String description;
	private final Long endDate;
	private final Long startDate;
	
	private final String discountDescription;
	private final String giftCardDescription;
	private final String shippingDescription;
	
	private final String providerSite;
	private final String providerName;
	private final PriceMob salePrice;
	
	private final boolean isDiscountType;
	private final boolean isGiftCardType;
	private final boolean isShippingType;
	private final boolean siteWide;

	private final Integer likeCount;
	private final Integer commentsCount;
	private final Integer collectionsInCount;
	
	public static DealMob of(Deal deal) {
		return Opt.get(deal, DealMob::new);
	}
	
	public DealMob(Deal deal) {
		
		this.id = deal.getId();
		this.title = deal.getTitle();
		this.description = deal.getDescription();

		this.trackingUrl = deal.getTrackingUrl();
		this.imageUrl = deal.getImageUrl();
		
		this.category = deal.getCategory();
		this.taxonomy = deal.getTaxonomy();
		
		this.coupon = deal.getCoupon();
		this.endDate = deal.getEndDate();
		this.startDate = deal.getStartDate();

		this.discountDescription = deal.getDiscountDescription();
		this.giftCardDescription = deal.getGiftCardDescription();
		this.shippingDescription = deal.getShippingDescription();
		
		this.providerSite = deal.getProviderSite();
		this.providerName = deal.getProviderName();
		this.salePrice = Opt.get(deal, Deal::getSalePrice, PriceMob::of);
		
		this.isDiscountType = deal.isDiscountType();
		this.isGiftCardType = deal.isGiftCardType();
		this.isShippingType = deal.isShippingType();
		this.siteWide = deal.isSiteWide();
		
		this.likeCount = deal.getLikeMetacount();
		this.commentsCount = deal.getCommentMetacount();
		this.collectionsInCount = deal.getCollectionsInMetacount();
	}

	public String getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getTrackingUrl() {
		return trackingUrl;
	}

	public DealCategory getCategory() {
		return category;
	}

	public List<String> getTaxonomy() {
		return taxonomy;
	}

	public String getCoupon() {
		return coupon;
	}

	public String getDescription() {
		return description;
	}

	public Long getEndDate() {
		return endDate;
	}

	public Long getStartDate() {
		return startDate;
	}

	public String getDiscountDescription() {
		return discountDescription;
	}

	public String getGiftCardDescription() {
		return giftCardDescription;
	}

	public String getShippingDescription() {
		return shippingDescription;
	}

	public String getProviderSite() {
		return providerSite;
	}

	public String getProviderName() {
		return providerName;
	}

	public PriceMob getSalePrice() {
		return salePrice;
	}

	public boolean isDiscountType() {
		return isDiscountType;
	}

	public boolean isGiftCardType() {
		return isGiftCardType;
	}

	public boolean isShippingType() {
		return isShippingType;
	}

	public boolean isSiteWide() {
		return siteWide;
	}

	public Integer getLikeCount() {
		return likeCount;
	}

	public Integer getCommentsCount() {
		return commentsCount;
	}

	public Integer getCollectionsInCount() {
		return collectionsInCount;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
}
