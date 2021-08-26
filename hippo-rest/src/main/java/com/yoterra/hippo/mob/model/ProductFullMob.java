package com.yoterra.hippo.mob.model;

import java.util.List;

import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.utils.Opt;

public class ProductFullMob extends ProductMob {

	private final List<String> images;
	private final String description;
	
	private final UserCtx userContext;
	
	public static ProductFullMob of(Product product, UserCtx ctx) {
		return Opt.get(product, p-> new ProductFullMob (p, ctx));
	}
	
	private ProductFullMob(Product product, UserCtx userContext) {
		super(product);
		
		this.description = product.getDescription();
		this.images = product.getClusteredImages();
		
		this.userContext = userContext;
	}

	public List<String> getImages() {
		return images;
	}

	public String getDescription() {
		return description;
	}

	public UserCtx getUserContext() {
		return userContext;
	}
}


