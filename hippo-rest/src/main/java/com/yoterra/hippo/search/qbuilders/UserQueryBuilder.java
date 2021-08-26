package com.yoterra.hippo.search.qbuilders;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.queries.QueryBuilder;
import com.yoterra.hippo.jpa.specs.UserSpecifications;
import com.yoterra.hippo.search.requests.UserSearchRequest;

@Component
public class UserQueryBuilder extends QueryBuilder<User, UserSearchRequest>{

	@Override
	public Specification<User> build(UserSearchRequest req) {

		Specification<User> spec = Specification.where(null);

		if(StringUtils.isNotBlank(req.getUsernamePrefix())){
			spec = spec.and(UserSpecifications.usernamePrefixIs(req.getUsernamePrefix(), true));
		}
		
		if(StringUtils.isNotBlank(req.getFirstNamePrefix())){
			spec = spec.and(UserSpecifications.firstNamePrefixIs(req.getFirstNamePrefix(), true));
		}
		
		if(StringUtils.isNotBlank(req.getLastNamePrefix())){
			spec = spec.and(UserSpecifications.lastNameContains(req.getLastNamePrefix(), true));
		}
		
		if(StringUtils.isNotBlank(req.getKeywords())){
			Specification<User> uc = UserSpecifications.usernameContains(req.getKeywords(), true);
			Specification<User> fnc = UserSpecifications.firstNameContains(req.getKeywords(), true);
			Specification<User> lnc = UserSpecifications.lastNameContains(req.getKeywords(), true);
			Specification<User> nc = fnc.or(lnc).or(uc);
			
			spec = spec.and(nc); 
		}

		return spec;
	}
}
