package com.yoterra.hippo.jpa.queries;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import com.yoterra.hippo.jpa.data.UserCommission;
import com.yoterra.hippo.jpa.queries.QueryBuilder;
import com.yoterra.hippo.jpa.specs.UserCommissionSpecifications;
import com.yoterra.hippo.req.UserCommissionSearchRequest;

@Component
public class UserCommissionQueryBuilder extends QueryBuilder<UserCommission, UserCommissionSearchRequest> {

	@Override
	public Specification<UserCommission> build(UserCommissionSearchRequest req) {
//
		Specification<UserCommission> spec = Specification.where(null);

		if(req.getStatus() != null){
			spec = spec.and(UserCommissionSpecifications.statusIs(req.getStatus()));
		}

		if(req.getUserId() != null){
			spec = spec.and(UserCommissionSpecifications.userIdIs(req.getUserId()));
		}
		
		if(req.getBuyerId() != null){
			spec = spec.and(UserCommissionSpecifications.buyerIdIs(req.getBuyerId()));
		}
		
		if(req.getCollectionId() != null){
			spec = spec.and(UserCommissionSpecifications.collectionIdIs(req.getCollectionId()));
		}
		
		if(req.getCollectionItemId() != null){
			spec = spec.and(UserCommissionSpecifications.collectionItemIdIs(req.getCollectionItemId()));
		}
		
		if(StringUtils.isNotBlank(req.getDealId())){
			spec = spec.and(UserCommissionSpecifications.dealIdIs(req.getDealId()));
		}
		
		if(StringUtils.isNotBlank(req.getProductId())){
			spec = spec.and(UserCommissionSpecifications.productIdIs(req.getProductId()));
		}
		
		if(StringUtils.isNotBlank(req.getOfferId())){
			spec = spec.and(UserCommissionSpecifications.offerIdIs(req.getOfferId()));
		}
		
		if(StringUtils.isNotBlank(req.getTrackingId())){
			spec = spec.and(UserCommissionSpecifications.trackingIdIs(req.getTrackingId()));
		}
		
		if(req.getPayoutRequestId() != null){
			spec = spec.and(UserCommissionSpecifications.payoutRequestIdIs(req.getPayoutRequestId()));
		}
		
		if(req.getCreatedAfter() != null){
			spec = spec.and(UserCommissionSpecifications.createdAfter(req.getCreatedAfter()));
		}
		
		if(req.getCreatedBefore() != null){
			spec = spec.and(UserCommissionSpecifications.createdBefore(req.getCreatedBefore()));
		}
		
		return spec;
	}
	
}
