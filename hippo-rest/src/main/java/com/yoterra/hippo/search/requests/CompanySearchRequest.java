package com.yoterra.hippo.search.requests;

import java.util.Map;

import org.springdoc.api.annotations.ParameterObject;

import com.google.common.collect.ImmutableMap;
import com.yoterra.data.records.DataLocalityUtils;
import com.yoterra.data.repos.query.CompanyRequest;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class CompanySearchRequest extends SearchRequest implements SolrRepoRequest<CompanyRequest> {

	private static final String US_LOCALITY = DataLocalityUtils.DEFAULT_LOCALITY;
	
	@Parameter(required = false, description = "Filter by name (exact match)")
	private String name;
	
	@Parameter(required = false, description = "Filter by name prefix")
	private String namePrefix;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getNamePrefix() {
		return namePrefix;
	}
	
	public void setNamePrefix(String namePrefix) {
		this.namePrefix = namePrefix;
	}
	
	@SuppressWarnings("unchecked")
	public <S extends SearchRequest> S initAutocompleteReq(String q){
		setNamePrefix(q);
		this.setSize(AUTOCOMPLETE_PAGE_SIZE);
		return (S) this;
	}

	@Override
	public CompanyRequest toSolrRepoRequest() {
		return new CompanyRequest() {
			
			@Override
			public String getKeywords() {
				return getQ();
			}
			
			@Override
			public String getNamePrefix() {
				return namePrefix;
			}
			
			@Override
			public String getName() {
				return name;
			}
			
			@Override
			public Map<String, Integer> getMinProductCount() {
				return ImmutableMap.of(US_LOCALITY, 1);//Math.max(1, minProductCount));
			}
		};
	}
}
