package com.yoterra.hippo.mob.controllers;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.jpa.entities.collections.Collectable;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionItem;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionItem;
import com.yoterra.hippo.mob.model.CollectionItemMob;
import com.yoterra.hippo.mob.model.CommentMob;
import com.yoterra.hippo.mob.model.LikeMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.services.CollectionItemService;
import com.yoterra.hippo.services.CollectionService;
import com.yoterra.hippo.services.ICommentService;
import com.yoterra.hippo.services.ILikeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

public abstract class CollectionItemController<	ID,								// TOO MANY GENERICS FIXME !!!!
												C extends Collectable<ID>,
												CIM extends CollectionItemMob,
												CIFM extends CollectionItemMob,			// Full version
												CI extends CollectionItem<C>, 
												LCI extends LikeCollectionItem<CI>, 
												CCI extends CommentCollectionItem<CI>,
												LM extends LikeMob, 
												CM extends CommentMob, 
												CIS extends CollectionItemService<ID, C, CI, LCI, CCI>
											> 
						extends BaseController  implements 	
							ILikesController<Long, CI, LCI, LM>, 
							ICommentsController<Long, CI, CCI, CM>,
							ILongEntityController{
	
	private static final Logger log = LoggerFactory.getLogger(CollectionItemController.class);

	@Autowired
	protected CollectionService collectionService;
	
	@Autowired
	protected CIS collectionItemService;
	
	protected abstract CIM collectionItemToMob(CI ci);
	protected abstract CIFM collectionItemToFullMob(CI ci, UserCtx iCtx, UserCtx ciCtx);

	
	@Operation(summary = "Get a page of collection items", description = "Get a page of collection items of a specified collection.")
	@ApiResponse(description = "The collection item record type (DEAL or PRODUCT) depend on the collection type. "
			+ "IN THE FUTURE, the page might contain mixed item types.")
	@RequestMapping(value = "/", params = "id", method = RequestMethod.GET)
	public Response<RPage<CIM>> getCollectionItems(@RequestParam("id") @Parameter(description = "Collection id") Long id, 
																@ModelAttribute PageParams pageParams){
		log.info("Get collection items {}", id);
		
		Page<CI> itemsPage = collectionItemService.getCollectionItems(id, true, pageParams);
		RPage<CIM> page = RPage.of(itemsPage, this::collectionItemToMob);
		return Response.success("Collection items page", page);
	}

	@Operation(summary = "Add an item to a collection.", description = "Add an item to a collection.")
	@RequestMapping(value = "/add", params = {"cid", "iid"}, method = RequestMethod.POST)
	public Response<CollectionItemMob> addItem(@RequestParam("cid") @Parameter(description = "Collection id") Long collectionId, 
											   @RequestParam("iid") @Parameter(description = "Item id (deal id or product id)") ID itemId) 
			throws EntityNotFoundException, DuplicateElementException{
		
		log.info("Adding item {} to collection {}", itemId, collectionId);
		CI ci = collectionItemService.addItem(collectionId, itemId);
		return Response.success("Item successfully added", collectionItemToMob(ci));
	}
	
	@Operation(summary = "Get a collection item record with full information.", 
			description = "Get a collection item record with full information. Used on screens that show information of a single collection item.")
	@RequestMapping(value = "/get", params = "id", method = RequestMethod.GET)
	public Response<CIFM> getCollectionItem(@RequestParam("id") @Parameter(description = "Collection item ID (not item ID)") Long cdId) {
		log.info("Getting collection item: {}", cdId);
		
		CI ci = collectionItemService.getCollectionItem(cdId, true);
		UserCtx ciUserCtx = collectionItemService.getUserContext(ci);
		UserCtx iUserCtx = collectionItemService.getUserContextOfItem(ci);
		return Response.success(null, collectionItemToFullMob(ci, iUserCtx, ciUserCtx));		
	}
	
	@Operation(summary = "Remove a collection item from it's collection", 
			description = "Remove a collection item (collection deal or collection product) from it's collection. \n<i>Note that this doc is associated "
					+ "with one method used for 2 different endpoints ('/collections/deals/remove' and '/collections/products/remove')</i>")
	@RequestMapping(value = "/remove", params = "id", method = RequestMethod.DELETE)
	public Response<?> removeItem(@RequestParam("id") 
			@Parameter(description = "Collection item ID - collection deal id (not deal id) or collection product id (not product id)") Long collectionItemId) {
		
		log.info("Removing collection item: {}", collectionItemId);
		
		collectionItemService.removeItem(collectionItemId);
		
		return Response.success();
	}
	
	@Override
	public ILikeService<Long, CI, LCI> getLikeService() {
		return collectionItemService;
	}

	@Override
	public ICommentService<Long, CI, CCI> getCommentService() {
		return collectionItemService;
	}
	
	public CollectionType getCollectionType(){
		return collectionItemService.getCollectionType();
	}
}
