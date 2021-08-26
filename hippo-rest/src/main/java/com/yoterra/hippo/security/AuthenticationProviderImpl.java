package com.yoterra.hippo.security;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import com.yoterra.hippo.security.model.FirebaseAuthentication;

public class AuthenticationProviderImpl implements AuthenticationProvider {

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		return authentication;			/// FIXME HACK ???? Should I put user data retrieval here 
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return (FirebaseAuthentication.class.isAssignableFrom(authentication));
	}

}
