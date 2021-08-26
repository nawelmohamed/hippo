package com.yoterra.hippo.jpa.entities.data.companies;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;

@Entity
@Table(schema = "HIPPO", name = "STORE")
public class Store extends Company{

	public static Store fromCSCompany(com.yoterra.data.jpa.companyservice.entities.Company company) {
		Store store = new Store();
		store.setCSCompany(company);
		return store;
	}
	
	public static Store fromIndexCompany(com.yoterra.data.records.Company company) {
		Store store = new Store();
		store.setIndexCompany(company);
		return store;
	}
	
	@Override
	public LikeableType getLikeableType() {
		return LikeableType.STORE;
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.STORE;
	}
	
	@Override
	public FollowableType getFollowableType() {
		return FollowableType.STORE;
	}
}
