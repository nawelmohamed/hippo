package com.yoterra.hippo.jpa.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.Where;

@Where(clause = "id > 0") // !!!! NOT WORKING FOR SUBCLASSES, IT HAS TO BE COPIED EVERYWHERE
@MappedSuperclass
public abstract class ActiveEntity implements ActiveItem, IdEntity<Long>{

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ae_sec_gen")
    protected Long id;
	
	public Long getId() {
		return id;
	}
	
	@Override
	public boolean isDisabled() {
		return getId() < 0;
	}
}
