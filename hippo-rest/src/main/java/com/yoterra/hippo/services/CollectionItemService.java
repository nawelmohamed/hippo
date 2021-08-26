package com.yoterra.hippo.services;

import java.util.Calendar;
import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import com.yoterra.hippo.exceptions.DeletePermissionDeniedException;
import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.exceptions.UpdatePermissionDeniedException;
import com.yoterra.hippo.jpa.entities.collections.Collectable;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.collections.CollectionType;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionItem;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionItem;
import com.yoterra.hippo.jpa.repositories.CollectionItemRepository;
import com.yoterra.hippo.jpa.repositories.CollectionRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.notifications.EventManager;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.auth.AuthorizationService;
import com.yoterra.hippo.services.dataresv.DataResolverManager;

public abstract class CollectionItemService<ID, 
											C extends Collectable<ID>, 
											CI extends CollectionItem<C>, 
											LCI extends LikeCollectionItem<CI>, 
											CCI extends CommentCollectionItem<CI>
										>  implements 	ICommentService<Long, CI, CCI>, 
														ILikeService<Long, CI, LCI>, 
														IUserContextService<CI, UserCtx>{
	
	
	private Supplier<EntityNotFoundException> MISSING_COLLECTION_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The collection does not exist or it has been deleted.");
			
	private Supplier<EntityNotFoundException> MISSING_COLLECTION_ITEM_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The collection item does not exist or it has been deleted.");
			
			
	@Autowired
	private CollectionRepository collectionRepository;
			
	@Autowired
	private EventManager eventManager;
	
	@Autowired
	private AuthorizationService auth;
	
	@Autowired
	private DataResolverManager dataResolverManager;
	
	protected abstract CollectionItemRepository<ID, C, CI> getRepository();
	
	public abstract CollectionType getCollectionType();
	
	protected abstract CI initItem(ID itemId);
	
	public abstract UserCtx getUserContextOfItem(CI ci);

	@Transactional
	public CI addItem(Long collectionId, ID itemId) throws EntityNotFoundException, DuplicateElementException{
		
		Collection collection = collectionRepository.findById(collectionId).orElseThrow(MISSING_COLLECTION_EXC_SUPPLIER);
		
		auth.owned(collection)
			.authorize(()->new UpdatePermissionDeniedException("You are not authorized to add items to this collection."));

		if(collection.getType() != getCollectionType()) {
			throw new IllegalArgumentException("The specified collection type does not match the item type.");
		}
		
		if(getRepository().countByCollectionIdAndItemId(collectionId, itemId) > 0) {
			throw new DuplicateElementException("The item is already in the collecton.");
		}
		
		CI item = initItem(itemId);
		
		item.setCollection(collection);
		item.setAdded(Calendar.getInstance());
		getRepository().save(item);
		
		eventManager.register.addedItemToCollection(item);
		
		dataResolverManager.resolveContainedData(item);
		
		return item;
	}
	
	@Override
	public void resolveMetacounts(CI collectionItem) {
		ILikeService.super.resolveMetacounts(collectionItem);
		ICommentService.super.resolveMetacounts(collectionItem);
	}
	
	@Override
	public void resolveMetacounts(java.util.Collection<CI> collItems) {
		ILikeService.super.resolveMetacounts(collItems);
		ICommentService.super.resolveMetacounts(collItems);
	}

	@Transactional(readOnly = true)
	public Page<CI> getCollectionItems(long collectionId, boolean addMetacounts, PageParams pageParams){
		
		Page<CI> page = getRepository().findAllByCollectionId(collectionId, pageParams.getPageable());
		
		dataResolverManager.resolveContainedData(page);
		
		if(addMetacounts) {
			resolveMetacounts(page.getContent());
		}
		
		return page;
	}
	
	@Override
	public UserCtx getUserContext(CI ci) {
		boolean hasLiked = hasLiked(ci.getId());
		boolean owns = ActiveUser.is(ci.getOwner()); 
		return new UserCtx(hasLiked, null, null, owns);
	}
	
	@Transactional(readOnly = true)
	public CI getCollectionItem(Long collectionItemId, boolean addMetacounts){ 
		
		CI ci = getRepository().findById(collectionItemId).orElseThrow(MISSING_COLLECTION_ITEM_EXC_SUPPLIER);
		
//		auth.owned(ci).authorize();
		
		dataResolverManager.resolveContainedData(ci);
		if(addMetacounts) {
			resolveMetacounts(ci);
		}
		
		return ci;
	} 
	
	@Transactional
	public boolean removeItem(Long collectionItemId){ 
		
		CI ci = getRepository().findById(collectionItemId).orElseThrow(MISSING_COLLECTION_ITEM_EXC_SUPPLIER);
		
		auth.owned(ci).authorize(()->new DeletePermissionDeniedException("You are not allowed to remove this item."));
		
		getRepository().delete(ci);
		
		eventManager.register.removedCollectionItem(ci);	
		
		return true;
	} 
	
	@Override
	public CI getParentById(Long id, boolean persist, boolean fetchData) {
		CI ci = getRepository().findById(id).orElseThrow(MISSING_COLLECTION_ITEM_EXC_SUPPLIER);
		if(fetchData) {
			dataResolverManager.resolveContainedData(ci);
		}
		return ci;
	}
}
