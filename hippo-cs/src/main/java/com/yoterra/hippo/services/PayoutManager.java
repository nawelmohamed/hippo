package com.yoterra.hippo.services;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.stereotype.Component;

import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.hippo.jpa.data.PayoutRequestStatus;
import com.yoterra.hippo.jpa.repositories.PaymentRequestRepository;

@Component
public class PayoutManager{
	
	private PaymentRequestRepository paymentRequestRepository;

	@Transactional										// check how to actually make this save
														// Spring transaction is not gonna work probably 
														// cause this can be a long and interactive task
	public void processPayoutRequest(long prid){
		PayoutRequest preq = paymentRequestRepository.findById(prid)
			.orElseThrow(()->new EntityNotFoundException("The payout request does not exist. ID: " + prid));
		
		if(preq.getStatus().readyToProcess()) {		// only approved and not processed are allowed
			
			try {
				
				// process the request here using a payment provider 
				
				preq.setStatus(PayoutRequestStatus.PROCESSED_AUTOMATICALLY);

			}catch (Exception e) {			// payment processing exception
				preq.setStatus(PayoutRequestStatus.FAILED_TO_PROCESS);
			}finally {
				paymentRequestRepository.save(preq);
			}
			
		}else {
			throw new IllegalStateException("Can't process non-approved or already processed requests");
		}
	}
}
