package com.yoterra.hippo.config;

import java.io.IOException;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import com.yoterra.companyservice.client.CompanyServiceClient;
import com.yoterra.companyservice.client.CompanyServiceClientSimple;
import com.yoterra.data.jpa.companyservice.entities.Company;
import com.yoterra.data.records.RecordUtils;
import com.yoterra.data.repos.CompanyRepository;
import com.yoterra.data.repos.config.SolrRepoConfig;
import com.yoterra.hippo.config.props.CompanyServiceProperties;

@Configuration
@EnableConfigurationProperties({CompanyServiceProperties.class})
public class CompanyServiceConfig {
	
	@Bean
	public CompanyServiceClient companyServiceClient(CompanyServiceProperties props, RestTemplate restTemplate) {
		return new CompanyServiceClientSimple(restTemplate, props.getUrl(),props.getUsername(), props.getPassword());
	}
	
	@Bean
	public RestTemplate restTemplate() {
	    return new RestTemplate();
	}
	
	public static void main(String[] args) throws IOException {
		
		String indexPricestarzPass = "***";
		String csHippoPass = "***";		
		
		SolrRepoConfig crc = new SolrRepoConfig(
				"http://sp:8983/solr", "brands_3", "pricestarz", indexPricestarzPass);
		
		try(CompanyRepository crepo = new CompanyRepository(crc)){
			
			com.yoterra.data.records.Company icompany = crepo.findOneById("TOGSNfhiJ3cJqcEBa1cwKw");
			
			if(icompany != null) {
				System.out.println(icompany.getName());
				
				Long longID = RecordUtils.toLongId(icompany.getId());
				
				CompanyServiceClient client = new CompanyServiceClientSimple(new RestTemplate(), 
						"http://213.239.194.89:8080/ys-company-service/", "hippo", csHippoPass);
				
				Company company = client.findById(longID);
				System.out.println(company == null ? null : company.getDisplayName().getName());
			}
		}
	}
}
