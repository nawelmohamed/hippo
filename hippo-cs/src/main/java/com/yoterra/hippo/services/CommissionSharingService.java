package com.yoterra.hippo.services;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yoterra.hippo.exceptions.MinimumNotReachedException;
import com.yoterra.hippo.jpa.data.CommissionAmount;
import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.hippo.jpa.data.PayoutRequestStatus;
import com.yoterra.hippo.jpa.data.UserCommission;
import com.yoterra.hippo.jpa.queries.PayoutRequestQueryBuilder;
import com.yoterra.hippo.jpa.queries.UserCommissionQueryBuilder;
import com.yoterra.hippo.jpa.repositories.PaymentRequestRepository;
import com.yoterra.hippo.jpa.repositories.UserCommissionRepository;
import com.yoterra.hippo.req.PayoutReqSearchRequest;
import com.yoterra.hippo.req.UserCommissionSearchRequest;

@Service
public class CommissionSharingService{
	
	@Value("${com.hippo.cs.payout.minimum:50}")
	private float payoutMinimumInUsd;
	
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
	
	@Autowired
	private CommissionsCurrencyHandler commissionsCurrencyHandler;
	
	@Transactional(readOnly = true)
	public Page<UserCommission> getUserCommissions(long userId, UserCommissionSearchRequest req){
		UserCommissionSearchRequest.assignRequiredUserId(req, userId);
		Specification<UserCommission> spec = userCommissionQueryBuilder.build(req);
		Page<UserCommission> userCommissions = userCommissionRepository.findAll(spec, req.getPageable());
		return userCommissions;
	}
	
	@Transactional(readOnly = true)
	public Page<PayoutRequest> getPayoutRequests(long userId, PayoutReqSearchRequest req){
		PayoutReqSearchRequest.assignRequiredUserId(req, userId);
		Specification<PayoutRequest> spec = payoutRequestQueryBuilder.build(req);
		Page<PayoutRequest> payoutRequests = paymentRequestRepository.findAll(spec, req.getPageable());
		return payoutRequests;
	}
	
//	@Transactional
//	public UserCommission addUserCommission(UserCommissionForm userCommissionForm){
//		UserCommission uc = new UserCommission();
//		
//		
//		
//		userCommissionRepository.save(uc);
//		return uc;
//	}
	
	@Transactional
	public PayoutRequest createNewPayoutRequest(long userId) throws MinimumNotReachedException{
		PayoutRequest pr = new PayoutRequest();
		
		List<UserCommission> payableCommissions = userCommissionRepository.getPayableCommissions(userId);
		
		CommissionAmount caUsd = commissionsCurrencyHandler.sumAmountsUSD(payableCommissions);
		
		if(caUsd.getValue() < payoutMinimumInUsd)
			throw new MinimumNotReachedException("The payout minimum is $" + payoutMinimumInUsd);
		
		pr.setAmount(caUsd);
		pr.setCreatedTime(new Timestamp(System.currentTimeMillis()));
		pr.setUserId(userId);
		pr.setStatus(PayoutRequestStatus.NEW);
		
		// this has to be atomic !!!!! TEST TEST TEST
		paymentRequestRepository.save(pr);
		payableCommissions.forEach(uc->uc.setPayoutRequest(pr));
		userCommissionRepository.saveAll(payableCommissions);
		
		return pr;
	}
}
