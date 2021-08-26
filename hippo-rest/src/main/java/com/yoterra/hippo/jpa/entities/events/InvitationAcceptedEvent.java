package com.yoterra.hippo.jpa.entities.events;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.Invitation;


@Entity
@DiscriminatorValue(EventType.Aliases.INVITATION_ACCEPTED)
public class InvitationAcceptedEvent extends Event<Invitation>{

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "invitation_id")
	private Invitation invitation;
	
	public InvitationAcceptedEvent() {
		super();
	}
	
	public InvitationAcceptedEvent(Invitation invitation) {
		super();
		this.invitation = invitation;
	}

	@Override
	public EventType getType() {
		return EventType.INVITATION_ACCEPTED;
	}

	@Override
	public Invitation getItem() {
		return getInvitation();
	}
	
	public Invitation getInvitation() {
		return invitation;
	}
	
	public void setInvitation(Invitation invitation) {
		this.invitation = invitation;
	}
}
