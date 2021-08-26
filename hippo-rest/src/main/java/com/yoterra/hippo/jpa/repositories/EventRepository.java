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

import com.yoterra.hippo.jpa.entities.events.Event;
import com.yoterra.utils.EnhancedStream;

@Repository
public interface EventRepository extends JpaRepository<Event<?>,Long>, JpaSpecificationExecutor<Event<?>> {

	public default Map<Long, Event<?>> getEventsByIds(java.util.Collection<Long> ids){
		List<Event<?>> events = findAllById(ids);
		return EnhancedStream.of(events).collect(Collectors.toMap(Event::getId, e->e));
	}
	
	@Query("SELECT e FROM Event e WHERE e.processed = false")
	public Page<Event<?>> getNewEvents(Pageable pageable);
	
}
