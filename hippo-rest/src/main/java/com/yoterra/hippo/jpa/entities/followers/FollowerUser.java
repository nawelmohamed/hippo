package com.yoterra.hippo.jpa.entities.followers;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;

@Entity
@Table(schema = "HIPPO", name = "FOLLOWER")
@DiscriminatorValue(value=FollowableType.Values.USER)
public class FollowerUser extends Follower<User> {
	
	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="user_ID")
	private User user;
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public User getFollowee() {
		return user;
	}
	
	@Override
	public void setFollowee(User followee) {
		this.user = followee;
	}
	
	@Override
	public SettingsCategory getNoticationPrefsSettingsCategory() {
		return SettingsCategory.USER_FOLLOWER;
	}

	@Override
	public FollowableType getType() {
		return FollowableType.USER;
	}
}