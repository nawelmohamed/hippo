//package com.yoterra.hippo.jpa.entities.events;
//
//import javax.persistence.DiscriminatorValue;
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//
//import com.yoterra.hippo.jpa.entities.data.Product;
//
//
//@Entity
//@DiscriminatorValue(EventType.Aliases.GONE_PRODUCT)
//public class GoneProductEvent extends Event<Product>{
//
//	@ManyToOne
////	@OnDelete(action = OnDeleteAction.CASCADE)
//	@JoinColumn(name = "product_id")
//	private Product product;
//	
//	
//	public GoneProductEvent() {
//		super();
//	}
//	
//	public GoneProductEvent(Product product) {
//		super();
//		this.product = product;
//	}
//
//	@Override
//	public EventType getType() {
//		return EventType.GONE_PRODUCT;
//	}
//
//	@Override
//	public Product getItem() {
//		return getProduct();
//	}
//	
//	public Product getProduct() {
//		return product;
//	}
//
//	public void setProduct(Product product) {
//		this.product = product;
//	}
//	
//}
