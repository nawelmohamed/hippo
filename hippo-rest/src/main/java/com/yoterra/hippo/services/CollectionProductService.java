package com.yoterra.hippo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionProduct;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionProduct;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.repositories.CollectionItemRepository;
import com.yoterra.hippo.jpa.repositories.CollectionProductRepository;
import com.yoterra.hippo.jpa.repositories.CommentCollectionProductRepository;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.jpa.repositories.LikeCollectionProductRepository;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.repositories.ProductResolverRepository;

@Service
public class CollectionProductService extends CollectionItemService<String, 
																	Product, 
																	CollectionProduct, 
																	LikeCollectionProduct, 
																	CommentCollectionProduct> {
	
	@Autowired
	private CommentCollectionProductRepository commentCollectionProductRepository;
	
	@Autowired
	private LikeCollectionProductRepository likeCollectionProductRepository;
	
	@Autowired
	private CollectionProductRepository collectionProductRepository;
	
	@Autowired
	private ProductResolverRepository productResolverRepository;
	
	@Autowired
	private ProductService productService;
	
	@Override
	public CommentRepository<Long, CollectionProduct, CommentCollectionProduct> getCommentsRepository() {
		return commentCollectionProductRepository;
	}

	@Override
	public CommentCollectionProduct newEmptyCommentInstance() {
		return new CommentCollectionProduct();
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.COLLECTION_PRODUCT;
	}

	@Override
	public LikeRepository<Long, CollectionProduct, LikeCollectionProduct> getLikeRepository() {
		return likeCollectionProductRepository;
	}

	@Override
	public LikeCollectionProduct newEmptyLikeInstance() {
		return new LikeCollectionProduct();
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.COLLECTION_PRODUCT;
	}

	@Override
	protected CollectionItemRepository<String, Product, CollectionProduct> getRepository() {
		return collectionProductRepository;
	}

	@Override
	public CollectionType getCollectionType() {
		return CollectionType.PRODUCT;
	}

	@Override
	protected CollectionProduct initItem(String itemId) {
		Product product = productResolverRepository.findOneById(itemId,true,true,true);
		CollectionProduct cp = new CollectionProduct();
		cp.setProduct(product);
		return cp;
	}

	@Override
	public UserCtx getUserContextOfItem(CollectionProduct ci) {
		return productService.getUserContext(ci.getItem());
	}
}



