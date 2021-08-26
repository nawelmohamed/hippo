package com.yoterra.hippo.jpa.entities.comments;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.Product;

@Entity
@DiscriminatorValue(value=CommentableType.Values.PRODUCT)
public class CommentProduct extends Comment<Product> {

	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
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
	public CommentableType getType() {
		return CommentableType.PRODUCT;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(product);
	}
}