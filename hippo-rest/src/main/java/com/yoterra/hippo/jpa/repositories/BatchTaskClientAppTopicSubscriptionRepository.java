package com.yoterra.hippo.jpa.repositories;

import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.batch.BatchTaskClientAppTopicSubscription;
import com.yoterra.hippo.jpa.entities.users.ClientApp;

@Repository
public interface BatchTaskClientAppTopicSubscriptionRepository extends BatchTaskRepository<BatchTaskClientAppTopicSubscription> {

	long countByClientApp(ClientApp clientApp);
	
	BatchTaskClientAppTopicSubscription findOneByClientApp(ClientApp clientApp);
}
