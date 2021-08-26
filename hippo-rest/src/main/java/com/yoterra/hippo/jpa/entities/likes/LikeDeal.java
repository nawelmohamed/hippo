package com.yoterra.hippo.jpa.entities.likes;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.Deal;

@Entity
@DiscriminatorValue(value=LikeableType.Values.DEAL)
public class LikeDeal extends Like<Deal> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="DEAL_ID")
	private Deal deal;

	@Override
	public Deal getParent() {
		return deal;
	}
	
	public Deal getDeal() {
		return deal;
	}
	
	public void setDeal(Deal deal) {
		this.deal = deal;
	}

	@Override
	public void setParent(Deal parent) {
		setDeal(parent);
	}

	@Override
	public LikeableType getType() {
		return LikeableType.DEAL;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(deal);
	}
}