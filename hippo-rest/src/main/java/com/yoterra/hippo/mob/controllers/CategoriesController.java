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

import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteCategory;
import com.yoterra.hippo.mob.forms.UserFavoriteCategoriesForm;
import com.yoterra.hippo.mob.model.AcMob;
import com.yoterra.hippo.mob.model.CategoryMob;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.search.requests.TaxonomySearchRequest;
import com.yoterra.hippo.services.IFavoritesService;
import com.yoterra.hippo.services.TaxonomyService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/categories")
public class CategoriesController extends BaseController 
		implements IFavoritesController<Long, CategoryMob, TaxonomyElement, UserFavoriteCategory, UserFavoriteCategoriesForm>,ILongEntityController {

	private static final Logger log = LoggerFactory.getLogger(CategoriesController.class);
	
	@Autowired
	private TaxonomyService taxonomyService;
	
	@Operation(summary = "Get a page of taxonomy tuples.", description = "Get a page of taxonomy tuples.")
	@RequestMapping(method = RequestMethod.GET)
	public Response<RPage<CategoryMob>> listCategories(@ModelAttribute TaxonomySearchRequest req){
		log.info("Taxonomies search page");
		
		Page<TaxonomyElement> tPage = taxonomyService.searchTaxonomies(req);
		RPage<CategoryMob> page = RPage.of(tPage, CategoryMob::of);
		
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get a list of taxonomy tuples matching a specified query.",
			description = "Get a list of taxonmy IDs and full-path names matching a specified query. "
					+ "Mostly used to display a list of taxonomy full-path names while typing it in a text box.")
	@RequestMapping(value="/autocomplete", params="q", method = RequestMethod.GET)
	public Response<RPage<AcMob>> autocompleteBrands(
			@RequestParam @Parameter(description = "Query text") String q,
			@RequestParam(required = false) 
				@Parameter(description = "Taxonomy element max level. <br/>'0' - only majors, <br/>'1' - only minors, <br/>...") Integer level){
		log.info("Taxonomy autocomplete page. Query: {}", q);
		
		TaxonomySearchRequest req = new TaxonomySearchRequest().initAutocompleteReq(q, level);
		Page<TaxonomyElement> tPage = taxonomyService.searchTaxonomies(req);		// No counts ????
		RPage<AcMob> page = RPage.of(tPage, AcMob::new);
		
		return Response.success(null, page);
	}

	@Override
	public Logger getLogger() {
		return log;
	}

	@Override
	public IFavoritesService<Long, TaxonomyElement, UserFavoriteCategory> getFavoritesService() {
		return taxonomyService;
	}

	@Override
	public CategoryMob userFavoriteToMob(TaxonomyElement fav) {
		return CategoryMob.of(fav);
	}
}
