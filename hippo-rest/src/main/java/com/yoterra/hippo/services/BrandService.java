package com.yoterra.hippo.services;

import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.jpa.entities.comments.CommentBrand;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteBrand;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteType;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.followers.FollowerBrand;
import com.yoterra.hippo.jpa.entities.likes.LikeBrand;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.repositories.CommentBrandRepository;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.jpa.repositories.FollowerBrandRepository;
import com.yoterra.hippo.jpa.repositories.FollowerRepository;
import com.yoterra.hippo.jpa.repositories.LikeBrandRepository;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.jpa.repositories.UserFavoriteBrandRepository;
import com.yoterra.hippo.jpa.repositories.UserFavoriteRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.repositories.BrandResolverRepository;
import com.yoterra.hippo.search.requests.CompanySearchRequest;

@Service
public class BrandService implements CompanyService<Brand, CommentBrand, LikeBrand, FollowerBrand, UserFavoriteBrand>{

	@SuppressWarnings("unused")
	private Supplier<EntityNotFoundException> MISSING_BRAND_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The brand does not exist");

	@Autowired
	private LikeBrandRepository likeBrandRepository;
	
	@Autowired
	private FollowerBrandRepository followerBrandRepository;
	
	@Autowired
	private CommentBrandRepository commentBrandRepository;
	
	@Autowired
	private BrandResolverRepository brandResolverRepository;
	
	@Autowired
	private UserFavoriteBrandRepository userFavoriteBrandRepository;
	
//	@Transactional(readOnly = true) // ????
	public Brand getBrand(Long id, boolean addMetacounts) {
		Brand brand = brandResolverRepository.findById(id, true, false, true);
		if(addMetacounts) {
			resolveMetacounts(brand);
		}
		return brand;		
	}
	
	public Page<Brand> searchBrands(CompanySearchRequest req, boolean addMetacounts, boolean addCsData) {
		Page<Brand> page = brandResolverRepository.searchBrands(req, addCsData);
		
		if(addMetacounts) {
			resolveMetacounts(page.getContent());
		}
		
		return page;		
	}
	
	@Override
	public UserCtx getUserContext(Brand brand) {
		boolean hasLiked = hasLiked(brand);
		boolean isFollowing = isFollowing(brand);
		boolean isInFavorites = isInFavorites(brand);
		return new UserCtx(hasLiked, isFollowing, isInFavorites, null);
	}
	
	@Override
	public Brand getParentById(Long id, boolean persist, boolean fetchData) {
		return brandResolverRepository.findById(id, true, persist, fetchData);
	}
	
	@Override
	public Brand getFollowable(Long id) {
		return brandResolverRepository.findById(id, true, true, false);
	}

	@Override
	public CommentRepository<Long, Brand, CommentBrand> getCommentsRepository() {
		return commentBrandRepository;
	}

	@Override
	public LikeRepository<Long, Brand, LikeBrand> getLikeRepository() {
		return likeBrandRepository;
	}
	
	@Override
	public FollowerRepository<Long, Brand, FollowerBrand> getFollowerRepository() {
		return followerBrandRepository;
	}
	
	@Override
	public CommentBrand newEmptyCommentInstance() {
		return new CommentBrand();
	}

	@Override
	public LikeBrand newEmptyLikeInstance() {
		return new LikeBrand();
	}
	
	@Override
	public FollowerBrand newEmptyFollowerInstance() {
		return new FollowerBrand();
	}
	
	@Override
	public UserFavoriteBrand newEmptyUserFavorite() {
		return new UserFavoriteBrand();
	}
	
	@Override
	public UserFavoriteRepository<Long, Brand, UserFavoriteBrand> getUserFavoriteRepository() {
		return userFavoriteBrandRepository;
	}

	@Override
	public Brand getFavoritable(Long id) {
		return brandResolverRepository.findById(id, true, true, false);
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.BRAND;
	}
	
	@Override
	public CommentableType getCommentableType() {
		return CommentableType.BRAND;
	}
	
	@Override
	public FollowableType getFollowableType() {
		return FollowableType.BRAND;
	}
	
	@Override
	public UserFavoriteType getUserFavoriteType() {
		return UserFavoriteType.BRAND;
	}
}
