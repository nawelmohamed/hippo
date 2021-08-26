package com.yoterra.hippo.jpa.entities.collections;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;

@Entity
@Table(schema = "HIPPO", name = "COLLECTION_ITEM")
@DiscriminatorValue(value=CollectionItemType.Values.PRODUCT)
public class CollectionProduct extends CollectionItem<Product> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="PRODUCT_ID", updatable = false, nullable = false)
	private Product product;
	
	public Product getProduct() {
		return product;
	}
	
	public void setProduct(Product product) {
		this.product = product;
	}
	
	@Override
	public Product getItem() {
		return getProduct();
	}
	
	@Override
	public void setItem(Product product) {
		setProduct(product);
	}
	
	@Override
	public CollectionItemType getType() {
		return CollectionItemType.PRODUCT;
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.COLLECTION_PRODUCT;
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.COLLECTION_PRODUCT;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(product);
	}
}