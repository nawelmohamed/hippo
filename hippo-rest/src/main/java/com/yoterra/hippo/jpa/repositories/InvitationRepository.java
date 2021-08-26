package com.yoterra.hippo.jpa.repositories;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Invitation;
import com.yoterra.hippo.jpa.entities.InvitationStatus;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface InvitationRepository extends JpaRepository<Invitation,Long>, JpaSpecificationExecutor<Invitation> {
	
	public Page<Invitation> findAllByInvitedEmailAddress(String invitedEmailAddress, Pageable pageable);
	
	public Page<Invitation> findAllByInviter(User inviter, Pageable pageable);
	
	public Page<Invitation> findAllByStatus(InvitationStatus status, Pageable pageable);
	
	public Optional<Invitation> findByInviterAndInvitedEmailAddress(User inviter, String invitedEmailAddress);
	
}

