package com.yoterra.hippo.redis;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Collection;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.redis.core.RedisTemplate;

import com.google.common.collect.Lists;
import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.hippo.notifications.data.NotificationType;
import com.yoterra.hippo.services.RedisNotificationService;

@SpringBootTest(classes = {RedisTestConfig.class})
@ComponentScan("com.yoterra.hippo.notifications.*")
public class RedisTest {

	@Autowired
	private RedisTemplate<Long, Notification> redisTemplate;
	
//	@Autowired
	private RedisNotificationService redisNotificationService;
	
	@Value("${com.hippo.notifictions.per.receiver.limit}")
	private int perReceiverLimit; 
	
	@Test
	public void testRestTemplate() {
		long ts = System.currentTimeMillis();
		redisTemplate.boundValueOps(-1l).set(new Notification(NotificationType.COLLECTED_ITEM_TO_COLLECTION_FOLLOWER, 3, 5, ts));
		Notification n = redisTemplate.boundValueOps(-1l).get();
		
		assertEquals(n.getReceiverId(), 3);
		assertEquals(n.getEventId(), 5);
		assertEquals(n.getTimestamp(), ts);
		assertEquals(n.isSeen(), false);
		
		n.setSeen(true);
		
		redisTemplate.boundValueOps(-1l).set(n);
		
		n = redisTemplate.boundValueOps(-1l).get();
		
		assertEquals(n.getReceiverId(), 3);
		assertEquals(n.getEventId(), 5);
		assertEquals(n.getTimestamp(), ts);
		assertEquals(n.isSeen(), true);
	}
	
//	@Test 
	public void testRepo() {
		List<Notification> notifs = Lists.newLinkedList();
		for (int i = 1; i < perReceiverLimit * 3 * 5 ; i ++) {
			Notification notification = new Notification(NotificationType.CREATED_COLLECTION_TO_USER_FOLLOWER, i / (perReceiverLimit * 3), i*5, System.currentTimeMillis());
			notifs.add(notification);
		}
		
		redisNotificationService.save(notifs);
		Collection<Notification> user1notifs = redisNotificationService.findAllByReceiver(1);
		
		assertEquals(user1notifs.size(), perReceiverLimit);
		
		for (Notification notification : user1notifs) {
			assertEquals(notification.isSeen(), false);
			notification.setSeen(true);
			redisNotificationService.save(notification);
		}
		
		user1notifs = redisNotificationService.findAllByReceiver(1);
		for (Notification notification : user1notifs) {
			assertEquals(notification.isSeen(), true);
		}
		
		for (int i = 0; i < 2; i++) {
			redisNotificationService.delete(user1notifs);
			user1notifs = redisNotificationService.findAllByReceiver(1);
		}
		assertTrue(user1notifs == null || user1notifs.isEmpty());
		
		Collection<Notification> toLimit2 = redisNotificationService.findAllByReceiver(2);
		assertEquals(toLimit2.size(), perReceiverLimit);
		
		Long allFor2 = redisTemplate.boundHashOps(2l).size();
		assertEquals(allFor2, perReceiverLimit + perReceiverLimit / 3);
	}
}
