package com.yoterra.hippo.repositories;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Function;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import com.yoterra.companyservice.client.CompanyServiceClient;
import com.yoterra.data.records.Company;
import com.yoterra.data.records.RecordUtils;
import com.yoterra.data.repos.CompanyRepository;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.jpa.repositories.BrandRepository;
import com.yoterra.hippo.search.requests.CompanySearchRequest;
import com.yoterra.hippo.services.dataresv.DataResolverManager.IDataResolver;
import com.yoterra.utils.Opt;

@Component
public class BrandResolverRepository implements IDataResolver<Brand>{

	@Autowired
	private BrandRepository brandRepository;
	
	@Autowired
	@Qualifier("brandIndexRepository")
	private CompanyRepository brandIndexRepository;
	
	@Autowired
	private CompanyServiceClient companyServiceClient;

	public BrandResolverRepository() {}
	
	@Transactional
	public Brand findById(Long id, boolean required, boolean persist, boolean fetchAllDate){
		return findById(id, required, persist, fetchAllDate, fetchAllDate);
	}
	
	@Transactional
	public Brand findById(Long id, boolean required, boolean persist, boolean fetchIndexData, boolean fetchCSData){
		Brand brand = brandRepository.findById(id).orElse(null);
		
		brand = fetch(brand, fetchIndexData, id, RecordUtils::fromLongId, brandIndexRepository::findOneById,
				Brand::fromIndexCompany,(b,c)->{b.setIndexCompany(c);});
		
		brand = fetch(brand, fetchCSData, id, Function.<Long>identity(), companyServiceClient::findById,
				Brand::fromCSCompany, (b,c)->{b.setCSCompany(c);});
		
		if( brand == null && required ) {
			throw new EntityNotFoundException("Brand with the given id doesn't exist: "+id);
		} else if( brand != null && persist ) {
			brandRepository.saveAndFlush(brand);
		}
		
		return brand;
	}
	
	private <T,R> Brand fetch(Brand brand, boolean fetch, Long id,
			Function<Long,T> f1, Function<T,R> f2, Function<R,Brand> f3, BiConsumer<Brand,R> f4) {
		if( brand == null || fetch ) {
			T t = f1.apply(id);
			R r = f2.apply(t);
			if( r != null ) {
				if( brand == null ) {
					brand = f3.apply(r);
				} else {
					f4.accept(brand, r);
				}
			}
		}
		return brand;
	}
	
	public Page<Brand> searchBrands(CompanySearchRequest request) {
		return searchBrands(request, false);
	}
	
	public Page<Brand> searchBrands(CompanySearchRequest request, boolean fetchCSData) {
		Page<Company> page = brandIndexRepository.findAllByRequest(request.toSolrRepoRequest(),request.getPageable());
		Page<Brand> brandPage = page.map(Brand::fromIndexCompany);
		if( fetchCSData ) {
			Map<Long,com.yoterra.data.jpa.companyservice.entities.Company> companies = getCSCompanies(brandPage);
			brandPage = brandPage.map(s->{
				com.yoterra.data.jpa.companyservice.entities.Company company = companies.get(s.getId());
				if( s != null ) {
					s.setCSCompany(company);
				}
				return s;
			});
		}
		return brandPage;
	}

	private Map<Long, com.yoterra.data.jpa.companyservice.entities.Company> getCSCompanies(Page<Brand> page) {
		List<Long> ids = page.stream().map(Brand::getId).collect(Collectors.toList());
		List<com.yoterra.data.jpa.companyservice.entities.Company> companies = companyServiceClient.findByIds(ids);
		Map<Long,com.yoterra.data.jpa.companyservice.entities.Company> mapped = new HashMap<>();
		for( com.yoterra.data.jpa.companyservice.entities.Company company : companies ) {
			mapped.put(company.getId(), company);
		}
		return mapped;
	}
	
	private void associateBrandInfos(Iterable<Brand> bitr, boolean index, boolean cs){
		Map<Long, Brand> m = Opt.strm(bitr).collect(Collectors.toMap(Brand::getId, b->b));
		List<Long> ids = Opt.strm(m.keySet()).toList();
		if(cs) {
			List<com.yoterra.data.jpa.companyservice.entities.Company> companies = companyServiceClient.findByIds(ids);
			for (com.yoterra.data.jpa.companyservice.entities.Company c : companies) {
				Opt.consume(c.getId(), m::get, b->b.setCSCompany(c));
			}
		}
		if(index) {
			List<Company> icompanies = brandIndexRepository.findAll(Opt.strm(ids).map(l->""+l).toList());
			for (Company c : icompanies) {
				Long id = RecordUtils.toLongId(c.getId());
				Opt.consume(id, m::get, b->b.setIndexCompany(c));
			}
		}
	}

	@Override
	public Class<Brand> getRecordClass() {
		return Brand.class;
	}

	@Override
	public void resolveRecordData(Brand record) {
		resolveRecordsData(Arrays.asList(record));
	}
	
	@Override
	public void resolveRecordsData(Iterable<Brand> records) {
		associateBrandInfos(records, true, true);
	}
}
