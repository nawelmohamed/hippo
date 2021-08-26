package com.yoterra.hippo.mob.controllers;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.comments.CommentCollection;
import com.yoterra.hippo.jpa.entities.followers.FollowerCollection;
import com.yoterra.hippo.jpa.entities.likes.LikeCollection;
import com.yoterra.hippo.mob.forms.CollectionCreateForm;
import com.yoterra.hippo.mob.forms.CollectionEditForm;
import com.yoterra.hippo.mob.forms.FollowForm.LongFollowForm;
import com.yoterra.hippo.mob.model.AcMob;
import com.yoterra.hippo.mob.model.CollectionFullMob;
import com.yoterra.hippo.mob.model.CollectionMob;
import com.yoterra.hippo.mob.model.CommentMob.CollectionCommentMob;
import com.yoterra.hippo.mob.model.FollowerMob.FollowerCollectionMob;
import com.yoterra.hippo.mob.model.LikeMob.CollectionLikeMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.req.Form.Create;
import com.yoterra.hippo.req.Form.Edit;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.search.requests.CollectionSearchRequest;
import com.yoterra.hippo.search.requests.sort.CollectionSort;
import com.yoterra.hippo.services.CollectionService;
import com.yoterra.hippo.services.ICommentService;
import com.yoterra.hippo.services.IFollowerService;
import com.yoterra.hippo.services.ILikeService;
import com.yoterra.hippo.services.images.UploadImageHelper;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.enums.ParameterStyle;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Encoding;
import io.swagger.v3.oas.annotations.media.Schema;

@RestController
@RequestMapping("/collections") 
public class CollectionController extends BaseController implements ILikesController<Long, Collection, LikeCollection, CollectionLikeMob>, 
																	ICommentsController<Long, Collection, CommentCollection, CollectionCommentMob>, 
																	IFollowersController<Long, FollowerCollectionMob, Collection, FollowerCollection, LongFollowForm>,
																	ILongEntityController
			{
	
	private static final Logger log = LoggerFactory.getLogger(CollectionController.class);

	@Autowired
	private CollectionService collectionService;
	
//	@Autowired
//	private CollectionItemService<?> collectionItemService;
	
	@Operation(summary = "Search for (get a page of) collections", 
			description = "Search for (get a page of) collections. Optionaly, apply filters (see the parameters). "
					+ "Returns records with limited information (full info records should be only used for single collection info screens). "
					+ "It should be used on screens for displaying multiple collections info.",
			parameters = @Parameter(name = "sortBy", description = "Field to sort by", 
					schema = @Schema(implementation = CollectionSort.class), required = false, in = ParameterIn.QUERY)
		)
	@RequestMapping(method = RequestMethod.GET)
	public Response<RPage<CollectionMob>> searchCollections(@ModelAttribute CollectionSearchRequest req){
		log.info("Collections search page");
		
		Page<Collection> cPage = collectionService.searchCollection(req, true);
		RPage<CollectionMob> page = RPage.of(cPage, CollectionMob::new);
		
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get a list of collection names matching a specified query.",
			description = "Get a list of collection IDs and names matching a specified query. "
					+ "Mostly used to display a list of collection names while typing it in a text box.")
	@RequestMapping(value="/autocomplete", params="q", method = RequestMethod.GET)
	public Response<RPage<AcMob>> autocompleteCollections(@RequestParam("q") @Parameter(description = "Query text") String q){
		log.info("Collections autocomplete page. Query: {}", q);
		
		CollectionSearchRequest req = new CollectionSearchRequest().initAutocompleteReq(q);
		Page<Collection> cPage = collectionService.searchCollection(req, false);		// No counts ????
		RPage<AcMob> page = RPage.of(cPage, AcMob::of);
		
		return Response.success(null, page);
	}
	
	@Operation(summary = "Create a new collection.", description = "Create a new collection.")
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public Response<CollectionMob> createCollection(@ModelAttribute @Validated(value = Create.class) CollectionCreateForm form, BindingResult errors){
		log.info("Creating collection: {}", form);
		
		if(errors.hasErrors()) 
			Response.throwError(getOneErrorMessage(errors));
		
		Collection c = collectionService.createCollection(form);
		CollectionMob cm = CollectionMob.of(c);
		
		return Response.success("Collection successfully created", cm);
	}
	
	@Operation(summary = "Delete an existing collection.", description = "Delete an existing collection.")
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public Response<?> deleteCollection(@RequestParam("id") @Parameter(description = "Collection id") long collectionId){
		log.info("Delete collection: {}", collectionId);
		
		collectionService.deleteCollection(collectionId);
		
		return Response.success("Collection successfully deleted");
	}
	
	@Operation(summary = "Update basic info of an existing collection.", 
			description = "Update basic info of an existing collection (name and description). "
					+ "Collection type can not be changes. It is not used to change content of the collection or to set/change the collection image.")
	@RequestMapping(value = "/edit", method = RequestMethod.POST)
	public Response<CollectionMob> editCollection(@ModelAttribute @Validated(value = Edit.class) CollectionEditForm form, BindingResult errors){
		log.info("Edit collection: {}", form);
		
		if(errors.hasErrors()) {
			Response.throwError(getOneErrorMessage(errors));
		}
		
		Collection c = collectionService.editCollection(form);
		CollectionMob cm = CollectionMob.of(c);		
		
		return Response.success("Collection successfully created", cm);
	}
	
	@Operation(summary = "Set a collection image.", 
			description = "Set a collection image. If the collection already has an image set, it will be replaced with the new one."
					+ "IN THE FUTURE, In case of a large image file an error will be returned and no changes will be made. "
					+ "\n<i>Note that this endpoint can not be tested from this web tool (Swagger).</i>")
	@RequestMapping(value = "/image/set", method = RequestMethod.POST)
	public Response<String> setCollectionImage(
			@RequestParam("id") @Parameter(description = "Collection id") Long collectionId, 
			
			@RequestParam("file") 
			@Parameter( description = "Image file (max size 1MB)",
						name = "file",
						in = ParameterIn.QUERY,
						style = ParameterStyle.FORM,
						content = @Content(
				                mediaType = "multipart/form-data",
				                schema = @Schema(implementation = MultipartFile.class),
				                encoding = @Encoding(name = "file", contentType = "image/png,image/jpeg")
						)
			) MultipartFile image) throws IOException{
		
		log.info("Set collection image: {}", collectionId);
		
		UploadImageHelper.checkImageFile(image);
		
		String imageUrl = collectionService.setImage(collectionId, image);
		
		return Response.success("Collection image set successfully", imageUrl);
	}
	
	@Operation(summary = "Delete a collection image.", description = "Delete a collection image.")
	@RequestMapping(value = "/image/delete", params = "id", method = RequestMethod.DELETE)
	public Response<?> deleteCollectionImage(@RequestParam("id") @Parameter(description = "Collection id") Long collectionId){
		
		log.info("Delete collection image: {}", collectionId);
		collectionService.deleteImage(collectionId);
		return Response.success("Collection image deleted successfully");
	}
	
	@Deprecated
	@Operation(summary = "Deprecated. Use '/collections/get'.", description = "Deprecated. Use '/collections/get' ")
	@RequestMapping(value = "/profile", params = "id", method = RequestMethod.GET)
	public Response<CollectionFullMob> getCollectionProfile(@RequestParam("id") @Parameter(description = "Collection id")  Long id){
		return getCollection(id);
	}
	
	@Operation(summary = "Get full info of one collection.", 
			description = "Get full info of one collection (excluding collection items). Other endpoints should be used for getting the items.")
	@RequestMapping(value = "/get", params = "id", method = RequestMethod.GET)
	public Response<CollectionFullMob> getCollection(@RequestParam("id") @Parameter(description = "Collection id") Long id){
		log.info("Get collection full info {}", id);
		Collection c = collectionService.getCollection(id, true); // ??? should we add the counts or load the likes, comments, products ???
		
		UserCtx userContext = collectionService.getUserContext(c);
		CollectionFullMob cm = CollectionFullMob.of(c, userContext);
		return Response.success("Collection found", cm);
	}
	
	@Override
	public ICommentService<Long, Collection, CommentCollection> getCommentService() {
		return collectionService;
	}

	@Override
	public ILikeService<Long, Collection, LikeCollection> getLikeService() {
		return collectionService;
	}

	@Override
	public IFollowerService<Long, Collection, FollowerCollection> getFollowerService() {
		return collectionService;
	}

	@Override
	public Logger getLogger() {
		return log;
	}
}