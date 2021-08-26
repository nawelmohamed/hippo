package com.yoterra.hippo.jpa.entities.users;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import org.apache.commons.lang.Validate;

import com.yoterra.hippo.jpa.entities.followers.Follower.FollowerNotificationPreferences;
import com.yoterra.hippo.notifications.data.NotificationType;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;

@MappedSuperclass
public abstract class NotificationPreferences {
	
	@Column(name = "NP_VECTOR")
	private long vector;
	
	protected abstract SettingsCategory getSettingCategory();
	
	public boolean accepts (NotificationType type) {
		return type.getSettingsCategory() == getSettingCategory();
	}
	
	public NotificationPreferences(long initialVector) {
		this.vector = initialVector;
	}
	
	public void enableNotifications(NotificationType type) {
		Validate.isTrue(accepts(type), "Invalid settings type");
		vector = enableNotifications(vector, type);
	}

	public void enablePushNotifications(NotificationType type) {
		Validate.isTrue(accepts(type), "Invalid settings type");
		vector = enablePushNotifications(vector, type);
	}
	
	public void disableNotifications(NotificationType type) {
		Validate.isTrue(accepts(type), "Invalid settings type");
		vector = disableNotifications(vector, type);
	}
	
	public void disablePushNotifications(NotificationType type) {
		Validate.isTrue(accepts(type), "Invalid settings type");
		vector = disablePushNotifications(vector, type);
	}
	
	
	public boolean isEnabled(NotificationType type) {
		Validate.isTrue(accepts(type), "Invalid settings type: ", type);
		return isEnabled(vector, type);
	}
	
	public boolean isPushEnabled(NotificationType type) {
		Validate.isTrue(accepts(type), "Invalid settings type");
		return isPushEnabled(vector, type);
	}
	
	public void setNotificationsFlag(NotificationType type, boolean v) {
		if(v) enableNotifications(type); 
		else disableNotifications(type);
	}
	
	public void setPushNotificationsFlag(NotificationType type, boolean v) {
		if(v) enablePushNotifications(type); 
		else disablePushNotifications(type);
	}
	
	public long getVector() {		// needed for JPA
		return vector;
	}

	public void setVector(long vector) {	// needed for JPA
		this.vector = vector;
	}

	public static long generateDefaultVectorForCategory(SettingsCategory sCat) {			// use user defined templates ????
		long v = 0;
		for (NotificationType t : NotificationType.vals()) {
			if(t.getSettingsCategory() == sCat) {
				v = enableNotifications(v, t);
				v = enablePushNotifications(v, t);
			}
		}
		return v;
	}
	
	public static long generateDefaultVector() {			
		long v = 0;
		for (NotificationType t : NotificationType.vals()) {
			v = enableNotifications(v, t);
			v = enablePushNotifications(v, t);
		}
		return v;
	}			

	// ==================== STATIC PRIVATE =========================
	
	private static long enableNotifications(long vector, NotificationType type) {
		return vector |= (1 << baseIndex(type));
	}

	private static long enablePushNotifications(long vector, NotificationType type) {
		return vector |= (1 << baseIndex(type) + 1);
	}
	
	private static long  disableNotifications(long vector, NotificationType type) {
		return vector &= ~(1 << baseIndex(type));
	}
	
	private static long disablePushNotifications(long vector, NotificationType type) {
		return vector &= ~(1 << baseIndex(type) + 1);
	}
	
	private static int baseIndex(NotificationType type) {
		return type.getPreferencesVectorIndex() * 2;
	}
	
	private boolean isEnabled(long vector, NotificationType type) {
		return (vector & (1l << baseIndex(type))) != 0;
	}
	
	private boolean isPushEnabled(long vector, NotificationType type) {
		return (vector & (1l << baseIndex(type) + 1)) != 0;
	}
	
	
	public static void main(String[] args) {
		NotificationPreferences p = new FollowerNotificationPreferences(SettingsCategory.USER_FOLLOWER);
		
//		p.disableNotifications(NotificationType.COLLECTED_ITEM_TO_USER_FOLLOWER);
//		p.disablePushNotifications(NotificationType.GONE_DEAL);
		for (NotificationType et : NotificationType.values()) {
			if(p.accepts(et)) {
				System.out.println(et + ": " + p.isEnabled(et) + ": " + p.isPushEnabled(et));
			}
		}
	}
	
}