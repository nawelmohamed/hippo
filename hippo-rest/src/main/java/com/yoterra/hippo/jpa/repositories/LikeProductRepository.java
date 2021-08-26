package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.data.Product;
import com.yoterra.hippo.jpa.entities.likes.LikeProduct;
import com.yoterra.hippo.jpa.entities.users.User;

@Repository
public interface LikeProductRepository extends LikeRepository<String, Product, LikeProduct> {
	
	public long countByProduct(Product product);
	public long countByProductAndAuthor(Product product, User author);
	public Page<LikeProduct> findAllByProduct(Product product, Pageable pageable);
	public LikeProduct findByProductAndAuthor(Product product, User author);
	
	@Override
	public default Page<LikeProduct> getByParent(Product parent, Pageable pageable){
		return findAllByProduct(parent, pageable);
	}

	@Override
	public default LikeProduct getByParentAndAuthor(Product parent, User author) {
		return findByProductAndAuthor(parent, author);
	}
	
	@Override
	public default long getCountByParent(Product likeable){
		return countByProduct(likeable);
	}

	@Override
	public default long getCountByParentAndAuthor(Product parent, User author){
		return countByProductAndAuthor(parent, author);
	}
	
	@Query("SELECT l.product.id as id, count(l) as cnt FROM LikeProduct l WHERE l.product IN ( :products ) GROUP BY l.product")
	public List<Count<String>> getPerParentCounts(@Param("products") java.util.Collection<Product> products);
	
}

