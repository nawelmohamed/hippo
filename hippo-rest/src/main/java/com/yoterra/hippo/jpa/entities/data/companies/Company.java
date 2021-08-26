package com.yoterra.hippo.jpa.entities.data.companies;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;

import org.apache.commons.lang.Validate;

import com.yoterra.data.records.DataLocalityUtils;
import com.yoterra.hippo.jpa.entities.Autocompletable;
import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.Favoritable;
import com.yoterra.hippo.jpa.entities.Imageable;
import com.yoterra.hippo.jpa.entities.MetacountsMapImpl;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.followers.Followable;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;

@MappedSuperclass
public abstract class Company extends MetacountsMapImpl 
		implements Commentable<Long>, Likeable<Long>, Favoritable<Long>, Followable<Long>, Imageable, Autocompletable<Long>, DataResolvable<Long> {

	@Id
    private Long id;
	
	@Column
	private Boolean verified = false;
	
	@Transient
	private CompanyData data;
	
	@Override
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return getData().getName();
	}
	
	public List<String> getDomains() {
		return getData().getDomains();
	}
	@Override
	public String getImageUrl() {
		return getData().getLogo();
	}
	
	protected CompanyData getData() {
		Validate.isTrue(data!=null,"No company data");
		return data;
	}
	
	public void setCSCompany(com.yoterra.data.jpa.companyservice.entities.Company company) {
		if( data == null ) {
			data = CompanyData.fromCSCompany(company);
		} else {
			data.setCSCompany(company);
		}
		if( id == null ) {
			id = data.getId();
		}
	}
	
	public void setIndexCompany(com.yoterra.data.records.Company company) {
		if( data == null ) {
			data = CompanyData.fromIndexCompany(company);
		} else {
			data.setIndexCompany(company);
		}
		if( id == null ) {
			id = data.getId();
		}
	}
	
	public Boolean getVerified() {
		return verified;
	}

	public void setVerified(Boolean verified) {
		this.verified = verified;
	}

	public Long getProductCount() {
		return getData().getProductCount(DataLocalityUtils.DEFAULT_LOCALITY);
	}
	
	public Boolean getOneClickCheckout() {
		return getData().getOneClickCheckout();
	}
	
	@Override
	public SettingsCategory getNotificationsSettingsCategory() {
		return SettingsCategory.NONE;
	}
	
	@Override
	public String getDisplayName() {
		return getName();
	}
	
	@Override
	public boolean isDataResolved() {
		return data != null;
	}
}
