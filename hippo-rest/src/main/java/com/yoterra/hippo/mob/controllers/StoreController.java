package com.yoterra.hippo.mob.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yoterra.hippo.jpa.entities.comments.CommentStore;
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteStore;
import com.yoterra.hippo.jpa.entities.followers.FollowerStore;
import com.yoterra.hippo.jpa.entities.likes.LikeStore;
import com.yoterra.hippo.mob.forms.FollowForm.LongFollowForm;
import com.yoterra.hippo.mob.forms.UserFavoriteStoresForm;
import com.yoterra.hippo.mob.model.AcMob;
import com.yoterra.hippo.mob.model.CommentMob.StoreCommentMob;
import com.yoterra.hippo.mob.model.FollowerMob.FollowerStoreMob;
import com.yoterra.hippo.mob.model.LikeMob.StoreLikeMob;
import com.yoterra.hippo.mob.model.StoreFullMob;
import com.yoterra.hippo.mob.model.StoreMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.search.requests.CompanySearchRequest;
import com.yoterra.hippo.services.ICommentService;
import com.yoterra.hippo.services.IFavoritesService;
import com.yoterra.hippo.services.IFollowerService;
import com.yoterra.hippo.services.ILikeService;
import com.yoterra.hippo.services.StoreService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/stores")
public class StoreController extends BaseController implements 	ICommentsController<Long, Store, CommentStore, StoreCommentMob>, 
																ILikesController<Long, Store, LikeStore, StoreLikeMob>,
																IFollowersController<Long, FollowerStoreMob, Store, FollowerStore, LongFollowForm>,
																IFavoritesController<Long, StoreMob, Store, UserFavoriteStore, UserFavoriteStoresForm>,
																ILongEntityController
													{

	private static final Logger log = LoggerFactory.getLogger(StoreController.class);
	
	@Autowired
	private StoreService storeService;
	
	@Operation(summary = "Search for (get a page of) stores", 
			description = "Search for (get a page of) stores. Optionaly, apply filters (see the parameters). "
					+ "Returns records with limited information (full info records should be only used for single store info screens). "
					+ "It should be used on screens for displaying multiple stores info.")
	@RequestMapping(method = RequestMethod.GET)
	public Response<RPage<StoreMob>> searchStores(@ModelAttribute CompanySearchRequest req){
		log.info("Stores search page");
		
		Page<Store> sPage = storeService.searchStores(req, true, true);	
		RPage<StoreMob> page = RPage.of(sPage, StoreMob::of);
		
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get a list of store names matching a specified query.",
			description = "Get a list of store IDs and names matching a specified query. "
					+ "Mostly used to display a list of store names while typing it in a text box.")
	@RequestMapping(value="/autocomplete", params="q", method = RequestMethod.GET)
	public Response<RPage<AcMob>> autocompleteStores(@RequestParam("q") String q){
		log.info("Stores autocomplete page. Query: {}", q);
		
		CompanySearchRequest req = new CompanySearchRequest().initAutocompleteReq(q);
		Page<Store> bPage = storeService.searchStores(req, false, false);		
		RPage<AcMob> page = RPage.of(bPage, AcMob::of);
		
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get full info of one store.", description = "Get store record with full information.")
	@RequestMapping(value="/get", params="id", method = RequestMethod.GET)
	public Response<StoreFullMob> getStore(@RequestParam("id") @Parameter(description = "Store id") Long id){
		log.info("Get store: {}", id);
		
		Store s = storeService.getStore(id, true);
		UserCtx userContext = storeService.getUserContext(s);
		StoreFullMob sm = StoreFullMob.of(s, userContext);
		
		return Response.success(null, sm);
	}

	@Override
	public ILikeService<Long, Store, LikeStore> getLikeService() {
		return storeService;
	}

	@Override
	public ICommentService<Long, Store, CommentStore> getCommentService() {
		return storeService;
	}

	@Override
	public IFollowerService<Long, Store, FollowerStore> getFollowerService() {
		return storeService;
	}

	@Override
	public IFavoritesService<Long, Store, UserFavoriteStore> getFavoritesService() {
		return storeService;
	}
	
	@Override
	public Logger getLogger() {
		return log;
	}

	@Override
	public StoreMob userFavoriteToMob(Store fav) {
		return StoreMob.of(fav);
	}
}
