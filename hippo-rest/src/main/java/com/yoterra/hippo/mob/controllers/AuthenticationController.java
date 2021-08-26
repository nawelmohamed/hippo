package com.yoterra.hippo.mob.controllers;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yoterra.commons.FIXME;
import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.mob.forms.UserCreateForm;
import com.yoterra.hippo.mob.model.UserFullMob;
import com.yoterra.hippo.mob.model.UserMob;
import com.yoterra.hippo.req.Form.Create;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.security.model.AuthToken;
import com.yoterra.hippo.services.ActiveUserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;

@RestController
@RequestMapping("/auth")
public class AuthenticationController extends BaseController {
	
	private static final Logger log = LoggerFactory.getLogger(AuthenticationController.class);

	@Autowired
	private ActiveUserService userAccountService;
	
	@Operation(summary = "IGNORE THIS ENDPOINT FOR NOW")
	@RequestMapping(value = "/status", method = {RequestMethod.POST, RequestMethod.GET})
	public Response<?> authStatus() {
		log.info("Sending auth status");
		return Response.success("Sending auth status");
	}
	
//	@Autowired
//	private SecurityProperties secProps;
	
	@Operation(summary = "IGNORE THIS ENDPOINT FOR NOW")
	@RequestMapping(value = "/reactivate", params = "email", method = RequestMethod.POST)
	@Deprecated
	public Response<?> reactivateAccount(@RequestParam @Parameter(description = "E-mail of the user account") String email) {
		FIXME.warn("Verify email");
		log.info("Reactivate user account: {}", email);
		userAccountService.reactivateAccount(email);
		return Response.success("Account successfully reactivated");
	}
	
	
	@Operation(summary = "Username (live) verification", 
			description = "Checks if the username that is being entered during the user creation process is already taken.")
	@RequestMapping(value = "/usernamecheck", params = "u", method = RequestMethod.POST)
	public Response<Boolean> usernameCheck(@RequestParam @Parameter(description = "Username to check") String u) {
		log.info("Checking username: {}", u);
		boolean exists = userAccountService.usernameCheck(u);
		return Response.success(exists ? "The username exists." : "The username does not exist.", exists);
	}
	
	@Operation(summary = "Add a new user - set basic info", description = "Add a new user. "
			+ "Specify the basic user information. The rest of the user information can be set/updated using other endpoints. "
			+ "\n<i>This is when the user actually gets created in the database. "
			+ "In the previous auth steps the app only communicates with Firebase and other exteranl services.</i>")
	@RequestMapping(value="/register", method = RequestMethod.POST)
	public Response<UserMob> registerInit(@ModelAttribute @Validated(Create.class) UserCreateForm userCreateForm, 
			BindingResult errors, HttpServletRequest request) throws IllegalAccessException {
		
		log.info("Register a new user account: {}", userCreateForm);

		if(errors.hasErrors()) 
			Response.throwError(getOneErrorMessage(errors));
		
		AuthToken token = ActiveUser.getToken(true);
		
		try {
			User user = userAccountService.addNewUser(userCreateForm, token);
			return Response.success("User successfully added", UserFullMob.of(user));
		}catch (DuplicateElementException e) {
			Response.throwError(e.getMessage());
			return null;						// never happens
		}		
	}
}

//		String idToken = ActiveUser.extractToken(request);
//		@SuppressWarnings("unused")
//		User user = ActiveUser.get();
//		int sessionExpiryDays = secProps.getFirebaseProps().getSessionExpiryInDays();
//		long expiresIn = TimeUnit.DAYS.toMillis(sessionExpiryDays);
//		SessionCookieOptions options = SessionCookieOptions.builder().setExpiresIn(expiresIn).build();
//		try {
//			String sessionCookieValue = FirebaseAuth.getInstance().createSessionCookie(idToken, options);
//		} catch (FirebaseAuthException e) {
//			e.printStackTrace();
//		}

//	@PostMapping("/login")
//	public void sessionLogin(HttpServletRequest request) {
//		String idToken = ActiveUser.getBearerToken(request);
//		@SuppressWarnings("unused")
//		User user = ActiveUser.get();
//		int sessionExpiryDays = secProps.getFirebaseProps().getSessionExpiryInDays();
//		long expiresIn = TimeUnit.DAYS.toMillis(sessionExpiryDays);
//		SessionCookieOptions options = SessionCookieOptions.builder().setExpiresIn(expiresIn).build();
//		try {
//			String sessionCookieValue = FirebaseAuth.getInstance().createSessionCookie(idToken, options);
//		} catch (FirebaseAuthException e) {
//			e.printStackTrace();
//		}
//	}
//
//	@PostMapping("/logout")
//	public void sessionLogout() {
//		if (ActiveUser.getCredentials().getType() == CredentialType.SESSION
//				&& secProps.getFirebaseProps().isEnableLogoutEverywhere()) {
//			try {
//				FirebaseAuth.getInstance().revokeRefreshTokens(ActiveUser.get().getApUid());
//			} catch (FirebaseAuthException e) {
//				e.printStackTrace();
//			}
//		}
//		cookieUtils.deleteSecureCookie("session");
//		cookieUtils.deleteCookie("authenticated");
////		cookieUtils.deleteCookie("fullname");
////		cookieUtils.deleteCookie("pic");
//	}
//
//	@PostMapping("me")
//	public User getUser() {
//		return securityService.getUser();
//	}
//
//	@GetMapping("/create/token")
//	public String getCustomToken() throws FirebaseAuthException {
//		return FirebaseAuth.getInstance().createCustomToken(String.valueOf(ActiveUser.get().getApUid()));
//	}
//	@RequestMapping("test")
//	public UserMob hello(){
//		UserMob userMob = new UserMob(new User());
//		userMob.setFullName("John Smith");
//		userMob.setUsername("josim");
//		return userMob;
//	}
