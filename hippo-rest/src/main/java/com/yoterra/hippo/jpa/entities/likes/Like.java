package com.yoterra.hippo.jpa.entities.likes;

import java.util.Calendar;

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

import com.yoterra.hippo.jpa.entities.ActiveEntity;
import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.users.User;

@Entity
@Table(schema = "HIPPO", name = "LIKE_")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE", discriminatorType = DiscriminatorType.STRING)
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "like_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public abstract class Like<T extends Likeable<?>> extends ActiveEntity implements Owned, DataResolvablesContainer<Long> {

	@ManyToOne(optional = false)
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="AUTHOR_ID")
	private User author;
	
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Calendar created;
	
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
	
	public Calendar getCreated() {
		return created;
	}

	public void setCreated(Calendar created) {
		this.created = created;
	}
	
	@Override
	public User getOwner() {
		return getAuthor();
	}

	public abstract LikeableType getType();
	
	public abstract T getParent();
	
	public abstract void setParent(T parent);
}
