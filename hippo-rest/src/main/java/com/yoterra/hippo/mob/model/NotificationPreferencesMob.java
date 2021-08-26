package com.yoterra.hippo.mob.model;

import java.util.TreeMap;

import com.yoterra.hippo.jpa.entities.users.NotificationPreferences;
import com.yoterra.hippo.notifications.data.NotificationType;
import com.yoterra.utils.Opt;

public class NotificationPreferencesMob extends TreeMap<NotificationType, NotificationPreferencesMob.NotificationPrefPair>{

	private static final long serialVersionUID = -8635589076415099645L;

	public static class NotificationPrefPair{
		
		private final boolean inApp;
		private final boolean push;

		public NotificationPrefPair(boolean inApp, boolean push) {
			super();
			this.inApp = inApp;
			this.push = push;
		}
		public boolean isInApp() {
			return inApp;
		}
		public boolean isPush() {
			return push;
		}
	}
	
	public static NotificationPreferencesMob of(NotificationPreferences nPrefs) {
		return Opt.get(nPrefs, NotificationPreferencesMob::new);
	}
	
	public NotificationPreferencesMob(NotificationPreferences nPrefs){
		for (NotificationType nt : NotificationType.values()) {
			if(nPrefs.accepts(nt)) {
				NotificationPrefPair p = new NotificationPrefPair(nPrefs.isEnabled(nt), nPrefs.isPushEnabled(nt));
				super.put(nt, p);
			}
		}
	}
}
