package com.yoterra.hippo.notifications;

import java.util.Collection;

import com.google.common.collect.Lists;
import com.yoterra.hippo.notifications.data.Notification;

public interface NotificationService {
	
	public default void save(Notification notification) {
		save(Lists.newArrayList(notification));
	}
	public void save(Iterable<Notification> notifications);
	
	public Collection<Notification> findAllByReceiver(long receiverId);

	public default void delete(Notification notification) {
		delete(Lists.newArrayList(notification));
	}
	public void delete(Iterable<Notification> notifications);
}
