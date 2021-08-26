package com.yoterra.hippo.services;

import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.SortedSet;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.cassandraunit.shaded.com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.BoundHashOperations;
import org.springframework.data.redis.core.RedisTemplate;

import com.datastax.oss.driver.shaded.guava.common.collect.Maps;
import com.google.common.collect.Sets;
import com.yoterra.commons.ComparableUtils;
import com.yoterra.hippo.jpa.entities.events.Event;
import com.yoterra.hippo.jpa.repositories.EventRepository;
import com.yoterra.hippo.notifications.NotificationService;
import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.utils.Opt;

//@Repository
public class RedisNotificationService implements NotificationService{
	
	private static final Comparator<Notification> RECEIVER_NOTIFICATIONS_COMPARATOR = (o1,o2) -> {
		int c = - ComparableUtils.compareTo(o1, o2, Notification::getTimestamp);		// last first
		if(c == 0) {
			c = - ComparableUtils.compareTo(o1, o2, Notification::getEventId);		
		}
		return c;
	};

	@Value("${com.hippo.notifictions.per.receiver.limit}")
	private int perReceiverLimit; 
	
	@Autowired
	private RedisTemplate<Long, Notification> redisTemplate;
	
	@Autowired
	private EventRepository eventRepository;

	@Override
	public void save(Iterable<Notification> notifications) {
		Map<Long, SortedSet<Notification>> groupedByReceiver = StreamSupport
				.stream(notifications.spliterator(), false)
				.collect(Collectors.groupingBy(Notification::getReceiverId, 
						Collectors.toCollection(()->Sets.newTreeSet(RECEIVER_NOTIFICATIONS_COMPARATOR))));
		
		for (Entry<Long, SortedSet<Notification>> e : groupedByReceiver.entrySet()) {
			BoundHashOperations<Long, Long, Notification> boundHashOps = redisTemplate.boundHashOps(e.getKey());
			addReceiverNotifications(boundHashOps, e.getValue());
		}
	}

	private void addReceiverNotifications(BoundHashOperations<Long, Long, Notification> boundHashOps,
			SortedSet<Notification> nSet) {
	
		Map<Long, Notification> map = Opt.strm(nSet)
				.limit(2 * perReceiverLimit)
				.collect(Collectors.toMap(Notification::getEventId, n->n));	// use the newer EnhnancedStream from the ATG branch TODO
		
		boundHashOps.putAll(map);
		
		if(boundHashOps.size() >= 2 * perReceiverLimit) {
			List<Notification> values = boundHashOps.values();
			Object [] toDelete = Opt.strm(values)
					.sorted(RECEIVER_NOTIFICATIONS_COMPARATOR)
					.skip(perReceiverLimit + perReceiverLimit/3)
					.map(Notification::getEventId)
					.toArray(Long[]::new);
			
			boundHashOps.delete(toDelete);
		}
	}
	
	@Override
	public Collection<Notification> findAllByReceiver(long receiverId) {
		BoundHashOperations<Long, Long, Notification> boundHashOps = redisTemplate.boundHashOps(receiverId);
		List<Notification> values = boundHashOps.values();
		Map<Long, Event<?>> events = eventRepository.getEventsByIds(boundHashOps.keys());
		List<Notification> toDelete = Lists.newArrayList();
		
		for (Notification n : values) {
			Event<?> ev = events.getOrDefault(n.getEventId(), null);
			if(ev != null && !ev.isDisabled()) 
				n.setEvent(ev);
			else 
				toDelete.add(n);
		}
		if(!toDelete.isEmpty()) {
			delete(toDelete);
			values = boundHashOps.values();
		}
		
		List<Notification> sorted = Opt.strm(values)
				.sorted(RECEIVER_NOTIFICATIONS_COMPARATOR)
				.limit(perReceiverLimit).toList();
		return sorted;
	}

	@Override
	public void delete(Iterable<Notification> notifications) {
		Map<Long, Set<Long>> grouped = Maps.newHashMap();
		for (Notification n : notifications) {
			grouped.computeIfAbsent(n.getReceiverId(), k->Sets.newHashSet()).add(n.getEventId());
		}
		
		for (Entry<Long, Set<Long>> e : grouped.entrySet()) {
			BoundHashOperations<Long, Long, Notification> boundHashOps = redisTemplate.boundHashOps(e.getKey());
			Set<Long> v = e.getValue();
			Object[] keysToDelete = v.toArray(new Long[v.size()]);
			boundHashOps.delete(keysToDelete);
		}
	}
}
