package com.yoterra.hippo.jpa.entities.events;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvablesContainer;
import com.yoterra.hippo.jpa.entities.comments.Comment;


@Entity
@DiscriminatorValue(EventType.Aliases.COMMENTED_ITEM)
public class CommentEvent extends Event<Comment<?>>{

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "comment_id")
	private Comment<?> comment;
	
	@Override
	public EventType getType() {
		return EventType.COMMENTED_ITEM;
	}

	@Override
	public Comment<?> getItem() {
		return getComment();
	}
	
	public Comment<?> getComment() {
		return comment;
	}
	
	public void setComment(Comment<?> comment) {
		this.comment = comment;
	}

	@Override
	public Iterable<DataResolvablesContainer<?>> getOtherContainers() {
		return Arrays.asList(comment);
	}
	
}
