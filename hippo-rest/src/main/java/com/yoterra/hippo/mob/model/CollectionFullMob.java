package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.utils.Opt;

public class CollectionFullMob extends CollectionMob {

	private final UserCtx userContext;
	
	public static CollectionFullMob of (Collection coll, UserCtx userCtx) {
		return Opt.get(coll, c -> new CollectionFullMob(c, userCtx));
	}
	
	public CollectionFullMob(Collection c, UserCtx userCtx){
		super(c);
		this.userContext = userCtx;
	}
	
	public UserCtx getUserContext() {
		return userContext;
	}
}
