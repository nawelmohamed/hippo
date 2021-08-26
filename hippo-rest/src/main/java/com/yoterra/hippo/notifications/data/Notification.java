package com.yoterra.hippo.notifications.data;

import org.springframework.data.annotation.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.yoterra.hippo.jpa.entities.events.Event;
import com.yoterra.hippo.jpa.entities.users.User;

public class Notification {

	private NotificationType type;
	private boolean seen;
	private long receiverId;
	private long eventId;
	private long timestamp;
	
	@Transient
	@JsonIgnore // paired up with 'notificationRedisSerializer' from com.yoterra.hippo.config.RedisConfig
	private transient Event<?> event;

	@Deprecated
	public Notification() {}		// used only for deserialization
	
	public Notification(NotificationType type, User receiver, Event<?> event) {
		this(type, receiver.getId(), event.getId(), event.getTimestamp().getTimeInMillis());
	}
	
	public Notification(NotificationType type, long receiverId, long eventId, long timestamp) {
		this(type, receiverId, eventId, timestamp, false);
	}
	
	public Notification(NotificationType type, long receiverId, long eventId, long timestamp, boolean seen) {
		super();
		this.type = type;
		this.receiverId = receiverId;
		this.eventId = eventId;
		this.timestamp = timestamp;
		this.seen = seen;
	}
	
	public NotificationType getType() {
		return type;
	}
	public void setType(NotificationType type) {
		this.type = type;
	}
	public boolean isSeen() {
		return seen;
	}
	public void setSeen(boolean seen) {
		this.seen = seen;
	}
	public long getReceiverId() {
		return receiverId;
	}
	public void setReceiverId(long receiverId) {
		this.receiverId = receiverId;
	}
	public long getEventId() {
		return eventId;
	}
	public void setEventId(long eventId) {
		this.eventId = eventId;
	}
	public long getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}
	public void setEvent(Event<?> event) {
		this.event = event;
	}
	public Event<?> getEvent() {
		return event;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (eventId ^ (eventId >>> 32));
		result = prime * result + (int) (receiverId ^ (receiverId >>> 32));
		result = prime * result + (seen ? 1231 : 1237);
		result = prime * result + (int) (timestamp ^ (timestamp >>> 32));
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Notification other = (Notification) obj;
		if (eventId != other.eventId)
			return false;
		if (receiverId != other.receiverId)
			return false;
		if (seen != other.seen)
			return false;
		if (timestamp != other.timestamp)
			return false;
		if (type != other.type)
			return false;
		return true;
	}
}
