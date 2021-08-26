package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.utils.Opt;

public class ProductMob {
	
	private final String id;
	private final String name;
	private final String bestImage;
	private final BrandMob brand;
	
	private final PriceMob lowerPrice;
	private final PriceMob higherPrice;
	
	private final Integer offerCount;
	
	private final Integer likeCount;
	private final Integer commentsCount;
	private final Integer collectionsInCount;
	
	public static ProductMob of (Product product) {
		return Opt.get(product, ProductMob::new);
	}
	
	public ProductMob(Product product) {
		this.id = product.getId();
		this.name = product.getProductName();
		this.offerCount = product.getOfferCount();
		this.brand = Opt.get(product, Product::getIndexBrand, Brand::fromIndexCompany, BrandMob::of);
		this.bestImage = product.getBestImageUrl();
		
		this.lowerPrice = PriceMob.of(product.getLowestPrice());
		this.higherPrice = PriceMob.of(product.getHighestPrice());
		
		this.likeCount = product.getLikeMetacount();
		this.commentsCount = product.getCommentMetacount();
		this.collectionsInCount = product.getCollectionsInMetacount();
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getBestImage() {
		return bestImage;
	}

	public BrandMob getBrand() {
		return brand;
	}

	public PriceMob getLowerPrice() {
		return lowerPrice;
	}

	public PriceMob getHigherPrice() {
		return higherPrice;
	}

	public Integer getOfferCount() {
		return offerCount;
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
	
}
