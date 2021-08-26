package com.yoterra.hippo.jpa.specs;

import java.sql.Timestamp;

import org.springframework.data.jpa.domain.Specification;

import com.yoterra.hippo.jpa.data.Admin_;
import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.hippo.jpa.data.PayoutRequestStatus;
import com.yoterra.hippo.jpa.data.PayoutRequest_;

public class PayoutRequestSpecifications extends SpecificationsRoot {

	public static Specification<PayoutRequest> statusIs(PayoutRequestStatus status) {
		return equal(PayoutRequest_.status, status);
	}
	
	public static Specification<PayoutRequest> processedByIs(Long adminId) {
		return equal(PayoutRequest_.processedBy, Admin_.id, adminId);
	}
	
	public static Specification<PayoutRequest> userIdIs(Long userId) {
		return equal(PayoutRequest_.userId, userId);
	}
	
	public static Specification<PayoutRequest> createdAfter(Timestamp time) {
		return after(PayoutRequest_.createdTime, time);
	}
	
	public static Specification<PayoutRequest> createdBefore(Timestamp time) {
		return before(PayoutRequest_.createdTime, time);
	}
	
	public static Specification<PayoutRequest> processedAfter(Timestamp time) {
		return after(PayoutRequest_.processedTime, time);
	}
	
	public static Specification<PayoutRequest> processedBefore(Timestamp time) {
		return before(PayoutRequest_.processedTime, time);
	}
}
