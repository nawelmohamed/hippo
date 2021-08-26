package com.yoterra.hippo.services;

import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import com.datastax.oss.driver.shaded.guava.common.collect.Sets;
import com.google.common.collect.Lists;
import com.yoterra.hippo.exceptions.LimitExceededException;
import com.yoterra.hippo.jpa.entities.Favoritable;
import com.yoterra.hippo.jpa.entities.favorites.UserFavorite;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteType;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.repositories.UserFavoriteRepository;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.dataresv.DataResolvableManagerProvider;

public interface IFavoritesService<ID, F extends Favoritable<ID>, UF extends UserFavorite<ID, F>> 
			extends DataResolvableManagerProvider{
	
	public UserFavoriteRepository<ID, F, UF> getUserFavoriteRepository();
	public F getFavoritable(ID id);
	public UserFavoriteType getUserFavoriteType();
	public UF newEmptyUserFavorite();
	
	
	@Transactional(readOnly = true)
	public default List<UF> getUserFavorites() {
		return getUserFavorites(ActiveUser.get());
	}
	
	@Transactional(readOnly = true)
	public default List<UF> getUserFavorites(User user) {
		return getUserFavorites(user.getId());
	}
	
	@Transactional(readOnly = true)
	public default List<UF> getUserFavorites(Long userId) {
		List<UF> favs = getUserFavoriteRepository().findAllByUserId(userId);
		getDataResolvingManager().resolveContainedData(favs);
		return favs;
	}
	
	@Transactional(readOnly = true)
	public default Page<UF> getFavoritesByItem(F favoritable, PageParams pageParams) {
		Page<UF> favs = getUserFavoriteRepository().getByFavoritable(favoritable, pageParams.getPageable());
		getDataResolvingManager().resolveContainedData(favs);
		return favs;
	}
	
	@Transactional
	public default void setUserFavorites(Collection<ID> ids) 
			throws LimitExceededException {
		
		UserFavoriteType type = getUserFavoriteType();
		
		if(ids.size() > type.getLimit()) 
			throw new LimitExceededException("Maximum number of favorite items of type " + type + "is " + type.getLimit());
	
		UserFavoriteRepository<ID, F, UF> ufRepo = getUserFavoriteRepository();
		
		List<UF> ufavs = ufRepo.findAllByUser(ActiveUser.get());
		Set<ID> toSkip = Sets.newHashSet();
		List<UF> toDelete = Lists.newArrayList();
		
		for (UF ufc : ufavs) {
			ID id = ufc.getFavorite().getId();
			if(ids.contains(id)) {
				toSkip.add(id);
			}else {
				toDelete.add(ufc);
			}
		}
		
		List<UF> toAdd = Lists.newArrayList();
		for (ID id : ids) {
			if(!toSkip.contains(id)) {
				UF newUF = newEmptyUserFavorite();
				F fav = getFavoritable(id);
				newUF.setFavorite(fav);
				newUF.setUser(ActiveUser.get());
				toAdd.add(newUF);
			}
		}
		
		ufRepo.saveAll(toAdd);
		ufRepo.deleteAll(toDelete);
	}
	
	
	@Transactional(readOnly = true)
	public default boolean isInFavorites(ID favoritableID, User user){
		long cnt  = getUserFavoriteRepository().countByUserAndFavoritableId(user, favoritableID);
		return cnt > 0;
	}
	
	@Transactional(readOnly = true)
	public default boolean isInFavorites(F favoritable, User user){
		return isInFavorites(favoritable.getId(), user);
	}
	
	@Transactional(readOnly = true)
	public default boolean isInFavorites(ID favoritableID){
		return isInFavorites(favoritableID, ActiveUser.get());
	}
	
	@Transactional(readOnly = true)
	public default boolean isInFavorites(F favoritable){
		return isInFavorites(favoritable, ActiveUser.get());
	}
}