package com.yoterra.hippo.services;

import java.util.LinkedList;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan.Filter;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.yoterra.hippo.cassandra.repositories.NotificationRepository;
import com.yoterra.hippo.jpa.entities.events.LikeEvent;
import com.yoterra.hippo.jpa.repositories.EventRepository;
import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.hippo.notifications.data.NotificationType;


@ExtendWith(SpringExtension.class)
@DataJpaTest(includeFilters = {@Filter(type = FilterType.REGEX, pattern="com.yoterra.hippo.services.NotificationServiceCassandra"),
		@Filter(type = FilterType.REGEX, pattern="com.yoterra.hippo.config.LocalCassandraConfig")})
class NotificationCassandraTest {
	
	@Autowired
	private NotificationServiceCassandra service;
	
	@Autowired
	private NotificationRepository repository;
	
	@Autowired
	private EventRepository eventRepository;
	
	@Test
	void test() {
		long ts = System.currentTimeMillis();
		repository.deleteAll();
		
		LikeEvent event = new LikeEvent();
		event = eventRepository.save(event);
		
		LinkedList<Notification> entities = new LinkedList<>();
		Notification n1 = new Notification(NotificationType.COLLECTED_ITEM_TO_COLLECTION_FOLLOWER, 0l, event.getId(), ts);
		n1.setTimestamp(1l);
		Notification n2 = new Notification(NotificationType.COLLECTED_ITEM_TO_USER_FOLLOWER, 0l, event.getId(), ts);
		n2.setTimestamp(2l);
		Notification n3 = new Notification(NotificationType.FOLLOW_ITEM_TO_ITEM_OWNER, 0l, event.getId(), ts);
		n3.setTimestamp(3l);
		Notification n4 = new Notification(NotificationType.CREATED_COLLECTION_TO_USER_FOLLOWER, 1l, event.getId(), ts);
		n3.setTimestamp(4l);
		entities.add(n1);
		entities.add(n2);
		entities.add(n3);
		entities.add(n4);
		service.save(entities);
		
		Assertions.assertEquals(entities.size(), repository.count());
		
		List<Notification> n0 = service.findAllByReceiver(0l, PageRequest.of(0,30));
		Assertions.assertEquals(3, n0.size());
		
		Long timestamp = null;
		for( Notification n : n0 ) {
			Assertions.assertFalse(n.isSeen());
			Assertions.assertTrue(timestamp==null || timestamp > n.getTimestamp());
			timestamp = n.getTimestamp();
			n.setSeen(true);
			service.update(n);
		}
		
		timestamp = null;
		n0 = service.findAllByReceiver(0l, PageRequest.of(0,30));
		Assertions.assertEquals(3, n0.size());
		for( Notification n : n0 ) {
			Assertions.assertTrue(n.isSeen());
			Assertions.assertTrue(timestamp==null || timestamp > n.getTimestamp());
			timestamp = n.getTimestamp();
		}
	}
}
