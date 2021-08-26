package com.yoterra.hippo.req;

import java.sql.Timestamp;

import com.yoterra.hippo.jpa.data.PayoutRequestStatus;

public class PayoutReqSearchRequest extends PageParams{

	private Timestamp createdAfter;
	private Timestamp createdBefore;
	
	private Timestamp processedAfter;
	private Timestamp processedBefore;
	
	private PayoutRequestStatus status;
	
	private Long processedBy;

	//--------------------
	protected Long userId;
	public static void assignRequiredUserId(PayoutReqSearchRequest req, long userId) {
		req.userId = userId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		throw new UnsupportedOperationException("User ID can not be set using setter");
	}
	// setter omitted intentionally 
	//--------------------
	
	public Timestamp getCreatedAfter() {
		return createdAfter;
	}
	public void setCreatedAfter(Timestamp createdAfter) {
		this.createdAfter = createdAfter;
	}
	public Timestamp getCreatedBefore() {
		return createdBefore;
	}
	public void setCreatedBefore(Timestamp createdBefore) {
		this.createdBefore = createdBefore;
	}
	public Timestamp getProcessedAfter() {
		return processedAfter;
	}
	public void setProcessedAfter(Timestamp processedAfter) {
		this.processedAfter = processedAfter;
	}
	public Timestamp getProcessedBefore() {
		return processedBefore;
	}
	public void setProcessedBefore(Timestamp processedBefore) {
		this.processedBefore = processedBefore;
	}
	public PayoutRequestStatus getStatus() {
		return status;
	}
	public void setStatus(PayoutRequestStatus status) {
		this.status = status;
	}
	public Long getProcessedBy() {
		return processedBy;
	}
	public void setProcessedBy(Long processedBy) {
		this.processedBy = processedBy;
	}
}
