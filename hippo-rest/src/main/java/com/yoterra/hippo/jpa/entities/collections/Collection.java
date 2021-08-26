package com.yoterra.hippo.jpa.entities.collections;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Where;
import org.springframework.format.annotation.DateTimeFormat;

import com.yoterra.hippo.jpa.entities.ActiveEntityMetacountsMap;
import com.yoterra.hippo.jpa.entities.Autocompletable;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.UserDefinedImageable;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.followers.Followable;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.notifications.data.NotificationType.SettingsCategory;
import com.yoterra.utils.NumUtils;

@Entity
@Table(schema = "HIPPO", name = "COLLECTION")
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "collection_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public class Collection extends ActiveEntityMetacountsMap implements Commentable<Long>, Likeable<Long>, 
		Followable<Long>, Owned, UserDefinedImageable<Long>, Autocompletable<Long> {
	
	public static final int NAME_MIN_LEN = 1, NAME_MAX_LEN = 64;
	public static final int DESC_MIN_LEN = 1, DESC_MAX_LEN = 1024;
	
	public static final String COLLECTION_ITEM_METACOUNT = "mc.coll_items";
	
	@Column(name = "TYPE", nullable = false, insertable = true, updatable = false) 
	@Enumerated(EnumType.STRING)
	private CollectionType type;
	
	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="OWNER_ID")
	private User owner;
	
	@Column(nullable = false)
	private String name = null;
	
	@Column(nullable = false, columnDefinition = "TEXT")
	private String description = null;
	
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    @Column(nullable = false)
    private Calendar created;
    
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    @Column(nullable = true)
    private Calendar modified;			// null if never modified
    
    @Column(nullable = true, length = 128)
    private String imageUrl;
    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public CollectionType getType() {
		return type;
	}

	public void setType(CollectionType type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}
	
	public Calendar getCreated() {
		return created;
	}

	public void setCreated(Calendar created) {
		this.created = created;
	}
	
	public Calendar getModified() {
		return modified;
	}

	public void setModified(Calendar modified) {
		this.modified = modified;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Integer getCollectionItemMetacount() {
		return getMetacount(COLLECTION_ITEM_METACOUNT);
	}
	
	public void setCollectionItemMetacount(int count) {
		setMetacount(COLLECTION_ITEM_METACOUNT, count);
	}
	
	public Integer deleteCollectionItemMetacount() {
		return deleteMetacount(COLLECTION_ITEM_METACOUNT);
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.COLLECTION;
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.COLLECTION;
	}

	@Override
	public FollowableType getFollowableType() {
		return FollowableType.COLLECTION;
	}
	
	@Override
	public ImageableType getImageableType() {
		return ImageableType.COLLECTION;
	}

	@Override
	public byte[] getIdBytes() {
		return NumUtils.longToBytes(getId());
	}

	@Override
	public SettingsCategory getNotificationsSettingsCategory() {
		return SettingsCategory.COLLECTION_FOLLOWER;
	}

	@Override
	public String getDisplayName() {
		return getName();
	}

}
