package com.yoterra.hippo.jpa.repositories;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.entities.users.UserPreferences;
import com.yoterra.utils.EnhancedStream;

@Repository
public interface UserPreferencesRepository extends JpaRepository<UserPreferences, Long>, JpaSpecificationExecutor<UserPreferences> {

	public UserPreferences findOneByUser(User user);
	
	public default Map<Long, UserPreferences> getUserPreferencesByIds(java.util.Collection<Long> ids){
		List<UserPreferences> uprefs = findAllById(ids);
		return EnhancedStream.of(uprefs).collect(Collectors.toMap(UserPreferences::getId, e->e));
	}
}
