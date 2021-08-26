package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.hippo.notifications.data.NotificationType;

public class NotificationMob<I>  {

	private final NotificationType type;
	private final Boolean seen;
	private final EventMob<I> event;
	 
	// FIXME
	public NotificationMob(Notification notification, EventMob<I> event) {
		this.type = notification.getType();
		this.seen = notification.isSeen();
		this.event = event;
	}

	public NotificationType getType() {
		return type;
	}

	public Boolean getSeen() {
		return seen;
	}

	public EventMob<I> getEvent() {
		return event;
	}

}
