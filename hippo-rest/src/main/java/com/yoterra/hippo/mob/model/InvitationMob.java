package com.yoterra.hippo.mob.model;

import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

import com.yoterra.hippo.jpa.entities.Invitation;
import com.yoterra.hippo.jpa.entities.InvitationStatus;
import com.yoterra.utils.Opt;

public class InvitationMob {

	public static List<InvitationMob> from(List<Invitation> invitations) {
		return invitations.stream().map(InvitationMob::from).collect(Collectors.toList());
	}
	
	public static InvitationMob from(Invitation invitation) {
		return Opt.get(invitation, InvitationMob::new);
	}

	private final Long id;
	private final String invitedEmailAddress;
	private final InvitationStatus status;
	private final Calendar date;				// ??? FIXME
	
	public InvitationMob(Invitation invitation){
		this.id = invitation.getId();
		this.invitedEmailAddress = invitation.getInvitedEmailAddress();
		this.status = invitation.getStatus();
		this.date = invitation.getDate();
	}

	public Long getId() {
		return id;
	}

	public String getInvitedEmailAddress() {
		return invitedEmailAddress;
	}

	public InvitationStatus getStatus() {
		return status;
	}

	public Calendar getDate() {
		return date;
	}
}