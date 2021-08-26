package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;

@Repository
public interface TaxonomyElementRepository extends JpaRepository<TaxonomyElement,Long>, JpaSpecificationExecutor<TaxonomyElement> {

	public Page<TaxonomyElement> findAllByLevel(int level, Pageable pageable);
	
	public default List<TaxonomyElement> getAllMajorTaxonomies() {
		return findAllByLevel(0, PageRequest.of(0, Integer.MAX_VALUE)).getContent();
	}
}

