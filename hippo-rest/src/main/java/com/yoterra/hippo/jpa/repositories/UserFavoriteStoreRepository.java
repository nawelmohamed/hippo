package com.yoterra.hippo.jpa.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteStore;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface UserFavoriteStoreRepository extends UserFavoriteRepository<Long, Store, UserFavoriteStore> {
	
	default long countByUserAndFavoritable(User user, Store favoritable){
		return countByUserAndStore(user, favoritable);
	}
	
	default long countByUserAndFavoritableId(User user, Long favoritableId){
		return countByUserAndStoreId(user, favoritableId);
	}
	
	long countByUserAndStore(User user, Store store);
	
	long countByUserAndStoreId(User user, Long storeId);
	
	Page<UserFavoriteStore> findAllByStore(Store store, Pageable pageable);
	
	UserFavoriteStore findOneByUserAndStore(User user, Store store);
	
	default Page<UserFavoriteStore> getByFavoritable(Store favoritable, Pageable pageable){
		return findAllByStore(favoritable, pageable);
	}
	
	default UserFavoriteStore getByUserAndFavoritable(User user, Store favoritable){
		return findOneByUserAndStore(user, favoritable);
	}
}

