package com.yoterra.hippo.jpa.entities;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;

import org.hibernate.annotations.Where;
import org.springframework.format.annotation.DateTimeFormat;

import com.yoterra.hippo.jpa.entities.users.User;

@Entity
@Table(schema = "HIPPO", name = "INVITATION")
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "invitation_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public class Invitation extends ActiveEntity {
	
	@ManyToOne(optional = false) // ????
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="INVITER_ID")
	private User inviter;
	
	@Column
	@Email
	private String invitedEmailAddress;
	
	@Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Calendar date;
	
	@Column 
	@Enumerated(EnumType.STRING)
	private InvitationStatus status;
	
	@Column
	private boolean clicked = false;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public User getInviter() {
		return inviter;
	}

	public void setInviter(User inviter) {
		this.inviter = inviter;
	}

	public Calendar getDate() {
		return date;
	}

	public void setDate(Calendar date) {
		this.date = date;
	}

	public String getInvitedEmailAddress() {
		return invitedEmailAddress;
	}

	public void setInvitedEmailAddress(String invitedEmailAddress) {
		this.invitedEmailAddress = invitedEmailAddress;
	}
	
	public InvitationStatus getStatus() {
		return status;
	}
	
	public void setStatus(InvitationStatus status) {
		this.status = status;
	}

	public void setClicked(boolean clicked) {
		this.clicked = clicked;
	}
	
	public boolean isClicked() {
		return clicked;
	}

}
