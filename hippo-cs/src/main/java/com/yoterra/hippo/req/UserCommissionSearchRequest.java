package com.yoterra.hippo.req;

import java.sql.Timestamp;

import com.yoterra.hippo.jpa.data.UserCommissionStatus;

public class UserCommissionSearchRequest extends PageParams{

	private UserCommissionStatus status;
	
	private Timestamp createdAfter;
	private Timestamp createdBefore;
	
	private String trackingId;

	private Long buyerId;					
	private Long collectionItemId;			
	private Long collectionId;		
	
	private String dealId;					
	private String productId;			
	private String offerId;	
	
	private Long payoutRequestId;
	
	//--------------------
	protected Long userId;
	public static void assignRequiredUserId(UserCommissionSearchRequest req, long userId) {
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

	public UserCommissionStatus getStatus() {
		return status;
	}

	public void setStatus(UserCommissionStatus status) {
		this.status = status;
	}

	public String getTrackingId() {
		return trackingId;
	}

	public void setTrackingId(String trackingId) {
		this.trackingId = trackingId;
	}

	public Long getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(Long buyerId) {
		this.buyerId = buyerId;
	}

	public Long getCollectionItemId() {
		return collectionItemId;
	}

	public void setCollectionItemId(Long collectionItemId) {
		this.collectionItemId = collectionItemId;
	}

	public Long getCollectionId() {
		return collectionId;
	}

	public void setCollectionId(Long collectionId) {
		this.collectionId = collectionId;
	}
	
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
	public Long getPayoutRequestId() {
		return payoutRequestId;
	}

	public void setPayoutRequestId(Long payoutRequestId) {
		this.payoutRequestId = payoutRequestId;
	}
	public String getDealId() {
		return dealId;
	}
	public void setDealId(String dealId) {
		this.dealId = dealId;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getOfferId() {
		return offerId;
	}
	public void setOfferId(String offerId) {
		this.offerId = offerId;
	}
}
