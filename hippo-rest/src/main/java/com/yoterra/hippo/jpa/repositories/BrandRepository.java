package com.yoterra.hippo.jpa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.data.companies.Brand;


@Repository
public interface BrandRepository extends JpaRepository<Brand,Long>, JpaSpecificationExecutor<Brand> {

}

