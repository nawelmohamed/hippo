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

import com.yoterra.hippo.jpa.entities.comments.CommentBrand;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteBrand;
import com.yoterra.hippo.jpa.entities.followers.FollowerBrand;
import com.yoterra.hippo.jpa.entities.likes.LikeBrand;
import com.yoterra.hippo.mob.forms.FollowForm.LongFollowForm;
import com.yoterra.hippo.mob.forms.UserFavoriteBrandsForm;
import com.yoterra.hippo.mob.model.AcMob;
import com.yoterra.hippo.mob.model.BrandFullMob;
import com.yoterra.hippo.mob.model.BrandMob;
import com.yoterra.hippo.mob.model.CommentMob.BrandCommentMob;
import com.yoterra.hippo.mob.model.FollowerMob.FollowerBrandMob;
import com.yoterra.hippo.mob.model.LikeMob.BrandLikeMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.search.requests.CompanySearchRequest;
import com.yoterra.hippo.services.BrandService;
import com.yoterra.hippo.services.ICommentService;
import com.yoterra.hippo.services.IFavoritesService;
import com.yoterra.hippo.services.IFollowerService;
import com.yoterra.hippo.services.ILikeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/brands")
public class BrandController extends BaseController implements 	ICommentsController<Long, Brand, CommentBrand, BrandCommentMob>, 
																ILikesController<Long, Brand, LikeBrand, BrandLikeMob>,
																IFollowersController<Long, FollowerBrandMob, Brand, FollowerBrand, LongFollowForm>,
																IFavoritesController<Long, BrandMob, Brand, UserFavoriteBrand, UserFavoriteBrandsForm>,
																ILongEntityController{

	private static final Logger log = LoggerFactory.getLogger(BrandController.class);
	
	@Autowired
	private BrandService brandService;
	
	@Operation(summary = "Search for (get a page of) brands", 
			description = "Search for (get a page of) brands. Optionaly, apply filters (see the parameters). "
					+ "Returns records with limited information (full info records should be only used for single brand info screens). "
					+ "It should be used on screens for displaying multiple brands info.")
	@RequestMapping(method = RequestMethod.GET)
	public Response<RPage<BrandMob>> searchBrands(@ModelAttribute CompanySearchRequest req){
		log.info("Brands search page");
		
		Page<Brand> bPage = brandService.searchBrands(req, true, true);		
		RPage<BrandMob> page = RPage.of(bPage, BrandMob::of);
		
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get a list of brand names matching a specified query.",
			description = "Get a list of brand IDs and names matching a specified query. "
					+ "Mostly used to display a list of brand names while typing it in a text box.")
	@RequestMapping(value="/autocomplete", params="q", method = RequestMethod.GET)
	public Response<RPage<AcMob>> autocompleteBrands(@RequestParam("q") @Parameter(description = "Query text") String q){
		log.info("Brands autocomplete page. Query: {}", q);
		
		CompanySearchRequest req = new CompanySearchRequest().initAutocompleteReq(q);
		Page<Brand> bPage = brandService.searchBrands(req, false, false);		
		RPage<AcMob> page = RPage.of(bPage, AcMob::of);
		
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get full info of one brand.", description = "Get brand record with full information.")
	@RequestMapping(value="/get", params="id", method = RequestMethod.GET)
	public Response<BrandFullMob> getBrand(@RequestParam("id") @Parameter(description = "Brand id") Long id){
		log.info("Get brand: {}", id);
		
		Brand b = brandService.getBrand(id, true);
		
		UserCtx userContext = brandService.getUserContext(b);
		BrandFullMob bm = BrandFullMob.of(b, userContext);
		
		return Response.success(null, bm);
	}

	@Override
	public ILikeService<Long, Brand, LikeBrand> getLikeService() {
		return brandService;
	}

	@Override
	public ICommentService<Long, Brand, CommentBrand> getCommentService() {
		return brandService;
	}
	
	@Override
	public IFollowerService<Long, Brand, FollowerBrand> getFollowerService() {
		return brandService;
	}
	
	@Override
	public IFavoritesService<Long, Brand, UserFavoriteBrand> getFavoritesService() {
		return brandService;
	}
	
	@Override
	public Logger getLogger() {
		return log;
	}

	@Override
	public BrandMob userFavoriteToMob(Brand fav) {
		return BrandMob.of(fav);
	}
}
