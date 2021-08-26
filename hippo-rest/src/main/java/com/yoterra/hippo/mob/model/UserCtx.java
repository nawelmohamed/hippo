package com.yoterra.hippo.mob.model;

public class UserCtx {
	
	public final Boolean hasLiked;
	public final Boolean isFollowing;
	public final Boolean isInFavorites;
	public final Boolean owns;
	
	public UserCtx(Boolean hasLiked, Boolean isFollowing, Boolean isInFavorites, Boolean owns) {
		super();
		this.hasLiked = hasLiked;
		this.isFollowing = isFollowing;
		this.isInFavorites = isInFavorites;
		this.owns = owns;
	}

	public Boolean getHasLiked() {
		return hasLiked;
	}

	public Boolean getIsFollowing() {
		return isFollowing;
	}
	
	public Boolean getIsInFavorites() {
		return isInFavorites;
	}
	
	public Boolean getOwns() {
		return owns;
	}
}
