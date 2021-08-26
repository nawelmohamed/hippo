package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.utils.Opt;

public class UserMob {

	private final Long id;
	private final String avatar;
	private final String username;
	private final String firstName;
	private final String lastName;
	
	private final Integer followersCount;
	private final Integer followingCount;
	private final Integer collectionsCount;
	private final Integer likesMadeCount;
	private final Integer commentsWrittenCount;
	
	public static UserMob of (User user) {
		return Opt.get(user, UserMob::new); 
	}
	
	public UserMob(User user) {
		this.id = user.getId();
		this.avatar = user.getImageUrl();
		this.username = user.getUsername();
		this.firstName = user.getFirstName();
		this.lastName = user.getLastName();
		
		this.followersCount = user.getFollowersMetacount();
		this.followingCount = user.getFollowingMetacount();
		this.collectionsCount = user.getCollectionsMetacount();
		this.likesMadeCount = user.getLikesMadeMetacount();
		this.commentsWrittenCount = user.getCommentsWrittenMetacount();
		
//		email ???? are there any cases where it's necessary ? maybe when changing the profile details 
	}

	public Long getId() {
		return id;
	}

	public String getAvatar() {
		return avatar;
	}

	public String getUsername() {
		return username;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public Integer getFollowersCount() {
		return followersCount;
	}

	public Integer getFollowingCount() {
		return followingCount;
	}

	public Integer getCollectionsCount() {
		return collectionsCount;
	}

	public Integer getLikesMadeCount() {
		return likesMadeCount;
	}

	public Integer getCommentsWrittenCount() {
		return commentsWrittenCount;
	}
}
