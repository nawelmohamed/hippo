package com.yoterra.hippo.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.hippo.jpa.data.UserCommission;
import com.yoterra.hippo.req.PayoutReqSearchRequest;
import com.yoterra.hippo.req.UserCommissionSearchRequest;
import com.yoterra.hippo.res.PayoutRequestResp;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.res.UserCommissionResp;
import com.yoterra.hippo.services.CommissionSharingService;
import com.yoterra.utils.CollectionUtils;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;


@RestController
@RequestMapping("/rest/cs") 
public class CommissionSharingRestController {
	
	private static final Logger log = LoggerFactory.getLogger(CommissionSharingRestController.class);

	@Autowired
	private CommissionSharingService commissionSharingService;
	
//	@Operation(summary = "Add new user commission", description = "Add new user commission.")
//	@RequestMapping(value = "/add", method = RequestMethod.POST)
//	public Response<?> addUserCommission(@ModelAttribute @Validated(value = Form.Create.class) UserCommissionForm form, BindingResult errors){
//		log.info("Add new user commission: {}", form);
//		
//		if(errors.hasErrors()) 
//			Response.throwError(getOneErrorMessage(errors));
//		
//		UserCommission userCommission = commissionSharingService.addUserCommission(form);
//		UserCommissionResp ucr = UserCommissionResp.of(userCommission);
//		
//		return Response.success("Collection successfully created", ucr);
//	}
	
	@Operation(summary = "Get commissions of a user (collection owner).", 
			description = "Get commissions of a user (collection owner).")
	@RequestMapping(value = "/commissions", params = "userId", method = RequestMethod.GET)
	public Response<RPage<UserCommissionResp>> getUserCommissions( 
			@Parameter(description = "User ID") @RequestParam("userId") Long userId, 
			@ModelAttribute UserCommissionSearchRequest req){
		log.info("Get commissions of the user: {}", userId);
		Page<UserCommission> userCommissions = commissionSharingService.getUserCommissions(userId, req);
		RPage<UserCommissionResp> page = RPage.of(userCommissions, UserCommissionResp::of);
		
		return Response.success("User commissions found", page);
	}
	
	@Operation(summary = "Get payout requests of a user.", 
			description = "Get payout requests of a user.")
	@RequestMapping(value = "/payoutrequests", params = "userId", method = RequestMethod.GET)
	public Response<RPage<PayoutRequestResp>> getPayoutRequests( 
			@Parameter(description = "User ID") @RequestParam("userId") Long userId, 
			@ModelAttribute PayoutReqSearchRequest req){
		log.info("Get peyout requests of the user: {}", userId);
		Page<PayoutRequest> payoutReqs = commissionSharingService.getPayoutRequests(userId, req);
		RPage<PayoutRequestResp> page = RPage.of(payoutReqs, PayoutRequestResp::of);
		
		return Response.success("User payout requests found", page);
	}
	
	public String getOneErrorMessage(BindingResult errors){
		return Opt.get(errors, BindingResult::getAllErrors, CollectionUtils::first, ObjectError::getDefaultMessage);
	}
}