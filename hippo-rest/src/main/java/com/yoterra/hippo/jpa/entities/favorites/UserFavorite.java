package com.yoterra.hippo.jpa.entities.favorites;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.yoterra.hippo.jpa.entities.ActiveEntity;
import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.Favoritable;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.users.User;

@Entity
@Table(schema = "HIPPO", name = "USER_FAVORITE")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(discriminatorType = DiscriminatorType.STRING, name = "type", length = 2)
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "user_favorite_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public abstract class UserFavorite<ID, F extends Favoritable<ID>> extends ActiveEntity implements DataResolvablesContainer<Long>, Owned {
	
	@ManyToOne(optional = false)
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name="USER_ID")
	private User user;
	
	public abstract F getFavorite();
	public abstract void setFavorite(F favoritable);
	public abstract UserFavoriteType getType();
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public User getOwner() {
		return user;
	}
}
