package com.yoterra.hippo.jpa.repositories;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.utils.Opt;

public interface LikeRepository<ID, L extends Likeable<ID>, T extends Like<L>> extends JpaRepository<T,Long>, JpaSpecificationExecutor<T> {
	
	public long countByAuthor(User author);
	public Page<T> findAllByAuthor(User author, Pageable pageable);
	
	public Page<T> findAllByAuthorId(Long authorId, Pageable pageable);
	
	// To be default - implemented 
	public default Page<T> getByParent(L parent, Pageable pageable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default T getByParentAndAuthor(L parent, User author){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default long getCountByParent(L likeable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default long getCountByParentAndAuthor(L parent, User author){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	@Query("SELECT l.author.id as id, count(l) as cnt FROM Like l WHERE l.author IN ( :likeAuthors ) GROUP BY l.author")
	public List<Count<Long>> getPerAuthorCounts(java.util.Collection<User> likeAuthors);
	
	public default Map<Long, Long> getPerAuthorCountsMap(java.util.Collection<User> likeAuthors){
		List<Count<Long>> ppc = getPerAuthorCounts(likeAuthors);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}
	
	public default List<Count<ID>> getPerParentCounts(java.util.Collection<L> likeables){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default Map<ID, Long> getPerParentCountsMap(java.util.Collection<L> likeables){
		List<Count<ID>> ppc = getPerParentCounts(likeables);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}
	

}

