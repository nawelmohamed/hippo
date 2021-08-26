package com.yoterra.hippo.services;

import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.jpa.entities.comments.CommentStore;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteStore;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteType;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.followers.FollowerStore;
import com.yoterra.hippo.jpa.entities.likes.LikeStore;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.jpa.repositories.CommentStoreRepository;
import com.yoterra.hippo.jpa.repositories.FollowerRepository;
import com.yoterra.hippo.jpa.repositories.FollowerStoreRepository;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.jpa.repositories.LikeStoreRepository;
import com.yoterra.hippo.jpa.repositories.UserFavoriteRepository;
import com.yoterra.hippo.jpa.repositories.UserFavoriteStoreRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.repositories.StoreResolverRepository;
import com.yoterra.hippo.search.requests.CompanySearchRequest;

@Service
public class StoreService implements CompanyService<Store, CommentStore, LikeStore, FollowerStore, UserFavoriteStore> {

	@SuppressWarnings("unused")
	private Supplier<EntityNotFoundException> MISSING_STORE_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The store does not exist");
			
	@Autowired
	private LikeStoreRepository likeStoreRepository;
	
	@Autowired
	private FollowerStoreRepository followerStoreRepository;
	
	@Autowired
	private CommentStoreRepository commentStoreRepository;

	@Autowired
	private StoreResolverRepository storeResolverRepository;
	
	@Autowired
	private UserFavoriteStoreRepository userFavoriteStoreRepository;
	
//	@Transactional(readOnly = true) // ????
	public Store getStore(Long id, boolean addMetacounts) {
		Store store = storeResolverRepository.findById(id,true,false,true);
		if(addMetacounts) {
			resolveMetacounts(store);
		}
		return store;		
	}

	public Page<Store> searchStores(CompanySearchRequest req, boolean addMetacounts, boolean addCsData) {
		Page<Store> page = storeResolverRepository.searchStores(req, addCsData);
		if(addMetacounts) {
			resolveMetacounts(page.getContent());
		}
		return page;		
	}
	
	@Override
	public UserCtx getUserContext(Store store) {
		boolean hasLiked = hasLiked(store);
		boolean isFollowing = isFollowing(store);
		boolean isInFavorites = isInFavorites(store);
		return new UserCtx(hasLiked, isFollowing, isInFavorites, null);
	}
	
	@Override
	public Store getParentById(Long id, boolean persist, boolean fetchData) {
		return storeResolverRepository.findById(id, true, persist, fetchData);
	}

	@Override
	public Store getFollowable(Long id) {
		return storeResolverRepository.findById(id, true, true, false);
	}
	
	@Override
	public LikeStore newEmptyLikeInstance() {
		return new LikeStore();
	}

	@Override
	public CommentStore newEmptyCommentInstance() {
		return new CommentStore();
	}
	
	@Override
	public FollowerStore newEmptyFollowerInstance() {
		return new FollowerStore();
	}

	@Override
	public UserFavoriteStore newEmptyUserFavorite() {
		return new UserFavoriteStore();
	}

	@Override
	public CommentRepository<Long, Store, CommentStore> getCommentsRepository() {
		return commentStoreRepository;
	}
	
	@Override
	public LikeRepository<Long, Store, LikeStore> getLikeRepository() {
		return likeStoreRepository;
	}

	@Override
	public FollowerRepository<Long, Store, FollowerStore> getFollowerRepository() {
		return followerStoreRepository;
	}

	@Override
	public UserFavoriteRepository<Long, Store, UserFavoriteStore> getUserFavoriteRepository() {
		return userFavoriteStoreRepository;
	}

	@Override
	public Store getFavoritable(Long id) {
		return storeResolverRepository.findById(id, true, true, false);
	}

	@Override
	public UserFavoriteType getUserFavoriteType() {
		return UserFavoriteType.STORE;
	}	
	
	@Override
	public LikeableType getLikeableType() {
		return LikeableType.STORE;
	}
	
	@Override
	public CommentableType getCommentableType() {
		return CommentableType.STORE;
	}

	@Override
	public FollowableType getFollowableType() {
		return FollowableType.STORE;
	}
}
