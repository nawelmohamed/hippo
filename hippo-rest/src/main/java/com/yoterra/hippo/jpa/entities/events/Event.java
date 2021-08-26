package com.yoterra.hippo.jpa.entities.events;

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

import org.springframework.format.annotation.DateTimeFormat;

import com.yoterra.hippo.jpa.entities.ActiveItem;
import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;

@Entity
@Table(schema = "HIPPO", name = "EVENT")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@SequenceGenerator(schema = "hippo", name="event_generator", sequenceName = "event_sequence", initialValue = 1, allocationSize = 50)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING, name = "type", length = 2)
public abstract class Event<T> implements ActiveItem, DataResolvablesContainer<Long>{
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="event_generator")
    private Long id;
	
	@Column
	private boolean processed = false;
	
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Calendar timestamp;
	
	public abstract EventType getType();
	public abstract T getItem();
	
	public Long getId() {
		return id;
	}
	
	public boolean isProcessed() {
		return processed;
	}
	public void setProcessed(boolean processed) {
		this.processed = processed;
	}
	
	public Calendar getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Calendar timestamp) {
		this.timestamp = timestamp;
	}
	
	@Override
	public boolean isDisabled() {
		T t = getItem();
		return t instanceof ActiveItem && ((ActiveItem)t).isDisabled();
	}
}
