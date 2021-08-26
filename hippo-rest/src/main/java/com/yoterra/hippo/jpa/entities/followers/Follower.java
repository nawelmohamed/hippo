package com.yoterra.hippo.jpa.entities.followers;

import java.util.Calendar;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.Where;
import org.springframework.format.annotation.DateTimeFormat;

import com.yoterra.hippo.jpa.entities.ActiveEntity;
import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.users.NotificationPreferences;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;

@Entity
@Table(schema = "HIPPO", name = "FOLLOWER")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE", discriminatorType = DiscriminatorType.STRING)
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "follower_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public abstract class Follower<T extends Followable<?>> extends ActiveEntity implements Owned, DataResolvablesContainer<Long>{
	
	@Embeddable
	public static final class FollowerNotificationPreferences extends NotificationPreferences {
		
		@Transient
		private transient SettingsCategory settingsCategory = null;

		public FollowerNotificationPreferences() {
			super(generateDefaultVector());		
		}
		public FollowerNotificationPreferences(SettingsCategory settingsCategory){
			super(generateDefaultVectorForCategory(settingsCategory));
			this.settingsCategory = settingsCategory;
		}
		
		@Override
		protected SettingsCategory getSettingCategory() {
			return settingsCategory;
		}
		
		public void setSettingsCategory(SettingsCategory settingsCategory) {
			this.settingsCategory = settingsCategory;
		}
	}
	
	@Embedded
	private FollowerNotificationPreferences notificationPreferences;
	
	public Follower() {
		
		SettingsCategory cat = getNoticationPrefsSettingsCategory();
		FollowerNotificationPreferences nPrefs = new FollowerNotificationPreferences(cat);
		setNotificationPreferences(nPrefs);
	}
	
	public abstract SettingsCategory getNoticationPrefsSettingsCategory();
	
	@ManyToOne(optional = false)
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="FOLLOWER_ID")
	private User follower;
	
	@Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Calendar date;
	
	public abstract T getFollowee();
	public abstract void setFollowee(T followee);
	public abstract FollowableType getType();
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public User getFollower() {
		return follower;
	}

	public void setFollower(User follower) {
		this.follower = follower;
	}

	public Calendar getDate() {
		return date;
	}

	public void setDate(Calendar date) {
		this.date = date;
	}
	
	
	@Override
	public User getOwner() {
		return follower;
	}
	
	public NotificationPreferences getNotificationPreferences() {
		assignNPSettingsCategory();				// should be set, but just to make sure
		return notificationPreferences;
	}

	public void setNotificationPreferences(FollowerNotificationPreferences notificationPreferences) {
		this.notificationPreferences = notificationPreferences;
		assignNPSettingsCategory();
	}
	
	private void assignNPSettingsCategory() {
		if(notificationPreferences != null) {
			notificationPreferences.setSettingsCategory(getNoticationPrefsSettingsCategory());
		}
	}
}
