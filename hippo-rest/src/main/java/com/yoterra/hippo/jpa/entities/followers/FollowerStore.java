package com.yoterra.hippo.jpa.entities.followers;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;

@Entity
@Table(schema = "HIPPO", name = "FOLLOWER")
@DiscriminatorValue(value=FollowableType.Values.STORE)
public class FollowerStore extends Follower<Store> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="STORE_ID")
	private Store store;

	public Store getStore() {
		return store;
	}
	
	public void setStore(Store store) {
		this.store = store;
	}

	@Override
	public Store getFollowee() {
		return store;
	}

	@Override
	public void setFollowee(Store followee) {
		this.store = followee;
	}

	@Override
	public SettingsCategory getNoticationPrefsSettingsCategory() {
		return SettingsCategory.NONE;
	}
	
	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(store);
	}

	@Override
	public FollowableType getType() {
		return FollowableType.STORE;
	}
}