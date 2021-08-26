package com.yoterra.hippo.jpa.entities.users;

import java.util.List;
import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.apache.commons.lang3.StringUtils;
import org.cassandraunit.shaded.com.google.common.collect.Lists;
import org.hibernate.annotations.Where;

import com.yoterra.hippo.jpa.entities.ActiveEntityMetacountsMap;
import com.yoterra.hippo.jpa.entities.Autocompletable;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.Privilege;
import com.yoterra.hippo.jpa.entities.UserDefinedImageable;
import com.yoterra.hippo.jpa.entities.followers.Followable;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.notifications.data.NotificationType;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;
import com.yoterra.hippo.security.Roles;
import com.yoterra.utils.NumUtils;
import com.yoterra.utils.Opt;

@Entity
@Table(schema = "HIPPO", name = "USER")
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "user_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public class User extends ActiveEntityMetacountsMap implements Followable<Long>, Owned, UserDefinedImageable<Long>, Autocompletable<Long> {
	
	public static final String COLLECTIONS_METACOUNT = "mc.ucls";
	public static final String FOLLOWING_METACOUNT = "mc.fwg";
	public static final String LIKES_MADE_METACOUNT = "mc.lms";
	public static final String COMMENTS_WRITEN_METACOUNT = "mc.cws";

	public static final int USERNAME_MIN_LEN = 2, USERNAME_MAX_LEN = 64;
	public static final int FIRST_NAME_MIN_LEN = 1, FIRST_NAME_MAX_LEN = 128;
	public static final int LAST_NAME_MAX_LEN = 128;
	
	public static final int PHONE_NUMBER_MIN_LEN = 2, PHONE_NUMBER_MAX_LEN = 64;
	
	@Column(nullable = false, unique = true)
	private String apUid;							// authentication provider user id 
	
    @Column(nullable = false, unique = true)
    private String username;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String firstName;
    
    @Column
    private String lastName;
    
    @Column
    private String phoneNumber;
    
    @CollectionTable(schema = "HIPPO")
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<UserStatus> statuses;
    
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(schema = "HIPPO",
		joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), 
		inverseJoinColumns = @JoinColumn(name = "privilege_id", referencedColumnName = "id")
	)
	private Set<Privilege> privileges;
    
    @Column(nullable = true, length = 128)
    private String imageUrl;
    
    @Embedded
    private UserSocialNetworks socialNetworks;

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getApUid() {
		return apUid;
	}

	public void setApUid(String apUid) {
		this.apUid = apUid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setStatuses(Set<UserStatus> statuses) {
		this.statuses = statuses;
	}
	
	public Set<UserStatus> getStatuses() {
		return statuses;
	}
	
	public boolean isStatus(UserStatus status) {
		return statuses != null && statuses.contains(status);
	}

	public Set<Privilege> getPrivileges() {
		return privileges;
	}

	public void setPrivileges(Set<Privilege> privileges) {
		this.privileges = privileges;
	}

	@Override
	public FollowableType getFollowableType() {
		return FollowableType.USER;
	}

	@Override
	public User getOwner() {	// a bit weird, but useful 
		return this;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public ImageableType getImageableType() {
		return ImageableType.USER;
	}
	
	@Override
	public byte[] getIdBytes() {
		return NumUtils.longToBytes(getId());
	}

	public boolean isSuperUser() {
		return privileges.stream().anyMatch(p->Roles.ADMIN.equals(p.getName()));
	}
	
	public Integer getCollectionsMetacount() {
		return getMetacount(COLLECTIONS_METACOUNT);
	}
	
	public void setCollectionsMetacount(int count) {
		setMetacount(COLLECTIONS_METACOUNT, count);
	}
	
	public Integer deleteCollectionsMetacount() {
		return deleteMetacount(COLLECTIONS_METACOUNT);
	}

	public Integer getFollowingMetacount() {
		return getMetacount(FOLLOWING_METACOUNT);
	}
	
	public void setFollowingMetacount(int count) {
		setMetacount(FOLLOWING_METACOUNT, count);
	}
	
	public Integer deleteFollowingMetacount() {
		return deleteMetacount(FOLLOWING_METACOUNT);
	}
	
	public Integer getLikesMadeMetacount() {
		return getMetacount(LIKES_MADE_METACOUNT);
	}
	
	public void setLikesMadeMetacount(int count) {
		setMetacount(LIKES_MADE_METACOUNT, count);
	}
	
	public Integer deleteLikesMadeMetacount() {
		return deleteMetacount(LIKES_MADE_METACOUNT);
	}
	
	public Integer getCommentsWrittenMetacount() {
		return getMetacount(COMMENTS_WRITEN_METACOUNT);
	}
	
	public void setCommentsWrittenMetacount(int count) {
		setMetacount(COMMENTS_WRITEN_METACOUNT, count);
	}
	
	public Integer deleteCommentsWrittenMetacount() {
		return deleteMetacount(COMMENTS_WRITEN_METACOUNT);
	}
	
	public String getPhoneNumber() {
		return phoneNumber;
	}
	
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	public UserSocialNetworks getSocialNetworks() {
		return socialNetworks;
	}
	
	public void setSocialNetworks(UserSocialNetworks socialNetworks) {
		this.socialNetworks = socialNetworks;
	}

	@Override
	public SettingsCategory getNotificationsSettingsCategory() {
		return NotificationType.SettingsCategory.USER_FOLLOWER;
	}

	@Override
	public String getDisplayName() {
		List<String> l = Lists.newArrayList(getUsername(), "-", getFirstName(), getLastName());
		l = Opt.strm(l).filter(StringUtils::isNotBlank).toList();
		return StringUtils.join(l, " ");
	}
}