package com.yoterra.hippo.jpa.entities.data.companies;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;

@Entity
@Table(schema = "HIPPO", name = "BRAND")
public class Brand extends Company {

	public static Brand fromCSCompany(com.yoterra.data.jpa.companyservice.entities.Company company) {
		Brand brand = new Brand();
		brand.setCSCompany(company);
		return brand;
	}
	
	public static Brand fromIndexCompany(com.yoterra.data.records.Company company) {
		Brand brand = new Brand();
		brand.setIndexCompany(company);
		return brand;
	}
	
	@Override
	public LikeableType getLikeableType() {
		return LikeableType.BRAND;
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.BRAND;
	}

	@Override
	public FollowableType getFollowableType() {
		return FollowableType.BRAND;
	}
}
