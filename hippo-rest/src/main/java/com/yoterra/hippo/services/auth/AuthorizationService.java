package com.yoterra.hippo.services.auth;

import org.springframework.stereotype.Service;

import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.security.ActiveUser;

@Service
public class AuthorizationService {

	public AuthPredicate owned(Owned owned) {
		return t->this.isOwned(owned);
	}
	
	public AuthPredicate superuser() {
		return t->this.isSuperUser();
	}
	
	public AuthPredicate ownedOrSuperuser(Owned owned) {
		return owned(owned).or(superuser());
	}
	
	public AuthPredicate notBlocked(Owned owned) {
		return t->true; // TODO implement blocking
	}
	
	
	public boolean isOwned(Owned owned) {
		User user = ActiveUser.get();
		return user.getId().equals(owned.getOwner().getId());
	}
	
	public boolean isSuperUser() {
		User user = ActiveUser.get();
		return user.isSuperUser();
	}
}
