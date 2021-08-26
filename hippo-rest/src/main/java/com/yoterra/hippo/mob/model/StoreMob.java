package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.utils.Opt;

public class StoreMob extends CompanyMob {

	public static StoreMob of (Store store) {
		return Opt.get(store, StoreMob::new);
	}

	protected StoreMob(Store store) {
		super(store);
	}

}
