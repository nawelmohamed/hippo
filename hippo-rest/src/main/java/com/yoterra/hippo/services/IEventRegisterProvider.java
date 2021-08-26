package com.yoterra.hippo.services;

import com.yoterra.hippo.helpers.ContextBeanProvider;
import com.yoterra.hippo.notifications.EventManager;

public interface IEventRegisterProvider {
	public default EventManager.Register getEventRegister() {
		return ContextBeanProvider.getBean(EventManager.class).register;
	}	
}


