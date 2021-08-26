package com.yoterra.hippo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.hippo.jpa.data.UserCommission;
import com.yoterra.hippo.jpa.queries.PayoutRequestQueryBuilder;
import com.yoterra.hippo.jpa.queries.UserCommissionQueryBuilder;
import com.yoterra.hippo.jpa.repositories.PaymentRequestRepository;
import com.yoterra.hippo.jpa.repositories.UserCommissionRepository;
import com.yoterra.hippo.req.AdminPayoutReqSearchRequest;
import com.yoterra.hippo.req.AdminUserCommissionSearchRequest;

@Service
public class AdminService{
	
//	private Supplier<EntityNotFoundException> MISSING_COLLECTION_EXC_SUPPLIER = 
//			()->new EntityNotFoundException("The collection does not exist or it has been deleted.");
	
	@Autowired
	private UserCommissionQueryBuilder userCommissionQueryBuilder;
	
	@Autowired
	private PayoutRequestQueryBuilder payoutRequestQueryBuilder;
	
	@Autowired
	private UserCommissionRepository userCommissionRepository;
	
	@Autowired
	private PaymentRequestRepository paymentRequestRepository;
	
	@Transactional(readOnly = true)
	public Page<UserCommission> listUserCommissions(AdminUserCommissionSearchRequest req){
		Specification<UserCommission> spec = userCommissionQueryBuilder.build(req);
		Page<UserCommission> userCommissions = userCommissionRepository.findAll(spec, req.getPageable());
		return userCommissions;
	}
	
	@Transactional(readOnly = true)
	public Page<PayoutRequest> listPayoutRequests(AdminPayoutReqSearchRequest req){
		Specification<PayoutRequest> spec = payoutRequestQueryBuilder.build(req);
		Page<PayoutRequest> payoutRequests = paymentRequestRepository.findAll(spec, req.getPageable());
		return payoutRequests;
	}
}
