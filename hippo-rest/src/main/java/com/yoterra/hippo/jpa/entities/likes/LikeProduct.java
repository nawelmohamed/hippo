package com.yoterra.hippo.jpa.entities.likes;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.Product;

@Entity
@DiscriminatorValue(value=LikeableType.Values.PRODUCT)
public class LikeProduct extends Like<Product> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="PRODUCT_ID")
	private Product product;

	@Override
	public Product getParent() {
		return product;
	}
	
	public Product getProduct() {
		return product;
	}
	
	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public void setParent(Product parent) {
		setProduct(parent);
	}

	@Override
	public LikeableType getType() {
		return LikeableType.PRODUCT;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(product);
	}
}