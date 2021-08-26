package com.yoterra.hippo.jpa.data;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.yoterra.data.records.Currency;

@Embeddable
public class CommissionAmount {

	@Column (nullable = false, name = "amount_value")
	private float value;
	
	@Column (nullable = false, name = "amount_currency")
	private Currency currency;

	public float getValue() {
		return value;
	}

	public void setValue(float value) {
		this.value = value;
	}

	public Currency getCurrency() {
		return currency;
	}

	public void setCurrency(Currency currency) {
		this.currency = currency;
	}
}
