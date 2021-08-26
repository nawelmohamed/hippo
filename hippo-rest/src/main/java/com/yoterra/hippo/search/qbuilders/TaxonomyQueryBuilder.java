package com.yoterra.hippo.search.qbuilders;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.hippo.jpa.queries.QueryBuilder;
import com.yoterra.hippo.jpa.specs.TaxonomySpecifications;
import com.yoterra.hippo.search.requests.TaxonomySearchRequest;

@Component
public class TaxonomyQueryBuilder extends QueryBuilder<TaxonomyElement, TaxonomySearchRequest> {

	@Override
	public Specification<TaxonomyElement> build(TaxonomySearchRequest req) {

		Specification<TaxonomyElement> spec = Specification.where(null);
		
		if(req.getLevel() != null){
			spec = spec.and(TaxonomySpecifications.levelIs(req.getLevel()));
		}
		
		if(req.getParent() != null){
			spec = spec.and(TaxonomySpecifications.parentIs(req.getParent()));
		}
		
		if(StringUtils.isNotBlank(req.getName())){
			spec = spec.and(TaxonomySpecifications.nameIs(req.getName())); 
		}
		
		if(StringUtils.isNotBlank(req.getNamePrefix())){
			spec = spec.and(TaxonomySpecifications.namePrefixIs(req.getNamePrefix(), true)); 
		}
		
		if(StringUtils.isNotBlank(req.getKeywords())){
			Specification<TaxonomyElement> nk = TaxonomySpecifications.nameContains(req.getKeywords(), true);
//			Specification<TaxonomyElement> dk = CollectionSpecifications.descriptionContains(req.getKeywords());
//			Specification<TaxonomyElement> k = nk.or(dk);
			
			spec = spec.and(nk); 
		}

		return spec;
	}
	
}
