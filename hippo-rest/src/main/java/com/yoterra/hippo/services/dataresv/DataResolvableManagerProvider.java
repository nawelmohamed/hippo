package com.yoterra.hippo.services.dataresv;

import com.yoterra.hippo.helpers.ContextBeanProvider;

public interface DataResolvableManagerProvider {
	public default DataResolverManager getDataResolvingManager() {
		return ContextBeanProvider.getBean(DataResolverManager.class);
	}	
}


