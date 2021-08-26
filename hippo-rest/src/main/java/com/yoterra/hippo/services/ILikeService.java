package com.yoterra.hippo.services;

import java.util.Calendar;
import java.util.Collection;

import javax.persistence.EntityNotFoundException;

import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import com.yoterra.hippo.exceptions.DeletePermissionDeniedException;
import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.exceptions.UpdatePermissionDeniedException;
import com.yoterra.hippo.jpa.entities.Metacounts;
import com.yoterra.hippo.jpa.entities.Owned;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.auth.AuthPredicate;
import com.yoterra.hippo.services.auth.AuthorizationService;
import com.yoterra.hippo.services.dataresv.DataResolvableManagerProvider;

public interface ILikeService<ID, L extends Likeable<ID>, T extends Like<L>> 
		extends IEntityParentProvider<ID, L>, IEventRegisterProvider, AuthorizationServiceProvider, IMetacountsResolver<L>, DataResolvableManagerProvider{
	
	public LikeRepository<ID, L, T> getLikeRepository();	
	public T newEmptyLikeInstance();
	public LikeableType getLikeableType();
	
	@Override
	@Transactional(readOnly = true)
	public default void resolveMetacounts(Collection<L> likeables) {
		LikeRepository<ID, L, T> repo = getLikeRepository();
		Metacounts.mergeMetacounts(likeables, repo::getPerParentCountsMap, Likeable::getId, Likeable.LIKE_METACOUNT);
	}
	
	@Override
	@Transactional(readOnly = true)
	public default void resolveMetacounts(L likeable) {
		LikeRepository<ID, L, T> repo = getLikeRepository();
		likeable.setLikeMetacount((int)repo.getCountByParent(likeable));
	}

	@Transactional(readOnly = true)
	public default Page<T> getLikedByActiveUser(PageParams pageParams) {
		return getLikedBy(ActiveUser.get(), pageParams);
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getLikedBy(User author, PageParams pageParams) {
		return getLikedBy(author.getId(), pageParams);
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getLikedBy(Long authorId, PageParams pageParams) {
		Page<T> likedBy = getLikeRepository().findAllByAuthorId(authorId, pageParams.getPageable());
		getDataResolvingManager().resolveContainedData(likedBy);
		return likedBy;
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getLikes(ID likeableId, PageParams pageParams) {
		L parent = getParentById(likeableId, false, false);
		return getLikes(parent, pageParams);
	}
	
	@Transactional(readOnly = true)
	public default Page<T> getLikes(L likeable, PageParams pageParams) {
		Page<T> likes = getLikeRepository().getByParent(likeable, pageParams.getPageable());
		getDataResolvingManager().resolveContainedData(likes);
		return likes;
	}
	
	@Transactional(readOnly = true)
	public default boolean hasLiked(ID likeableID, User author){
		L likeable = getParentById(likeableID, true, false);
		return hasLiked(likeable, author);
	}
	
	@Transactional(readOnly = true)
	public default boolean hasLiked(L likeable, User author){
		LikeRepository<ID, L, T> likeRepository = getLikeRepository();
		long cnt = likeRepository.getCountByParentAndAuthor(likeable, author);
		return cnt > 0;
	}
	
	@Transactional(readOnly = true)
	public default boolean hasLiked(ID likeableID){
		return hasLiked(likeableID, ActiveUser.get());
	}
	
	@Transactional(readOnly = true)
	public default boolean hasLiked(L likeable){
		return hasLiked(likeable, ActiveUser.get());
	}
	
	@Transactional
	public default T addLike(ID likeableID) throws DuplicateElementException {

		L likeable = getParentById(likeableID, true, true);
		User author = ActiveUser.get();

		authLikeAdd(likeable);
		
		boolean liked = hasLiked(likeable, author);
		
		if( liked ) {
			throw new DuplicateElementException("Like already exists");
		}
		
		T like = newEmptyLikeInstance();
		like.setParent(likeable);
		like.setAuthor(author);
		like.setCreated(Calendar.getInstance());
		like = getLikeRepository().save(like);
		
		getEventRegister().likedItem(like);
		
		getDataResolvingManager().resolveContainedData(like);
		
		return like;
	}
	
	@Transactional
	public default void deleteLike(long likeId) {
		T like = getLikeRepository().findById(likeId).orElseThrow(
				()->new EntityNotFoundException("The like does not exist or it has been deleted."));
		
		deleteLike(like);
	}
	
	@Transactional
	public default void deleteItemLike(ID likedItemId) {
		L parent = getParentById(likedItemId, false, false);
		if(parent == null) 
			throw new EntityNotFoundException("An item with the specified id does not exist.");
		
		T like = getLikeRepository().getByParentAndAuthor(parent, ActiveUser.get());
		if(like == null) 
			new EntityNotFoundException("The like does not exist or it has been deleted.");
		
		deleteLike(like);
	}
	
	@Transactional
	public default void deleteLike(T like) {
		
		L parent = like.getParent();
		authLikeDelete(like,parent);
		
		getLikeRepository().delete(like);
		
		getEventRegister().likeDeleted(like);			// not persisted any more, what happens with the 'like' object ??? 
	}
	
	public default void authLikeAdd(L likeable) {
		AuthorizationService auth = getAuth();
		
		if(likeable instanceof Owned) {
			Owned f = (Owned)likeable;
			auth.owned(f).negate()
				.authorize(()->new UpdatePermissionDeniedException("You can not like your own item(s)"));			
			auth.notBlocked(f)
				.authorize(()->new UpdatePermissionDeniedException("You are not allowed to like this item.")); 
		}
	}
	
	public default void authLikeDelete(T like, L parent) {
		AuthorizationService auth = getAuth();
		AuthPredicate ap = auth.owned(like).or(auth.superuser());
		if( parent instanceof Owned ) {
			Owned owned = (Owned) parent;
			ap = ap.or(auth.owned(owned));
		}
		ap.authorize(()->new DeletePermissionDeniedException("You don't have permission to delete this like."));
	}
}
