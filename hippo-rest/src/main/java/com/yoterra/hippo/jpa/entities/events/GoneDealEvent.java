//package com.yoterra.hippo.jpa.entities.events;
//
//import javax.persistence.DiscriminatorValue;
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//
//import com.yoterra.hippo.jpa.entities.data.Deal;
//
//
//@Entity
//@DiscriminatorValue(EventType.Aliases.GONE_DEAL)
//public class GoneDealEvent extends Event<Deal>{
//
//	@ManyToOne
////	@OnDelete(action = OnDeleteAction.CASCADE)
//	@JoinColumn(name = "deal_id")
//	private Deal deal;
//	
//	@Override
//	public EventType getType() {
//		return EventType.GONE_DEAL;
//	}
//
//	@Override
//	public Deal getItem() {
//		return getDeal();
//	}
//	
//	public Deal getDeal() {
//		return deal;
//	}
//
//	public void setDeal(Deal deal) {
//		this.deal = deal;
//	}
//	
//}
