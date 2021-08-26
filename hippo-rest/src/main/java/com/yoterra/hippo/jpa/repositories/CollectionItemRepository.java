package com.yoterra.hippo.jpa.repositories;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.Collectable;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.utils.Opt;

public interface CollectionItemRepository<ID, C extends Collectable<ID>, T extends CollectionItem<C>> extends JpaRepository<T,Long>, JpaSpecificationExecutor<T> {
	
	public long countByCollection(Collection collection);
	
	public default long countByCollectionIdAndItemId(Long collectionId, ID itemId) {
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public Page<T> findAllByCollection(Collection collection, Pageable pageable);
	
	public Page<T> findAllByCollectionId(Long collectionId, Pageable pageable);
	
	public default List<Count<ID>> getPerCollectableItemCounts(java.util.Collection<C> collectables){
		throw new UnsupportedOperationException("This method is meant to be overridden in sub-interfaces");
	}
	
	public default Map<ID, Long> getPerCollectableItemCountsMap(java.util.Collection<C> collectables){
		List<Count<ID>> ppc = getPerCollectableItemCounts(collectables);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}
	@Query("SELECT ci.collection.id as id, count(ci) as cnt FROM CollectionItem ci WHERE ci.collection IN ( :collections ) GROUP BY ci.collection")
	public List<Count<Long>> getPerCollectionCounts(@Param("collections") java.util.Collection<Collection> collections);
	
	public default Map<Long, Long> getPerCollectionCountsMap(java.util.Collection<Collection> likeables){
		List<Count<Long>> ppc = getPerCollectionCounts(likeables);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}

}

