package com.yoterra.hippo.jpa.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteCategory;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface UserFavoriteCategoryRepository extends UserFavoriteRepository<Long, TaxonomyElement, UserFavoriteCategory> {
	
	default long countByUserAndFavoritable(User user, TaxonomyElement favoritable){
		return countByUserAndTaxonomyElement(user, favoritable);
	}
	
	default long countByUserAndFavoritableId(User user, Long favoritableId){
		return countByUserAndTaxonomyElementId(user, favoritableId);
	}
	
	long countByUserAndTaxonomyElement(User user, TaxonomyElement taxonomyElement);
	
	long countByUserAndTaxonomyElementId(User user, Long taxonomyElementId);
	
	Page<UserFavoriteCategory> findAllByTaxonomyElement(TaxonomyElement taxonomyElement, Pageable pageable);
	
	UserFavoriteCategory findOneByUserAndTaxonomyElement(User user, TaxonomyElement taxonomyElement);
	
	default Page<UserFavoriteCategory> getByFavoritable(TaxonomyElement favoritable, Pageable pageable){
		return findAllByTaxonomyElement(favoritable, pageable);
	}
	
	default UserFavoriteCategory getByUserAndFavoritable(User user, TaxonomyElement favoritable){
		return findOneByUserAndTaxonomyElement(user, favoritable);
	}
}

