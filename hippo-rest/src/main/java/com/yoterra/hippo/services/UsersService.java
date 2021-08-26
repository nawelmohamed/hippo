package com.yoterra.hippo.services;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.function.Supplier;

import javax.persistence.EntityNotFoundException;

import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yoterra.hippo.jpa.entities.Metacounts;
import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.followers.FollowerUser;
import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.repositories.CollectionRepository;
import com.yoterra.hippo.jpa.repositories.CommentRepository;
import com.yoterra.hippo.jpa.repositories.FollowerRepository;
import com.yoterra.hippo.jpa.repositories.FollowerUserRepository;
import com.yoterra.hippo.jpa.repositories.LikeRepository;
import com.yoterra.hippo.jpa.repositories.UserRepository;
import com.yoterra.hippo.mob.model.UserCtx;
import com.yoterra.hippo.req.PageParams;
import com.yoterra.hippo.search.qbuilders.UserQueryBuilder;
import com.yoterra.hippo.search.requests.UserSearchRequest;
import com.yoterra.hippo.security.ActiveUser;
import com.yoterra.hippo.security.UserPrincipal;
import com.yoterra.hippo.services.auth.AuthorizationService;
import com.yoterra.hippo.services.dataresv.DataResolverManager;
import com.yoterra.utils.CollectionUtils;
import com.yoterra.utils.Opt;

@Service
public class UsersService implements UserDetailsService, IFollowerService<Long, User, FollowerUser>, IUserContextService<User, UserCtx> {

	private Supplier<EntityNotFoundException> MISSING_USER_EXC_SUPPLIER = 
			()->new EntityNotFoundException("The user account does not exist or it has been deleted or deactivated.");
		
			
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private FollowerRepository<?,?,Follower<?>> followerRepository;
	
	@Autowired
	private CommentRepository<?,?,Comment<?>> commentRepository;
	
	@Autowired
	private LikeRepository<?,?,Like<?>> likeRepository;

	@Autowired
	private FollowerUserRepository followerUserRepository;
	
	
	@Autowired
	private AuthorizationService auth;
	
	@Autowired
	private UserQueryBuilder userQueryBuilder;
	
	@Autowired
	private CollectionRepository collectionRepository;
	
	@Autowired
	private DataResolverManager dataResolverManager;
	
	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String emailOrUsername) {
		User user = userRepository.findByEmail(emailOrUsername);
		if (user == null) {
			user = userRepository.findByUsername(emailOrUsername);
			if(user == null) {
				throw new UsernameNotFoundException(emailOrUsername);
			}
		}
		return new UserPrincipal(user);
	}
	
	@Transactional(readOnly = true)
	public Page<User> searchUsers(UserSearchRequest req, boolean addMetacounts){
		Specification<User> spec = userQueryBuilder.build(req);
		Page<User> page = userRepository.findAll(spec, req.getPageable());
		
		if(addMetacounts) {
			resolveMetacounts(page.getContent());
		}
		
		return page;
	}
	
	@Transactional(readOnly = true)
	public List<Object[]> getStatuses(Collection<String> emails){
		emails = Opt.strm(emails).filter(EmailValidator.getInstance()::isValid).toList();
		if(CollectionUtils.isEmpty(emails)) 
			return Collections.emptyList();
		
		List<Object[]> statuses = userRepository.includeDeactivated_getStatusesByEmails(emails);
		return statuses;
	}
	
	@Transactional(readOnly = true)
	public User getUser(long id, boolean addCounts){
			
		User user = userRepository.findById(id).orElseThrow(MISSING_USER_EXC_SUPPLIER);
		
		if(addCounts) {
			resolveMetacounts(user);
		}
		
		return user;
	}
	
	@Transactional(readOnly = true)
	public Page<Like<?>> getAllLikes(Long id, PageParams pageParams) {
		Page<Like<?>> likes = likeRepository.findAllByAuthorId(id, pageParams.getPageable());
		dataResolverManager.resolveContainedData(likes);
		return likes;
	}

	@Transactional(readOnly = true)
	public Page<Comment<?>> getAllComments(Long id, PageParams pageParams) {
		Page<Comment<?>> comments = commentRepository.findAllByAuthorId(id, pageParams.getPageable());
		dataResolverManager.resolveContainedData(comments);
		return comments;
	}

	@Transactional(readOnly = true)
	public Page<Follower<?>> getAllFollowing(Long id, PageParams pageParams) {
		Page<Follower<?>> followers = followerRepository.findAllByFollowerId(id, pageParams.getPageable());
		dataResolverManager.resolveContainedData(followers);
		return followers;
	}
	
	@Override
	public void resolveMetacounts(Collection<User> users) {
		IFollowerService.super.resolveMetacounts(users);
		Metacounts.mergeMetacounts(users, collectionRepository::getPerOwnerCountsMap, User::getId, User.COLLECTIONS_METACOUNT);
		Metacounts.mergeMetacounts(users, followerRepository::getPerFollowerCountsMap, User::getId, User.FOLLOWING_METACOUNT);
		Metacounts.mergeMetacounts(users, commentRepository::getPerAuthorCountsMap, User::getId, User.COMMENTS_WRITEN_METACOUNT);
		Metacounts.mergeMetacounts(users, likeRepository::getPerAuthorCountsMap, User::getId, User.LIKES_MADE_METACOUNT);
	}
	
	@Override
	public void resolveMetacounts(User user) {
		IFollowerService.super.resolveMetacounts(user);
		user.setCollectionsMetacount((int)collectionRepository.countByOwner(user));
		user.setFollowingMetacount((int)followerRepository.countByFollower(user));
		user.setCommentsWrittenMetacount((int)commentRepository.countByAuthor(user));
		user.setLikesMadeMetacount((int)likeRepository.countByAuthor(user));
	}
	
	@Override
	public UserCtx getUserContext(User user) {
		boolean isFollowing = isFollowing(user);
		boolean owns = ActiveUser.is(user);
		return new UserCtx(null, isFollowing, null, owns);
	}
	
	@Override
	public AuthorizationService getAuth() {
		return auth;
	}

	@Override
	public FollowerRepository<Long, User, FollowerUser> getFollowerRepository() {
		return followerUserRepository;
	}

	@Override
	public FollowerUser newEmptyFollowerInstance() {
		return new FollowerUser();
	}

	@Override
	public FollowableType getFollowableType() {
		return FollowableType.USER;
	}

	@Override
	public User getFollowable(Long id) {
		return userRepository.findById(id).orElseThrow(MISSING_USER_EXC_SUPPLIER);
	}
}
