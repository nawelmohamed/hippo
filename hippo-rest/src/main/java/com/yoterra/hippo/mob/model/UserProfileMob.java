package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.utils.Opt;

public class UserProfileMob extends UserFullMob{

	private final String email;
	
	public static UserProfileMob of (User user, UserCtx uCtx) {
		return Opt.get(user, u -> new UserProfileMob(u, uCtx)); 
	}
	
	private UserProfileMob(User user, UserCtx uCtx) {
		super(user, uCtx);
		this.email = user.getEmail();
	}
	
	public String getEmail() {
		return email;
	}
}