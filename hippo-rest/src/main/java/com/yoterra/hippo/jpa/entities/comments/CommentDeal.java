package com.yoterra.hippo.jpa.entities.comments;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.Deal;

@Entity
@DiscriminatorValue(value=CommentableType.Values.DEAL)
public class CommentDeal extends Comment<Deal> {

	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
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
	public CommentableType getType() {
		return CommentableType.DEAL;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(deal);
	}
}