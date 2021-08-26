package com.yoterra.hippo.jpa.data;

public enum PayoutRequestStatus {

	// * * * be careful when adding new statuses * * *
	NEW(false, false),							 
	
	FAILED_TO_APPROVE(false, false),
	APPROVED_AUTOMATICALLY(true, false),
	APPROVED_MANUALLY(true, false),
	
	FAILED_TO_PROCESS(true, false),
	PROCESSED_AUTOMATICALLY(true, true),
	PROCESSED_MANUALLY(true, true)
	;
	
	private final boolean approved;
	private final boolean processed;
	
	private PayoutRequestStatus(boolean approved, boolean processed) {
		this.approved = approved;
		this.processed = processed;
	}
	
	public boolean isApproved() {
		return approved;
	}
	
	public boolean isProcessed() {
		return processed;
	}
	
	public boolean readyToProcess(){
		return approved && !processed;
	}
}
