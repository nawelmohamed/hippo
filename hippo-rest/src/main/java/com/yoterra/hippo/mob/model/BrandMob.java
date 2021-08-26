package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.utils.Opt;

public class BrandMob extends CompanyMob  {

	public static BrandMob of (Brand brand) {
		return Opt.get(brand, BrandMob::new);
	}
	
	protected BrandMob(Brand brand){
		super(brand);
	}
}
