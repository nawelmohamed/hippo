package com.yoterra.hippo.notifications;

import java.util.Arrays;
import java.util.Calendar;
import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.google.firebase.messaging.FirebaseMessaging;
import com.yoterra.commons.FIXME;
import com.yoterra.hippo.jpa.entities.batch.BatchTask;
import com.yoterra.hippo.jpa.entities.batch.BatchTaskClientAppTopicSubscription;
import com.yoterra.hippo.jpa.entities.followers.FollowableTopic;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.users.ClientApp;
import com.yoterra.hippo.jpa.entities.users.NotificationPreferences;
import com.yoterra.hippo.jpa.repositories.BatchTaskClientAppTopicSubscriptionRepository;
import com.yoterra.hippo.jpa.repositories.FollowerRepository;

@Component
public class TopicManager extends BatchTaskScheduler {
	
	private static final Logger log = LoggerFactory.getLogger(TopicManager.class);
	
	private static final Pageable NEW_TASKS_PAGEABLE = PageRequest.of(0, 10, BatchTask.DEFAULT_SORT);
	private static final int FOLLOWERS_PAGE_SIZE = 1000;

	@Autowired
	private FollowerRepository<?, ?, ?> followerRepository;	
	
	@Autowired
	private BatchTaskClientAppTopicSubscriptionRepository taskRepository;

	public TopicManager() {
		super(10);
	}
	
	@Transactional
	public void registerTask(ClientApp clientApp){
		
		log.info("Register new client app (token = {}) topic subscription task.", clientApp.getMessagingToken());
		
		if(taskRepository.countByClientApp(clientApp) > 0)
			return;
		
		BatchTaskClientAppTopicSubscription task = new BatchTaskClientAppTopicSubscription();
		task.setClientApp(clientApp);
		task.setSubmittedAt(Calendar.getInstance());
		taskRepository.save(task);
		notifyNewTask();
	}

	
	@SuppressWarnings("unchecked")
	@Override
	protected int process() {
		
		// process only one page per iteration
		Page<BatchTaskClientAppTopicSubscription> newTasks = 
				taskRepository.findAllByProcessed(false, NEW_TASKS_PAGEABLE);		// processing only the first page of tasks, 
																					// the next page will be processed in the next itration

		log.info("Processing {} new CATS tasks", newTasks.getNumberOfElements());
		for (BatchTaskClientAppTopicSubscription task: newTasks) {
			
			ClientApp clientApp = task.getClientApp();
			List<String> tokenList = Arrays.asList(clientApp.getMessagingToken());
			FIXME.warn("Handle rate limits. See how to use FirebaseInstanceId"); 
			Page<Follower<?>> fpage = null;
			int page = 0;
			try {
				do {
					PageRequest pr = PageRequest.of(page++, FOLLOWERS_PAGE_SIZE);
					fpage = (Page<Follower<?>>) followerRepository.findAllByFollower(clientApp.getUser(), pr);
					for (Follower<?> follower: fpage) {
						List<FollowableTopic> topics = follower.getFollowee().getTopics();
						NotificationPreferences nPrefs = follower.getNotificationPreferences();
						for (FollowableTopic ft : topics) {
							if(nPrefs.isPushEnabled(ft.getType())) {
								FirebaseMessaging.getInstance().subscribeToTopicAsync(tokenList, ft.getName());
							}
						}
					}
				}while(fpage.hasNext());
			}catch (Exception e) {
				log.error("Skipping CATS task: {}", e);
				task.setSkipped(false);
				task.setSkipReason(e.getMessage());
			}finally {
				task.setProcessed(true);
			}
		}
		taskRepository.saveAll(newTasks);
		return newTasks.getNumberOfElements();
	}
	
}
