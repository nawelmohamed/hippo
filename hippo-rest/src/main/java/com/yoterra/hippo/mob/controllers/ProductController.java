package com.yoterra.hippo.mob.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yoterra.data.records.ProductOffer;
import com.yoterra.hippo.jpa.entities.comments.CommentProduct;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.likes.LikeProduct;
import com.yoterra.hippo.mob.model.AcMob;
import com.yoterra.hippo.mob.model.CommentMob.ProductCommentMob;
import com.yoterra.hippo.mob.model.LikeMob.ProductLikeMob;
import com.yoterra.hippo.mob.model.OfferMob;
import com.yoterra.hippo.mob.model.ProductFullMob;
import com.yoterra.hippo.mob.model.ProductMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.res.RPage;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.search.requests.ProductSearchRequest;
import com.yoterra.hippo.services.ICommentService;
import com.yoterra.hippo.services.ILikeService;
import com.yoterra.hippo.services.ProductService;
import com.yoterra.utils.CollectionUtils;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/products")
public class ProductController extends BaseController implements 	ICommentsController<String, Product, CommentProduct, ProductCommentMob>, 
																	ILikesController<String, Product, LikeProduct, ProductLikeMob>,
																	IStringEntityController{
	
	private static final Logger log = LoggerFactory.getLogger(ProductController.class);

	@Autowired
	private ProductService productService;
	
	@Operation(summary = "Search for (get a page of) products", 
			description = "Search for (get a page of) products. Optionaly, apply filters (see the parameters). "
					+ "Returns records with limited information (full info records should be only used for single product info screens). "
					+ "It should be used on screens for displaying multiple products info.")
	@RequestMapping(method = RequestMethod.GET)
	public Response<RPage<ProductMob>> searchProducts(@ModelAttribute ProductSearchRequest req){
		log.info("Products search page");
		
		Page<Product> pPage = productService.searchProducts(req, true);
		RPage<ProductMob> page = RPage.of(pPage, ProductMob::new);
		return Response.success(null, page);
	}

	@Operation(summary = "Get a list of product names matching a specified query.",
			description = "Get a list of product IDs and names matching a specified query. "
					+ "Mostly used to display a list of product names while typing it in a text box.")
	@RequestMapping(value="/autocomplete", params="q", method = RequestMethod.GET)
	public Response<RPage<AcMob>> autocompleteProducts(@RequestParam("q") @Parameter(description = "Query text") String q){
		log.info("Products autocomplete page. Query: {}", q);
		
		ProductSearchRequest req = new ProductSearchRequest().initAutocompleteReq(q);
		Page<Product> pPage = productService.searchProducts(req, false);
		RPage<AcMob> page = RPage.of(pPage, AcMob::new);
		return Response.success(null, page);
	}
	
	@Operation(summary = "Get full info of one product.", description = "Get product record with full information.")
	@RequestMapping(value="/get", params="id", method = RequestMethod.GET)
	public Response<ProductFullMob> getProduct(@RequestParam("id") @Parameter(description = "Product id") String id){
		log.info("Get product: {}", id);
		
		Product p = productService.getProduct(id, true);
		UserCtx userContext = productService.getUserContext(p);
		ProductFullMob pm = ProductFullMob.of(p, userContext);
		
		return Response.success(null, pm);
	}
	
	@RequestMapping(value="/get/offers", params="id", method = RequestMethod.GET)
	public Response<RPage<OfferMob>> getProductOffers(@RequestParam("id") String id, PageParams pageParams){
		log.info("Get product offers: {}", id);
		
		Product p = productService.getProduct(id, true);
		
		List<ProductOffer> sortedOffers = p.getProductOffers(ProductOffer.Comparators.BY_LOWER_PRICE_ASC);
		Pageable pg = pageParams.getPageable();
		List<OfferMob> offersPage = Opt.strm(sortedOffers).map(OfferMob::of)
				.skip(pg.getOffset()).limit(pg.getPageSize()).toList();
		
		Page<OfferMob> page = new PageImpl<OfferMob>(offersPage, pg, CollectionUtils.size(sortedOffers));
		return Response.success(null, RPage.of(page));
	}

	@Override
	public Logger getLogger() {
		return log;
	}

	@Override
	public ILikeService<String, Product, LikeProduct> getLikeService() {
		return productService;
	}

	@Override
	public ICommentService<String, Product, CommentProduct> getCommentService() {
		return productService;
	}
}
