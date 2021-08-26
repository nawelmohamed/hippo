package com.yoterra.hippo.services;

import com.yoterra.hippo.mob.model.UserCtx;

public interface IUserContextService<E, UC extends UserCtx>{
	
	public UC getUserContext(E entity);
}
