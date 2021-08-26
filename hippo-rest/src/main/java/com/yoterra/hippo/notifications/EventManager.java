package com.yoterra.hippo.notifications;

import java.util.List;
import java.util.Objects;
import java.util.Queue;
import java.util.function.BiConsumer;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.google.common.collect.Lists;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.MulticastMessage;
import com.yoterra.hippo.jpa.entities.Invitation;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.events.CollectedItemEvent;
import com.yoterra.hippo.jpa.entities.events.CollectionCreatedEvent;
import com.yoterra.hippo.jpa.entities.events.CommentEvent;
import com.yoterra.hippo.jpa.entities.events.Event;
import com.yoterra.hippo.jpa.entities.events.FollowEvent;
import com.yoterra.hippo.jpa.entities.events.InvitationAcceptedEvent;
import com.yoterra.hippo.jpa.entities.events.LikeEvent;
import com.yoterra.hippo.jpa.entities.followers.Followable;
import com.yoterra.hippo.jpa.entities.followers.FollowableTopic;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.followers.FollowerCollection;
import com.yoterra.hippo.jpa.entities.followers.FollowerUser;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.users.NotificationPreferences;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.entities.users.UserPreferences;
import com.yoterra.hippo.jpa.repositories.ClientAppRepository;
import com.yoterra.hippo.jpa.repositories.EventRepository;
import com.yoterra.hippo.jpa.repositories.FollowerCollectionRepository;
import com.yoterra.hippo.jpa.repositories.FollowerUserRepository;
import com.yoterra.hippo.jpa.repositories.UserPreferencesRepository;
import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.hippo.notifications.data.NotificationType;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;
import com.yoterra.utils.CollectionUtils;

/**
 * See https://docs.google.com/document/d/1f1I_bvFZrkWMfddAxuLuWbNoWyJ8ncpzLXuEodGQbJU/edit#
 */

@Component
public class EventManager extends BatchTaskScheduler{
	
	private static final long FIXED_VECTOR = NotificationPreferences.generateDefaultVectorForCategory(SettingsCategory.FIXED);
	private static final NotificationPreferences FIXED_NP = new NotificationPreferences(FIXED_VECTOR) {
		@Override
		protected SettingsCategory getSettingCategory() {
			return SettingsCategory.FIXED;
		}
	};
	
	private static final Logger log = LoggerFactory.getLogger(EventManager.class);

	private static final Pageable NEW_EVENTS_PAGEABLE = PageRequest.of(0, 50);
	
	private static final int USER_PAGE_SIZE = 200;

	@Autowired
	private EventRepository eventRepository;
	
//	@Autowired
//	private CollectionProductRepository collectionProductRepository;
//	
//	@Autowired
//	private CollectionDealRepository collectionDealRepository;
	
	@Autowired
	private FollowerUserRepository followerUserRepository;
	
	@Autowired
	private FollowerCollectionRepository followerCollectionRepository;
	
	@Autowired
	private ClientAppRepository clientAppRepository;
	
	@Autowired
	private UserPreferencesRepository userPreferencesRepository;
	
	@Autowired
	private NotificationService notificationService;	
	
	public final Register register = new Register();
	
	private static final int MAX_BUFFER_SIZE = 200;
	private Queue<Notification> sendingBuffer = Lists.newLinkedList();
	
	public EventManager() {
		super(5);					// TODO move this to configuration
	}
	
	private void addEvent(Event<?> event) {
		eventRepository.save(event);
		notifyNewTask();
	}

	@Override
	public int process() {
		// process only one page per iteration
		Page<Event<?>> newEvents = eventRepository.getNewEvents(NEW_EVENTS_PAGEABLE);

		log.info("Processing {} new events", newEvents.getNumberOfElements());
		for (Event<?> event : newEvents) {
			if(!event.isDisabled()) {
				@SuppressWarnings("unchecked")
				BiConsumer<EventManager, Event<?>> processor = 
						(BiConsumer<EventManager, Event<?>>) event.getType().getProcessor();
				processor.accept(this, event);
				event.setProcessed(true);
			}
		}
		eventRepository.saveAll(newEvents);		// change status to processed
		flushFromBuffer();
		
		return newEvents.getNumberOfElements();
	}
	
	public void invitationAccepted(InvitationAcceptedEvent event) {			// one unicast (group) message
		User inviter = event.getInvitation().getInviter();
		
		NotificationType ntype = NotificationType.INVITATION_ACCEPTED_TO_INVITER;
		
		addNewInAppNotification(FIXED_NP, ntype, inviter, event);
		addNewPushNotification(FIXED_NP, ntype, inviter, event, PushNotificationMessageGenerator::invitationAccepted);
	}
	
	public void followItem(FollowEvent event) {								// one unicast (group) message
		Follower<?> follower = event.getFollower();
		Followable<?> followable = follower.getFollowee();
		
		if(followable instanceof Owned) {
			
			User owner = ((Owned) followable).getOwner();
			NotificationType ntype = NotificationType.FOLLOW_ITEM_TO_ITEM_OWNER;
			UserPreferences up = userPreferencesRepository.findOneByUser(owner);	
			NotificationPreferences nPrefs = up.getNotificationPreferences();
			
			addNewInAppNotification(nPrefs, ntype, owner, event);
			addNewPushNotification(nPrefs, ntype, owner, event, PushNotificationMessageGenerator::followToItemOwner);
		}
	}
	
//	// this operation might have performance problems
//	public void goneProduct(GoneProductEvent event) {						// one multicast (topic) message
//		generateNotifications(event, page -> {
//			Pageable p = PageRequest.of(page, USER_PAGE_SIZE);
//			return collectionProductRepository.getCollectionOwnersContainingProduct(event.getProduct(), p);
//		});
//	}
//	
//	public void goneDeal(GoneDealEvent event) {								// one multicast (topic) message
//		generateNotifications(event, page -> {
//			Pageable p = PageRequest.of(page, USER_PAGE_SIZE);
//			return collectionDealRepository.getCollectionOwnersContainingDeal(event.getDeal(), p);
//		});
//	}

	public void collectedItem(CollectedItemEvent event) {					// the multicast (topic) messages
		Collection collection = event.getCollectionItem().getCollection();
		User owner = collection.getOwner();
		
		// notify user followers
		Function<Integer, Page<FollowerUser>> upp = page -> 
			followerUserRepository.findAllByUser(owner, PageRequest.of(page, USER_PAGE_SIZE));
		generateNotifications(NotificationType.COLLECTED_ITEM_TO_USER_FOLLOWER, event, upp);
		
		// notify collection followers
		Function<Integer, Page<FollowerCollection>> cupp = page -> 
			followerCollectionRepository.findAllByCollection(collection, PageRequest.of(page, USER_PAGE_SIZE));
		generateNotifications(NotificationType.COLLECTED_ITEM_TO_COLLECTION_FOLLOWER, event, cupp);
		
		// FIREBASE 
		pushToTopcis(NotificationType.COLLECTED_ITEM_TO_USER_FOLLOWER, 
				owner, event, PushNotificationMessageGenerator::userCollectedItem);
		pushToTopcis(NotificationType.COLLECTED_ITEM_TO_COLLECTION_FOLLOWER,
				collection, event, PushNotificationMessageGenerator::collectedItemToCollection);
	}

	public void createdCollection(CollectionCreatedEvent event) {
		User owner = event.getCollection().getOwner();
		
		// notify owner followers
		Function<Integer, Page<FollowerUser>> upp = page -> followerUserRepository
				.findAllByUser(owner, PageRequest.of(page, USER_PAGE_SIZE));
		
		generateNotifications(NotificationType.CREATED_COLLECTION_TO_USER_FOLLOWER, event, upp);
		
		pushToTopcis(NotificationType.CREATED_COLLECTION_TO_USER_FOLLOWER,
				owner, event, PushNotificationMessageGenerator::createdCollection);
	}

	public void commentedItem(CommentEvent event) {
		Comment<?> comment = event.getComment();
		Commentable<?> commentable = comment.getParent();
		if(commentable instanceof Owned) {	
			User owner = ((Owned) commentable).getOwner();
			if(!Objects.equals(owner.getId(), comment.getAuthor().getId())){		// do not notify the comment writer 
				NotificationType ntype = NotificationType.COMMENTED_ITEM_TO_ITEM_OWNER;
				UserPreferences up = userPreferencesRepository.findOneByUser(owner);
				NotificationPreferences nPrefs = up.getNotificationPreferences();
				addNewInAppNotification(nPrefs, ntype, owner, event);
				addNewPushNotification(nPrefs, ntype, owner, event, PushNotificationMessageGenerator::commentedItem);
			}
		}								
	}
	
	public void likedItem(LikeEvent event) {
		Like<?> like = event.getLike();
		Likeable<?> likedItem = like.getParent();
		if(likedItem instanceof Owned) {	
			User owner = ((Owned) likedItem).getOwner();
			if(!Objects.equals(owner.getId(), like.getAuthor().getId())){		// do not notify the comment writer 
				NotificationType ntype = NotificationType.LIKED_ITEM_TO_ITEM_OWNER;
				UserPreferences up = userPreferencesRepository.findOneByUser(owner);
				NotificationPreferences nPrefs = up.getNotificationPreferences();
				addNewInAppNotification(nPrefs, ntype, owner, event);
				addNewPushNotification(nPrefs, ntype, owner, event, PushNotificationMessageGenerator::likedItem);
			}
		}	
	}
	
	/**
	 * Check settings and add new in-app notification
	 * @param receiver
	 * @param event
	 */
	private void addNewInAppNotification(NotificationPreferences nPrefs, NotificationType type, User receiver, Event<?> event) {
		if(nPrefs.isEnabled(type)) {
			Notification notification = new Notification(type, receiver, event);
			storeInAppNotifications(notification);
		}
	}
	
	/**
	 * Check settings and add new in-app notification
	 * @param <E>
	 * @param receiver
	 * @param event
	 * @param notificationGenerator
	 */
	private <E extends Event<?>> void addNewPushNotification(NotificationPreferences nPrefs, NotificationType type, 
			User receiver, E event, Function<E, com.google.firebase.messaging.Notification> notificationGenerator) {
		if(nPrefs.isPushEnabled(type)) {
			pushToUser(receiver, notificationGenerator.apply(event));
		}
	}
	
	private void storeInAppNotifications(Notification ... notifications) {
		storeNotifications(Lists.newArrayList(notifications));
	}

	private void storeNotifications(List<Notification> notifications) {
		for (Notification notification : notifications) {
			if(this.sendingBuffer.size() >= MAX_BUFFER_SIZE) {
				flushFromBuffer();
			}
			this.sendingBuffer.add(notification);
		}
	}
	
	private void flushFromBuffer() {
		notificationService.save(this.sendingBuffer);
		this.sendingBuffer.clear();
	}
	
	private void pushToUser(User user, com.google.firebase.messaging.Notification notif) {
		List<String> tokens = clientAppRepository.getAllMessageTokens(user);
		if(!CollectionUtils.isEmpty(tokens)) {
			MulticastMessage message = MulticastMessage.builder()
					.addAllTokens(tokens)
					.setNotification(notif)
					.build();
			FirebaseMessaging.getInstance().sendMulticastAsync(message)		// TODO do token clean up
//				.addListener(listener, executor);
			;	
		}
	}
	
	private <E extends Event<?>> void pushToTopcis(NotificationType notificationType, Followable<?> followable, E event, 
			Function<E, com.google.firebase.messaging.Notification> notificationGenerator) {
		
		FollowableTopic ut = followable.getTopicsMap().getOrDefault(notificationType, null);
		if(ut != null) {
			Message um = Message.builder()
					.setTopic(ut.getName())
					.setNotification(notificationGenerator.apply(event))
					.build();
			FirebaseMessaging.getInstance().sendAsync(um);
		}
	}

	private <FW extends Follower<?>> void generateNotifications(NotificationType type, Event<?> event, Function<Integer, Page<FW>> followersPageProvider) {
		Page<FW> followers;
		int page = 0;
		List<Notification> notifs = Lists.newArrayList();
		do {
			followers = followersPageProvider.apply(page);
			for (FW follower : followers) {
				if(follower.getNotificationPreferences().isEnabled(type)) {
					Notification n = new Notification(type, follower.getFollower(), event);
					notifs.add(n);
				}
			}
			storeNotifications(notifs);
			notifs.clear();
			page ++;
		}while(followers.hasNext());
	}
	
	public class Register {
		
		public void joinInvitationAccepted(Invitation invitation) {
			InvitationAcceptedEvent e = new InvitationAcceptedEvent();
			e.setInvitation(invitation);
			e.setTimestamp(invitation.getDate());
			addEvent(e);
		}
		
		public void userChangedProfileImage(User user) {
			// no event logging for changing collection image
		}
		
		public void userDeletedProfileImage(User user) {
			// no event logging for changing collection image
		}
		
		public void followItem(Follower<?> follower) {
			FollowEvent e = new FollowEvent();
			e.setFollower(follower);
			e.setTimestamp(follower.getDate());
			addEvent(e);
		}
		
		public void unfollowItem(Follower<?> follower) {
			// no event logging for changing collection image
		}
		
		public void collectionCreated(Collection collection) {
			CollectionCreatedEvent e = new CollectionCreatedEvent();
			e.setCollection(collection);
			e.setTimestamp(collection.getCreated());
			addEvent(e);
		}
		
		public void collectionModified(Collection collection) {
			// not event logging for collection modification
		}
		
		public void collectionImageChanged(Collection collection) {
			// no event logging for changing collection image
		}
		
		public void collectionImageDeleted(Collection collection) {
			// no event logging for changing collection image
		}
		
		public void collectionDeleted(Collection collection) {
			// no event logging for deleting collection 
		}
		
		public void removedCollectionItem(CollectionItem<?> deletedCollectionItem) {	
			// do reference this (deleted) object !!!
			// no event logging for removing a collection item (product)
		}
		
		public void commentDeleted(Comment<?> comment) {
			// no event logging for deleting comments 
		}
		
		public void likeDeleted(Like<?> like) {
			// no event logging for deleting likes 
		}
		
		public void addedItemToCollection(CollectionItem<?> collectionItem) {
			CollectedItemEvent e = new CollectedItemEvent();
			e.setCollectionItem(collectionItem);
			e.setTimestamp(collectionItem.getAdded());
			addEvent(e);
		}
		
	//	public void productNotAvailableAnyMore(Product product) {
	//		GoneProductEvent e = new GoneProductEvent();
	//		e.setProduct(product);
	//		e.setTimestamp(Calendar.getInstance());
	//		addEvent(e);
	//	}
	//	
	//	public void dealNotAvailableAnyMore(Deal deal) {
	//		GoneDealEvent e = new GoneDealEvent();
	//		e.setDeal(deal);
	//		e.setTimestamp(Calendar.getInstance());
	//		addEvent(e);
	//	}
		
		public void commentedItem(Comment<?> comment) {
			CommentEvent e = new CommentEvent();
			e.setComment(comment);
			e.setTimestamp(comment.getCreated());
			addEvent(e);
		}
		
		public void likedItem(Like<?> like) {
			LikeEvent e = new LikeEvent();
			e.setLike(like);
			e.setTimestamp(like.getCreated());
			addEvent(e);
		}
	}
}
