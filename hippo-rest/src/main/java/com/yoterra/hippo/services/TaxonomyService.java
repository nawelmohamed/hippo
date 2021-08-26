package com.yoterra.hippo.services;

import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteCategory;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteType;
import com.yoterra.hippo.jpa.repositories.TaxonomyElementRepository;
import com.yoterra.hippo.jpa.repositories.UserFavoriteCategoryRepository;
import com.yoterra.hippo.jpa.repositories.UserFavoriteRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.search.qbuilders.TaxonomyQueryBuilder;
import com.yoterra.hippo.search.requests.TaxonomySearchRequest;

@Service
public class TaxonomyService implements IFavoritesService<Long, TaxonomyElement, UserFavoriteCategory>, IUserContextService<TaxonomyElement, UserCtx> {

	private Supplier<EntityNotFoundException> MISSING_TAXONOMY_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The category does not exist");

	@Autowired
	private TaxonomyElementRepository taxonomyElementRepository;

	@Autowired
	private TaxonomyQueryBuilder taxonomyQueryBuilder;
	
	@Autowired
	private UserFavoriteCategoryRepository userFavoriteCategoryRepository;
	
	@Transactional(readOnly = true)
	public TaxonomyElement getTaxonomy(long teId) {
		TaxonomyElement te = taxonomyElementRepository.findById(teId).orElseThrow(MISSING_TAXONOMY_EXC_SUPPLIER);
		return te;		
	}
	
	public Page<TaxonomyElement> searchTaxonomies(TaxonomySearchRequest req) {
		Specification<TaxonomyElement> spec = taxonomyQueryBuilder.build(req);
		Page<TaxonomyElement> page = taxonomyElementRepository.findAll(spec, req.getPageable());
		return page;		
	}
	
	@Override
	public UserFavoriteRepository<Long, TaxonomyElement, UserFavoriteCategory> getUserFavoriteRepository() {
		return userFavoriteCategoryRepository;
	}

	@Override
	public UserCtx getUserContext(TaxonomyElement entity) {
		boolean isInFavorites = isInFavorites(entity);
		return new UserCtx(null, null, isInFavorites, null);
	}

	@Override
	public TaxonomyElement getFavoritable(Long id) {
		return taxonomyElementRepository.findById(id).orElseThrow(MISSING_TAXONOMY_EXC_SUPPLIER);
	}

	@Override
	public UserFavoriteType getUserFavoriteType() {
		return UserFavoriteType.CATEGORY;
	}

	@Override
	public UserFavoriteCategory newEmptyUserFavorite() {
		return new UserFavoriteCategory();
	}
}
