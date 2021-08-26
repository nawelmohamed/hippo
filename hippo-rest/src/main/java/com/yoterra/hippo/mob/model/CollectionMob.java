package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.utils.Opt;

public class CollectionMob {

	private final Long id;
	private final CollectionType type;
	private final String image;
	private final String name;
	private final String description;
	
	private final Integer itemCount;
	private final Integer likeCount;
	private final Integer commentCount;
	private final Integer followersCount;
	
	private final UserMob owner;
	
	public static CollectionMob of (Collection c) {
		return Opt.get(c, CollectionMob::new);
	}
	
	public CollectionMob(Collection c){
		this.id = c.getId();
		this.type = c.getType();
		this.image = c.getImageUrl();
		this.name = c.getName();
		this.description = c.getDescription();
		
		this.owner = UserMob.of(c.getOwner());
		
		this.itemCount = c.getCollectionItemMetacount();
		this.likeCount = c.getLikeMetacount();
		this.commentCount = c.getCommentMetacount();
		this.followersCount = c.getFollowersMetacount();
	}

	public Long getId() {
		return id;
	}

	public CollectionType getType() {
		return type;
	}

	public String getImage() {
		return image;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public Integer getItemCount() {
		return itemCount;
	}

	public Integer getLikeCount() {
		return likeCount;
	}

	public Integer getCommentCount() {
		return commentCount;
	}

	public Integer getFollowersCount() {
		return followersCount;
	}
	
	public UserMob getOwner() {
		return owner;
	}
}
