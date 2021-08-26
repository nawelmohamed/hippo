package com.yoterra.hippo.res;

import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.utils.Opt;

public class PayoutRequestResp {
	
	private final Long userId;
	// finish

	public static PayoutRequestResp of (PayoutRequest pr) {
		return Opt.get(pr, PayoutRequestResp::new);
	}
	
	public PayoutRequestResp(PayoutRequest pr){
		this.userId = pr.getUserId();
	}
	
	public Long getUserId() {
		return userId;
	}
}
