package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.utils.Opt;

public class StoreFullMob extends CompanyFullMob {

	public static StoreFullMob of (Store store, UserCtx userCtx) {
		return Opt.get(store, s -> new StoreFullMob(s, userCtx));
	}

	private StoreFullMob(Store store, UserCtx userCtx) {
		super(store, userCtx);
	}
}
