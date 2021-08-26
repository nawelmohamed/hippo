package com.yoterra.hippo.jpa.repositories;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.users.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {

	long countByApUid(String apUid);
	long countByEmail(String email);
	long countByUsername(String username);
	
	User findByApUid(String apUid);
	User findByEmail(String email);
	User findByUsername(String username);
	
	@Query(value = "SELECT COUNT(*) FROM hippo.user WHERE ap_uid = ?1", nativeQuery = true)
	long includeDeactivated_countByApUid(String apUid);
	
	@Query(value = "SELECT COUNT(*) FROM hippo.user WHERE email = ?1", nativeQuery = true)
	long includeDeactivated_countByEmail(String email);
	
	@Query(value = "SELECT COUNT(*) FROM hippo.user WHERE username = ?1", nativeQuery = true)
	long includeDeactivated_countByUsername(String username);
	
	@Query(value = "SELECT id, email, username, image_url FROM hippo.user WHERE email IN ( ?1 )", nativeQuery = true)
	List<Object[]> includeDeactivated_getStatusesByEmails(Collection<String> emails);
}
