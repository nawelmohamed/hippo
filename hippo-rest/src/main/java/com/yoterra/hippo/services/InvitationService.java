package com.yoterra.hippo.services;

import java.util.Collection;
import java.util.List;
import java.util.Map;

import com.yoterra.hippo.jpa.entities.Invitation;
import com.yoterra.hippo.jpa.entities.InvitationStatus;
import com.yoterra.hippo.jpa.entities.users.User;

public interface InvitationService {

	Invitation invite(User inviter, String email);
	
	List<Invitation> invite(User inviter, String[] emails);
	
	List<Invitation> invite(String[] emails);

	void accepted(User user, Long id);
	
	// TODO extends InvitationStatus or use different enum 
	Map<String,InvitationStatus> invitationsStatuses(User inviter, Collection<String> emails);
	
	Map<String,InvitationStatus> invitationsStatuses(Collection<String> emails);
	
	Map<String,InvitationStatus> invitationsStatuses(User inviter, String[] emails);
	
	Map<String,InvitationStatus> invitationsStatuses(String[] emails);

	void sendInvitations();
	
	void clicked(Long id);
	
}
