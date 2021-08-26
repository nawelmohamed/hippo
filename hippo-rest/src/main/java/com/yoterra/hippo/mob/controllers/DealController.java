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

import com.yoterra.hippo.jpa.entities.comments.CommentDeal;
import com.yoterra.hippo.jpa.entities.data.Deal;
import com.yoterra.hippo.jpa.entities.likes.LikeDeal;
import com.yoterra.hippo.mob.model.AcMob;
import com.yoterra.hippo.mob.model.CommentMob.DealCommentMob;
import com.yoterra.hippo.mob.model.DealFullMob;
import com.yoterra.hippo.mob.model.DealMob;
import com.yoterra.hippo.mob.model.LikeMob.DealLikeMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.search.requests.DealSearchRequest;
import com.yoterra.hippo.services.DealService;
import com.yoterra.hippo.services.ICommentService;
import com.yoterra.hippo.services.ILikeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/deals")
public class DealController extends BaseController implements 	ICommentsController<String, Deal, CommentDeal, DealCommentMob>, 
																ILikesController<String, Deal, LikeDeal, DealLikeMob>,
																IStringEntityController
																{
	
	private static final Logger log = LoggerFactory.getLogger(DealController.class);

	@Autowired
	private DealService dealService;
	
	@Operation(summary = "Search for (get a page of) deals", 
			description = "Search for (get a page of) deals. Optionaly, apply filters (see the parameters). "
					+ "Returns records with limited information (full info records should be only used for single deal info screens). "
					+ "It should be used on screens for displaying multiple deals info.")
	@RequestMapping(method = RequestMethod.GET)
	public Response<RPage<DealMob>> searchDeals(@ModelAttribute DealSearchRequest req){
		log.info("Deals search page");
		
		Page<Deal> pPage = dealService.searchDeals(req, true);
		RPage<DealMob> page = RPage.of(pPage, DealMob::new);
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get a list of deal titles matching a specified query.",
			description = "Get a list of deal IDs and title matching a specified query. "
					+ "Mostly used to display a list of deal names while typing it in a text box.")
	@RequestMapping(value="/autocomplete", params="q", method = RequestMethod.GET)
	public Response<RPage<AcMob>> autocompleteDeals(@RequestParam("q") @Parameter(description = "Query text") String q){
		log.info("Deals autocomplete page. Query: {}", q);
		
		DealSearchRequest req = new DealSearchRequest().initAutocompleteReq(q);
		Page<Deal> pPage = dealService.searchDeals(req, false);
		RPage<AcMob> page = RPage.of(pPage, AcMob::new);
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get full info of one deal.", description = "Get deal record with full information.")
	@RequestMapping(value="/get", params="id", method = RequestMethod.GET)
	public Response<DealFullMob> getDeal(@RequestParam("id") @Parameter(description = "Deal id") String id){
		log.info("Get deal: {}", id);
		
		Deal d = dealService.getDeal(id, true);
		
		UserCtx userContext = dealService.getUserContext(d);
		DealFullMob pm = DealFullMob.of(d, userContext);
		
		return Response.success(null, pm);
	}

	@Override
	public Logger getLogger() {
		return log;
	}

	@Override
	public ILikeService<String, Deal, LikeDeal> getLikeService() {
		return dealService;
	}

	@Override
	public ICommentService<String, Deal, CommentDeal> getCommentService() {
		return dealService;
	}

}
