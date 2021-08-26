package com.yoterra.hippo.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.hippo.jpa.data.UserCommission;
import com.yoterra.hippo.req.AdminPayoutReqSearchRequest;
import com.yoterra.hippo.req.AdminUserCommissionSearchRequest;
import com.yoterra.hippo.services.AdminService;


@Controller
@RequestMapping("/admin") 
public class AdminController {
	
	private static final Logger log = LoggerFactory.getLogger(AdminController.class);

	@Autowired
	private AdminService adminService;
	
	@RequestMapping(value = "/usercommissions", method = RequestMethod.GET)
	public String listUserCommissions(@ModelAttribute AdminUserCommissionSearchRequest req, Model model){
		log.info("List user commissions: {}", req);
		
		Page<UserCommission> page = adminService.listUserCommissions(req);
		model.addAttribute("userCommissionsPage", page);
		return "usercommissions";
	}
	
	@RequestMapping(value = "/payoutrequests", method = RequestMethod.GET)
	public String listPayoutrequests(@ModelAttribute AdminPayoutReqSearchRequest req, Model model){
		log.info("List user payout requests: {}", req);
		
		Page<PayoutRequest> page = adminService.listPayoutRequests(req);
		model.addAttribute("payoutRequestsPage", page);
		return "payoutrequests";
	}
}