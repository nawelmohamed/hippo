package com.yoterra.hippo.jpa.entities.favorites;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.companies.Store;


@Entity
@DiscriminatorValue(UserFavoriteType.Aliases.STORE)
public class UserFavoriteStore extends UserFavorite<Long, Store>{

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "store_id")
	private Store store;
	
	@Override
	public UserFavoriteType getType() {
		return UserFavoriteType.STORE;
	}

	public Store getStore() {
		return store;
	}

	public void setStore(Store store) {
		this.store = store;
	}

	@Override
	public Store getFavorite() {
		return getStore();
	}

	@Override
	public void setFavorite(Store favoritable) {
		setStore(favoritable);
	}
	
	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(store);
	}
}
