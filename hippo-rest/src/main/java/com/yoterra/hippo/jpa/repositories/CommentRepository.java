package com.yoterra.hippo.jpa.repositories;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.utils.Opt;

@Repository
public interface CommentRepository<ID, C extends Commentable<ID>, T extends Comment<C>> extends JpaRepository<T,Long>, JpaSpecificationExecutor<T> {
	
	public long countByAuthor(User author);
	
	public default long countByParent(C commentable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public Page<T> findAllByAuthor(User author, Pageable pageable);
	
	public Page<T> findAllByAuthorId(Long authorId, Pageable pageable);
	public default Page<T> getByParent(C parent, Pageable pageable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	public default Page<T> getByParentAndAuthor(C parent, User author, Pageable pageable){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	
	@Query("SELECT c.author.id as id, count(c) as cnt FROM Comment c WHERE c.author IN ( :commentAuthors ) GROUP BY c.author")
	public List<Count<Long>> getPerAuthorCounts(java.util.Collection<User> commentAuthors);
	
	public default Map<Long, Long> getPerAuthorCountsMap(java.util.Collection<User> commentAuthors){
		List<Count<Long>> ppc = getPerAuthorCounts(commentAuthors);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}
	
	public default List<Count<ID>> getPerParentCounts(java.util.Collection<C> commentables){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default Map<ID, Long> getPerParentCountsMap(java.util.Collection<C> commentables){
		List<Count<ID>> ppc = getPerParentCounts(commentables);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}

}

