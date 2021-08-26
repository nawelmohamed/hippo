package com.yoterra.hippo.jpa.entities.followers;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;

@Entity
@Table(schema = "HIPPO", name = "FOLLOWER")
@DiscriminatorValue(value=FollowableType.Values.BRAND)
public class FollowerBrand extends Follower<Brand> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="BRAND_ID")
	private Brand brand;

	public Brand getBrand() {
		return brand;
	}
	
	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	@Override
	public Brand getFollowee() {
		return brand;
	}

	@Override
	public void setFollowee(Brand followee) {
		this.brand = followee;
	}

	@Override
	public SettingsCategory getNoticationPrefsSettingsCategory() {
		return SettingsCategory.NONE;
	}
	
	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(brand);
	}

	@Override
	public FollowableType getType() {
		return FollowableType.BRAND;
	}
	
}