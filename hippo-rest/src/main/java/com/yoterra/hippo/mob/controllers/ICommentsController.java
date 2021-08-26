package com.yoterra.hippo.mob.controllers;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.mob.model.CommentMob;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.ICommentService;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;


public interface ICommentsController<ID, 
									C extends Commentable<ID>, 
									T extends Comment<C>, 
									CM extends CommentMob> extends LoggerProvider, IBaseController, IEntityController<ID> {
	
	ICommentService<ID, C, T> getCommentService();
	
	@Operation(summary = "Get a page of comments of the specified item.", 
			description = "Get a page of comments of the specified item. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for listing comments of different entities."
					+ "(/deals/comments/of, /products/comments/of, /collections/comments/of, /collections/products/comments/of, "
					+ "/collections/deals/comments/of, /stores/comments/of, /brands/comments/of)</i>")
	@RequestMapping(value = "/comments/of", params = "id", method = RequestMethod.GET)
	public default Response<RPage<CM>> getCommentsOf(@RequestParam("id") @Parameter(description = "ID of the commented item") ID id, PageParams pageParams) {

		ICommentService<ID, C, T> service = getCommentService();

		getLogger().info("List comments of type: {}, of item with id: {}", service.getCommentableType(), id);
		
		Page<T> cp = service.getComments(id, pageParams);
		
		
		RPage<CM> cmp = RPage.of(cp, CommentMob::resolve);
		
		return Response.success(null, cmp);
	}
	
	@Operation(summary = "Get a page of comments by the specified user.", 
			description = "Get a page of comments by the specified user. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for listing comments of different entities."
					+ "(/deals/comments/by, /products/comments/by, /collections/comments/by, /collections/products/comments/by, "
					+ "/collections/deals/comments/by, /stores/comments/by, /brands/comments/by)</i>")
	@RequestMapping(value = "/comments/by", method = RequestMethod.GET)
	public default Response<RPage<CM>> getCommentsBy(@RequestParam(value="uid", required = false) 
			@Parameter(description = "User ID. It defaults to the active (current) user's id") Long userId, PageParams pageParams) {

		ICommentService<ID, C, T> service = getCommentService();

		getLogger().info("List comments of type: {}, of user: {}", service.getCommentableType(), userId);
		
		Long uid = Opt.lazyDefVal(userId, ActiveUser::getId);
		Page<T> cp = service.getCommentsBy(uid, pageParams);
		
		RPage<CM> cmp = RPage.of(cp, CommentMob::resolve);
		
		return Response.success(null, cmp);
	}
	
	@Operation(summary = "Add a comment for a specified item.", 
			description = "Add a comment for a specified item. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for adding comments for different entities."
					+ "(/deals/comments/add, /products/comments/add, /collections/comments/add, /collections/products/comments/add, "
					+ "/collections/deals/comments/add, /stores/comments/add, /brands/comments/add)</i>")
	@RequestMapping(value = "/comments/add", params = "id", method = RequestMethod.POST)
	public default Response<CM> addComment(@RequestParam("id")  
			@Parameter(description = "ID of the commented item (product, deal, collection, ...).") ID id, @RequestParam("text") String text) {
		
		ICommentService<ID, C, T> service = getCommentService();

		getLogger().info("Add comment of type {} for id: {}", service.getCommentableType().getClass().getName(), id);
		
		T c = service.addComment(id, text);
		
		return Response.success(null, CommentMob.resolve(c));
	}
	
	@Operation(summary = "Remove a comment.", 
			description = "Remove a comment. \n"
					+ "<i>Note that this doc is generic and associated with all endpoints for removing comments of different entities."
					+ "(/deals/comments/remove, /products/comments/remove, /collections/comments/remove, /collections/products/comments/remove, "
					+ "/collections/deals/comments/remove, /stores/comments/remove, /brands/comments/remove)</i>")
	@RequestMapping(value = "/comments/remove", method = RequestMethod.DELETE)
	public default Response<?> deleteComment(@Parameter(description = "Comment record ID (not commented item ID).")
												@RequestParam(value = "cid", required = false) Long commentId) {
		
		ICommentService<ID, C, T> service = getCommentService();

		getLogger().info("Delete comment: {} of type: {}", commentId, service.getCommentableType());
		
		service.deleteComment(commentId);
		
		return Response.success("Comment successfully deleted", null);
	}
	
	public default CommentableType getCommentableType(){
		return getCommentService().getCommentableType();
	}

}
