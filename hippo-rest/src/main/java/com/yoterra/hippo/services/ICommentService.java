package com.yoterra.hippo.services;

import java.util.Calendar;
import java.util.Collection;

import javax.persistence.EntityNotFoundException;

import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import com.yoterra.hippo.exceptions.DeletePermissionDeniedException;
import com.yoterra.hippo.exceptions.UpdatePermissionDeniedException;
import com.yoterra.hippo.jpa.entities.Metacounts;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.auth.AuthPredicate;
import com.yoterra.hippo.services.auth.AuthorizationService;
import com.yoterra.hippo.services.dataresv.DataResolvableManagerProvider;

public interface ICommentService<ID, C extends Commentable<ID>, T extends Comment<C>> 
		extends IEntityParentProvider<ID, C>, IEventRegisterProvider, AuthorizationServiceProvider, IMetacountsResolver<C>, DataResolvableManagerProvider {
	
	public CommentRepository<ID, C, T> getCommentsRepository();	
	public T newEmptyCommentInstance();
	public CommentableType getCommentableType();
	
	@Override
	@Transactional(readOnly = true)
	public default void resolveMetacounts(Collection<C> commentables) {
		CommentRepository<ID, C, T> repo = getCommentsRepository();
		Metacounts.mergeMetacounts(commentables, repo::getPerParentCountsMap, Commentable::getId, Commentable.COMMENT_METACOUNT);
	}
	
	@Override
	@Transactional(readOnly = true)
	public default void resolveMetacounts(C commentable) {
		CommentRepository<ID, C, T> repo = getCommentsRepository();
		commentable.setCommentMetacount((int)repo.countByParent(commentable));
	}

	@Transactional(readOnly = true)
	public default Page<T> getComments(ID commentableID, PageParams pageParams) {
		C commentable = getParentById(commentableID, false, false);
		Page<T> comments = getCommentsRepository().getByParent(commentable, pageParams.getPageable());
		getDataResolvingManager().resolveContainedData(comments);
		return comments;
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getCommentsBy(Long userId, PageParams pageParams) {
		Page<T> commentsBy = getCommentsRepository().findAllByAuthorId(userId, pageParams.getPageable());
		getDataResolvingManager().resolveContainedData(commentsBy);
		return commentsBy;
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getCommentsBy(User user, PageParams pageParams) {
		return getCommentsBy(user.getId(), pageParams);
	}
	
	@Transactional
	public default T addComment(ID commentableId, String content) {
		C commentable = getParentById(commentableId, true, true);
		User author = ActiveUser.get();

		authCommentAdd(commentable);
		
		T comment = newEmptyCommentInstance();
		comment.setParent(commentable);
		comment.setAuthor(author);
		comment.setCreated(Calendar.getInstance());
		comment.setContent(content);
		comment = getCommentsRepository().save(comment);
		
		getEventRegister().commentedItem(comment);
		getDataResolvingManager().resolveContainedData(comment);
		
		return comment;
	}
	
	@Transactional
	public default void deleteComment(long commentId) {
		T comment = getCommentsRepository().findById(commentId).orElseThrow(
				()->new EntityNotFoundException("The comment does not exist or it has been deleted."));
		
		deleteComment(comment);
	}
	
	@Transactional
	public default void deleteComment(T comment) {
		
		C parent = comment.getParent();
		authCommentDelete(comment,parent);
		
		getCommentsRepository().delete(comment);
		
		getEventRegister().commentDeleted(comment);			// not persisted any more, what happens with the 'like' object ??? 
	}
	
	public default void authCommentAdd(C commentable) {
		AuthorizationService auth = getAuth();
		if( commentable instanceof Owned ) {
			Owned owned = (Owned) commentable;
			auth.notBlocked(owned)
				.authorize(()->new UpdatePermissionDeniedException("You are not allowed to comment on this item."));
		}
	}
	
	public default void authCommentDelete(T comment, C parent) {
		AuthorizationService auth = getAuth();
		AuthPredicate ap = auth.owned(comment).or(auth.superuser());
		if( parent instanceof Owned ) {
			Owned owned = (Owned) parent;
			ap = ap.or(auth.owned(owned));
		}
		ap.authorize(()->new DeletePermissionDeniedException("You are not authorized to delete this comment"));
	}
}
