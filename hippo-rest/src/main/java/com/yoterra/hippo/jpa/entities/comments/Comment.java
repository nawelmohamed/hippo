package com.yoterra.hippo.jpa.entities.comments;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Where;
import org.springframework.format.annotation.DateTimeFormat;

import com.yoterra.hippo.jpa.entities.ActiveEntityMetacountsMap;
import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.entities.users.User;

@Entity
@Table(schema = "HIPPO", name = "COMMENT")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE", discriminatorType = DiscriminatorType.STRING)
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "comment_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public abstract class Comment<T extends Commentable<?>> extends ActiveEntityMetacountsMap 
								implements Commentable<Long>, Likeable<Long>, Owned, DataResolvablesContainer<Long> {
	
	@ManyToOne(optional = false)
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="AUTHOR_ID")
	private User author;
	
	@Column(nullable = false, columnDefinition = "TEXT")
	private String content;
	
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Calendar created;
    
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Calendar modified;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getAuthor() {
		return author;
	}
	
	public void setAuthor(User author) {
		this.author = author;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.COMMENT;
	}
	
	@Override
	public LikeableType getLikeableType() {
		return LikeableType.COMMENT;
	}
	
	@Override
	public User getOwner() {
		return getAuthor();
	}
	
	public abstract CommentableType getType();
	
	public abstract T getParent();
	
	public abstract void setParent(T parent);
}
