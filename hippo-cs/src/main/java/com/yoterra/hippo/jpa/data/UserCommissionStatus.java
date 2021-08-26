package com.yoterra.hippo.jpa.data;

public enum UserCommissionStatus {

	NEW,				// a new purchase 
	CANCELED,			// usually happens if the product was returned
	PROCESSED,			// after the purchase protection period expires
	PAIDOFF,			// the AN transfered the funds to the Hippo account
	CLOSED				// users can request a payout for it
}
