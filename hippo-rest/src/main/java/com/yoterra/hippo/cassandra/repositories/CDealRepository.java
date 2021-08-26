package com.yoterra.hippo.cassandra.repositories;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.cassandra.model.CDeal;

@Repository
public interface CDealRepository extends CassandraRepository<CDeal,String> {
    
}
