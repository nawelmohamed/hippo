package com.yoterra.hippo.mob.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yoterra.hippo.jpa.entities.Invitation;
import com.yoterra.hippo.mob.model.InvitationMob;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.services.InvitationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/invitations")
public class InvitationController extends BaseController implements LoggerProvider {

	private static final Logger log = LoggerFactory.getLogger(InvitationController.class);
	
	@Autowired
	private InvitationService invitationService;
	
	@Operation(summary = "Send join invitations", description = "Send join invitations. Typically, "
			+ "a user will import the list of their e-mail contatct for the device.")
	@RequestMapping(value = "/add", params = "emails", method = RequestMethod.POST)
	public Response<List<InvitationMob>> addInvitations(@RequestParam("emails") 
			@Parameter(description = "List of e-mail addresses to send the invitations to.") String[] emails) {
		List<Invitation> invitations = invitationService.invite(emails);
		return Response.success("", InvitationMob.from(invitations));
	}
	
//	@RequestMapping(method = RequestMethod.GET)
//	public Response<Map<String,InvitationStatus>> getInvitations(@RequestParam("emails") String[] emails) {
//		return Response.success("", invitationService.invitationsStatuses(emails));
//	}
	
	@Override
	public Logger getLogger() {
		return log;
	}
}
