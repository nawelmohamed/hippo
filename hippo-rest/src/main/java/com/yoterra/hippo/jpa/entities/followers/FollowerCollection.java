package com.yoterra.hippo.jpa.entities.followers;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;

@Entity
@Table(schema = "HIPPO", name = "FOLLOWER")
@DiscriminatorValue(value=FollowableType.Values.COLLECTION)
public class FollowerCollection extends Follower<Collection> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="COLLECTION_ID")
	private Collection collection;

	public Collection getCollection() {
		return collection;
	}
	
	public void setCollection(Collection collection) {
		this.collection = collection;
	}

	@Override
	public Collection getFollowee() {
		return collection;
	}

	@Override
	public void setFollowee(Collection followee) {
		this.collection = followee;
	}
	
	@Override
	public SettingsCategory getNoticationPrefsSettingsCategory() {
		return SettingsCategory.COLLECTION_FOLLOWER;
	}

	@Override
	public FollowableType getType() {
		return FollowableType.COLLECTION;
	}
}