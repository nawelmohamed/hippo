package com.yoterra.hippo.jpa.entities.likes;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.companies.Store;

@Entity
@DiscriminatorValue(value=LikeableType.Values.STORE)
public class LikeStore extends Like<Store> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name="STORE_ID")
	private Store store;

	@Override
	public Store getParent() {
		return store;
	}

	public Store getStore() {
		return store;
	}

	public void setStore(Store store) {
		this.store = store;
	}

	@Override
	public void setParent(Store parent) {
		setStore(parent);
	}

	@Override
	public LikeableType getType() {
		return LikeableType.STORE;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(store);
	}
}