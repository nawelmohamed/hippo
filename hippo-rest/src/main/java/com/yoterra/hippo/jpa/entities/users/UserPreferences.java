package com.yoterra.hippo.jpa.entities.users;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.yoterra.hippo.jpa.entities.ActiveItem;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;

@Entity
@Table(schema = "HIPPO", name = "USER_PREFERENCES")
@Where(clause = "user_id > 0")
public class UserPreferences implements ActiveItem {
	
	@Embeddable
	public static class ProfileNotificationPreferences extends NotificationPreferences{
		public ProfileNotificationPreferences() {
			super(generateDefaultVectorForCategory(SettingsCategory.PROFILE));
		}
		@Override
		protected SettingsCategory getSettingCategory() {
			return SettingsCategory.PROFILE;
		}
	}
	
	@Id
    @Column(name = "user_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;
    
    @Embedded
    private ProfileNotificationPreferences notificationPreferences = new ProfileNotificationPreferences();
    
    public Long getId() {
		return id;
	}
    
    public User getUser() {
		return user;
	}
    
    public void setUser(User user) {
		this.user = user;
	}
    
    public NotificationPreferences getNotificationPreferences() {
		return notificationPreferences;
	}
    
    public void setNotificationPreferences(ProfileNotificationPreferences notificationPreferences) {
		this.notificationPreferences = notificationPreferences;
	}

	@Override
	public boolean isDisabled() {
		return getId() > 0;
	}
}