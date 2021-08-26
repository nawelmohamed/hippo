package com.yoterra.hippo.mob.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionProduct;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionProduct;
import com.yoterra.hippo.mob.model.CollectionProductFullMob;
import com.yoterra.hippo.mob.model.CollectionProductMob;
import com.yoterra.hippo.mob.model.CommentMob.CollectionProductCommentMob;
import com.yoterra.hippo.mob.model.LikeMob.CollectionProductLikeMob;
import com.yoterra.hippo.mob.model.ProductMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.services.CollectionProductService;


@RestController
@RequestMapping("/collections/products")										// IT'S TOO MUCH, REDUCT THE GENERICS !!!! FIXME
public class CollectionProductController extends CollectionItemController<String, 
																		Product, 
																		CollectionProductMob<ProductMob>, 
																		CollectionProductFullMob, 
																		CollectionProduct, 
																		LikeCollectionProduct, 
																		CommentCollectionProduct, 
																		CollectionProductLikeMob, 
																		CollectionProductCommentMob, 
																		CollectionProductService> {
	
	private static final Logger log = LoggerFactory.getLogger(CollectionProductController.class);

	@Override
	public Logger getLogger() {
		return log;
	}

	@Override
	protected CollectionProductMob<ProductMob> collectionItemToMob(CollectionProduct ci) {
		return CollectionProductMob.of(ci);
	}

	@Override
	protected CollectionProductFullMob collectionItemToFullMob(CollectionProduct ci, UserCtx iCtx, UserCtx ciCtx) {
		return CollectionProductFullMob.of(ci, iCtx, ciCtx);
	}
	
}
