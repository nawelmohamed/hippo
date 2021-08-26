package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.data.companies.Company;

public abstract class CompanyFullMob extends CompanyMob {

	private final UserCtx userContext;

	protected CompanyFullMob(Company company, UserCtx userCtx) {
		super(company);
		this.userContext = userCtx;
	}
	
	public UserCtx getUserContext() {
		return userContext;
	}
}