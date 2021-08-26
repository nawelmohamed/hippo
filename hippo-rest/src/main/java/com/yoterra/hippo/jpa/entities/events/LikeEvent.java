package com.yoterra.hippo.jpa.entities.events;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.likes.Like;


@Entity
@DiscriminatorValue(EventType.Aliases.LIKED_ITEM)
public class LikeEvent extends Event<Like<?>>{

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "like_id")
	private Like<?> like;
	
	public LikeEvent() {
		super();
	}
	
	public LikeEvent(Like<?> like) {
		super();
		this.like = like;
	}

	@Override
	public EventType getType() {
		return EventType.LIKED_ITEM;
	}

	@Override
	public Like<?> getItem() {
		return getLike();
	}
	
	public Like<?> getLike() {
		return like;
	}
	
	public void setLike(Like<?> like) {
		this.like = like;
	}

	@Override
	public Iterable<DataResolvablesContainer<?>> getOtherContainers() {
		return Arrays.asList(like);
	}
	
}
