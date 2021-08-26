package com.yoterra.hippo.mob.model;


import com.yoterra.data.records.Currency;
import com.yoterra.data.records.Price;
import com.yoterra.data.records.PriceUtils;
import com.yoterra.utils.Opt;

public class PriceMob {
	
	private final Currency currency;
	private final Float value;
	private final String text;
	private final String symbol;

	public static PriceMob of(Price price) {
		return Opt.get(price, PriceMob::new);
	}
	
	public PriceMob(Price price){
		this.currency = price.getCurrency();
		this.value = price.getValue();
		this.symbol = PriceUtils.getCurrencySymbol(this.currency);
		this.text = PriceUtils.toStandardString(price, 2);
	}

	public Currency getCurrency() {
		return currency;
	}

	public Float getValue() {
		return value;
	}

	public String getText() {
		return text;
	}
	
	public String getSymbol() {
		return symbol;
	}
}
