package com.yoterra.hippo.services;

import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.apache.commons.collections4.IterableUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.yoterra.commons.FIXME;
import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.jpa.entities.favorites.UserFavorite;
import com.yoterra.hippo.jpa.entities.users.ClientApp;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.entities.users.UserPreferences;
import com.yoterra.hippo.jpa.entities.users.UserPreferences.ProfileNotificationPreferences;
import com.yoterra.hippo.jpa.repositories.ClientAppRepository;
import com.yoterra.hippo.jpa.repositories.UserFavoriteRepository;
import com.yoterra.hippo.jpa.repositories.UserPreferencesRepository;
import com.yoterra.hippo.jpa.repositories.UserRepository;
import com.yoterra.hippo.mob.forms.UserCreateForm;
import com.yoterra.hippo.mob.forms.UserForm;
import com.yoterra.hippo.mob.forms.UserPreferencesForm;
import com.yoterra.hippo.mob.forms.UserSocialNetworksForm;
import com.yoterra.hippo.notifications.EventManager;
import com.yoterra.hippo.notifications.NotificationService;
import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.security.model.AuthToken;
import com.yoterra.hippo.services.dataresv.DataResolverManager;
import com.yoterra.hippo.services.images.ImageUpload;
import com.yoterra.hippo.services.images.ImageUploadService;
import com.yoterra.hippo.services.images.UploadImageHelper;
import com.yoterra.utils.Opt;

@Service
public class ActiveUserService {

	private Supplier<EntityNotFoundException> MISSING_USER_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The user account does not exist or it has been deleted or deactivated.");
			
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserFavoriteRepository<?, ?, ?> userFavoriteRepository;
	
	@Autowired
	private NotificationService notificationService;	
	
	@Autowired
	private UserPreferencesRepository userPreferencesRepository;
	
	@Autowired
	private EventManager eventManager;
	
	@Autowired
	private ImageUploadService imageUploadService;
	
	@Autowired
	private ClientAppRepository clientAppRepository;
	
	@Autowired
	private DataResolverManager dataResolverManager;
	
	@Autowired
	private DeactivationProcessor deactivationProcessor;

	@Transactional
	public User addNewUser(UserCreateForm userCreateForm, AuthToken token) throws DuplicateElementException{

		if(userRepository.includeDeactivated_countByApUid(token.getApUid()) > 0) 
			throw new DuplicateElementException("The user already exists.");
		if(userRepository.includeDeactivated_countByEmail(token.getEmail()) > 0) 
			throw new DuplicateElementException("A user with the specified e-mail address already exists.");
		if(userRepository.includeDeactivated_countByUsername(userCreateForm.getUsername()) > 0) 
			throw new DuplicateElementException("A user with the specified username address already exists.");
		
		User user = new User();
		
//		user.setAuthMethod(UserAuthMethod.extract(decToken));
		user.setEmail(token.getEmail());
		user.setApUid(token.getApUid());
		
		user.setUsername(userCreateForm.getUsername());
		user.setFirstName(userCreateForm.getFirstName());
		user.setLastName(userCreateForm.getLastName());
		user.setPhoneNumber(userCreateForm.getPhoneNumber());
		
		userRepository.save(user);
		
		UserPreferences userPreferences = new UserPreferences();
		userPreferences.setUser(user);
		userPreferences.setNotificationPreferences(new ProfileNotificationPreferences());		// default notification preferences
		userPreferencesRepository.save(userPreferences);
		
		return user;
	} 
	
	@Transactional
	public void updateUserInfo(UserForm userForm) {
		User cu = ActiveUser.get();
		User db = userRepository.findById(cu.getId()).orElseThrow(MISSING_USER_EXC_SUPPLIER);
		
		db.setFirstName(userForm.getFirstName());
		db.setLastName(userForm.getLastName());
		db.setPhoneNumber(userForm.getPhoneNumber());

//		Not necessary ?
		cu.setFirstName(userForm.getFirstName());
		cu.setLastName(userForm.getLastName());
		cu.setPhoneNumber(userForm.getPhoneNumber());
		
		userRepository.save(db);
	}

	@Transactional
	public String setImage(MultipartFile file) throws IOException{
		
		byte[] bytes = file.getBytes();
		UploadImageHelper.checkImageFile(bytes, file.getOriginalFilename());
		
		User activeUser = ActiveUser.get();
		User db = userRepository.findById(activeUser.getId()).orElseThrow(MISSING_USER_EXC_SUPPLIER);
		
		ImageUpload upload = imageUploadService.upload(bytes, db);
		
		db.setImageUrl(upload.getURL());
		userRepository.save(db);
		activeUser.setImageUrl(upload.getURL());		// reload from db ????
		
		eventManager.register.userChangedProfileImage(db);
		
		return upload.getURL();
	}
	
	@Transactional
	public boolean deleteImage(){
	
		User activeUser = ActiveUser.get();
		User db = userRepository.findById(activeUser.getId()).orElseThrow(MISSING_USER_EXC_SUPPLIER);
		db.setImageUrl(null);
		userRepository.save(db);
		activeUser.setImageUrl(null);		// reload from db ????
		
		eventManager.register.userChangedProfileImage(db);
		
		return true;
	}
	
	@Transactional
	public ClientApp addClientAppPushNotificationToken(String token){
		User user = ActiveUser.get();
		
		ClientApp ca = clientAppRepository.findOneByUserAndMessagingToken(user, token);
		if(ca == null) {
			ca = new ClientApp();
			ca.setUser(user);
			ca.setMessagingToken(token);
			clientAppRepository.save(ca);
			
//			followerRepository.findAllByFollower(follower, pageable)
		}
		
		return ca;
	}
	
	@Transactional(readOnly = true)
	public boolean usernameCheck(String username) {
		long c = userRepository.includeDeactivated_countByUsername(username);
		return c > 0;
	}
	
	@Transactional(readOnly = true)
	public List<UserFavorite<?, ?>> getAllUserFavorites() {
		@SuppressWarnings("unchecked")
		List<UserFavorite<?, ?>> allByUser = (List<UserFavorite<?, ?>>) userFavoriteRepository.findAllByUser(ActiveUser.get());
		dataResolverManager.resolveContainedData(allByUser);
		return allByUser;
	}
	
	@Transactional(readOnly = true)
	public UserPreferences getUserPreferences() {
		UserPreferences userPreferences = userPreferencesRepository.findOneByUser(ActiveUser.get());
		return userPreferences;
	}
	
	@Transactional
	public void setUserPreferences(UserPreferencesForm upForm) {
		UserPreferences userPreferences = userPreferencesRepository.findOneByUser(ActiveUser.get());
		upForm.copyTo(userPreferences);
		userPreferencesRepository.save(userPreferences);
	}
	
	public java.util.Collection<Notification> getUserNotifications() {
		java.util.Collection<Notification> notifs = notificationService.findAllByReceiver(ActiveUser.get().getId());
		dataResolverManager.resolveContainedData(IterableUtils.transformedIterable(notifs, Notification::getEvent));
		return notifs;
	}
	
	public void setSeenNotifications(Set<Long> eventIds) {
		FIXME.warn("Authorize");
		Collection<Notification> userNotifs = notificationService.findAllByReceiver(ActiveUser.get().getId());
		List<Notification> toUpdate = Opt.strm(userNotifs)
			.filter(n->eventIds.contains(n.getEventId()))
			.peek(n->n.setSeen(true))
			.toList();
		
		notificationService.save(toUpdate);
	}
	
	public void deleteNotifications(Set<Long> eventIds) {
		FIXME.warn("Authorize");
		Collection<Notification> userNotifs = notificationService.findAllByReceiver(ActiveUser.get().getId());
		List<Notification> toDelete = Opt.strm(userNotifs)
			.filter(n->eventIds.contains(n.getEventId()))
			.toList();
		
		notificationService.delete(toDelete);
	}
	
	@Transactional
	public void setUserSocialNetworks(UserSocialNetworksForm usnForm) {
		User user = userRepository.findById(ActiveUser.get().getId()).orElseThrow(MISSING_USER_EXC_SUPPLIER);	
		user.setSocialNetworks(usnForm.toUserSocialNetworks());
		userRepository.save(user);
	}
	
	@Transactional
	public void deleteAccount(){
		userRepository.delete(ActiveUser.get());
		FIXME.warn("Unsubscribe from topics");
	} 

	@Transactional
	public boolean deactivateAccount(){
		return deactivationProcessor.dectivateUser(ActiveUser.get().getId());
	} 
	
	@Transactional
	public boolean reactivateAccount(String email){
		return deactivationProcessor.activateUser(email);
	}
}
