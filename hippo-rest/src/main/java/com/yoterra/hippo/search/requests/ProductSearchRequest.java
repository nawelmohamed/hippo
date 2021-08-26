package com.yoterra.hippo.search.requests;

import java.util.List;
import java.util.Map;

import org.springdoc.api.annotations.ParameterObject;

import com.google.common.collect.ImmutableMap;
import com.yoterra.data.records.DataLocalityUtils;
import com.yoterra.data.records.RecordUtils;
import com.yoterra.data.repos.query.ProductRequest;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class ProductSearchRequest extends SearchRequest implements SolrRepoRequest<ProductRequest> {

	private static final String US_LOCALITY = DataLocalityUtils.DEFAULT_LOCALITY;

	@Parameter(required = false, description = "Filter by product name (partial matching, case insensitive).")
    private String productName;
    
	@Parameter(required = false, description = "Filter by model number.")
    private String modelNumber;
    
	@Parameter(required = false, description = "Filter by UPC.")
    private String upc;

	@Parameter(required = false, description = "Filter by brand name (partial matching, case insensitive).")
	private String brandName;
	
	@Parameter(required = false, description = "Filter by store name (partial matching, case insensitive).")
	private String storeName;
	
	@Parameter(required = false, description = "Filter by brand id (multiple IDs can be specified).")
	private List<Long> brandId;
	
	@Parameter(required = false, description = "Filter by store id (multiple IDs can be specified).")
	private List<Long> storeId;
	
	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getModelNumber() {
		return modelNumber;
	}

	public void setModelNumber(String modelNumber) {
		this.modelNumber = modelNumber;
	}

	public String getUpc() {
		return upc;
	}

	public void setUpc(String upc) {
		this.upc = upc;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public List<Long> getBrandId() {
		return brandId;
	}

	public void setBrandId(List<Long> brandId) {
		this.brandId = brandId;
	}

	public List<Long> getStoreId() {
		return storeId;
	}

	public void setStoreId(List<Long> storeId) {
		this.storeId = storeId;
	}
	
	public ProductSearchRequest initAutocompleteReq(String q){
		setQ(q);		
		this.setSize(AUTOCOMPLETE_PAGE_SIZE);
		return this;
	}

	@Override
	public ProductRequest toSolrRepoRequest() {
		return new ProductRequest() {
			
			@Override
			public String getKeywords() {
				return getQ();
			}
			
			@Override
		    public String getProductName() {
				return productName;
		    }

		    @Override
		    public String getModelNumber() {
		    	return modelNumber;
		    }

		    @Override
		    public String getUpc() {
		    	return upc;
		    }
		    
		    @Override
		    public List<String> getBrandId() {
		    	return Opt.strm(brandId)
		    			.map(RecordUtils::fromLongId)
		    			.map(RecordUtils::toBase64UrlSafeString)
		    			.toList();
		    }
		    
		    @Override
		    public String getBrandName() {
		    	return brandName;
		    }
		    
		    @Override
		    public List<String> getStoreId() {
		    	return Opt.strm(storeId)
		    			.map(RecordUtils::fromLongId)
		    			.map(RecordUtils::toBase64UrlSafeString)
		    			.toList();
		    }
		    
		    @Override
		    public String getStoreName() {
		    	return storeName;
		    }
		    
			@Override
			public Map<String, Long> getMinRecordCount() {
				return ImmutableMap.of(US_LOCALITY, 1l);
//				return ImmutableMap.of(US_LOCALITY, Math.max(1l, minRecordCount));
			}

			@Override
			public Map<String, Long> getMinStoreCount() {
				return ImmutableMap.of(US_LOCALITY, 1l);
//				return ImmutableMap.of(US_LOCALITY, Math.max(1l, minStoreCount));
			}		
		};
	}
}
