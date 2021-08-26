package com.yoterra.hippo.mob.controllers;

import org.springframework.data.domain.Page;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.jpa.entities.followers.Followable;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.mob.forms.FollowForm;
import com.yoterra.hippo.mob.forms.FollowUpdateForm;
import com.yoterra.hippo.mob.model.FollowerMob;
import com.yoterra.hippo.req.Form.Create;
import com.yoterra.hippo.req.Form.Edit;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.IFollowerService;
import com.yoterra.hippo.services.dataresv.DataResolvableManagerProvider;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

public interface IFollowersController<ID, 
										M extends FollowerMob,
										F extends Followable<ID>, 
										T extends Follower<F>, 
										FF extends FollowForm<ID>					// for some reason it has to be explicitly specified, 
																					// otherwise FollowForm<String> is used, regardless the ID type
										> extends LoggerProvider, IBaseController, IEntityController<ID>, DataResolvableManagerProvider {
	
	IFollowerService<ID, F,T> getFollowerService();

	@Operation(summary = "Get a page of followers of the specified entity.", 
			description = "Get a page of followers of the specified entity. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for listing followers of different entities."
					+ "(/users/followers/of, /collections/followers/of, /store/followers/of, /brand/followers/of)</i>")
	@RequestMapping(value = "/followers/of", params = "id", method = RequestMethod.GET)
	public default Response<RPage<M>> getFollowersOf(@RequestParam("id")
			@Parameter(description = "Entity id (user id, collection id, store id, brand id)") ID id, PageParams pageParams) {
		
		IFollowerService<ID, F,T> service = getFollowerService();
		
		getLogger().info("List followers for: {}, id: {}", service.getFollowableType().getClass().getName(), id);

		Page<T> lp = service.getFollowersOf(id, pageParams);
		
		RPage<M> cmp = RPage.of(lp, FollowerMob::resolve);
		
		return Response.success(null, cmp);
	}
	
	@Operation(summary = "Get a page of items followed by the specified user (current use by default).", 
			description = "Get a page of items followed by the specified user. If the user id is not specified it defauts to the current user id. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for listing followers of different entities."
					+ "(/users/followed/by, /collections/followed/by, /store/followed/by, /brand/followed/by)</i>")
	@RequestMapping(value = "/followed/by", method = RequestMethod.GET)
	public default Response<RPage<M>> getFollowedBy(@RequestParam(value = "uid", required = false)
				@Parameter(description = "User ID. It defaults to the current user ID.", required = false) Long userId, PageParams pageParams) {
		
		IFollowerService<ID, F,T> service = getFollowerService();
		
		getLogger().info("Getting list of [{}] followed by current user", service.getFollowableType());

		Long uid = Opt.lazyDefVal(userId, ActiveUser::getId);
		Page<T> lp = service.getFollowedBy(uid, pageParams);
		
		RPage<M> cmp = RPage.of(lp, FollowerMob::resolve);
		
		return Response.success(null, cmp);
	}
	
	@Operation(summary = "Follow a specified entity.", 
			description = "Follow a specified entity. Deletes the follower releation between the followed entity and the current user. "
					+ "It's also used to specify the 'follow' releation preferences (notification preferences). \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for following different entities."
					+ "(/users/follow, /collections/follow, /store/follow, /brand/follow)</i>")
	@RequestMapping(value = "/follow", params = "id", method = RequestMethod.POST)
	public default Response<M> follow(
			@ModelAttribute @Validated(value = Create.class) FF followForm, BindingResult errors) throws DuplicateElementException {
		
		IFollowerService<ID, F,T> service = getFollowerService();
		
		getLogger().info("Follow [{}] with id: {}", service.getFollowableType(), followForm);
		
		if(errors.hasErrors()) 
			Response.throwError(getOneErrorMessage(errors));
		
		T f = service.follow(followForm);
		
		getDataResolvingManager().resolveContainedData(f);
		
		return Response.success(null, FollowerMob.resolve(f));
	}
	
	@Operation(summary = "Unfollow a specified entity.", 
			description = "Unfollow a specified entity. Deletes the follower releation between the followed entity and the current user. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for following different entities."
					+ "(/users/unfollow, /collections/unfollow, /store/unfollow, /brand/unfollow)</i>")
	@RequestMapping(value = "/unfollow", method = RequestMethod.DELETE)
	public default Response<?> unfollow(
			@Parameter(description = "Follow relation ID (not followed entity ID). One of 'fid' and 'eid' is required. Use 'fid' whenever is possible.") 
				@RequestParam(value = "fid", required = false) Long followerId,
			@Parameter(description = "Entity ID. One of 'fid' and 'eid' is required. Use 'fid' whenever is possible.") 
				@RequestParam(value = "eid", required = false) ID entityId
			) {
		
		IFollowerService<ID, F,T> service = getFollowerService();
		
		getLogger().info("Unfollow [{}] of follow relation id: {} or entity id: {}", service.getFollowableType(), followerId, entityId);
		
		if(followerId != null) 
			service.unfollow(followerId);
		else if(entityId != null)
			service.unfollowEntity(entityId);
		else
			throw new IllegalArgumentException("Follow relation ID or entity ID has to be specified.");
		
		return Response.success("Successfully unfollowed.", null);
	}
	
	@Operation(summary = "Edit 'follow' relation preferences.", 
			description = "Edit 'follow' relation preferences of the spefified follow relation.\n"
					+ "<i>Note that this doc is generic and associated with all endpoints for following different entities."
					+ "(/users/follow/edit, /collections/follow/edit, /store/follow/edit, /brand/follow/edit)</i>")
	@RequestMapping(value = "/follow/edit", params = "followRelId", method = RequestMethod.POST)
	public default Response<?> editNotificationPrefs(
			@ModelAttribute @Validated(value = Edit.class) FollowUpdateForm followUpdateForm, BindingResult errors) {
		
		IFollowerService<ID, F,T> service = getFollowerService();
		
		getLogger().info("Change follow relation notification prefs: {}", followUpdateForm.getFollowRelId());
		
		service.changePreferences(followUpdateForm);
		
		return Response.success("Successfully changed notification preferences.", null);
	}
	
	public default FollowableType getFollowableType(){
		return getFollowerService().getFollowableType();
	}
}
