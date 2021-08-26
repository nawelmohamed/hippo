package com.yoterra.hippo.jpa.specs;

import java.util.Collection;

import org.springframework.data.jpa.domain.Specification;

import com.yoterra.hippo.jpa.entities.Invitation;
import com.yoterra.hippo.jpa.entities.Invitation_;
import com.yoterra.hippo.jpa.entities.users.User;

public class InvitationSpecifications extends SpecificationsRoot {

	public static Specification<Invitation> emailIn(Collection<String> emails) {
		return in(Invitation_.invitedEmailAddress,emails);
	}

	public static Specification<Invitation> inviterIs(User inviter) {
		return equal(Invitation_.inviter, inviter);
	}
}
