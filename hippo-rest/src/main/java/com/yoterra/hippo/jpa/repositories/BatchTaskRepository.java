package com.yoterra.hippo.jpa.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.batch.BatchTask;

@Repository
public interface BatchTaskRepository<T extends BatchTask> extends JpaRepository<T,Long>, JpaSpecificationExecutor<T> {

	Page<T> findAllByProcessed(boolean processed, Pageable p);
	
	Page<T> findAllByProcessedAndSkipped(boolean processed, boolean skipped, Pageable p);
}
