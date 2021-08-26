package com.yoterra.hippo.search.qbuilders;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.hippo.jpa.queries.QueryBuilder;
import com.yoterra.hippo.jpa.specs.CollectionSpecifications;
import com.yoterra.hippo.search.requests.CollectionSearchRequest;

@Component
public class CollectionQueryBuilder extends QueryBuilder<Collection, CollectionSearchRequest> {

	@Override
	public Specification<Collection> build(CollectionSearchRequest req) {

		Specification<Collection> spec = Specification.where(null);

		if(req.getType() != null){
			spec = spec.and(CollectionSpecifications.typeIs(req.getType()));
		}
		
		if(req.getOwnerId() != null){
			spec = spec.and(CollectionSpecifications.ownerIs(req.getOwnerId()));
		}
		 
		if(StringUtils.isNotBlank(req.getNameContains())){
			spec = spec.and(CollectionSpecifications.nameContains(req.getNameContains(), true)); 
		}
		
		if(StringUtils.isNotBlank(req.getDescriptionContains())){
			spec = spec.and(CollectionSpecifications.descriptionContains(req.getDescriptionContains(), true)); 
		}
		
		if(StringUtils.isNotBlank(req.getContainsItemId())) {
			if(req.getType() == CollectionType.PRODUCT) {
				spec = spec.and(CollectionSpecifications.productInIs(req.getContainsItemId())); 
			}
			if(req.getType() == CollectionType.DEAL) {
				spec = spec.and(CollectionSpecifications.dealInIs(req.getContainsItemId())); 
			}
		}
		
		if(StringUtils.isNotBlank(req.getKeywords())){
			Specification<Collection> nk = CollectionSpecifications.nameContains(req.getKeywords(), true);
			Specification<Collection> dk = CollectionSpecifications.descriptionContains(req.getKeywords(), true);
			Specification<Collection> k = nk.or(dk);
			
			spec = spec.and(k); 
		}

		return spec;
	}
	
}
