package com.yoterra.hippo.services;

import java.util.Collection;

import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.data.companies.Company;
import com.yoterra.hippo.jpa.entities.favorites.UserFavorite;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.mob.model.UserCtx;

public interface CompanyService	<	C extends Company, 
									CC extends Comment<C>, 
									LC extends Like<C>, 
									FC extends Follower<C>,
									UF extends UserFavorite<Long,C>
								>
						extends 	ICommentService<Long, C, CC>, 
									ILikeService<Long, C, LC>,
									IFollowerService<Long, C, FC>,
									IUserContextService<C, UserCtx>,
									IFavoritesService<Long, C, UF>
						{
	
	default void resolveMetacounts(C company) {
		ILikeService.super.resolveMetacounts(company);
		ICommentService.super.resolveMetacounts(company);
		IFollowerService.super.resolveMetacounts(company);
	}
	
	default void resolveMetacounts(Collection<C> page) {
		ILikeService.super.resolveMetacounts(page);
		ICommentService.super.resolveMetacounts(page);
		IFollowerService.super.resolveMetacounts(page);
	}
}
