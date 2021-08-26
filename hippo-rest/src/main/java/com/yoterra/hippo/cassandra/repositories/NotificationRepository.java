package com.yoterra.hippo.cassandra.repositories;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.cassandra.model.CNotification;
import com.yoterra.hippo.cassandra.model.CNotification.KeyClass;

@Repository
public interface NotificationRepository extends CassandraRepository<CNotification,KeyClass> {
    
    Slice<CNotification> findById_User(long user, Pageable page);
}
