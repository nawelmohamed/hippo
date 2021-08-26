package com.yoterra.hippo.jpa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.data.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long>, JpaSpecificationExecutor<Admin> {
	
}

