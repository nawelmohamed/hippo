package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.events.Event;
import com.yoterra.hippo.jpa.entities.events.EventType;

public class EventMob<I> {

	private final EventType type;
	private final Long timestamp;
	private final Long eventId;
	
	private final I item;

	// FIXME
	public EventMob(Event<?> event, I item) {
		super();
		this.type = event.getType();
		this.timestamp = event.getTimestamp().getTimeInMillis();
		this.eventId = event.getId();
		this.item = item;
	}

	public EventType getType() {
		return type;
	}

	public Long getTimestamp() {
		return timestamp;
	}

	public Long getEventId() {
		return eventId;
	}

	public I getItem() {
		return item;
	}
}
