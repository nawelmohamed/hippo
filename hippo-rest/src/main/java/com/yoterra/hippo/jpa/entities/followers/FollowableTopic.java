package com.yoterra.hippo.jpa.entities.followers;

import com.yoterra.hippo.notifications.data.NotificationType;

public class FollowableTopic {

	private NotificationType type;
	private String name;

	public FollowableTopic(NotificationType type, String name) {
		super();
		this.type = type;
		this.name = name;
	}

	public NotificationType getType() {
		return type;
	}
	
	public String getName() {
		return name;
	}
	
	public void setType(NotificationType type) {
		this.type = type;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
