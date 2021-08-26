package com.yoterra.hippo.jpa.entities.events;

import java.util.function.BiConsumer;

import com.yoterra.hippo.notifications.EventManager;

public enum EventType {
	
	INVITATION_ACCEPTED(Aliases.INVITATION_ACCEPTED, EventManager::invitationAccepted),
	CREATED_COLLECTION(Aliases.CREATED_COLLECTION, EventManager::createdCollection),
	COLLECTED_ITEM(Aliases.COLLECTED_ITEM, EventManager::collectedItem),
	COMMENTED_ITEM(Aliases.COMMENTED_ITEM, EventManager::commentedItem), 
	LIKED_ITEM(Aliases.LIKED_ITEM, EventManager::likedItem),
	FOLLOW_ITEM(Aliases.FOLLOW_ITEM, EventManager::followItem),
//	GONE_DEAL(Aliases.GONE_DEAL, BatchEventProcessor::goneDeal),
//	GONE_PRODUCT(Aliases.GONE_PRODUCT, BatchEventProcessor::goneProduct);
	;
	
	private final String alias;
	private final BiConsumer<EventManager, ? extends Event<?>> processor;			
	
	private <E extends Event<?>> EventType(String alias, BiConsumer<EventManager, E> processor) {
		this.alias = alias;
		this.processor = processor;
	}
	
	public String getAlias() {
		return alias;
	}
	
	public BiConsumer<EventManager, ? extends Event<?>> getProcessor() {
		return processor;
	}
	
	public static class Aliases {
		public static final String INVITATION_ACCEPTED = "IA";
		public static final String CREATED_COLLECTION = "CC";
		public static final String COLLECTED_ITEM = "CI";
		public static final String COMMENTED_ITEM = "C";
		public static final String LIKED_ITEM = "L";
		public static final String FOLLOW_ITEM = "F";
		public static final String GONE_DEAL = "GD";
		public static final String GONE_PRODUCT = "GP";
	}
	
//	JOIN_INVITATION_ACCEPTED,
//	COLLECTION_CREATED,
//	ADDED_PRODUCT_TO_COLLECTION,
//	ADDED_DEAL_TO_COLLECTION,
//	PRODUCT_NOT_AVAILABLE_ANY_MORE,
//	DEAL_NOT_AVAILABLE_ANY_MORE,
//	COMMENTED_COLLECTION,
//	COMMENTED_COLLECTION_PRODUCT,
//	COMMENTED_COLLECTION_DEAL,
//	LIKED_PRODUCT,
//	LIKED_BRAND,
//	LIKED_STORE,
//	LIKED_DEAL,
//	LIKED_COLLECTION,
//	LIKED_COLLECTION_PRODUCT,
//	LIKED_COLLECTION_DEAL          
}
