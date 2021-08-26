package com.yoterra.hippo.mob.model;

import com.yoterra.utils.Opt;

public class UserNotificationSummary {

	private final Integer unseenCount;

	public static UserNotificationSummary of (Integer unseenCount) {
		return Opt.get(unseenCount, UserNotificationSummary::new);
	}
	
	private UserNotificationSummary(Integer unseenCount) {
		this.unseenCount = unseenCount;
	}
	
	public Integer getUnseenCount() {
		return unseenCount;
	}
}
