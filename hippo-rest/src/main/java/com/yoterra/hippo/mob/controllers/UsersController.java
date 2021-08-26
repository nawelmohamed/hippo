package com.yoterra.hippo.mob.controllers;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datastax.oss.driver.shaded.guava.common.collect.Maps;
import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.followers.FollowerUser;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.mob.forms.FollowForm.LongFollowForm;
import com.yoterra.hippo.mob.model.AcMob;
import com.yoterra.hippo.mob.model.CommentMob;
import com.yoterra.hippo.mob.model.EmailUserStatusMob;
import com.yoterra.hippo.mob.model.FollowerMob;
import com.yoterra.hippo.mob.model.FollowerMob.FollowerUserMob;
import com.yoterra.hippo.mob.model.LikeMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.mob.model.UserFullMob;
import com.yoterra.hippo.mob.model.UserMob;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.search.requests.UserSearchRequest;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.IFollowerService;
import com.yoterra.hippo.services.UsersService;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/users")
public class UsersController extends BaseController 
		implements IFollowersController<Long, FollowerUserMob, User, FollowerUser, LongFollowForm>, ILongEntityController {

	private static final Logger log = LoggerFactory.getLogger(UsersController.class);

	@Autowired
	private UsersService userService;
	
	@Operation(summary = "Search for (get a page of) users", 
			description = "Search for (get a page of) users. Optionaly, apply filters (see the parameters). "
					+ "Returns records with limited information (full info records should be only used for single user info screens). "
					+ "It should be used on screens for displaying multiple users info.")
	@RequestMapping(method = RequestMethod.GET)
	public Response<RPage<UserMob>> searcUsers(@ModelAttribute UserSearchRequest req){
		log.info("Users search page");
		
		Page<User> uPage = userService.searchUsers(req, true);
		RPage<UserMob> page = RPage.of(uPage, UserMob::new);
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get a list of user names matching a specified query.",
			description = "Get a list of user IDs and names matching a specified query. "
					+ "Mostly used to display a list of user names while typing it in a text box.")
	@RequestMapping(value="/autocomplete", params="q", method = RequestMethod.GET)
	public Response<RPage<AcMob>> autocompleteUsers(@RequestParam("q") @Parameter(description = "Query text") String q){
		log.info("Users autocomplete page. Query: {}", q);
		
		UserSearchRequest req = new UserSearchRequest().initAutocompleteReq(q);
		Page<User> uPage = userService.searchUsers(req, false);
		RPage<AcMob> page = RPage.of(uPage, AcMob::new);
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get full info of one user.", description = "Get user record with full information.")
	@RequestMapping(value="/get", params="id", method = RequestMethod.GET)
	public Response<UserFullMob> getUser(@RequestParam("id") @Parameter(description = "User ID") Long id){
		log.info("Get user: {}", id);
		User u = userService.getUser(id, true); 
		UserCtx userContext = userService.getUserContext(u);
		return Response.success(null, UserFullMob.of(u, userContext));
	}
	
	@Operation(summary = "Get user status(es) by e-mail(s)", description = "For a given list of e-mails, returns a map of user e-mail status records")
	@RequestMapping(value="/emailstatuses", params="emails", method = RequestMethod.GET)
	public Response<Map<String,EmailUserStatusMob>> getEmailUserStatuses(@RequestParam("emails") 
				@Parameter(description = "List of e-mails to be checked") Set<String> emails){
		
		log.info("Get e-mail user statuses.");
		Map<String,EmailUserStatusMob> m = Maps.newTreeMap();
		
		List<Object[]> tuples = userService.getStatuses(emails);
		Opt.strm(tuples).map(EmailUserStatusMob::ofTuple).forEach(e->m.put(e.getEmail(), e));
		
		for (String em : emails) {
			m.computeIfAbsent(em, EmailUserStatusMob::notFound); 
		}
		
		return Response.success(null, m);
	}
	
	@Operation(summary = "Get all likes made by the specified user.", 
			description = "Get all likes made by the specified user (with mixed types)")
	@RequestMapping(value="/all/likes/by", method = RequestMethod.GET)
	public Response<RPage<LikeMob>> getAllUserLikes(@RequestParam(value = "id", required = false) 
			@Parameter(description = "User ID. It defaults to the active (current) user id.") Long id, PageParams pageParams){
		
		log.info("Get all likes made by user: {}", id);
		Long uid = Opt.lazyDefVal(id, ActiveUser::getId);
		Page<Like<?>> likes = userService.getAllLikes(uid, pageParams); 
		RPage<LikeMob> page = RPage.of(likes, LikeMob::resolve);
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get all comments written by the specified user.", 
			description = "Get all comments written by the specified user (with mixed types)")
	@RequestMapping(value="/all/comments/by", method = RequestMethod.GET)
	public Response<RPage<CommentMob>> getAllUserComments(@RequestParam(value = "id", required = false) 
			@Parameter(description = "User ID. It defaults to the active (current) user id.") Long id, PageParams pageParams){
		
		log.info("Get all comments written by user: {}", id);
		Long uid = Opt.lazyDefVal(id, ActiveUser::getId);
		Page<Comment<?>> comments = userService.getAllComments(uid, pageParams); 
		RPage<CommentMob> page = RPage.of(comments, CommentMob::resolve);
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get all items followed by the specified user.", 
			description = "Get all items followed by the specified user (with mixed types)")
	@RequestMapping(value="/all/followed/by", method = RequestMethod.GET)
	public Response<RPage<FollowerMob>> getAllUserFollowed(@RequestParam(value = "id", required = false) 
			@Parameter(description = "User ID. It defaults to the active (current) user id.") Long id, PageParams pageParams){
		
		log.info("Get all items followed by user: {}", id);
		Long uid = Opt.lazyDefVal(id, ActiveUser::getId);
		Page<Follower<?>> followed = userService.getAllFollowing(uid, pageParams); 
		RPage<FollowerMob> page = RPage.of(followed, FollowerMob::resolve);
		return Response.success(null, page);
	}

	@Override
	public Logger getLogger() {
		return log;
	}

	@Override
	public IFollowerService<Long, User, FollowerUser> getFollowerService() {
		return userService;
	}
}
