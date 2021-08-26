package com.yoterra.hippo.repositories;

import java.io.IOException;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.apache.avro.Schema;
import org.apache.avro.io.DatumReader;
import org.apache.avro.io.DatumWriter;
import org.apache.avro.specific.SpecificDatumReader;
import org.apache.avro.specific.SpecificDatumWriter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import com.yoterra.commons.AvroUtils;
import com.yoterra.commons.FIXME;
import com.yoterra.data.dealservice.DealRecordRaw;
import com.yoterra.data.records.DataLocalityUtils;
import com.yoterra.hippo.cassandra.model.CDeal;
import com.yoterra.hippo.cassandra.repositories.CDealRepository;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.repositories.DealRepository;
import com.yoterra.hippo.search.requests.DealSearchRequest;
import com.yoterra.hippo.services.casandra.AvroSchemaRegistry;
import com.yoterra.hippo.services.dataresv.DataResolverManager.IDataResolver;

@Component
public class DealResolverRepository implements IDataResolver<Deal> {
	
	private static final Logger LOG = LoggerFactory.getLogger(ProductResolverRepository.class);

	@Autowired
	private DealRepository dealRepository;

	@Autowired
	@Qualifier("dealIndexRepository")
	private com.yoterra.data.repos.DealRepository dealIndexRepository;
	
	@Autowired
	private CDealRepository cDealRepository;
	
	@Autowired
	private AvroSchemaRegistry avroSchemaRegistry;

	@Transactional
	public Deal findOneById(String id, boolean required, boolean persist, boolean fetchData) {
		Deal deal = dealRepository.findById(id).orElse(null);
		if( deal == null || fetchData ) {
			DealRecordRaw drr = fetchDeal(id,persist);

			if (drr == null || !drr.getLocales().contains(DataLocalityUtils.DEFAULT_LOCALITY)) {
				if( required ) {
					throw new EntityNotFoundException("Specified deal does not exist");
				} else {
					return null;
				}
			}
			
			if( deal == null ) {
				deal = Deal.init(drr);
				if( persist ) {
					dealRepository.saveAndFlush(deal);
				}
			} else {
				deal.setData(drr);
			}
		}
		return deal;
	}
	
	private DealRecordRaw fetchDeal(String id, boolean persist) {
		DealRecordRaw deal = dealIndexRepository.findOneById(id);
		if( deal == null ) {
			Optional<CDeal> cDeal = cDealRepository.findById(id);
			if(cDeal.isPresent() ) {
				CDeal cd = cDeal.get();
				
				Schema writerSchema = avroSchemaRegistry.getByVersion(cd.getAvroVersion());
				Schema readerSchema = DealRecordRaw.SCHEMA$;
				DatumReader<DealRecordRaw> reader = new SpecificDatumReader<>(writerSchema,readerSchema);
				try {
					deal = AvroUtils.fromBytes(cd.getDealBytes(),reader,null);
				} catch (IOException e) {
					LOG.warn("Problem deserializing: "+cd.getId(),e);
				}
			}
		} else if( persist ) {
			try {
				CDeal cDeal = new CDeal();
	
				int avroVersion = avroSchemaRegistry.getOrAddSchema(DealRecordRaw.SCHEMA$);
				cDeal.setAvroVersion(avroVersion);
	
				DatumWriter<DealRecordRaw> writer = new SpecificDatumWriter<>(DealRecordRaw.SCHEMA$);
				byte[] dealBytes = AvroUtils.toBytes(deal,writer,null);
				cDeal.setDealBytes(dealBytes);
				
				cDeal.setId(id);
				
				cDealRepository.save(cDeal);
			} catch(IOException e) {
				throw new RuntimeException(e);
			}
		}
		return deal;
	}

	public Page<Deal> searchDeals(DealSearchRequest request) {
		Page<DealRecordRaw> page = dealIndexRepository.findAllByRequest(request.toSolrRepoRequest(), request.getPageable());
		return page.map(Deal::init);
	}

	@Override
	public Class<Deal> getRecordClass() {
		return Deal.class;
	}
	
	@Override
	public void resolveRecordData(Deal record) {
		DealRecordRaw drr = fetchDeal(record.getId(), false);
		record.setData(drr);
	}
	
	@Override
	public void resolveRecordsData(Iterable<Deal> records) {
		IDataResolver.super.resolveRecordsData(records);
		FIXME.warn("Optimize this");
	}
}
