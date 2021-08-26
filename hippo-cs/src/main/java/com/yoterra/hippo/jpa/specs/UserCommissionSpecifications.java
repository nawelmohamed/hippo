package com.yoterra.hippo.jpa.specs;

import java.sql.Timestamp;

import org.springframework.data.jpa.domain.Specification;

import com.yoterra.hippo.jpa.data.PayoutRequest_;
import com.yoterra.hippo.jpa.data.UserCommission;
import com.yoterra.hippo.jpa.data.UserCommissionStatus;
import com.yoterra.hippo.jpa.data.UserCommission_;

public class UserCommissionSpecifications extends SpecificationsRoot {
	
	public static Specification<UserCommission> statusIs(UserCommissionStatus status) {
		return equal(UserCommission_.status, status);
	}
	
	public static Specification<UserCommission> createdAfter(Timestamp time) {
		return after(UserCommission_.createdTime, time);
	}
	
	public static Specification<UserCommission> createdBefore(Timestamp time) {
		return before(UserCommission_.createdTime, time);
	}
	
	public static Specification<UserCommission> trackingIdIs(String trackingId) {
		return equal(UserCommission_.trackingId, trackingId);
	}
	
	public static Specification<UserCommission> dealIdIs(String dealId) {
		return equal(UserCommission_.dealId, dealId);
	}
	
	public static Specification<UserCommission> productIdIs(String productId) {
		return equal(UserCommission_.productId, productId);
	}
	
	public static Specification<UserCommission> offerIdIs(String offerId) {
		return equal(UserCommission_.offerId, offerId);
	}
	
	public static Specification<UserCommission> buyerIdIs(Long buyerId) {
		return equal(UserCommission_.buyerId, buyerId);
	}
	
	public static Specification<UserCommission> collectionItemIdIs(Long collectionItemId) {
		return equal(UserCommission_.collectionItemId, collectionItemId);
	}
	
	public static Specification<UserCommission> collectionIdIs(Long collectionId) {
		return equal(UserCommission_.collectionId, collectionId);
	}
	
	public static Specification<UserCommission> userIdIs(Long userId) {
		return equal(UserCommission_.userId, userId);
	}
	
	public static Specification<UserCommission> payoutRequestIdIs(Long payoutRequestId) {
		return equal(UserCommission_.payoutRequest, PayoutRequest_.id, payoutRequestId);
	}
}
