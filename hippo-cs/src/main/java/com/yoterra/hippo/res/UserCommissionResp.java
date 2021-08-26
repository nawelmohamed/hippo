package com.yoterra.hippo.res;

import com.yoterra.hippo.jpa.data.UserCommission;
import com.yoterra.utils.Opt;

public class UserCommissionResp {
	
	private final Long userId;
	// finish

	public static UserCommissionResp of (UserCommission uc) {
		return Opt.get(uc, UserCommissionResp::new);
	}
	
	public UserCommissionResp(UserCommission uc){
		this.userId = uc.getUserId();
	}
	
	public Long getUserId() {
		return userId;
	}
}
