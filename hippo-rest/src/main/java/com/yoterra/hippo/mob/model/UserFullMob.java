package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.utils.Opt;

public class UserFullMob extends UserMob{

	private final String phoneNumber;
	private final UserSocialNetworksMob socialNetworks;
	
	private final UserCtx userContext;
	
	public static UserFullMob of (User user, UserCtx uCtx) {
		return Opt.get(user, u -> new UserFullMob(u, uCtx)); 
	}
	
	protected UserFullMob(User user, UserCtx uCtx) {
		super(user);
		this.phoneNumber = user.getPhoneNumber();
		this.socialNetworks = UserSocialNetworksMob.of(user.getSocialNetworks());
		this.userContext = uCtx;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public UserSocialNetworksMob getSocialNetworks() {
		return socialNetworks;
	}

	public UserCtx getUserContext() {
		return userContext;
	}
}