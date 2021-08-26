package com.yoterra.hippo.jpa.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteBrand;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface UserFavoriteBrandRepository extends UserFavoriteRepository<Long, Brand, UserFavoriteBrand> {
	
	long countByUserAndBrand(User user, Brand brand);
	
	long countByUserAndBrandId(User user, Long brandId);
	
	default long countByUserAndFavoritable(User user, Brand favoritable){
		return countByUserAndBrand(user, favoritable);
	}
	
	default long countByUserAndFavoritableId(User user, Long favoritableId){
		return countByUserAndBrandId(user, favoritableId);
	}
	
	Page<UserFavoriteBrand> findAllByBrand(Brand brand, Pageable pageable);
	
	UserFavoriteBrand findOneByUserAndBrand(User user, Brand brand);
	
	default Page<UserFavoriteBrand> getByFavoritable(Brand favoritable, Pageable pageable){
		return findAllByBrand(favoritable, pageable);
	}
	
	default UserFavoriteBrand getByUserAndFavoritable(User user, Brand favoritable){
		return findOneByUserAndBrand(user, favoritable);
	}
}

