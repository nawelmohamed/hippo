package com.yoterra.hippo.jpa.entities.data.companies;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.Validate;
import org.cassandraunit.shaded.com.google.common.collect.Lists;

import com.yoterra.data.domains.Domain;
import com.yoterra.data.domains.SiteFlag;
import com.yoterra.data.jpa.companyservice.entities.Company;
import com.yoterra.data.jpa.companyservice.entities.CompanyDomain;
import com.yoterra.data.jpa.companyservice.entities.CompanyLogo;
import com.yoterra.data.jpa.companyservice.entities.CompanyName;
import com.yoterra.data.jpa.companyservice.entities.Shipping;
import com.yoterra.data.records.RecordUtils;
import com.yoterra.utils.CollectionUtils;
import com.yoterra.utils.Opt;
import com.yoterra.utils.UrlUtils;

public class CompanyData {
	
	private final Long id;
	private transient Company csCompany;
	private transient com.yoterra.data.records.Company indexCompany;
	
	public static CompanyData fromCSCompany(Company csCompany) {
		CompanyData d = new CompanyData(csCompany.getId());
		d.setCSCompany(csCompany);
		return d;
	}
	
	public static CompanyData fromIndexCompany(com.yoterra.data.records.Company indexCompany) {
		Long id = RecordUtils.toLongId(indexCompany.getId());
		CompanyData d = new CompanyData(id);
		d.setIndexCompany(indexCompany);
		return d;
	}
	
	public CompanyData(Long id){
		Validate.notNull(id, "Company ID can not be null.");
		this.id = id;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setCSCompany(Company csCompany) {
		this.csCompany = csCompany;
	}
	
	public void setIndexCompany(com.yoterra.data.records.Company indexCompany) {
		this.indexCompany = indexCompany;
	}

	
	public String getName() {
		String name = Opt.get(csCompany, Company::getDisplayName, CompanyName::getName);
		if(StringUtils.isBlank(name)) {
			name = Opt.get(indexCompany, c->c.getName());
		}
		return name;
	}
	
	public List<String> getDomains() {
		List<String> domains = Opt.strm(csCompany, Company::getDomains)
				.map(CompanyDomain::getName)
				.filter(StringUtils::isNotBlank)
				.distinct().sorted().toList();
		
		if(CollectionUtils.isEmpty(domains)) {
			domains = Opt.getOrLazyDef(indexCompany, Collections::emptyList, 
					c->c.getUrl(), UrlUtils::extractRootUrlNoWWWnQuietly, Lists::newArrayList);
		}
		return domains;
	}
	
	public Long getProductCount(String locality) {
		return Opt.get(indexCompany, c->c.getProductCountPerLocality(), m->m.get(locality));
	}
	
	public String getLogo(){
		return Opt.get(csCompany, Company::getDisplayLogo, CompanyLogo::getUploadUrl);
	}
	
	public List<Shipping> getShipping(){
		return Opt.get(csCompany, Company::getShipping);
	}
	
	public Boolean getOneClickCheckout(){
		return Opt.strm(csCompany, Company::getDomains)
				.noNulls()
				.map(CompanyDomain::getDomain)
				.noNulls()
				.map(Domain::getSiteFlags)
				.noNulls()
				.flatMap(Collection::stream)
				.anyMatch(SiteFlag.ONE_CLICK_CHECKOUT::equals);
	}
}