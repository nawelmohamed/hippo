package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.users.UserPreferences;
import com.yoterra.utils.Opt;

public class UserPreferencesMob {
	
	private final NotificationPreferencesMob notificationPreferences;

	public static UserPreferencesMob of (UserPreferences userPreferences) {
		return Opt.get(userPreferences, UserPreferencesMob::new);
	}
	
	public UserPreferencesMob(UserPreferences userPreferences) {
		super();
		this.notificationPreferences = NotificationPreferencesMob.of(userPreferences.getNotificationPreferences());
	}

	public NotificationPreferencesMob getNotificationPreferences() {
		return notificationPreferences;
	}
}
