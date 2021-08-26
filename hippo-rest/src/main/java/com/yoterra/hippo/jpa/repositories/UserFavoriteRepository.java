package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Favoritable;
import com.yoterra.hippo.jpa.entities.favorites.UserFavorite;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface UserFavoriteRepository<ID, F extends Favoritable<ID>, UF extends UserFavorite<ID, F>> 
								extends JpaRepository<UF,Long>, JpaSpecificationExecutor<UF> {

	default long countByUserAndFavoritable(User user, F favoritable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	default long countByUserAndFavoritableId(User user, ID favoritableId){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	List<UF> findAllByUser(User user);
	
	List<UF> findAllByUserId(Long user);
	
	default Page<UF> getByFavoritable(F favoritable, Pageable pageable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	default UF getByUserAndFavoritable(User user, F favoritable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
}

