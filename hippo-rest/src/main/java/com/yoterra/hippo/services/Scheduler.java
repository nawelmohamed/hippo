package com.yoterra.hippo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.annotations.profiles.Production;

@Service
@Production
public class Scheduler {

	@Autowired
	private InvitationService invitationService;
	
	@Scheduled(initialDelay = 3*60*1000, fixedDelay = 3*60*1000)
	public void sendInvitations() {
		invitationService.sendInvitations();
	}
}
