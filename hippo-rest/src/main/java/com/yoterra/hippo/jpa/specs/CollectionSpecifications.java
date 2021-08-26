package com.yoterra.hippo.jpa.specs;

import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.hippo.jpa.entities.collections.CollectionDeal_;
import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.hippo.jpa.entities.collections.CollectionProduct_;
import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.hippo.jpa.entities.collections.Collection_;
import com.yoterra.hippo.jpa.entities.data.Deal_;
import com.yoterra.hippo.jpa.entities.data.Product_;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.entities.users.User_;

public class CollectionSpecifications extends SpecificationsRoot {

	public static Specification<Collection> typeIs(CollectionType type) {
		return equal(Collection_.type, type);
	}
	
	public static Specification<Collection> nameIs(String q) {
		return equal(Collection_.name, q);
	}
	
	public static Specification<Collection> namePrefixIs(String q, boolean ignoreCase) {
		return prefixIs(Collection_.name, q, ignoreCase);
	}
	
	public static Specification<Collection> nameContains(String q, boolean ignoreCase) {
		return contains(Collection_.name, q, ignoreCase);
	}
	
	public static Specification<Collection> descriptionContains(String q, boolean ignoreCase) {
		return contains(Collection_.description, q, ignoreCase);
	}
	
	public static Specification<Collection> ownerIs(User user) {
		return equal(Collection_.owner, user);
	}
	
	public static Specification<Collection> ownerIs(Long userId) {
		return equal(Collection_.owner, User_.id, userId);
	}
	
	public static Specification<Collection> productInIs(String pid) {
		return (root, cq, cb)  -> {
			Root<CollectionProduct> cpRoot = cq.from(CollectionProduct.class);
			Predicate pp = cb.equal(cpRoot.get(CollectionProduct_.product).get(Product_.id), pid);
			Predicate cj = cb.equal(root, cpRoot.get(CollectionProduct_.collection));
			return cb.and(pp,cj);
		};
	}
	
	public static Specification<Collection> dealInIs(String did) {
		return (root, cq, cb)  -> {
			Root<CollectionDeal> cdRoot = cq.from(CollectionDeal.class);
			Predicate dp = cb.equal(cdRoot.get(CollectionDeal_.deal).get(Deal_.id), did);
			Predicate cj = cb.equal(root, cdRoot.get(CollectionDeal_.collection));
			return cb.and(dp,cj);
		};
	}
}
