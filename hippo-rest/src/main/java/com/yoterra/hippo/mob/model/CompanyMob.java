package com.yoterra.hippo.mob.model;

import java.util.List;

import com.yoterra.hippo.jpa.entities.data.companies.Company;

public abstract class CompanyMob {

	private final Long id;
	private final String name;
	private final List<String> domains;
	private final String logo;
	private final Boolean oneClickCheckout;
	private final Boolean verified;
	
	private final Long productCount;
	private final Integer likeCount;
	private final Integer commentCount;
	private final Integer followersCount;

	protected CompanyMob(Company company) {
		
		this.id = company.getId();
		this.name = company.getName();
		this.domains = company.getDomains();
		this.logo = company.getImageUrl();
		
		this.productCount = company.getProductCount();

		this.likeCount = company.getLikeMetacount();
		this.commentCount = company.getCommentMetacount();
		this.followersCount = company.getFollowersMetacount();
		
		this.oneClickCheckout = company.getOneClickCheckout();
		this.verified = company.getVerified();
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	
	public String getLogo() {
		return logo;
	}

	public Long getProductCount() {
		return productCount;
	}

	public Integer getLikeCount() {
		return likeCount;
	}

	public Integer getCommentCount() {
		return commentCount;
	}
	
	public Integer getFollowersCount() {
		return followersCount;
	}
	
	public List<String> getDomains() {
		return domains;
	}
	
	public Boolean getOneClickCheckout() {
		return oneClickCheckout;
	}
	
	public Boolean getVerified() {
		return verified;
	}
}