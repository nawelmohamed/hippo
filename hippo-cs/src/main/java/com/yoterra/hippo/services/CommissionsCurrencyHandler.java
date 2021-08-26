package com.yoterra.hippo.services;

import org.apache.commons.collections4.IterableUtils;
import org.springframework.stereotype.Component;

import com.yoterra.commons.FIXME;
import com.yoterra.data.records.Currency;
import com.yoterra.hippo.jpa.data.CommissionAmount;
import com.yoterra.hippo.jpa.data.UserCommission;

@Component
public class CommissionsCurrencyHandler {
	
	public CommissionAmount sumAmountsUSD(Iterable<UserCommission> commissionAmounts){
		return sumUSD(IterableUtils.transformedIterable(commissionAmounts, UserCommission::getAmount));
	}

	public CommissionAmount sumUSD(Iterable<CommissionAmount> commissionAmounts){
		
		float total = 0;
		FIXME.warn("Convert other currencies");
		for (CommissionAmount ca : commissionAmounts) {
			if(ca.getCurrency() == Currency.USD) {
				total += ca.getValue();
			}else {
				FIXME.warn(ca.getCurrency() + " not supported");
			}
		}
		CommissionAmount tca = new CommissionAmount();
		tca.setCurrency(Currency.USD);
		tca.setValue(total);
		return tca;
	}

}
