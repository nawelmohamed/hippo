package com.yoterra.hippo.mob.forms;

import java.util.Set;

import com.yoterra.hippo.req.Form;

public interface IUserFavoriteForm<ID> extends Form {
	
	public Set<ID> getItemIds();
}
