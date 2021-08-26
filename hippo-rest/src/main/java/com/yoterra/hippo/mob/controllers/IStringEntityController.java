package com.yoterra.hippo.mob.controllers;

public interface IStringEntityController extends IEntityController<String>{
	
	@Override
	default String idFromString(String id) {
		return id;
	}
}
