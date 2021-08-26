package com.yoterra.hippo.security.model;

import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.validator.routines.EmailValidator;

import com.google.firebase.auth.FirebaseToken;

public abstract class AuthToken {
	
	public static final String TEST_TOKEN_PREFIX = "testtoken:";
	
	private final String rawToken;


	public static AuthToken testToken(String raw) {
		if(!StringUtils.startsWith(raw, TEST_TOKEN_PREFIX))
			return null;
		
		String rEmail = StringUtils.removeStart(raw, TEST_TOKEN_PREFIX);
		rEmail = StringUtils.stripToNull(rEmail);
		if(!EmailValidator.getInstance().isValid(rEmail)) 
			return null;	
		
		String uid = UUID.nameUUIDFromBytes(rEmail.getBytes()).toString();
		return new TestAuthToken(raw, uid, rEmail);
	}
	
	public static AuthToken firebaseToken(String rawToken, FirebaseToken decodedToken) {
		if(rawToken == null || decodedToken == null)
			return null;
		
		return new FirebaseAuthToken(rawToken, decodedToken);
	}

	
	protected AuthToken(String rawToken) {
		this.rawToken = rawToken;
	}
	
	public abstract String getEmail();
	public abstract boolean isEmailVerified();
	public abstract String getApUid();
	
	public String getRawToken() {
		return rawToken;
	}

	static class FirebaseAuthToken extends AuthToken {

		private FirebaseToken decodedToken;
		
		private FirebaseAuthToken(String rawToken, FirebaseToken decodedToken) {
			super(rawToken);
			this.decodedToken = decodedToken;
		}

		@Override
		public String getEmail() {
			return decodedToken.getEmail();
		}

		@Override
		public String getApUid() {
			return decodedToken.getUid();
		}

		@Override
		public boolean isEmailVerified() {
			return decodedToken.isEmailVerified();
		}
		
	}

	
	static class TestAuthToken extends AuthToken {
		
		private final String apUid;
		private final String email;
		
		private TestAuthToken (String rawToken, String apUid, String email){
			super(rawToken);
			this.apUid = apUid;
			this.email = email;
		}

		@Override
		public String getEmail() {
			return email;
		}
		
		@Override
		public String getApUid() {
			return apUid;
		}
		
		@Override
		public boolean isEmailVerified() {
			return true;						
		}
	}

}
