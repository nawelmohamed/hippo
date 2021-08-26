package com.yoterra.hippo.mob.forms;

import java.util.Map;

import org.springdoc.api.annotations.ParameterObject;

import com.datastax.oss.driver.shaded.guava.common.collect.Maps;
import com.yoterra.hippo.jpa.entities.users.NotificationPreferences;
import com.yoterra.hippo.notifications.data.NotificationType;
import com.yoterra.hippo.req.Form;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;

@ParameterObject
public abstract class NotificationPreferencesForm implements Form {

	private static final int NONE = 0, IN_APP = 1, BOTH = 2;

	private Map<NotificationType, Integer> notificationPreferences = Maps.newHashMap(); 

	// ----------------- DOCS GENERATOR HACK --------------- FIXME
	@Parameter( name = "np[*]",
		schema = @Schema(implementation = String.class),
		description = "Notification preferences map (NotificationType - key, Integer - value). <br/>"
				+ "Notification types that can be used depend on the context (preferences scope: PROFILE, USER_FOLLOWER, COLLECTION_FOLLOWER): "
				+ "<ul>"
					+ "<li><i>CREATED_COLLECTION_TO_USER_FOLLOWER</i> - scope: USER_FOLLOWER</li>"
					+ "<li><i>COLLECTED_ITEM_TO_USER_FOLLOWER</i> - scope: USER_FOLLOWER</li>"
					+ "<li><i>COLLECTED_ITEM_TO_COLLECTION_FOLLOWER</i> - scope: COLLECTION_FOLLOWER</li>"
					+ "<li><i>COMMENTED_ITEM_TO_ITEM_OWNER</i> - scope: PROFILE</li>"
					+ "<li><i>LIKED_ITEM_TO_ITEM_OWNER</i> - scope: PROFILE</li>"
					+ "<li><i>FOLLOW_ITEM_TO_ITEM_OWNER</i> - scope: PROFILE</li>"
				+ "</ul>"
				+ "Acceptable values per notification type are: "
				+ "<ul>"
					+ "<li><i>"+ NONE + "</i> - both disabled </li>"
					+ "<li><i>"+ IN_APP + "</i> - in-app enabled, push disabled </li>"
					+ "<li><i>"+ BOTH + "</i> - both enabled </li>"
				+ "</ul><br/>"
				+ "<i>Example:</i><b>np[LIKED_ITEM_TO_ITEM_OWNER]=" + BOTH + "</b><br/><br/>"
				+ "<i><b style='color:red'>CAN NOT BE TESTED USING THIS DOCS WEB TOOL CAUSE THE PARAMETER NAMES ARE DYNAMICALLY GENERATED</b></i>"
	)
	private String npHack;		
	public String getNpHack() {return npHack;}
	public void setNpHack(String npHack) {}
	//-------------------------------------------------------

	public Map<NotificationType, Integer> getNp() {
		return notificationPreferences;
	}
	
	public void setNp(Map<NotificationType, Integer> notificationPreferences) {
		this.notificationPreferences = notificationPreferences;
	}
	
	@Schema(hidden = true)
	public void copyTo(NotificationPreferences nPrefs) {
		for (Map.Entry<NotificationType, Integer> e : notificationPreferences.entrySet()) {
			NotificationType t = e.getKey();
			if(nPrefs.accepts(t)) {
				nPrefs.setNotificationsFlag(t, isInAppEnabled(t));
				nPrefs.setPushNotificationsFlag(t, isPushEnabled(t));
			}
		}
	}
	
	public boolean isInAppEnabled(NotificationType type){
		Integer np = this.notificationPreferences.getOrDefault(type, BOTH);
		return np == IN_APP || np == BOTH;
	}
	
	public boolean isPushEnabled(NotificationType type){
		Integer np = this.notificationPreferences.getOrDefault(type, BOTH);
		return np == BOTH;
	}
}
