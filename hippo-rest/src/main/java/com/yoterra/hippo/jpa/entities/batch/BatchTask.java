package com.yoterra.hippo.jpa.entities.batch;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(schema = "HIPPO", name = "BATCH_TASK")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@SequenceGenerator(schema = "hippo", name="batch_task_generator", sequenceName = "batch_task_sequence", initialValue = 1, allocationSize = 50)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING, name = "type", length = 2)
public abstract class BatchTask {
	
	public static final Sort DEFAULT_SORT = Sort.by(Direction.ASC, "submittedAt");
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="batch_task_generator")
    private Long id;
	
	@Column
	private boolean processed = false;
	
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    @Column(nullable = false)
    private Calendar submittedAt;			// if you change the field name change it in DEFAULT_SORT
    
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    @Column(nullable = true)
    private Calendar processStartedAt;
	
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    @Column(nullable = true)
    private Calendar processEndedAt;
    
	@Column
	private boolean skipped = false;
	
	@Column
	private String skipReason;
    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public boolean isProcessed() {
		return processed;
	}

	public void setProcessed(boolean processed) {
		this.processed = processed;
	}

	public Calendar getSubmittedAt() {
		return submittedAt;
	}

	public void setSubmittedAt(Calendar submittedAt) {
		this.submittedAt = submittedAt;
	}

	public Calendar getProcessStartedAt() {
		return processStartedAt;
	}

	public void setProcessStartedAt(Calendar processStartedAt) {
		this.processStartedAt = processStartedAt;
	}

	public Calendar getProcessEndedAt() {
		return processEndedAt;
	}

	public void setProcessEndedAt(Calendar processEndedAt) {
		this.processEndedAt = processEndedAt;
	}

	public boolean isSkipped() {
		return skipped;
	}

	public void setSkipped(boolean skipped) {
		this.skipped = skipped;
	}

	public String getSkipReason() {
		return skipReason;
	}

	public void setSkipReason(String skipReason) {
		this.skipReason = skipReason;
	}
}
