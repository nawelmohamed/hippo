//package com.yoterra.hippo.jpa.entities.comments;
//
//import javax.persistence.DiscriminatorValue;
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//import org.hibernate.annotations.OnDelete;
//import org.hibernate.annotations.OnDeleteAction;
//import org.hibernate.annotations.Where;
//
//@Entity
//@Table(schema = "HIPPO", name = "COMMENT")
//@DiscriminatorValue(value=CommentableType.Values.COMMENT)
//
//public class CommentComment extends Comment<Comment<?>> {
//
//	@ManyToOne
//	//@OnDelete(action = OnDeleteAction.CASCADE)
//    @JoinColumn(name="COMMENT_ID")
//	private Comment<?> comment;
//
//	@Override
//	public Comment<?> getParent() {
//		return comment;
//	}
//	
//	public Comment<?> getComment() {
//		return comment;
//	}
//	
//	public void setComment(Comment<?> comment) {
//		this.comment = comment;
//	}
//
//	@Override
//	public void setParent(Comment<?> parent) {
//		setComment(parent);
//	}
//
//	@Override
//	public CommentableType getType() {
//		return CommentableType.COMMENT;
//	}
//}