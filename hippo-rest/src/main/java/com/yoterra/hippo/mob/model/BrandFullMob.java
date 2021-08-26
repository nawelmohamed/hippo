package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.utils.Opt;

public class BrandFullMob extends CompanyFullMob {

	public static BrandFullMob of (Brand brand, UserCtx userCtx) {
		return Opt.get(brand, s -> new BrandFullMob(s, userCtx));
	}

	private BrandFullMob(Brand brand, UserCtx userCtx) {
		super(brand, userCtx);
	}
}
