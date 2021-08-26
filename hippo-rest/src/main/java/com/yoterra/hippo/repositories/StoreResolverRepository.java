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
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.jpa.repositories.StoreRepository;
import com.yoterra.hippo.search.requests.CompanySearchRequest;
import com.yoterra.hippo.services.dataresv.DataResolverManager.IDataResolver;
import com.yoterra.utils.Opt;

@Component
public class StoreResolverRepository implements IDataResolver<Store> {

	@Autowired
	private StoreRepository storeRepository;
	
	@Autowired
	@Qualifier("storeIndexRepository")
	private CompanyRepository storeIndexRepository;
	
	@Autowired
	private CompanyServiceClient companyServiceClient;

	public StoreResolverRepository() {}
	
	@Transactional
	public Store findById(Long id, boolean required, boolean persist, boolean fetchAllDate){
		return findById(id, required, persist, fetchAllDate, fetchAllDate);
	}
	
	@Transactional
	public Store findById(Long id, boolean required, boolean persist, boolean fetchIndexData, boolean fetchCSData){
		Store store = storeRepository.findById(id).orElse(null);
		
		store = fetch(store, fetchIndexData, id, RecordUtils::fromLongId, storeIndexRepository::findOneById,
				Store::fromIndexCompany,(b,c)->{b.setIndexCompany(c);});
		
		store = fetch(store, fetchCSData, id, Function.<Long>identity(), companyServiceClient::findById,
				Store::fromCSCompany, (b,c)->{b.setCSCompany(c);});
		
		if( store == null && required ) {
			throw new EntityNotFoundException("Store with the given id doesn't exist: "+id);
		} else if( store != null && persist ) {
			storeRepository.saveAndFlush(store);
		}
		
		return store;
	}
	
	private <T,R> Store fetch(Store store, boolean fetch, Long id,
			Function<Long,T> f1, Function<T,R> f2, Function<R,Store> f3, BiConsumer<Store,R> f4) {
		if( store == null || fetch ) {
			T t = f1.apply(id);
			R r = f2.apply(t);
			if( r != null ) {
				if( store == null ) {
					store = f3.apply(r);
				} else {
					f4.accept(store, r);
				}
			}
		}
		return store;
	}
	
	public Page<Store> searchStores(CompanySearchRequest request) {
		return searchStores(request,false);
	}
	
	public Page<Store> searchStores(CompanySearchRequest request, boolean fetchCSData) {
		Page<Company> page = storeIndexRepository.findAllByRequest(request.toSolrRepoRequest(),request.getPageable());
		Page<Store> storePage = page.map(Store::fromIndexCompany);
		if( fetchCSData ) {
			Map<Long,com.yoterra.data.jpa.companyservice.entities.Company> companies = getCSCompanies(storePage);
			storePage = storePage.map(s->{
				com.yoterra.data.jpa.companyservice.entities.Company company = companies.get(s.getId());
				if( s != null ) {
					s.setCSCompany(company);
				}
				return s;
			});
		}
		return storePage;
	}

	private Map<Long, com.yoterra.data.jpa.companyservice.entities.Company> getCSCompanies(Page<Store> page) {
		List<Long> ids = page.stream().map(Store::getId).collect(Collectors.toList());
		List<com.yoterra.data.jpa.companyservice.entities.Company> companies = companyServiceClient.findByIds(ids);
		Map<Long,com.yoterra.data.jpa.companyservice.entities.Company> mapped = new HashMap<>();
		for( com.yoterra.data.jpa.companyservice.entities.Company company : companies ) {
			mapped.put(company.getId(), company);
		}
		return mapped;
	}
	
	private void associateStoreInfos(Iterable<Store> bitr, boolean index, boolean cs){
		Map<Long, Store> m = Opt.strm(bitr).collect(Collectors.toMap(Store::getId, b->b));
		List<Long> ids = Opt.strm(m.keySet()).toList();
		if(cs) {
			List<com.yoterra.data.jpa.companyservice.entities.Company> companies = companyServiceClient.findByIds(ids);
			for (com.yoterra.data.jpa.companyservice.entities.Company c : companies) {
				Opt.consume(c.getId(), m::get, b->b.setCSCompany(c));
			}
		}
		if(index) {
			List<Company> icompanies = storeIndexRepository.findAll(Opt.strm(ids).map(l->""+l).toList());
			for (Company c : icompanies) {
				Long id = RecordUtils.toLongId(c.getId());
				Opt.consume(id, m::get, b->b.setIndexCompany(c));
			}
		}
	}
	
	@Override
	public void resolveRecordData(Store record) {
		resolveRecordsData(Arrays.asList(record));
	}
	
	@Override
	public void resolveRecordsData(Iterable<Store> records) {
		associateStoreInfos(records, true, true);
	}

	@Override
	public Class<Store> getRecordClass() {
		return Store.class;
	}
}
