package com.yoterra.hippo.jpa.specs;

import org.springframework.data.jpa.domain.Specification;

import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.hippo.jpa.entities.data.TaxonomyElement_;

public class TaxonomySpecifications extends SpecificationsRoot {

	public static Specification<TaxonomyElement> nameIs(String name) {
		return equal(TaxonomyElement_.name, name);
	}
	
	public static Specification<TaxonomyElement> nameContains(String q, boolean ignoreCase) {
		return contains(TaxonomyElement_.name, q, ignoreCase);
	}
	
	public static Specification<TaxonomyElement> namePrefixIs(String q, boolean ignoreCase) {
		return prefixIs(TaxonomyElement_.name, q, ignoreCase);
	}
	
	public static Specification<TaxonomyElement> levelIs(int level) {
		return equal(TaxonomyElement_.level, level);
	}

	public static Specification<TaxonomyElement> parentIs(TaxonomyElement parent) {
		return equal(TaxonomyElement_.parent, parent);
	}
	
	public static Specification<TaxonomyElement> parentIs(long parentId) {
		return equal(TaxonomyElement_.parent, TaxonomyElement_.id, parentId);
	}
}
