package com.yoterra.hippo.mob.controllers;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.mob.model.LikeMob;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.ILikeService;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

public interface ILikesController<ID, 
								L extends Likeable<ID>, 
								T extends Like<L>, 
								LM extends LikeMob> extends LoggerProvider, IBaseController, IEntityController<ID> {
	
	ILikeService<ID, L, T> getLikeService();
	
	@Operation(summary = "Get a page of likes of the specified item.", 
			description = "Get a page of likes of the specified item. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for listing likes of different entities."
					+ "(/deals/likes/of, /products/likes/of, /collections/likes/of, /collections/products/likes/of, "
					+ "/collections/deals/likes/of, /stores/likes/of, /brands/likes/of)</i>")
	@RequestMapping(value = "/likes/of", params = "id", method = RequestMethod.GET)
	public default Response<RPage<LM>> getLikesOf(@RequestParam("id") @Parameter(description = "ID of the liked item.") ID id, PageParams pageParams) {
		
		ILikeService<ID, L, T> service = getLikeService();
		
		getLogger().info("List likes for: {}, id: {}", service.getLikeableType(), id);
		
		Page<T> lp = service.getLikes(id, pageParams);
		
		RPage<LM> cmp = RPage.of(lp, LikeMob::resolve);
		
		return Response.success(null, cmp);
	}
	
	@Operation(summary = "Get a page of likes by the specified user.", 
			description = "Get a page of likes of the specified user. If the user id is not specified, it defaults to the current user id.\n"
					+ "<i>Note that this doc is generic and associated with all endpoints for listing likes of different entities."
					+ "(/deals/likes/by, /products/likes/by, /collections/likes/by, /collections/products/likes/by, "
					+ "/collections/deals/likes/by, /stores/likes/by, /brands/likes/by)</i>")
	@RequestMapping(value = "/likes/by", method = RequestMethod.GET)
	public default Response<RPage<LM>> getLikesBy(@RequestParam(value = "uid", required = false) 
							@Parameter(description = "User ID. It default to the current user's id") Long userId, PageParams pageParams) {
		
		ILikeService<ID, L, T> service = getLikeService();
		
		getLogger().info("List liked {}, by user with id: {}", service.getLikeableType(), userId);
		
		Long uid = Opt.lazyDefVal(userId, ActiveUser::getId);
		Page<T> lp = service.getLikedBy(uid, pageParams);
		
		RPage<LM> cmp = RPage.of(lp, LikeMob::resolve);
		
		return Response.success(null, cmp);
	}
	
	@Operation(summary = "Like a specified item.", 
			description = "Like a specified item. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for adding likes for different entities."
					+ "(/deals/likes/add, /products/likes/add, /collections/likes/add, /collections/products/likes/add, "
					+ "/collections/deals/likes/add, /stores/likes/add, /brands/likes/add)</i>")
	@RequestMapping(value = "/likes/add", params = "id", method = RequestMethod.POST)
	public default Response<LM> addLike(@RequestParam("id") @Parameter(description = "ID of the item to like.") ID id) throws DuplicateElementException {
		
		ILikeService<ID, L, T> service = getLikeService();
		
		getLogger().info("Add like of type {} for id: {}", service.getLikeableType(), id);
		
		T l = service.addLike(id);
		
		return Response.success(null, LikeMob.resolve(l));
	}
	
	@Operation(summary = "Remove a like of a specified item.", 
			description = "Add a like of a specified item. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for removing comments of different entities."
					+ "(/deals/likes/remove, /products/likes/remove, /collections/likes/remove, /collections/products/likes/remove, "
					+ "/collections/deals/likes/remove, /stores/likes/remove, /brands/likes/remove)</i>")
	@RequestMapping(value = "/likes/remove", method = RequestMethod.DELETE)
	public default Response<?> deleteLike(
			@Parameter(description = "Like record ID (not liked item ID). <i>One of 'lid' and 'iid' is required. Use 'lid' whenever is possible.</i>")
				@RequestParam(value = "lid", required = false) Long likeId,
			@Parameter(description = "Item ID. <i>One of 'lid' and 'iid' is required. Use 'lid' whenever is possible.") 
				@RequestParam(value = "iid", required = false) ID itemId) {
		
		ILikeService<ID, L, T> service = getLikeService();
		
		getLogger().info("Delete like of type {} with like id: {} or item id {}", service.getLikeableType(), likeId, itemId);
		
		if(likeId != null) 
			service.deleteLike(likeId);
		else if(itemId != null)
			service.deleteItemLike(itemId);
		else
			throw new IllegalArgumentException("Like ID or item ID has to be specified.");
		
		return Response.success("Like successfully deleted", null);
	}
	
	public default LikeableType getLikeableType(){
		return getLikeService().getLikeableType();
	}
}
