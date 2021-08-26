package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.users.ClientApp;
import com.yoterra.hippo.jpa.entities.users.User;


@Repository
public interface ClientAppRepository extends JpaRepository<ClientApp, Long>, JpaSpecificationExecutor<ClientApp> {

	List<ClientApp> findAllByUser(User user);
	
	ClientApp findOneByUserAndMessagingToken(User user, String token);

	@Query("SELECT c.messagingToken FROM ClientApp c WHERE c.user = :user")
	List<String> getAllMessageTokens(User user);
}
