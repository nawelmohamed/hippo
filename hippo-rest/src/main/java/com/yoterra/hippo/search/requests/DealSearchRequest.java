package com.yoterra.hippo.search.requests;

import java.util.List;

import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.data.dealservice.DealType;
import com.yoterra.data.records.DataLocalityUtils;
import com.yoterra.data.repos.query.DealRequest;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class DealSearchRequest extends SearchRequest implements SolrRepoRequest<DealRequest> {

	private static final String US_LOCALITY = DataLocalityUtils.DEFAULT_LOCALITY;

	@Parameter(required = false, description = "If true - show only coupon deals, if false - show only non-coupon deals, otherwise show both. ")
	private Boolean coupon;

	@Parameter(required = false, description = "If true - show only sitewide deals, if false - show only non-sitewide deals, otherwise show both. ")
	private Boolean siteWide;

	@Parameter(required = false, description = "Filter by deal type. At the moment it only make sense to use DISCOUNT and SHIPPING type filtering.")
	private List<DealType> type;

	@Parameter(required = false, description = "Filter by deal provider site. Multiple sites can be specified.")
	private List<String> sites;

	@Parameter(required = false, description = "Filter by deal provider site prefix.")
	private String sitePrefix;
	
	@Parameter(required = false, description = "Filter by deal taxonomy tuple.")
	private List<String> taxonomy;

	public List<DealType> getType() {
		return type;
	}

	public Boolean getSiteWide() {
		return siteWide;
	}

	public void setSiteWide(Boolean siteWide) {
		this.siteWide = siteWide;
	}

	public void setType(List<DealType> type) {
		this.type = type;
	}

	public Boolean getCoupon() {
		return coupon;
	}

	public void setCoupon(Boolean coupon) {
		this.coupon = coupon;
	}
	
	public List<String> getSites() {
		return sites;
	}

	public void setSites(List<String> sites) {
		this.sites = sites;
	}

	public String getSitePrefix() {
		return sitePrefix;
	}

	public void setSitePrefix(String sitePrefix) {
		this.sitePrefix = sitePrefix;
	}

	public List<String> getTaxonomy() {
		return taxonomy;
	}

	public void setTaxonomy(List<String> taxonomy) {
		this.taxonomy = taxonomy;
	}
	
	public DealSearchRequest initAutocompleteReq(String q){
		setQ(q);		
		this.setSize(AUTOCOMPLETE_PAGE_SIZE);
		return this;
	}

	@Override
	public DealRequest toSolrRepoRequest() {
		return new DealRequest() {
			
			@Override
			public String getKeywords() {
				return getQ();
			}
			
			@Override
			public boolean onlyValid() {
				return true;
			}

			@Override
			public Boolean getIsCoupon() {
				return coupon;
			}
			
			@Override
			public Boolean getIsSiteWide() {
				return siteWide;
			}

			@Override
			public List<String> getSites() {
				return sites;
			}

			public String getSitePrefix() {
				return sitePrefix;
			}
			
			@Override
			public List<DealType> getAllOfTypes() {
				return type;
			}
			
			@Override
			public List<String> getTaxonomy() {
				return taxonomy;
			}

			@Override
			public String getLocalityCode() {
				return US_LOCALITY;
			}
		};
	}
}
