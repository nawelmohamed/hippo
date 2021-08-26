package com.yoterra.hippo.jpa.queries;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.hippo.jpa.queries.QueryBuilder;
import com.yoterra.hippo.jpa.specs.PayoutRequestSpecifications;
import com.yoterra.hippo.req.PayoutReqSearchRequest;

@Component
public class PayoutRequestQueryBuilder extends QueryBuilder<PayoutRequest, PayoutReqSearchRequest> {

	@Override
	public Specification<PayoutRequest> build(PayoutReqSearchRequest req) {
		
		Specification<PayoutRequest> spec = Specification.where(null);

		if(req.getStatus() != null){
			spec = spec.and(PayoutRequestSpecifications.statusIs(req.getStatus()));
		}
		
		if(req.getProcessedBy() != null){
			spec = spec.and(PayoutRequestSpecifications.processedByIs(req.getProcessedBy()));
		}
		
		if(req.getUserId() != null){
			spec = spec.and(PayoutRequestSpecifications.userIdIs(req.getUserId()));
		}
		
		if(req.getCreatedAfter() != null){
			spec = spec.and(PayoutRequestSpecifications.createdAfter(req.getCreatedAfter()));
		}
		
		if(req.getCreatedBefore() != null){
			spec = spec.and(PayoutRequestSpecifications.createdBefore(req.getCreatedBefore()));
		}
		
		if(req.getProcessedAfter() != null){
			spec = spec.and(PayoutRequestSpecifications.processedAfter(req.getProcessedAfter()));
		}
		
		if(req.getProcessedBefore() != null){
			spec = spec.and(PayoutRequestSpecifications.processedBefore(req.getProcessedBefore()));
		}
		
		return spec;
	}
	
}
