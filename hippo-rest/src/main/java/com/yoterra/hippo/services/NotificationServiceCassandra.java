package com.yoterra.hippo.services;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.cassandraunit.shaded.com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.cassandra.core.CassandraTemplate;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.cassandra.model.CNotification;
import com.yoterra.hippo.cassandra.repositories.NotificationRepository;
import com.yoterra.hippo.jpa.entities.events.Event;
import com.yoterra.hippo.jpa.repositories.EventRepository;
import com.yoterra.hippo.notifications.NotificationService;
import com.yoterra.hippo.notifications.data.Notification;

@Service
public class NotificationServiceCassandra implements NotificationService {
	
	@Autowired
	private CassandraTemplate cassandraTemplate;
	
	@Autowired
	private NotificationRepository repository;
	
	@Autowired
	private EventRepository eventRepository;
	
	@Value("${com.hippo.notifictions.per.receiver.limit}")
	private int notificationLimit;
	

	public void save(Notification notification) {
		repository.save(convert(notification));
	}

	public void save(Iterable<Notification> notifications) {
		repository.saveAll(convert(notifications));
	}

	public List<Notification> findAllByReceiver(long receiverId, Pageable pageable) {
		Slice<CNotification> slice = repository.findById_User(receiverId, pageable);
		List<Notification> notifications = slice.stream().map(CNotification::toNotification).collect(Collectors.toList());
		List<Long> ids = notifications.stream().map(Notification::getEventId).collect(Collectors.toList());
		Map<Long, Event<?>> events = eventRepository.getEventsByIds(ids);
		List<Notification> validNotifications = Lists.newArrayList();
		for ( Notification notification : notifications ) {
			Event<?> event = events.get(notification.getEventId());
			if( event != null && !event.isDisabled() ) {
				notification.setEvent(event);
				validNotifications.add(notification);
			}else {
				// FIXME delete the rest ???
			}
		}
		return validNotifications;
	}

	public void update(Notification notification) {
		cassandraTemplate.update(convert(notification));
	}

	public void update(Iterable<Notification> notifications) {
		repository.saveAll(convert(notifications));
	}

	public void delete(Notification notification) {
		repository.delete(convert(notification));
	}

	public void delete(Iterable<Notification> notifications) {
		repository.deleteAll(convert(notifications));
	}
	
	@Override
	public Collection<Notification> findAllByReceiver(long receiverId) {
		return findAllByReceiver(receiverId, PageRequest.of(0,notificationLimit));
	}

	private static CNotification convert(Notification notification) {
		return CNotification.from(notification);
	}

	private static Iterable<CNotification> convert(Iterable<Notification> notifications) {
		List<CNotification> cns = new LinkedList<>();
		for (Notification n : notifications) {
			cns.add(CNotification.from(n));
		}
		return cns;
	}
}
