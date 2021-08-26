package com.yoterra.hippo.mob.forms;

import java.util.Set;

import javax.validation.constraints.Size;

import org.springdoc.api.annotations.ParameterObject;

import com.datastax.oss.driver.shaded.guava.common.collect.Sets;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteType;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class UserFavoriteStoresForm implements IUserFavoriteForm<Long> {
	
	@Parameter(description = "Store IDs. Max number of unique items: " + UserFavoriteType.Limits.STORE)
	@Size(max = UserFavoriteType.Limits.STORE, message = "Maximum number of favorite stores is " + UserFavoriteType.Limits.STORE)
	private Set<Long> stores = Sets.newLinkedHashSet();
	
	public Set<Long> getStores() {
		return stores;
	}
	public void setStores(Set<Long> stores) {
		this.stores = stores;
	}
	@Override
	public Set<Long> getItemIds() {
		return getStores();
	}
}
