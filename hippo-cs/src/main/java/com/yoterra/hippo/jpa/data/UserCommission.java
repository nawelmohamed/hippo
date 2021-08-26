package com.yoterra.hippo.jpa.data;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.yoterra.data.affiliates.AffiliateProvider;

@Entity
@Table(schema = "hippocs", name = "usercommission")
@SequenceGenerator(schema = "hippocs", name="usercommission_id_gen", sequenceName = "usercommission_id_seq", initialValue = 1, allocationSize = 50)
public class UserCommission {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usercommission_id_gen")
	private Long id;
	
	@Column(nullable = false)
	private UserCommissionStatus status; 
	
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(style = "M-")
	private Timestamp createdTime;
	
	@Column(nullable = false)
	private AffiliateProvider affiliateProvider;
	
	@Column(nullable = false)
	private String trackingId;
	
	@Column(nullable = false)
	private String sourceId;				// encoded user and buyer information
	
	@Column(nullable = false)
	private Long buyerId;					// the buyers ID -- it can be null if the user deletes or deactivates the account 
	@Column(nullable = false)
	private Long userId;					// the purchased item collection owner id (the one to be paid) 
											// What to do if the user tries to delete/deactivate the account ??
	@Column(nullable = false)
	private Long collectionId;				// the purchased item collection id
	@Column(nullable = false)
	private Long collectionItemId;			// the purchased collection item id
	@Column
	private String dealId;					// deal id if a deal aff. link was used
	@Column
	private String productId;				// group product id if a product aff. link was used
	@Column
	private String offerId;					// offer id within the product group determined by the product id
	
	@Embedded
	private CommissionAmount amount;
	
	@ManyToOne(optional = true)
	@JoinColumn(name="payout_id")
	private PayoutRequest payoutRequest;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public UserCommissionStatus getStatus() {
		return status;
	}

	public void setStatus(UserCommissionStatus status) {
		this.status = status;
	}

	public Timestamp getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(Timestamp createdTime) {
		this.createdTime = createdTime;
	}

	public AffiliateProvider getAffiliateProvider() {
		return affiliateProvider;
	}

	public void setAffiliateProvider(AffiliateProvider affiliateProvider) {
		this.affiliateProvider = affiliateProvider;
	}

	public String getTrackingId() {
		return trackingId;
	}

	public void setTrackingId(String trackingId) {
		this.trackingId = trackingId;
	}

	public String getSourceId() {
		return sourceId;
	}

	public void setSourceId(String sourceId) {
		this.sourceId = sourceId;
	}

	public Long getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(Long buyerId) {
		this.buyerId = buyerId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getCollectionId() {
		return collectionId;
	}

	public void setCollectionId(Long collectionId) {
		this.collectionId = collectionId;
	}

	public Long getCollectionItemId() {
		return collectionItemId;
	}

	public void setCollectionItemId(Long collectionItemId) {
		this.collectionItemId = collectionItemId;
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

	public CommissionAmount getAmount() {
		return amount;
	}

	public void setAmount(CommissionAmount amount) {
		this.amount = amount;
	}

	public PayoutRequest getPayoutRequest() {
		return payoutRequest;
	}

	public void setPayoutRequest(PayoutRequest payoutRequest) {
		this.payoutRequest = payoutRequest;
	}
}
