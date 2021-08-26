package com.yoterra.hippo.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.yoterra.data.repos.CompanyRepository;
import com.yoterra.data.repos.DealRepository;
import com.yoterra.data.repos.GroupProductRepository;
import com.yoterra.data.repos.config.GPRepoConfig;
import com.yoterra.data.repos.config.SolrRepoConfig;
import com.yoterra.hippo.config.props.CassandraProductsProperties;
import com.yoterra.hippo.config.props.SolrProperties;

@Configuration
@EnableConfigurationProperties({SolrProperties.class, CassandraProductsProperties.class})
public class SolrConfig {
	
	@Bean(name="dealIndexRepository", destroyMethod = "close")
	public DealRepository dealIndexRepository(SolrProperties p) {
		DealRepository dr = new DealRepository(new SolrRepoConfig(p.getUrl(), p.getDeals().getCollection(), p.getUsername(), p.getPassword()));
		return dr;
	}

	@Bean(name="groupProductIndexRepository", destroyMethod = "close")
	public GroupProductRepository groupProductIndexRepository(SolrProperties sp, CassandraProductsProperties cpp) {
		
		GPRepoConfig rc = GPRepoConfig.repoWithoutSources(sp.getUrl(), sp.getProducts().getCollection(), sp.getUsername(), sp.getPassword(), 
				cpp.getKeyspace(), cpp.getTableprefix(), cpp.getHosts());
		
		GroupProductRepository gprepo = new GroupProductRepository(rc);
		return gprepo;
	}
	
	@Bean(name="brandIndexRepository", destroyMethod = "close")
	public CompanyRepository brandIndexRepository(SolrProperties p) {
		CompanyRepository cr = new CompanyRepository(new SolrRepoConfig(p.getUrl(), p.getBrands().getCollection(), p.getUsername(), p.getPassword()));
		return cr;
	}
	
	@Bean(name="storeIndexRepository", destroyMethod = "close")
	public CompanyRepository storeIndexRepository(SolrProperties p) {
		CompanyRepository cr = new CompanyRepository(new SolrRepoConfig(p.getUrl(), p.getStores().getCollection(), p.getUsername(), p.getPassword()));
		return cr;
	}
}
