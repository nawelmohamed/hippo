package com.yoterra.hippo.jpa.entities.collections;

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

import com.yoterra.hippo.jpa.entities.ActiveEntityMetacountsMap;
import com.yoterra.hippo.jpa.entities.Autocompletable;
import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.utils.Opt;

@Entity
@Table(schema = "HIPPO", name = "COLLECTION_ITEM")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE", discriminatorType = DiscriminatorType.STRING)
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "collection_item_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public abstract class CollectionItem<T extends Collectable<?>> extends ActiveEntityMetacountsMap 
			implements Commentable<Long>, Likeable<Long>, Owned, Autocompletable<Long>, DataResolvablesContainer<Long> {

//	@Column(name = "TYPE", nullable = false, insertable = false, updatable = false) 
//	@Enumerated(EnumType.STRING)
//	private CollectionItemType type;
	
	@ManyToOne(optional = false)
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="COLLECTION_ID")
	private Collection collection;
	
	@Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Calendar added;
	
	public abstract T getItem();
	public abstract void setItem(T item);
	
	public abstract CollectionItemType getType();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Collection getCollection() {
		return collection;
	}

	public void setCollection(Collection collection) {
		this.collection = collection;
	}

	public Calendar getAdded() {
		return added;
	}

	public void setAdded(Calendar added) {
		this.added = added;
	}
	
	@Override
	public User getOwner() {
		return collection.getOwner();
	}
	
	@Override
	public String getDisplayName() {
		return Opt.get(getItem(), Autocompletable::getDisplayName);
	}
}
