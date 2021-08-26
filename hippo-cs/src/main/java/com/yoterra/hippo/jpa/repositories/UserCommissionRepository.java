package com.yoterra.hippo.jpa.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.data.PayoutRequest;
import com.yoterra.hippo.jpa.data.UserCommission;
import com.yoterra.hippo.jpa.data.UserCommissionStatus;

@Repository
public interface UserCommissionRepository extends JpaRepository<UserCommission,Long>, JpaSpecificationExecutor<UserCommission> {
	
	Page<UserCommission> findAllByUserId(long userId, Pageable pageable);
	
	Page<UserCommission> findAllByPayoutRequest(PayoutRequest payoutRequest, Pageable pageable);
	Page<UserCommission> findAllByPayoutRequestId(Long payoutRequestId, Pageable pageable);
	
	List<UserCommission> findAllByUserIdAndStatusAndPayoutRequestIsNull(Long userId, UserCommissionStatus status);
	
	default List<UserCommission> getPayableCommissions(Long userId){
		return findAllByUserIdAndStatusAndPayoutRequestIsNull(userId, UserCommissionStatus.CLOSED);
	}
	
}

