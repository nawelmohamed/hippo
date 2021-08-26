package com.yoterra.hippo.config.props;


import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "com.hippo.solr.server")
public class SolrProperties {

	private String url;
	private String username;
	private String password;

	private SolrEntity deals;
	private SolrEntity products;
	private SolrEntity brands;
	private SolrEntity stores;
	
	public static class SolrEntity{
		private String collection;
		public String getCollection() {
			return collection;
		}
		public void setCollection(String collection) {
			this.collection = collection;
		}
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public SolrEntity getDeals() {
		return deals;
	}

	public void setDeals(SolrEntity deals) {
		this.deals = deals;
	}

	public SolrEntity getProducts() {
		return products;
	}

	public void setProducts(SolrEntity products) {
		this.products = products;
	}

	public SolrEntity getBrands() {
		return brands;
	}

	public void setBrands(SolrEntity brands) {
		this.brands = brands;
	}

	public SolrEntity getStores() {
		return stores;
	}

	public void setStores(SolrEntity stores) {
		this.stores = stores;
	}
}
