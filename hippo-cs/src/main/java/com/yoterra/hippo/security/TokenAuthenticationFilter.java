//package com.yoterra.hippo.security;
//
//import java.io.IOException;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.apache.commons.lang3.StringUtils;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import com.google.firebase.auth.FirebaseAuth;
//import com.google.firebase.auth.FirebaseAuthException;
//import com.google.firebase.auth.FirebaseToken;
//import com.yoterra.hippo.jpa.data.users.User;
//import com.yoterra.hippo.jpa.repositories.UserRepository;
//import com.yoterra.hippo.security.model.AuthToken;
//import com.yoterra.hippo.security.model.FirebaseAuthentication;
//import com.yoterra.utils.Opt;
//
//@Component
//public class TokenAuthenticationFilter extends OncePerRequestFilter {
//	
//	public static final String AUTH_STATUS_HEADER_NAME = "hippo-auth-status";
//	
//	private static final Logger log = LoggerFactory.getLogger(TokenAuthenticationFilter.class);
//	
//	@Value("${com.hippo.test.auth.token.enabled:false}")
//	private boolean testMode;
//
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		resolve(request, response);
//		filterChain.doFilter(request, response);
//	}
//
//	private void resolve(HttpServletRequest request, HttpServletResponse response) {
//		try {
//			String rawToken = ActiveUser.extractToken(request);
//			AuthToken authToken = resolveAuthToken(rawToken);
//			
//			if(authToken == null) {
//				response.setHeader(AUTH_STATUS_HEADER_NAME, AuthStatus.NONE.getCode());
//				return;
//			}
//			
//			User user = userRepository.findByEmail(authToken.getEmail());
//			
//			AuthStatus status = resolveStatus(authToken, user);
//			response.setHeader(AUTH_STATUS_HEADER_NAME, status.getCode());
//			
//			UserPrincipal userPrincipal = Opt.get(user, UserPrincipal::new);
//			
//			FirebaseAuthentication authentication = new FirebaseAuthentication(authToken, userPrincipal, status);
////			authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//			ActiveUser.setAuthentication(authentication);
//			
//		} catch (FirebaseAuthException e) {
//			log.error("Firebase Exception: ", e.getMessage());
//			response.setHeader(AUTH_STATUS_HEADER_NAME, AuthStatus.NONE.getCode());
//		}
//	}
//
//	private AuthStatus resolveStatus(AuthToken authToken, User user) {
//		if(!authToken.isEmailVerified()) {
//			return AuthStatus.NV_EMAIL;
//		}else if(user == null) {
//			return AuthStatus.NO_USER;
//		}else{
//			return AuthStatus.FULL;
//		}
//	}
//	
//	private AuthToken resolveAuthToken(String rawToken) throws FirebaseAuthException {
//		if (StringUtils.isBlank(rawToken) || StringUtils.equalsAnyIgnoreCase(rawToken, "null", "undefined"))
//			return null;
//
//		if(testMode) {
//			AuthToken testToken = AuthToken.testToken(rawToken);
//			if(testToken != null)
//				return testToken;
//		}
//		
//		try {
//			FirebaseToken decodedToken = firebaseAuth.verifyIdToken(rawToken);
//			if(decodedToken != null) 
//				return AuthToken.firebaseToken(rawToken, decodedToken);
//		}catch (IllegalArgumentException e) {
//			log.error("Auth token error: {}", e);
//		}
//		
//		return null;
//	}
//}
