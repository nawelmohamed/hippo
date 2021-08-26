package com.yoterra.hippo.jpa.entities.comments;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.companies.Store;

@Entity
@DiscriminatorValue(value=CommentableType.Values.STORE)
public class CommentStore extends Comment<Store> {

	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
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
	public CommentableType getType() {
		return CommentableType.STORE;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(store);
	}
}