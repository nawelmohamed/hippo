package com.yoterra.hippo.mob.model;

import java.util.function.Function;

import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.hippo.jpa.entities.data.Product;

public class CollectionProductMob<P extends ProductMob> extends CollectionItemMob {
	
	protected final P product;
	
	public static CollectionProductMob<ProductMob> of (CollectionProduct cProduct){
		return new CollectionProductMob<ProductMob>(cProduct, ProductMob::of);
	}
	
	protected CollectionProductMob(CollectionProduct cProduct, Function<Product, P> instFunc){
		super(cProduct);
		Product p = cProduct.getItem();
		this.product = instFunc.apply(p);
	}

	public P getProduct() {
		return product;
	}
	
}
