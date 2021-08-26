package com.yoterra.hippo.jpa.entities.collections;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;

@Entity
@Table(schema = "HIPPO", name = "COLLECTION_ITEM")
@DiscriminatorValue(value=CollectionItemType.Values.DEAL)
public class CollectionDeal extends CollectionItem<Deal> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="DEAL_ID", updatable = false, nullable = false)
	private Deal deal;
	
	public Deal getDeal() {
		return deal;
	}
	
	public void setDeal(Deal deal) {
		this.deal = deal;
	}
	
	public Deal getItem() {
		return getDeal();
	}
	
	public void setItem(Deal deal) {
		setDeal(deal);
	}
	
	@Override
	public CollectionItemType getType() {
		return CollectionItemType.DEAL;
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.COLLECTION_DEAL;
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.COLLECTION_DEAL;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(deal);
	}
}
