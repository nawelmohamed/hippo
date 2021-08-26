package com.yoterra.hippo.services;

import java.io.IOException;
import java.util.Calendar;
import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.yoterra.hippo.exceptions.DeletePermissionDeniedException;
import com.yoterra.hippo.exceptions.UpdatePermissionDeniedException;
import com.yoterra.hippo.jpa.entities.Metacounts;
import com.yoterra.hippo.jpa.entities.collections.Collection;
import com.yoterra.hippo.jpa.entities.collections.CollectionItem;
import com.yoterra.hippo.jpa.entities.comments.CommentCollection;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.followers.FollowerCollection;
import com.yoterra.hippo.jpa.entities.likes.LikeCollection;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.hippo.jpa.repositories.CollectionItemRepository;
import com.yoterra.hippo.jpa.repositories.CollectionRepository;
import com.yoterra.hippo.jpa.repositories.CommentCollectionRepository;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.jpa.repositories.FollowerCollectionRepository;
import com.yoterra.hippo.jpa.repositories.FollowerRepository;
import com.yoterra.hippo.jpa.repositories.LikeCollectionRepository;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.mob.forms.CollectionCreateForm;
import com.yoterra.hippo.mob.forms.CollectionEditForm;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.notifications.EventManager;
import com.yoterra.hippo.search.qbuilders.CollectionQueryBuilder;
import com.yoterra.hippo.search.requests.CollectionSearchRequest;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.services.auth.AuthorizationService;
import com.yoterra.hippo.services.images.ImageUpload;
import com.yoterra.hippo.services.images.ImageUploadService;
import com.yoterra.hippo.services.images.UploadImageHelper;

@Service
public class CollectionService implements ICommentService<Long, Collection, CommentCollection>, 
											ILikeService<Long, Collection, LikeCollection>,
											IFollowerService<Long, Collection, FollowerCollection>,
											IUserContextService<Collection, UserCtx>{
	
	private Supplier<EntityNotFoundException> MISSING_COLLECTION_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The collection does not exist or it has been deleted.");
			
	@Autowired
	private CollectionRepository collectionRepository;

	@Autowired
	private CollectionQueryBuilder collectionQueryBuilder;
	
	@Autowired
	private LikeCollectionRepository likeCollectionRepository;
	
	@Autowired
	private CommentCollectionRepository commentCollectionRepository;
	
	@Autowired
	private CollectionItemRepository<?,?,CollectionItem<?>> collectionItemRepository;
	
	@Autowired
	private FollowerCollectionRepository followerCollectionRepository;
	
	@Autowired
	private EventManager eventManager;
	
	@Autowired
	private ImageUploadService imageUploadService;
	
	@Autowired
	private AuthorizationService auth;
	
	@Transactional(readOnly = true)
	public Page<Collection> searchCollection(CollectionSearchRequest req, boolean addMetacounts){
		Specification<Collection> spec = collectionQueryBuilder.build(req);
		Page<Collection> page = collectionRepository.findAll(spec, req.getPageable());
		
		if(addMetacounts) {
			resolveMetacounts(page.getContent());
		}
		
		return page;
	}
	
	@Transactional(readOnly = true)
	public Collection getCollection(long id, boolean addCounts){
			
		Collection collection = collectionRepository.findById(id).orElseThrow(MISSING_COLLECTION_EXC_SUPPLIER);
		
		if(addCounts) {
			resolveMetacounts(collection);
		}
		
		return collection;
	}
	
	@Transactional(readOnly = true)
	@Override
	public void resolveMetacounts(Collection collection) {
		ILikeService.super.resolveMetacounts(collection);
		ICommentService.super.resolveMetacounts(collection);
		IFollowerService.super.resolveMetacounts(collection);
		collection.setCollectionItemMetacount((int)collectionItemRepository.countByCollection(collection));
	}
	
	@Transactional(readOnly = true)
	@Override
	public void resolveMetacounts(java.util.Collection<Collection> collections) {
		ILikeService.super.resolveMetacounts(collections);
		ICommentService.super.resolveMetacounts(collections);
		IFollowerService.super.resolveMetacounts(collections);
		Metacounts.mergeMetacounts(collections, collectionItemRepository::getPerCollectionCountsMap, Collection::getId, Collection.COLLECTION_ITEM_METACOUNT);
	}
	
	@Transactional
	public Collection createCollection(CollectionCreateForm form){
		
		Collection collection = new Collection();
		collection.setType(form.getType());
		collection.setName(form.getName());
		collection.setDescription(form.getDescription());
		collection.setCreated(Calendar.getInstance());
		collection.setOwner(ActiveUser.get());
		
		collectionRepository.save(collection);
		
		eventManager.register.collectionCreated(collection);
		
		return collection;
	}

	@Transactional
	public Collection editCollection(CollectionEditForm form) throws EntityNotFoundException{
		
		Collection collection = collectionRepository.findById(form.getId()).orElseThrow(MISSING_COLLECTION_EXC_SUPPLIER);

		auth.owned(collection)
			.authorize(() -> new UpdatePermissionDeniedException("You are not authorized to update this collection's information."));
		
//		collection.setType(form.getType());		// type can not be changed
		collection.setName(form.getName());
		collection.setDescription(form.getDescription());
		collection.setModified(Calendar.getInstance());
		
		collectionRepository.save(collection);
		
		eventManager.register.collectionModified(collection);
		
		return collection;
	}
	
	@Transactional
	public String setImage(Long collectionId, MultipartFile file) throws EntityNotFoundException, IOException{
		
		byte[] bytes = file.getBytes();
		UploadImageHelper.checkImageFile(bytes, file.getOriginalFilename());
		
		Collection collection = collectionRepository.findById(collectionId).orElseThrow(MISSING_COLLECTION_EXC_SUPPLIER);

		auth.ownedOrSuperuser(collection)
			.authorize(() -> new UpdatePermissionDeniedException("You are not authorized to update this collection's image."));
		
		ImageUpload upload = imageUploadService.upload(bytes, collection);
		
		collection.setImageUrl(upload.getURL());
		
		collectionRepository.save(collection);
		
		eventManager.register.collectionImageChanged(collection);
		
		return upload.getURL();
	}
	
	@Transactional
	public Collection deleteCollection(Long id) throws EntityNotFoundException{
		
		Collection collection = collectionRepository.findById(id).orElseThrow(MISSING_COLLECTION_EXC_SUPPLIER);// should we throw an exception ???

		auth.ownedOrSuperuser(collection)
			.authorize(()->new DeletePermissionDeniedException("You are not authorized to delete this collection."));
		
		collectionRepository.delete(collection);
		
		eventManager.register.collectionDeleted(collection);
		
		return collection;
	}
	
	@Transactional
	public Collection deleteImage(Long collectionId) throws EntityNotFoundException{
		
		Collection collection = collectionRepository.findById(collectionId).orElseThrow(MISSING_COLLECTION_EXC_SUPPLIER);

		auth.ownedOrSuperuser(collection)
			.authorize(()->new DeletePermissionDeniedException("You are not authorized to delete this collection's image."));
		
//		ImageUpload upload = imageUploadService.upload(file.getBytes(), collection);		---- no deleting from the image server
		
		collection.setImageUrl(null);
		collectionRepository.save(collection);
		
		eventManager.register.collectionImageDeleted(collection);
		
		return collection;
	}
	
	@Override
	public Collection getParentById(Long id, boolean persist, boolean fetchData) {
		return collectionRepository.findById(id).orElseThrow(MISSING_COLLECTION_EXC_SUPPLIER);
	}

	@Override
	public LikeRepository<Long, Collection, LikeCollection> getLikeRepository() {
		return likeCollectionRepository;
	}

	@Override
	public LikeCollection newEmptyLikeInstance() {
		return new LikeCollection();
	}

	@Override
	public CommentRepository<Long, Collection, CommentCollection> getCommentsRepository() {
		return commentCollectionRepository;
	}

	@Override
	public CommentCollection newEmptyCommentInstance() {
		return new CommentCollection();
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.COLLECTION;
	} 
	
	@Override
	public CommentableType getCommentableType() {
		return CommentableType.COLLECTION;
	}
	
	@Override
	public FollowerRepository<Long, Collection, FollowerCollection> getFollowerRepository() {
		return followerCollectionRepository;
	}

	@Override
	public FollowerCollection newEmptyFollowerInstance() {
		return new FollowerCollection();
	}

	@Override
	public FollowableType getFollowableType() {
		return FollowableType.COLLECTION;
	}

	@Override
	public Collection getFollowable(Long id) {
		return collectionRepository.findById(id).orElseThrow(MISSING_COLLECTION_EXC_SUPPLIER);
	}

	@Override
	public UserCtx getUserContext(Collection coll) {
		boolean hasLiked = hasLiked(coll.getId());
		boolean isFollowing = isFollowing(coll.getId());
		boolean owns = ActiveUser.is(coll.getOwner());
		return new UserCtx(hasLiked, isFollowing, null, owns);
	}
}
