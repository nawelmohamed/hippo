package com.yoterra.hippo.services;

import java.util.Calendar;
import java.util.Collection;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.base.Throwables;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.yoterra.commons.FIXME;
import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.exceptions.UpdatePermissionDeniedException;
import com.yoterra.hippo.helpers.ContextBeanProvider;
import com.yoterra.hippo.jpa.entities.Metacounts;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.followers.Followable;
import com.yoterra.hippo.jpa.entities.followers.FollowableTopic;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.users.NotificationPreferences;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.repositories.ClientAppRepository;
import com.yoterra.hippo.jpa.repositories.FollowerRepository;
import com.yoterra.hippo.mob.forms.FollowForm;
import com.yoterra.hippo.mob.forms.FollowUpdateForm;
import com.yoterra.hippo.notifications.data.NotificationType;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.auth.AuthorizationService;
import com.yoterra.hippo.services.dataresv.DataResolvableManagerProvider;
import com.yoterra.utils.CollectionUtils;

public interface IFollowerService<ID, F extends Followable<ID>, T extends Follower<F>> 
		extends IEventRegisterProvider, AuthorizationServiceProvider, IMetacountsResolver<F>, DataResolvableManagerProvider{
	
	public default ClientAppRepository getClientAppRepository() {
		return ContextBeanProvider.getBean(ClientAppRepository.class);
	}
	
	public default List<String> getActiveUserClientAppMessagingTokens() {
		List<String> l = getClientAppRepository().getAllMessageTokens(ActiveUser.get());
		return l;
	}
	
//	public default UserPreferencesRepository getUserPreferncesRepository() {
//		return ContextLoader.getCurrentWebApplicationContext().getBean(UserPreferencesRepository.class);
//	}
	
	public FollowerRepository<ID, F, T> getFollowerRepository();	
	public T newEmptyFollowerInstance();
	public FollowableType getFollowableType();
	public F getFollowable(ID id);
	
	@Override
	@Transactional(readOnly = true)
	public default void resolveMetacounts(Collection<F> followees) {
		FollowerRepository<ID, F, T> repo = getFollowerRepository();
		Metacounts.mergeMetacounts(followees, repo::getPerFolloweeCountsMap, Followable::getId, Followable.FOLLOWERS_METACOUNT);
	}
	
	@Override
	@Transactional(readOnly = true)
	public default void resolveMetacounts(F followee) {
		FollowerRepository<ID, F, T> repo = getFollowerRepository();
		followee.setFollowersMetacount((int)repo.countByFollowee(followee));
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getFollowersOf(ID followableId, PageParams pageParams) {
		Page<T> followers = getFollowerRepository().getByFolloweeId(followableId, pageParams.getPageable());
		getDataResolvingManager().resolveContainedData(followers);
		return followers;
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getFollowersOf(F followable,  PageParams pageParams) {
		return getFollowersOf(followable.getId(), pageParams);
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getFollowedByActiveUser(PageParams pageParams){ 
		return getFollowedBy(ActiveUser.get(), pageParams);
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getFollowedBy(User user, PageParams pageParams){ 
		return getFollowedBy(user.getId(), pageParams);
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getFollowedBy(Long userId, PageParams pageParams){ 
		Page<T> followedBy = getFollowerRepository().findAllByFollowerId(userId, pageParams.getPageable());
		getDataResolvingManager().resolveContainedData(followedBy);
		return followedBy;
	}
	
	@Transactional(readOnly = true)
	public default boolean isFollowing(ID followableID, User follower){
		F followable = getFollowable(followableID);
		return isFollowing(followable, follower);
	}
	
	@Transactional(readOnly = true)
	public default boolean isFollowing(F followable, User follower){
		long cnt = getFollowerRepository().countByFollowerAndFollowee(follower, followable);
		return cnt > 0;
	}
	
	@Transactional(readOnly = true)
	public default boolean isFollowing(ID followableID){
		return isFollowing(followableID, ActiveUser.get());
	}
	
	@Transactional(readOnly = true)
	public default boolean isFollowing(F followable){
		return isFollowing(followable, ActiveUser.get());
	}
	
	@SuppressWarnings("deprecation")
	@Transactional
	public default T follow(FollowForm<ID> followForm) throws DuplicateElementException {

		F followable = getFollowable(followForm.getId());

		if(followable instanceof Owned) {
			Owned f = (Owned)followable;
			AuthorizationService auth = getAuth();
			auth.owned(f).negate()
				.authorize(()->new UpdatePermissionDeniedException("You can not follow yourself or your own item(s)"));			// FIXME "you can't follow your own account/collection"
			auth.notBlocked(f)
				.authorize(()->new UpdatePermissionDeniedException("You don't have a permission to follow."));	// FIXME "you are not allowed to follow this collection ..." 
		}
		
		User activeUser = ActiveUser.get();
		if(isFollowing(followable, activeUser)) {
			throw new DuplicateElementException("The 'follow' relation already exists.");			// FIXME fix the message
		}
		
		T follower = newEmptyFollowerInstance();
		follower.setFollowee(followable);
		follower.setFollower(activeUser);
		follower.setDate(Calendar.getInstance());
		followForm.copyTo(follower.getNotificationPreferences());
		
		try {
			setupFirebaseTopics(follower, followForm);
		} catch (FirebaseMessagingException e) {
			FIXME.warn("Handle this");
			Throwables.propagateIfPossible(e);
		}
		
		getFollowerRepository().save(follower);
		
		getEventRegister().followItem(follower);

		getDataResolvingManager().resolveContainedData(follower);
		return follower;
	}
	
	@Transactional
	public default void unfollow(Long followerId) {
		T follower = getFollowerRepository().findById(followerId).orElseThrow(
				()->new EntityNotFoundException("The 'follow' relation does not exist. Nothing to 'unfollow'."));			// FIXME put some user friendly message
		
		unfollow(follower);
	}
	
	@Transactional
	public default void unfollowEntity(ID entityId) {
		F followable = getFollowable(entityId);
		if(followable == null) 
			throw new EntityNotFoundException("An entity with the specified ID does not exist.");
		
		T follower = getFollowerRepository().getByFolloweeAndFollower(followable, ActiveUser.get());
		if(follower  == null) 
			new EntityNotFoundException("The follow relation does not exist or it has been deleted.");
		
		unfollow(follower);
	}
	
	@SuppressWarnings("deprecation")
	@Transactional
	public default void unfollow(T follower) {
		
		getAuth().owned(follower).authorize("You can not unfollow the specified entity."); // FIXME fix the message
		
		try {
			unsubscribeFromFirebaseTopics(follower);
		} catch (FirebaseMessagingException e) {
			FIXME.warn("Handle this");
			Throwables.propagateIfPossible(e);		
		}
		
		getFollowerRepository().delete(follower);
		getEventRegister().unfollowItem(follower);			// not persisted any more, what happens with the 'follower' object ??? 
	}
	
	@SuppressWarnings("deprecation")
	@Transactional
	public default void changePreferences(FollowUpdateForm followUpdateForm) {
		T follower = getFollowerRepository().findById(followUpdateForm.getFollowRelId()).orElseThrow(
				()->new EntityNotFoundException("The 'follow' relation does not exist."));			// FIXME put some user friendly message
		
		getAuth().owned(follower).authorize("You don't have a permission to change follow preferences."); // FIXME fix the message
		
		try {
			resolveFirebaseTopicSubscriptions(follower, followUpdateForm);
		} catch (FirebaseMessagingException e) {
			FIXME.warn("Handle this");
			Throwables.propagateIfPossible(e);		
		}
		followUpdateForm.copyTo(follower.getNotificationPreferences());
		
		getFollowerRepository().save(follower);

//		getEventRegister().followPreferencesChanged(follower);			
	}
	
	public default void unsubscribeFromFirebaseTopics(T follower) throws FirebaseMessagingException {
		List<FollowableTopic> topics = follower.getFollowee().getTopics();
		for (FollowableTopic ft : topics) {
			List<String> tokens = getActiveUserClientAppMessagingTokens();
			if(!CollectionUtils.isEmpty(tokens)) {
				FirebaseMessaging.getInstance().unsubscribeFromTopic(tokens, ft.getName());
			}
		}
	}
	
	public default void setupFirebaseTopics(T follower, FollowForm<ID> followForm) throws FirebaseMessagingException {
		List<FollowableTopic> topics = follower.getFollowee().getTopics();
		NotificationPreferences nPrefs = follower.getNotificationPreferences();
		List<String> tokens = getActiveUserClientAppMessagingTokens();
		if(!CollectionUtils.isEmpty(tokens)) {
			for (FollowableTopic ft : topics) {
				if(nPrefs.isPushEnabled(ft.getType())) {
					FirebaseMessaging.getInstance().subscribeToTopic(tokens, ft.getName());
				}
			}
		}
	}
	
	public default void resolveFirebaseTopicSubscriptions(T follower, FollowUpdateForm followUpdateForm) throws FirebaseMessagingException {
		List<FollowableTopic> topics = follower.getFollowee().getTopics();
		NotificationPreferences oldPrefs = follower.getNotificationPreferences();
		
		List<String> tokens = getActiveUserClientAppMessagingTokens();

		if(!CollectionUtils.isEmpty(tokens)) {
			for (FollowableTopic ft : topics) {
				NotificationType type = ft.getType();
				boolean prev = oldPrefs.isPushEnabled(type);
				boolean curr = followUpdateForm.isPushEnabled(type);
				if(prev != curr) {		// skip if no changes
					if(curr) {
						FirebaseMessaging.getInstance().subscribeToTopic(tokens, ft.getName());
					}else {
						FirebaseMessaging.getInstance().unsubscribeFromTopic(tokens, ft.getName());
					}
					FIXME.warn("Handle errors");
				}
			}
		}
	}
}
