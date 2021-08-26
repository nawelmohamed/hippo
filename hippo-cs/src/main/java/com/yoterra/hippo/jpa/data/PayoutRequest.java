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

@Entity
@Table(schema = "hippocs", name = "payoutrequest")
@SequenceGenerator(schema = "hippocs", name="payoutreq_id_gen", sequenceName = "payout_id_seq", initialValue = 1, allocationSize = 50)
public class PayoutRequest {

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "payoutreq_id_gen")
	private Long id;
	
	@Column(nullable = false)
	private Long userId;
	
	@Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
	private Timestamp createdTime;
	
	@Column
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
	private Timestamp processedTime;
	
	@Embedded
	private CommissionAmount amount;
	
	@Column(nullable = false)
	private PayoutRequestStatus status;
	
	@Column
	private String failedToApproveReason;
	@Column
	private String failedToProcessReason;
	
	@ManyToOne
    @JoinColumn(name="processed_by_id")	
	private Admin processedBy;		// admin user if the request was processed manually
	
	@Column
	private String processedByNote;	// handwritten explanation of the admin 	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Timestamp getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(Timestamp createdTime) {
		this.createdTime = createdTime;
	}

	public Timestamp getProcessedTime() {
		return processedTime;
	}

	public void setProcessedTime(Timestamp processedTime) {
		this.processedTime = processedTime;
	}

	public CommissionAmount getAmount() {
		return amount;
	}

	public void setAmount(CommissionAmount amount) {
		this.amount = amount;
	}

	public PayoutRequestStatus getStatus() {
		return status;
	}

	public void setStatus(PayoutRequestStatus status) {
		this.status = status;
	}

	public Admin getProcessedBy() {
		return processedBy;
	}

	public void setProcessedBy(Admin processedBy) {
		this.processedBy = processedBy;
	}

}
