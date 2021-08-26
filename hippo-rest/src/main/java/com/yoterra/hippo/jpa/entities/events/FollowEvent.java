package com.yoterra.hippo.jpa.entities.events;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.followers.Follower;


@Entity
@DiscriminatorValue(EventType.Aliases.FOLLOW_ITEM)
public class FollowEvent extends Event<Follower<?>>{

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "follower_id")
	private Follower<?> follower;
	
	@Override
	public EventType getType() {
		return EventType.FOLLOW_ITEM;
	}

	@Override
	public Follower<?> getItem() {
		return getFollower();
	}
	
	public Follower<?> getFollower() {
		return follower;
	}
	
	public void setFollower(Follower<?> follower) {
		this.follower = follower;
	}

	@Override
	public Iterable<DataResolvablesContainer<?>> getOtherContainers() {
		return Arrays.asList(follower);
	}
}
