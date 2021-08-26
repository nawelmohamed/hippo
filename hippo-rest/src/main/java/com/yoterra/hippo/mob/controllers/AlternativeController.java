package com.yoterra.hippo.mob.controllers;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.res.Response;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/alt")
public class AlternativeController extends BaseController {
	
	private Map<LikeableType, ILikesController<?, ?, ?, ?>> likeControllersMap;
	private Map<CommentableType, ICommentsController<?, ?, ?, ?>> commentsControllersMap;
//	private Map<FavType, IFavoritesController<?, ?, ?, ?, ?>> favoritesControllersMap;
	private Map<FollowableType, IFollowersController<?, ?, ?, ?, ?>> followersControllersMap;
	private Map<CollectionType, CollectionItemController<?, ?, ?, ?, ?, ?, ?, ?, ?, ?>> collectionItemControllersMap;
	
	private UsersController usersController;
	
	@Autowired
	public AlternativeController(List<ILikesController<?, ?, ?, ?>> likesControllers,
			List<ICommentsController<?, ?, ?, ?>> commentsControllers,
//			List<IFavoritesController<?, ?, ?, ?, ?>> favoritesControllers,
			List<IFollowersController<?, ?, ?, ?, ?>> followersControllers,
			List<CollectionItemController<?, ?, ?, ?, ?, ?, ?, ?, ?, ?>> collectionItemControllers,
			UsersController usersController) {
		
		this.likeControllersMap = Opt.strm(likesControllers).toMapByKey(ILikesController::getLikeableType); 
		this.commentsControllersMap = Opt.strm(commentsControllers).toMapByKey(ICommentsController::getCommentableType); 
		this.followersControllersMap = Opt.strm(followersControllers).toMapByKey(IFollowersController::getFollowableType);
		this.collectionItemControllersMap = Opt.strm(collectionItemControllers).toMapByKey(CollectionItemController::getCollectionType);
		
		this.usersController = usersController;
	}
		
	@SuppressWarnings("unchecked")
	@Operation(summary = "ALTERNATIVE: Get likes page of the specified item based on it's type.",
				description = "ALTERNATIVE: Get likes page of the specified item based on it's type. <br/>"
						+ "This endpoint delegates the requests to the original endpoints. <br>"
						+ "For exmaple: /alt/likes/of?itemId=1&type=STORE is equivalent to /stores/likes/of?id=1 , "
							+ "/alt/likes/of?itemId=1&type=COLLECTION <=> /collections/likes/of?id=1 and so on.<br>"
						+ "For detailed information about the response records see the original endpoints that correspond to the specific type. <br/>"
						+ "<i>COMMENTS type is not supported. Don't use it for now. </i>")
	@RequestMapping(value = "/likes/of", method = RequestMethod.GET, params = {"type", "itemId"})
	public Response<?> likesOf (
			@Parameter(description = "Liked item type") @RequestParam("type") LikeableType type, 
			@Parameter(description = "Item id") @RequestParam("itemId") String itemId,
			PageParams pageParams){
		
		@SuppressWarnings("rawtypes")
		ILikesController iLikesController = likeControllersMap.get(type);
		if(iLikesController == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		Object id = iLikesController.idFromString(itemId);
		return iLikesController.getLikesOf(id, pageParams);
	}
	
	@Operation(summary = "ALTERNATIVE: Get a page of liked items of the specified user based on the item type.",
			description = "ALTERNATIVE: Get a page of liked items of the specified user based on the item type. If type is not specified, it returns all likes mixed. <br/>"
					+ "This endpoint delegates the requests to the original endpoints. <br>"
					+ "For exmaple: /alt/likes/by?userId=1&type=STORE is equivalent to /stores/likes/by?uid=1 , "
						+ "/alt/likes/by?userId=1&type=COLLECTION <=> /collections/likes/by?uid=1 and so on.<br>"
						+ "If the type is not specified, the equivalent endpoint is /users/all/likes/by.<br>"
					+ "For detailed information about the response records see the original endpoints that correspond to the specific type. <br/>"
					+ "<i>COMMENTS type is not supported. Don't use it for now. </i>")
	@RequestMapping(value = "/likes/by", method = RequestMethod.GET)
	public Response<?> likesBy (
			@Parameter(description = "Liked item type. If not specified, all likes will be returned (mixed)")
				@RequestParam(value="type", required = false) LikeableType type, 
			@Parameter(description = "User ID. It defaults to the active (current) user's id") 
				@RequestParam(value="userId", required = false) Long userId,
			PageParams pageParams){
		
		if(type == null) {
			return usersController.getAllUserLikes(userId, pageParams);
		}
		
		ILikesController<?, ?, ?, ?> iLikesController = likeControllersMap.get(type);
		if(iLikesController == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		return iLikesController.getLikesBy(userId, pageParams);
	}
	
	@SuppressWarnings("unchecked")
	@Operation(summary = "ALTERNATIVE: Delete a like based on it's type.",
				description = "ALTERNATIVE: Delete a like based on it's type. One of 'likeId' and 'itemId' is required <br/>"
						+ "This endpoint delegates the requests to the original endpoints. <br>"
						+ "For exmaple: /alt/likes/remove?itemId=1&type=STORE is equivalent to /stores/likes/remove?iid=1 , "
							+ "/alt/likes/remove?likeId=1&type=COLLECTION <=> /collections/likes/remove?lid=1 and so on.<br>"
						+ "For detailed information about the response records see the original endpoints that correspond to the specific type. <br/>"
						+ "<i>COMMENTS type is not supported. Don't use it for now. </i>")
	@RequestMapping(value = "/unlike", method = RequestMethod.DELETE, params = "type")
	public Response<?> unlike (
			@Parameter(description = "Liked item type") @RequestParam("type") LikeableType type, 
			@Parameter(description = "Like id. Id if the like relation (not liked item id). "
					+ "Not required if 'itemId' is specified, but use likeId whenever possible") 
				@RequestParam(value = "likeId", required = false) Long likeId,
			@Parameter(description = "Item id. Id of the liked item. Not required if 'likeId' is specified") 
				@RequestParam(value = "itemId", required = false) String itemId){
		
		@SuppressWarnings("rawtypes")
		ILikesController iLikesController = likeControllersMap.get(type);
		if(iLikesController == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		Object oItemId = StringUtils.isBlank(itemId) ? null : iLikesController.idFromString(itemId);
		return iLikesController.deleteLike(likeId, oItemId);
	}
	
	
	@SuppressWarnings("unchecked")
	@Operation(summary = "ALTERNATIVE: Get followers page of the specified item based on it's type.",
			description = "ALTERNATIVE: Get followers page of the specified item based on it's type. <br/>"
					+ "This endpoint delegates the requests to the original endpoints. <br>"
					+ "For exmaple: /alt/followers/of?itemId=1&type=STORE is equivalent to /stores/followers/of?id=1 , "
						+ "/alt/followers/of?itemId=1&type=COLLECTION <=> /collections/followers/of?id=1 and so on.<br>"
					+ "For detailed information about the response records see the original endpoints that correspond to the specific type."
			)
	@RequestMapping(value = "/followers/of", method = RequestMethod.GET, params = {"type", "itemId"})
	public Response<?> followers (
			@Parameter(description = "Followed item type") @RequestParam("type") FollowableType type, 
			@Parameter(description = "Item id") @RequestParam("itemId") String itemId,
			PageParams pageParams){
		
		@SuppressWarnings("rawtypes")
		IFollowersController iFollowersController = followersControllersMap.get(type);
		if(iFollowersController == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		Object id = iFollowersController.idFromString(itemId);
		return iFollowersController.getFollowersOf(id, pageParams);
	}
	
	@Operation(summary = "ALTERNATIVE: Get a page of followed items of the specified user based on the item type.",
			description = "ALTERNATIVE: Get a page of followed items of the specified user based on the item type. If type is not specified, it returns mixed records.<br/>"
					+ "This endpoint delegates the requests to the original endpoints. <br>"
					+ "For exmaple: /alt/followed/by?userId=1&type=STORE is equivalent to /stores/following?uid=1 , "
						+ "/alt/followed/by?userId=1&type=COLLECTION <=> /collections/following?uid=1 and so on.<br>"
					+ "If the type is not specified, the equivalent endpoint is /users/all/followed/by.<br>"
					+ "For detailed information about the response records see the original endpoints that correspond to the specific type."
			)
	@RequestMapping(value = "/followed/by", method = RequestMethod.GET)
	public Response<?> followed (
			@Parameter(description = "Followed item type. If not specified, it returns all followed items mixed") 
				@RequestParam(value="type", required = false) FollowableType type, 
			@Parameter(description = "User ID. It defaults to the active (current) user's id") 
				@RequestParam(value="userId", required = false) Long userId,
			PageParams pageParams){
		
		if(type == null) {
			return usersController.getAllUserFollowed(userId, pageParams);
		}
		
		IFollowersController<?,?,?,?,?> iFollowersController = followersControllersMap.get(type);
		if(iFollowersController == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		return iFollowersController.getFollowedBy(userId, pageParams);
	}
	
	@SuppressWarnings("unchecked")
	@Operation(summary = "ALTERNATIVE: Unfollow an item based on it's type.",
				description = "ALTERNATIVE: Unfollow an item based on it's type. One of 'followId' and 'itemId' is required <br/>"
						+ "This endpoint delegates the requests to the original endpoints. <br>"
						+ "For exmaple: /alt/unfollow?itemId=1&type=STORE is equivalent to /stores/unfollow?eid=1 , "
							+ "/alt/unfollow?followId=1&type=COLLECTION <=> /collections/unfollow?fid=1 and so on.<br>"
						+ "For detailed information about the response records see the original endpoints that correspond to the specific type. <br/>")
	@RequestMapping(value = "/unfollow", method = RequestMethod.DELETE, params = "type")
	public Response<?> unfollow (
			@Parameter(description = "Followed item (entity) type") @RequestParam("type") FollowableType type, 
			@Parameter(description = "Follow id. Id if the follow relation (not followed item id). "
					+ "Not required if 'itemId' is specified, but use followId whenever possible") 
				@RequestParam(value = "followId", required = false) Long followId,
			@Parameter(description = "Item id. Id of the followed item. Not required if 'followId' is specified") 
				@RequestParam(value = "itemId", required = false) String itemId,
			PageParams pageParams){
		
		@SuppressWarnings("rawtypes")
		IFollowersController iFollowController = followersControllersMap.get(type);
		if(iFollowController == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		Object entityId = StringUtils.isBlank(itemId) ? null : iFollowController.idFromString(itemId);
		return iFollowController.unfollow(followId, entityId);
	}
	
	@SuppressWarnings("unchecked")
	@Operation(summary = "ALTERNATIVE: Get comments page about the specified item based on it's type.",
			description = "ALTERNATIVE: Get comments page about the specified item based on it's type. <br/>"
					+ "This endpoint delegates the requests to the original endpoints. <br>"
					+ "For exmaple: /alt/comments/of?itemId=1&type=STORE is equivalent to /stores/comments/of?id=1 , "
						+ "/alt/comments/of?itemId=1&type=COLLECTION <=> /collections/comments/of?id=1 and so on.<br>"
					+ "For detailed information about the response records see the original endpoints that correspond to the specific type. <br/>"
					+ "<i>COMMENTS type is not supported. Don't use it for now. </i>")
	@RequestMapping(value = "/comments/about", method = RequestMethod.GET, params = {"type", "itemId"})
	public Response<?> comments (
			@Parameter(description = "Commented item type") @RequestParam("type") CommentableType type, 
			@Parameter(description = "Item id") @RequestParam("itemId") String itemId,
			PageParams pageParams){
		
		@SuppressWarnings("rawtypes")
		ICommentsController controller = commentsControllersMap.get(type);
		if(controller == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		Object id = controller.idFromString(itemId);
		return controller.getCommentsOf(id, pageParams);
	}

	@Operation(summary = "ALTERNATIVE: Get a page of comments written by the specified user based on the item type.",
			description = "ALTERNATIVE: Get a page of comments written by the specified user based on the item type. If type is not specified, it returns mixed records. <br/>"
					+ "This endpoint delegates the requests to the original endpoints. <br>"
					+ "For exmaple: /alt/comments/by?userId=1&type=STORE is equivalent to /stores/comments/by?uid=1 , "
						+ "/alt/comments/by?userId=1&type=COLLECTION <=> /collections/comments/by?uid=1 and so on.<br>"
					+ "If the type is not specified, the equivalent endpoint is /users/all/comments/by.<br>"
					+ "For detailed information about the response records see the original endpoints that correspond to the specific type. <br/>"
					+ "<i>COMMENTS type is not supported. Don't use it for now. </i>")
	@RequestMapping(value = "/comments/by", method = RequestMethod.GET)
	public Response<?> commented (
			@Parameter(description = "Commented item type. If not spefified, it returns all comments (mixed)") 
				@RequestParam(value="type", required = false) CommentableType type, 
			@Parameter(description = "User ID. It defaults to the active (current) user's id") 
				@RequestParam(value="userId", required = false) Long userId,
			PageParams pageParams){
		
		if(type == null) {
			return usersController.getAllUserComments(userId, pageParams);
		}
		
		ICommentsController<?, ?, ?, ?> controller = commentsControllersMap.get(type);
		if(controller == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		return controller.getCommentsBy(userId, pageParams);
	}
	
	@Operation(summary = "ALTERNATIVE: Delete a comment based on it's type.",
				description = "ALTERNATIVE: Delete a comment based on it's type. One of 'commentId' and 'itemId' is required <br/>"
						+ "This endpoint delegates the requests to the original endpoints. <br>"
						+ "For exmaple: /alt/comments/remove?commentId=1&type=COLLECTION <=> /collections/comments/remove?cid=1 .<br>"
						+ "For detailed information about the response records see the original endpoints that correspond to the specific type. <br/>"
						+ "<i>COMMENTS type is not supported. Don't use it for now. </i>")
	@RequestMapping(value = "/comments/remove", method = RequestMethod.DELETE, params = "type")
	public Response<?> removeComment (
			@Parameter(description = "Comment item type") @RequestParam("type") CommentableType type, 
			@Parameter(description = "Comment id. Id if the comment (not commented item id).") 
				@RequestParam(value = "commentId", required = false) Long commentId){
		
		@SuppressWarnings("rawtypes")
		ICommentsController iCommentsController = commentsControllersMap.get(type);
		if(iCommentsController == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		return iCommentsController.deleteComment(commentId);
	}
	
	@Operation(summary = "ALTERNATIVE: Get collection items page of the specified collection based on it's type.",
			description = "ALTERNATIVE: Get collection items page of the specified collection based on it's type. <br/>"
					+ "This endpoint delegates the requests to the original endpoints. <br>"
					+ "For exmaple: /alt/collections/items?cid=1&type=PRODUCT is equivalent to /collection/products?id=1 , "
						+ "/alt/collections/items?cid=2&type=DEAL <=> /collections/deals?id=1 .<br>"
					+ "For detailed information about the response records see the original endpoints that correspond to the specific type.")
	@RequestMapping(value = "/collections/items", method = RequestMethod.GET, params = {"type", "cid"})
	public Response<?> collectionItems (
			@Parameter(description = "Collection type") @RequestParam("type") CollectionType type, 
			@Parameter(description = "Collection id") @RequestParam("cid") Long cid,
			PageParams pageParams){
		
		CollectionItemController<?, ?, ?, ?, ?, ?, ?, ?, ?, ?> controller = collectionItemControllersMap.get(type);
		if(controller == null)
			throw new UnsupportedOperationException("Unsupported type: " + type);
		
		return controller.getCollectionItems(cid, pageParams);
	}
	
}
