package com.yoterra.hippo.notifications;

import com.google.firebase.messaging.Notification;
import com.yoterra.commons.FIXME;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.collections.CollectionItemType;
import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.events.CollectedItemEvent;
import com.yoterra.hippo.jpa.entities.events.CollectionCreatedEvent;
import com.yoterra.hippo.jpa.entities.events.CommentEvent;
import com.yoterra.hippo.jpa.entities.events.FollowEvent;
import com.yoterra.hippo.jpa.entities.events.InvitationAcceptedEvent;
import com.yoterra.hippo.jpa.entities.events.LikeEvent;
import com.yoterra.hippo.jpa.entities.followers.Followable;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.users.User;

public class PushNotificationMessageGenerator {

	//FIXME
	public static Notification createdCollection(CollectionCreatedEvent event){
		Collection createdCollection = event.getCollection();
		User creator = createdCollection.getOwner();
		Notification n = Notification.builder()
				.setTitle("Collection created")
				.setBody(creator.getUsername() + " created a new collection: " + createdCollection.getName())
				.build();
		return n;
	}
	
	//FIXME
	public static Notification userCollectedItem(CollectedItemEvent ciEvent){
		CollectionItem<?> collectionItem = ciEvent.getCollectionItem();
		User owner = collectionItem.getOwner();
		Collection collection = collectionItem.getCollection();
		
		String type = collectionItem.getType() == CollectionItemType.PRODUCT ? "prodict" : "deal" ;		// FIXME
		
		Notification n = Notification.builder()
				.setTitle("Collected item")
				.setBody(owner.getUsername() + " added a new " + type + " to their collection: " + collection.getName())
				.build();
		return n;
	}
	
	//FIXME
	public static Notification collectedItemToCollection(CollectedItemEvent ciEvent){
		return userCollectedItem(ciEvent);		// hack
	}
	
	//FIXME
	public static Notification invitationAccepted(InvitationAcceptedEvent ev){
		String invitedEmailAddress = ev.getInvitation().getInvitedEmailAddress();
		Notification n = Notification.builder()
				.setTitle("Invitation accepted")
				.setBody(invitedEmailAddress + " accepted your invitation.")
				.build();
		return n;
	}

	public static Notification followToItemOwner(FollowEvent ev){
		
		Follower<?> follower = ev.getFollower();
		Followable<?> followable = follower.getFollowee();
		User followerUser = follower.getFollower();
		
		FIXME.warn("FIXME");
		Notification n = Notification.builder()
				.setTitle("New following")							
				.setBody(followerUser.getUsername() + " is following " + followable.getId()) // FIXME
				.build();
		return n;
	}

	public static Notification commentedItem(CommentEvent event) {
		Comment<?> comment = event.getComment();
		User author = comment.getAuthor();
		Commentable<?> parent = comment.getParent();
		
		FIXME.warn("FIXME");
		Notification n = Notification.builder()
				.setTitle("New comment")							
				.setBody(author.getUsername() + " commented on " + parent.getId()) // FIXME
				.build();
		return n;
	}
	
	public static Notification likedItem(LikeEvent event) {
		Like<?> like = event.getLike();
		User author = like.getAuthor();
		Likeable<?> parent = like.getParent();
		
		FIXME.warn("FIXME");
		Notification n = Notification.builder()
				.setTitle("New like")							
				.setBody(author.getUsername() + " liked " + parent.getId()) // FIXME
				.build();
		return n;
	}
}
