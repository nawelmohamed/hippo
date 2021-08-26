package com.yoterra.hippo.jpa.entities.followers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.yoterra.hippo.jpa.entities.IdEntity;
import com.yoterra.hippo.jpa.entities.Metacounts;
import com.yoterra.hippo.notifications.data.NotificationType;
import com.yoterra.hippo.notifications.data.NotificationType.PushCategory;
import com.yoterra.utils.Opt;

public interface Followable<ID> extends Metacounts, IdEntity<ID>{
	
	FollowableType getFollowableType();
	
	public NotificationType.SettingsCategory getNotificationsSettingsCategory();
	
	public static final String FOLLOWERS_METACOUNT = "mc.flwrs";

	public default Integer getFollowersMetacount() {
		return getMetacount(FOLLOWERS_METACOUNT);
	}
	
	public default void setFollowersMetacount(int count) {
		setMetacount(FOLLOWERS_METACOUNT, count);
	}
	
	public default Integer deleteFollowersMetacount() {
		return deleteMetacount(FOLLOWERS_METACOUNT);
	}
	
	public default List<FollowableTopic> getTopics(){
		FollowableType ft = getFollowableType();
		
		// Topic name validation regex: "^(/topics/)?(private/)?[a-zA-Z0-9-_.~%]+$"
		String pref = "/topics/" + ft.name() + "." + getId() + "."; 
		
		List<NotificationType> ets = NotificationType.ofCategories(PushCategory.TOPIC, getNotificationsSettingsCategory());
		return Opt.strm(ets)
				.map(t -> new FollowableTopic(t, pref + t.getTypeId()))
				.toList();
	}
	
	public default Map<NotificationType, FollowableTopic> getTopicsMap(){
		return Opt.strm(getTopics())
				.collect(Collectors.toMap(FollowableTopic::getType, t->t));
	}
}
