package com.yoterra.hippo.mob.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Set;

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
import org.springframework.web.multipart.MultipartFile;

import com.yoterra.hippo.exceptions.LimitExceededException;
import com.yoterra.hippo.jpa.entities.Invitation;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionDeal;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.collections.CollectionProduct;
import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.events.Event;
import com.yoterra.hippo.jpa.entities.favorites.UserFavorite;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.entities.users.UserPreferences;
import com.yoterra.hippo.mob.forms.UserFavoriteBrandsForm;
import com.yoterra.hippo.mob.forms.UserFavoriteCategoriesForm;
import com.yoterra.hippo.mob.forms.UserFavoriteStoresForm;
import com.yoterra.hippo.mob.forms.UserForm;
import com.yoterra.hippo.mob.forms.UserPreferencesForm;
import com.yoterra.hippo.mob.forms.UserSocialNetworksForm;
import com.yoterra.hippo.mob.model.CollectionDealMob;
import com.yoterra.hippo.mob.model.CollectionMob;
import com.yoterra.hippo.mob.model.CollectionProductMob;
import com.yoterra.hippo.mob.model.CommentMob;
import com.yoterra.hippo.mob.model.EventMob;
import com.yoterra.hippo.mob.model.FollowerMob;
import com.yoterra.hippo.mob.model.InvitationMob;
import com.yoterra.hippo.mob.model.LikeMob;
import com.yoterra.hippo.mob.model.NotificationMob;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.mob.model.UserFavoritesMob;
import com.yoterra.hippo.mob.model.UserMob;
import com.yoterra.hippo.mob.model.UserPreferencesMob;
import com.yoterra.hippo.mob.model.UserProfileMob;
import com.yoterra.hippo.mob.model.UserSocialNetworksMob;
import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.hippo.req.Form.Edit;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.ActiveUserService;
import com.yoterra.hippo.services.BrandService;
import com.yoterra.hippo.services.StoreService;
import com.yoterra.hippo.services.TaxonomyService;
import com.yoterra.hippo.services.UsersService;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.enums.ParameterStyle;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Encoding;
import io.swagger.v3.oas.annotations.media.Schema;

@RestController
@RequestMapping("/active")
public class ActiveUserController extends BaseController {

	private static final Logger log = LoggerFactory.getLogger(ActiveUserController.class);

	@Autowired
	private ActiveUserService activeUserService;
	
	@Operation(summary = "Get current user full profile information", description = "Get current user full profile information")
	@RequestMapping(value = "/profile", method = RequestMethod.GET)
	public Response<UserMob> userProfile() {
		log.info("Load user profile page");
		User user = usersService.getUser(ActiveUser.getId(), true);
		UserCtx userCtx = usersService.getUserContext(ActiveUser.get());
		return Response.success(null, UserProfileMob.of(user, userCtx));
	}
	
	@Operation(summary = "Update current user basic info.", 
			description = "Update current user basic info (first and last name and the phone nubmer). "
					+ "The rest of the account related information can be changed using other endpoints.")
	@RequestMapping(value="/profile/update", method = RequestMethod.POST)
	public Response<?> updateProfile(@ModelAttribute @Validated(Edit.class) UserForm userForm, 
			BindingResult errors, HttpServletRequest request) {
		
		if(errors.hasErrors()) 
			Response.throwError(getOneErrorMessage(errors));
		
		activeUserService.updateUserInfo(userForm);
		return Response.success("User info successfully updated");
	}

	@Operation(summary = "IGNORE THIS ENDPOINT FOR NOW")
	@RequestMapping(value="/addclientapp", method = RequestMethod.POST)
	public Response<?> addClientApp(@RequestParam("t") @Parameter(description = "Messaging token") String token, HttpServletRequest request) {
		activeUserService.addClientAppPushNotificationToken(token);
		return Response.success("Client app token added successfully");
	}
	
	@Operation(	summary = "Set/update current user profile image.", 
				description = "Set/update current user profile image. "
					+ "If previously set, the old one will be replaced.\n"
					+ "<i>Note that this endpoint can not be tested using this web tool (Swagger).</i>")
	@RequestMapping(value = "/image/set", method = RequestMethod.POST)
	public Response<String> setUserPicture(
			@RequestParam("file") 
			@Parameter( description = "Image file (max size 1MB)",
						name = "file",
						in = ParameterIn.QUERY,
						style = ParameterStyle.FORM,
						content = @Content(
				                mediaType = "multipart/form-data",
				                schema = @Schema(implementation = MultipartFile.class),
				                encoding = @Encoding(name = "file", contentType = "image/png,image/jpeg")
						)
			) MultipartFile image) throws IOException{
		
		log.info("Set user profile image");
		
		String imageUrl = activeUserService.setImage(image);
		return Response.success("User image set successfully", imageUrl);
	}
	
	@Operation(summary = "Delete current user profile image.", description = "Delete current user profile image.")
	@RequestMapping(value = "/image/delete", method = RequestMethod.DELETE)
	public Response<?> deleteUserPicture(){
		log.info("Delete user profile image: {}");
		activeUserService.deleteImage();
		return Response.success("User image deleted successfully");
	}
	
	@Operation(summary = "Get social networks info of the current user.", description = "Get social networks info of the current user.")
	@RequestMapping(value = "/socnets", method = RequestMethod.GET)
	public Response<UserSocialNetworksMob> socialNetworks() {
		log.info("Load user social networks");
		return Response.success(null, UserSocialNetworksMob.of(ActiveUser.get().getSocialNetworks()));
	}
	
	@Operation(summary = "Set/update social networks info of the current user.", description = "Set/update social networks info of the current user.")
	@RequestMapping(value = "/socnets/set", method = RequestMethod.POST)
	public Response<?> setSocialNetworks(@ModelAttribute @Validated(Edit.class) UserSocialNetworksForm usnForm, BindingResult errors) {
		
		log.info("Set user social networks {}", usnForm);
		
		if(errors.hasErrors()) 
			Response.throwError(getOneErrorMessage(errors));

		activeUserService.setUserSocialNetworks(usnForm);
		
		return Response.success("User social networks set successfully", null);
	}
	
	@Operation(summary = "Get the current user profile general preferences", 
			description = "Get the current user profile general preferences")
	@RequestMapping(value="/preferences", method = RequestMethod.GET)
	public Response<UserPreferencesMob> getUserPreferences(){
		log.info("Load user preferences");						
		UserPreferences preferences = activeUserService.getUserPreferences();
		return Response.success(null, UserPreferencesMob.of(preferences));	
	}
	
	@Operation(summary = "Set/update the current user profile general preferences", 
			description = "Set/update the current user profile general preferences")
	@RequestMapping(value="/preferences/update", method = RequestMethod.POST)
	public Response<?> updateUserPreferences(@ModelAttribute @Validated UserPreferencesForm form, BindingResult errors){
		log.info("Load user preferences");
		
		if(errors.hasErrors()) 
			Response.throwError(getOneErrorMessage(errors));
		
		activeUserService.setUserPreferences(form);
		
		return Response.success("User preferences updated successfully", null);	
	}
	
	@SuppressWarnings("rawtypes")
	@Operation(summary = "Get a list of notification of the current user. - SKIP THIS ONE FOR NOW", 
			description = "Get a list of notification of the current user. - SKIP THIS ONE FOR NOW")
	@RequestMapping(value="/notifications", method = RequestMethod.GET)
	public Response<List<NotificationMob>> getNotifications(){
		log.info("Load user notifications");
		
		java.util.Collection<Notification> notifs = activeUserService.getUserNotifications();
		List<NotificationMob> unotifs = Opt.strm(notifs).map(this::toNotificationMob).toList();
		
		return Response.success(null, unotifs);	
	}
	
	
	@Operation(summary = "Set (a) specified notification(s) (of the current user) as 'seen'", 
			description = "Set (a) specified notification(s) (of the current user) as 'seen'")
	@RequestMapping(value="/notifications/seen/set", params="eventId", method = RequestMethod.POST)
	public Response<?> setSeenNotifications(
			@RequestParam("eventId") 
			@Parameter(	description = "One or more event IDs to set the related notification(s) as 'seen'.") 
				Set<Long> eventIds){
		
		log.info("Set seen notifications with event ids: {}", eventIds);
		activeUserService.setSeenNotifications(eventIds);
		return Response.success("Successfully set 'seen' user notifications.");	
	}
	
	@Operation(summary = "Delete (a) specified notification(s) (of the current user)", 
			description = "Delete (a) specified notification(s) (of the current user)")
	@RequestMapping(value="/notifications/delete", params="eventId", method = RequestMethod.DELETE)
	public Response<?> deleteNotifications(
			@RequestParam("eventId") 
			@Parameter(	description = "One or more event IDs to delete the related notification(s)" ) 
				Set<Long> eventIds){
		log.info("Delete notifications with event ids: {}", eventIds);
		activeUserService.deleteNotifications(eventIds);
		return Response.success("Successfully deleted user notifications.");	
	}
	
	@Operation(summary = "Delete the current user account.", description = "Delete the current user account. "
			+ "After this operation the user should be logged out from the app.")
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public Response<?> deleteAccount() {
		log.info("Deleting user account.");
		activeUserService.deleteAccount();
		return Response.success("Account successfully deleted");
	}
	
	@Operation(summary = "Deactivate the current user account.", description = "Deactivate the current user account.")
	@RequestMapping(value = "/deactivate", method = RequestMethod.POST)
	public Response<?> deactivateAccount() {
		log.info("Deactivating user account.");
		activeUserService.deactivateAccount();
		return Response.success("Account successfully deactivated");
	}
	
	// =======================================================================================
	// ----------------------- DEPRECATED ENDPOINTS ------------------------------------------
	// =======================================================================================
	
	@Autowired
	private BrandService brandService;
	@Autowired
	private StoreService storeService;
	@Autowired
	private TaxonomyService taxonomyService;
	@Autowired
	private UsersService usersService;
	
	@Deprecated
	@Operation(summary = "Get current user 'favorites' (categories, brands, stores).", deprecated = true,
			description = "Get current user 'favorites' (categories, brands, stores). DEPRECATED (use separate endpoints for each type).")
	@RequestMapping(value = "/favorites", method = RequestMethod.GET)
	public Response<UserFavoritesMob> favorites() {
		log.info("Load user favorites");
		List<UserFavorite<?, ?>> userFavs = activeUserService.getAllUserFavorites();
		UserFavoritesMob ufm = new UserFavoritesMob(userFavs);
		return Response.success(null, ufm);
	}
	
	@Deprecated
	@Operation(summary = "Set current user profile 'favorites' of all types (categories, brands, stores).", deprecated = true,
		description = "Set current user profile 'favorites' of all types (categories, brands, stores). "
			+ "The number of favorite items is limited (see the params specification). DEPRECATED (use separate endpoints for each type)."
			+ "The specified set of favorite items will completely replace the previous set of favorite items (no incremental set updates).")
	@RequestMapping(value = "/favorites/set", method = RequestMethod.POST)
	public Response<?> setUserFavorites(@ModelAttribute @Validated UserFavoriteCategoriesForm cForm, BindingResult cErrors,
										@ModelAttribute @Validated UserFavoriteBrandsForm bForm, BindingResult bErrors,
										@ModelAttribute @Validated UserFavoriteStoresForm sForm, BindingResult sErrors) {
		
		log.info("Set user favorites.");
		
		if(cErrors.hasErrors())
			Response.throwError(getOneErrorMessage(cErrors));
		if(bErrors.hasErrors())
			Response.throwError(getOneErrorMessage(bErrors));
		if(sErrors.hasErrors())
			Response.throwError(getOneErrorMessage(sErrors));
		
		try {
			taxonomyService.setUserFavorites(cForm.getCategories());
			brandService.setUserFavorites(bForm.getBrands());
			storeService.setUserFavorites(sForm.getStores());
		} catch (LimitExceededException e) {
			Response.throwError(e.getMessage());
		}
		
		return Response.success("User favorites set successfully", null);
	}
	
	// FIXME change this
	// FIXME change this
	// FIXME change this
	// FIXME change this
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Deprecated // FIXME change this 
	private NotificationMob toNotificationMob(Notification notification){
		Event<?> event = notification.getEvent();
		Object itemMob;
		switch (event.getType()) {
		case COLLECTED_ITEM:
			CollectionItem<?> ci = (CollectionItem<?>) event.getItem();
			
			switch (ci.getType()) {
			case DEAL:
				itemMob = CollectionDealMob.of((CollectionDeal)ci);
				break;
			case PRODUCT:
				itemMob = CollectionProductMob.of((CollectionProduct)ci);
				break;
			default:
				throw new UnsupportedOperationException("Unsupported type: " + ci.getType());
			}
			
			break;
		case CREATED_COLLECTION:
			Collection coll = (Collection) event.getItem();
			itemMob = CollectionMob.of(coll);
			break;
		case COMMENTED_ITEM:
			Comment<?> comment = (Comment<?>) event.getItem();
			itemMob = CommentMob.resolve(comment);
			break;
		case FOLLOW_ITEM:
			Follower<?> follower= (Follower<?>) event.getItem();
			itemMob = FollowerMob.resolve(follower);
			break;
		case INVITATION_ACCEPTED:
			Invitation inv = (Invitation) event.getItem();
			itemMob = InvitationMob.from(inv);
			break;
		case LIKED_ITEM:
			Like<?> like = (Like<?>) event.getItem();
			itemMob = LikeMob.resolve(like);
			break;
		default:
			throw new UnsupportedOperationException("Unsupported type: " + event.getType());
		}
		
		return new NotificationMob(notification, new EventMob(event, itemMob));
	}
	
}
