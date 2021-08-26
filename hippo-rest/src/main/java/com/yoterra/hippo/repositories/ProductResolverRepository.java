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
import com.yoterra.data.records.DataLocalityUtils;
import com.yoterra.data.records.GroupProduct;
import com.yoterra.data.repos.GroupProductRepository;
import com.yoterra.hippo.cassandra.model.CProduct;
import com.yoterra.hippo.cassandra.repositories.CProductRepository;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.repositories.ProductRepository;
import com.yoterra.hippo.search.requests.ProductSearchRequest;
import com.yoterra.hippo.services.casandra.AvroSchemaRegistry;
import com.yoterra.hippo.services.dataresv.DataResolverManager.IDataResolver;

@Component
public class ProductResolverRepository implements IDataResolver<Product> {
	
	private static final Logger LOG = LoggerFactory.getLogger(ProductResolverRepository.class);

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	@Qualifier("groupProductIndexRepository")
	private GroupProductRepository groupProductIndexRepository;
	
	@Autowired
	private CProductRepository cProductRepository;
	
	@Autowired
	private AvroSchemaRegistry avroSchemaRegistry;
	
	@Transactional
	public Product findOneById(String id) {
		return findOneById(id, false, false, false);
	}
	
	@Transactional
	public Product findOneById(String id, boolean required, boolean persist, boolean fetchData) {
		Product product = productRepository.findById(id).orElse(null);
		if( product == null || fetchData ) {
			GroupProduct gp = fetchGroupProduct(id,persist);
			
			if( gp == null || !gp.getLocalities().contains(DataLocalityUtils.DEFAULT_LOCALITY) ) {
				if( required ) {
					throw new EntityNotFoundException("Specified product does not exist");
				} else {
					return null;
				}
			}
			
			if( product == null ) {
				product = Product.init(gp);
				if( persist ) {
					productRepository.saveAndFlush(product);
				}
			} else {
				product.setData(gp);
			}
		}
		return product;
	}
	
	private GroupProduct fetchGroupProduct(String id, boolean persist) {
		GroupProduct gp = groupProductIndexRepository.findOneById(id);
		if( gp == null ) {
			Optional<CProduct> cProduct = cProductRepository.findById(id);
			if(cProduct.isPresent() ) {
				CProduct cp = cProduct.get();
				
				Schema writerSchema = avroSchemaRegistry.getByVersion(cp.getAvroVersion());
				Schema readerSchema = com.yoterra.data.records.Product.SCHEMA$;
				DatumReader<com.yoterra.data.records.Product> reader = new SpecificDatumReader<>(writerSchema,readerSchema);
				try {
					com.yoterra.data.records.Product p = AvroUtils.fromBytes(cp.getProductBytes(),reader,null);
					gp = GroupProduct.create(p);
				} catch (IOException e) {
					LOG.warn("Problem deserializing: "+cp.getId(),e);
				}
			}
		} else if( persist ) {
			try {
				CProduct cProduct = new CProduct();
	
				int avroVersion = avroSchemaRegistry.getOrAddSchema(com.yoterra.data.records.Product.SCHEMA$);
				cProduct.setAvroVersion(avroVersion);
	
				DatumWriter<com.yoterra.data.records.Product> writer = new SpecificDatumWriter<>(com.yoterra.data.records.Product.SCHEMA$);
				byte[] productBytes = AvroUtils.toBytes(gp.getProduct(),writer,null);
				cProduct.setProductBytes(productBytes);
				
				cProduct.setId(id);
				
				cProductRepository.save(cProduct);
			} catch(IOException e) {
				throw new RuntimeException(e);
			}
		}
		return gp;
	}

	public Page<Product> searchProducts(ProductSearchRequest productSearchRequest) {
		Page<GroupProduct> page = groupProductIndexRepository.findAllByRequest(productSearchRequest.toSolrRepoRequest(),productSearchRequest.getPageable());
		return page.map(Product::init);
	}
	
	@Override
	public void resolveRecordData(Product record) {
		GroupProduct gp = fetchGroupProduct(record.getId(), false);
		record.setData(gp);
	}
	
	@Override
	public Class<Product> getRecordClass() {
		return Product.class;
	}
	
	@Override
	public void resolveRecordsData(Iterable<Product> records) {
		IDataResolver.super.resolveRecordsData(records);
		FIXME.warn("Optimize this");
	}
}
