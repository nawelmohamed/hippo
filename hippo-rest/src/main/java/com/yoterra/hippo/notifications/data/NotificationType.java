package com.yoterra.hippo.notifications.data;

import java.util.List;
import java.util.Set;

import org.apache.commons.lang3.Validate;

import com.yoterra.hippo.jpa.entities.events.EventType;
import com.yoterra.utils.Opt;

public enum NotificationType {

	//If something changes, make sure the docs generator for NotificationPreferencesForm is updated accordingly
	INVITATION_ACCEPTED_TO_INVITER(0, PushCategory.DIRECT, 
			SettingsCategory.FIXED,	EventType.INVITATION_ACCEPTED),
	
	CREATED_COLLECTION_TO_USER_FOLLOWER(1, PushCategory.TOPIC, 
			SettingsCategory.USER_FOLLOWER,	EventType.CREATED_COLLECTION),
	
	COLLECTED_ITEM_TO_USER_FOLLOWER(2, PushCategory.TOPIC, 
			SettingsCategory.USER_FOLLOWER,	EventType.COLLECTED_ITEM),
	
	COLLECTED_ITEM_TO_COLLECTION_FOLLOWER(3, PushCategory.TOPIC,
			SettingsCategory.COLLECTION_FOLLOWER, EventType.COLLECTED_ITEM),
	
	COMMENTED_ITEM_TO_ITEM_OWNER(4, PushCategory.DIRECT, 
			SettingsCategory.PROFILE,	EventType.COMMENTED_ITEM),
	
	LIKED_ITEM_TO_ITEM_OWNER(5, PushCategory.DIRECT, 
			SettingsCategory.PROFILE,	EventType.LIKED_ITEM),
	
	FOLLOW_ITEM_TO_ITEM_OWNER(6, PushCategory.DIRECT, 
			SettingsCategory.PROFILE,	EventType.FOLLOW_ITEM);

	public static enum PushCategory{
		DIRECT, TOPIC
	} 
	
	public static enum SettingsCategory{
		NONE, 					// no settings
		FIXED, 					// fix global settings - can not be changed 
		PROFILE, 				// user profile level settings
		USER_FOLLOWER, 			// user follower relation level settings
		COLLECTION_FOLLOWER, 	// collection follower relation level settings
	} 
	
	private final int preferencesVectorIndex;			// once assigned (and pushed to production) should never be changed
														// new enums should get new unused indexes
	private final PushCategory pushCategory;
	private final SettingsCategory settingsCategory;		

	private final EventType eventType;
	
	private final static NotificationType [] VALS = values();
	
	private NotificationType(int pvIndex, PushCategory pushCategory, 
			SettingsCategory settingsCategory, EventType eventType) {
		Validate.isTrue(pvIndex >= 0 && pvIndex * 2 < Long.SIZE, "Min index has to be 0 and max index has to be 31");
		this.preferencesVectorIndex = pvIndex;
		this.pushCategory = pushCategory;
		this.settingsCategory = settingsCategory;
		this.eventType = eventType;
	}
	
	public static List<NotificationType> ofCategories(PushCategory pushCategory, SettingsCategory settingsCategory){
		return Opt.strm(VALS)
				.filter(e->e.pushCategory == pushCategory)
				.filter(e->e.settingsCategory == settingsCategory)
				.toList();
	}
	
	public int getPreferencesVectorIndex() {
		return preferencesVectorIndex;
	}
	
	public int getTypeId() {
		return getPreferencesVectorIndex();
	}
	
	public SettingsCategory getSettingsCategory() {
		return settingsCategory;
	}
	
	public PushCategory getPushCategory() {
		return pushCategory;
	}
	
	public EventType eventType() {
		return eventType;
	}
	
	public static NotificationType[] vals() {
		return VALS;
	}
	
	static {
		NotificationType[] vals = values();
		Set<Integer> set = Opt.strm(vals).map(NotificationType::getPreferencesVectorIndex).toSet();
		Validate.isTrue(vals.length == set.size(), "Indexes are not unique");
	}
	
	public static void main(String[] args) {
		System.out.println(NotificationType.COLLECTED_ITEM_TO_COLLECTION_FOLLOWER.getPreferencesVectorIndex());
	}
}
