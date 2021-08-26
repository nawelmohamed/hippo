package com.yoterra.hippo.mob.forms;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.jpa.entities.users.UserPreferences;

@ParameterObject
public class UserPreferencesForm extends NotificationPreferencesForm {

	public void copyTo(UserPreferences userPreferences) {
		super.copyTo(userPreferences.getNotificationPreferences());
	}
}
