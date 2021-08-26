package com.yoterra.hippo.services;

import com.yoterra.hippo.helpers.ContextBeanProvider;
import com.yoterra.hippo.services.auth.AuthorizationService;

public interface AuthorizationServiceProvider {
	public default AuthorizationService getAuth() {
		return ContextBeanProvider.getBean(AuthorizationService.class);
	}	
}


