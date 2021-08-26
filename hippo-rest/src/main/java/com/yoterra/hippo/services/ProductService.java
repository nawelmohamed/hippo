package com.yoterra.hippo.services;

import java.util.Collection;
import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.yoterra.hippo.jpa.entities.Metacounts;
import com.yoterra.hippo.jpa.entities.collections.Collectable;
import com.yoterra.hippo.jpa.entities.comments.CommentProduct;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.likes.LikeProduct;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.repositories.CollectionProductRepository;
import com.yoterra.hippo.jpa.repositories.CommentProductRepository;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.jpa.repositories.LikeProductRepository;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.repositories.ProductResolverRepository;
import com.yoterra.hippo.search.requests.ProductSearchRequest;

@Service
public class ProductService implements 	ICommentService<String, Product, CommentProduct>, 
										ILikeService<String, Product, LikeProduct>,
										IUserContextService<Product, UserCtx>{
	
	@SuppressWarnings("unused")
	private Supplier<EntityNotFoundException> MISSING_PRODUCT_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The product does not exist.");
			
	@Autowired
	private LikeProductRepository likeProductRepository;
	
	@Autowired
	private CommentProductRepository commentProductRepository;
	
	@Autowired
	private CollectionProductRepository collectionProductRepository;
	
	@Autowired
	private ProductResolverRepository productResolverRepository;
	
	public Page<Product> searchProducts(ProductSearchRequest req, boolean addMetacounts){
		Page<Product> page = productResolverRepository.searchProducts(req);
		
		if(addMetacounts) {
			resolveMetacounts(page.getContent());
		}
		
		return page;
	}
	
	public Product getProduct(String id, boolean addCounts){
		Product product = productResolverRepository.findOneById(id, true, false, true);
		if(addCounts) {
			resolveMetacounts(product);
		}
		return product;
	}
	
	@Override
	public void resolveMetacounts(Collection<Product> products) {
		ILikeService.super.resolveMetacounts(products);
		ICommentService.super.resolveMetacounts(products);
		Metacounts.mergeMetacounts(products, collectionProductRepository::getPerCollectableItemCountsMap, Product::getId, Collectable.COLLECTIONS_IN_METACOUNT);
	}
	
	@Override
	public void resolveMetacounts(Product product) {
		ILikeService.super.resolveMetacounts(product);
		ICommentService.super.resolveMetacounts(product);
		product.setCollectionsInMetacount((int)collectionProductRepository.countByProduct(product));
	}
	
	@Override
	public UserCtx getUserContext(Product product) {
		boolean hasLiked = hasLiked(product);
		return new UserCtx(hasLiked, null, null, null);
	}

	@Override
	public Product getParentById(String id, boolean persist, boolean fetchData) {
		return productResolverRepository.findOneById(id, true, persist, fetchData);
	}

	@Override
	public LikeRepository<String, Product, LikeProduct> getLikeRepository() {
		return likeProductRepository;
	}

	@Override
	public LikeProduct newEmptyLikeInstance() {
		return new LikeProduct();
	}

	@Override
	public CommentRepository<String, Product, CommentProduct> getCommentsRepository() {
		return commentProductRepository;
	}

	@Override
	public CommentProduct newEmptyCommentInstance() {
		return new CommentProduct();
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.PRODUCT;
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.PRODUCT;
	}
}