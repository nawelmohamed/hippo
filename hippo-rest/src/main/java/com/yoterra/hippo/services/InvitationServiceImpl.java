package com.yoterra.hippo.services;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.jpa.entities.Invitation;
import com.yoterra.hippo.jpa.entities.InvitationStatus;
import com.yoterra.hippo.jpa.entities.followers.FollowerUser;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.repositories.FollowerUserRepository;
import com.yoterra.hippo.jpa.repositories.InvitationRepository;
import com.yoterra.hippo.jpa.repositories.UserRepository;
import com.yoterra.hippo.jpa.specs.InvitationSpecifications;
import com.yoterra.hippo.jpa.specs.UserSpecifications;
import com.yoterra.hippo.security.ActiveUser;

@Service
public class InvitationServiceImpl implements InvitationService {
	
    private static final int INVITATION_BATCH = 10;

	private static final int MAX_INVITATIONS = 1000;

	private static final String INVITATION_SUBJECT = "messages.invitation.subject";

	private static final String INVITATION_BODY = "messages.invitation.body";

	@Autowired
	private InvitationRepository invitationRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private FollowerUserRepository followerUserRepository;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private MessageSource messages;

	@Transactional
	@Override
	public Invitation invite(User inviter, String email) {
		Optional<Invitation> optional = invitationRepository.findByInviterAndInvitedEmailAddress(inviter,email);
		if( optional.isPresent() ) {
			return optional.get();
		}
		Invitation invitation = new Invitation();
		invitation.setDate(Calendar.getInstance());
		invitation.setInvitedEmailAddress(email);
		invitation.setInviter(inviter);
		invitation.setStatus(InvitationStatus.CREATED);
		return invitationRepository.save(invitation);		
	}
	@Transactional
	@Override
	public List<Invitation> invite(User inviter, String[] emails) {
		List<Invitation> invitations = new LinkedList<Invitation>();
		
		for( String email : emails ) {
			invitations.add(invite(inviter,email));
		}
		return invitations;
	}
	
	@Transactional
	@Override
	public List<Invitation> invite(String[] emails) {
		User user = ActiveUser.get();
		return invite(user,emails);
	}

	@Override
	public void accepted(User user, Long id) {
		String email = user.getEmail();
		List<Invitation> invitations = null;;
		if( id != null ) {
			Optional<Invitation> invitation = invitationRepository.findById(id);
			if( !invitation.isPresent() ) {
				throw new IllegalArgumentException("Invalid Invitations id: "+id);
			}
			invitations = Collections.singletonList(invitation.get());
			
		} else {
			invitations = new LinkedList<>();
			int pageIndex = 0;
			while( pageIndex < MAX_INVITATIONS/100 ) {
				Pageable pageable = PageRequest.of(pageIndex,100);
				Page<Invitation> page = invitationRepository.findAllByInvitedEmailAddress(email,pageable);
				invitations.addAll(page.getContent());
				if( !page.hasNext() ) {
					break;
				}
			}
		}
		
		for( Invitation invitation : invitations ) {
			invitation.setStatus(InvitationStatus.ACCEPTED);
			User inviter = invitation.getInviter();
			FollowerUser followerUser = new FollowerUser();
			followerUser.setFollower(inviter);
			followerUser.setFollowee(user);
			followerUserRepository.save(followerUser);
		}
		invitationRepository.saveAll(invitations);
	}

	@Override
	public Map<String, InvitationStatus> invitationsStatuses(User inviter, Collection<String> emails) {
		LinkedList<String> cEmails = new LinkedList<>(emails);
		Map<String,InvitationStatus> statuses = new HashMap<>(emails.size());
		List<User> users = userRepository.findAll(UserSpecifications.emailIn(emails));
		for( User user : users ) {
			statuses.put(user.getEmail(), InvitationStatus.EXISTING);
			cEmails.remove(user.getEmail());
		}
		
		List<Invitation> invitations = invitationRepository.findAll(
				InvitationSpecifications.emailIn(cEmails).and(
				InvitationSpecifications.inviterIs(inviter)));
		
		for( Invitation invitation : invitations ) {
			statuses.put(invitation.getInvitedEmailAddress(), InvitationStatus.ALREADY_INVITED);
			cEmails.remove(invitation.getInvitedEmailAddress());
		}
		
		for( String email : cEmails ) {
			statuses.put(email, InvitationStatus.NOT_INVITED);
		}
		
		return statuses;
	}
	
	@Override
	public Map<String, InvitationStatus> invitationsStatuses(Collection<String> emails) {
		return invitationsStatuses(ActiveUser.get(),emails);
	}
	
	@Override
	public Map<String, InvitationStatus> invitationsStatuses(User inviter, String[] emails) {
		return invitationsStatuses(inviter,Arrays.asList(emails));
	}
	
	@Override
	public Map<String, InvitationStatus> invitationsStatuses(String[] emails) {
		return invitationsStatuses(ActiveUser.get(),emails);
	}
	
	@Override
	@Transactional
	public void sendInvitations() {
    	Page<Invitation> invitations = invitationRepository.findAllByStatus(InvitationStatus.CREATED, PageRequest.of(0,INVITATION_BATCH));
    	invitations.forEach(this::processInvitation);
    }
    
    private void processInvitation(Invitation invitation) {
    	String name = invitation.getInviter().getFirstName() + " " + invitation.getInviter().getLastName();
    	String subject = String.format(messages.getMessage(INVITATION_SUBJECT, new Object[] {name}, Locale.getDefault())); // TODO LOCALE
    	String body = String.format(messages.getMessage(INVITATION_BODY, new Object[] {name}, Locale.getDefault())); // TODO LOCALE
    	emailService.sendEmail(invitation.getInvitedEmailAddress(),subject,body);
    	invitation.setStatus(InvitationStatus.SENT);
    	invitationRepository.save(invitation);
    }

	@Override
	@Transactional
	public void clicked(Long id) {
		Optional<Invitation> opt = invitationRepository.findById(id);
		if( opt.isPresent() ) {
			Invitation invitation = opt.get();
			invitation.setClicked(true);
			invitationRepository.save(invitation);
		}
	}
}
