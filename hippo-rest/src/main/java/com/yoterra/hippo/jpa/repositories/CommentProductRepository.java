package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.comments.CommentProduct;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface CommentProductRepository extends CommentRepository<String, Product, CommentProduct>{
	
	
	@Override
	public default long countByParent(Product commentable){
		return countByProduct(commentable);
	}
	
	public long countByProduct(Product product);
	public Page<CommentProduct> findAllByProduct(Product product, Pageable pageable);

	public Page<CommentProduct> findByProductAndAuthor(Product product, User author, Pageable pageable);
	
	@Override
	public default Page<CommentProduct> getByParent(Product parent, Pageable pageable){
		return findAllByProduct(parent, pageable);
	}

	@Override
	public default Page<CommentProduct> getByParentAndAuthor(Product parent, User author, Pageable pageable) {
		return findByProductAndAuthor(parent, author, pageable);
	}
	
	@Override
	@Query("SELECT c.product.id as id, count(c) as cnt FROM CommentProduct c WHERE c.product IN ( :products ) GROUP BY c.product")
	public List<Count<String>> getPerParentCounts(@Param("products") java.util.Collection<Product> products);
}

