package com.yoterra.hippo.security.model;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import com.yoterra.hippo.security.AuthStatus;
import com.yoterra.hippo.security.UserPrincipal;
import com.yoterra.utils.Opt;

public class FirebaseAuthentication implements Authentication{
	
	private static final long serialVersionUID = -7606796499250051633L;

	public static final List<GrantedAuthority> NO_AUTHORITIES = Collections.emptyList();
	
	private AuthToken token;
	
	private UserPrincipal principal;
	
	private AuthStatus status = AuthStatus.NONE;
	
	public FirebaseAuthentication(AuthToken token, UserPrincipal principal, AuthStatus status) {
		super();
		this.token = token;
		this.principal = principal;
		this.status = status;
	}

	@Override
	public String getName() {
		return Opt.getOrDef(principal, "", UserPrincipal::getUsername);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Opt.getOrDef(principal, NO_AUTHORITIES, UserPrincipal::getAuthorities);
	}

	@Override
	public Object getCredentials() {
		return token;
	}

	@Override
	public Object getDetails() {
		return principal;
	}

	@Override
	public Object getPrincipal() {
		return principal;
	}

	@Override
	public boolean isAuthenticated() {
		return getStatus().isAuthenticated();
	}

	@Override
	public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
		throw new UnsupportedOperationException("Explicitly setting authentication flag is no supported");
	}
	
	public AuthStatus getStatus() {
		return Opt.defVal(status, AuthStatus.NONE);
	}
	
	public boolean isStatusFull() {
		return getStatus() == AuthStatus.FULL;
	}
	
	public boolean isStatusNoUser() {
		return getStatus() == AuthStatus.NO_USER;
	}
	
	public boolean isStatusNewUser() {
		return getStatus() == AuthStatus.NEW_USER;
	}
	
	public AuthToken getToken() {
		return token;
	}

}
