package com.yoterra.hippo.jpa.repositories;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.Count;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.utils.Opt;

@Repository
public interface CollectionRepository extends JpaRepository<Collection,Long>, JpaSpecificationExecutor<Collection> {
	
	public long countByOwner(User owner);
	
	@Query("SELECT c.owner.id as id, count(c) as cnt FROM Collection c WHERE c.owner IN ( :users ) GROUP BY c.owner")
	public List<Count<Long>> getPerOwnerCounts(@Param("users") java.util.Collection<User> users);
	
	public default Map<Long, Long> getPerOwnerCountsMap(java.util.Collection<User> users){
		List<Count<Long>> ppc = getPerOwnerCounts(users);
		return Opt.strm(ppc).collect(Collectors.toMap(Count::getId, Count::getCnt));
	}
}

