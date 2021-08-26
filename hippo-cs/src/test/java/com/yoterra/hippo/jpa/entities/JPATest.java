//package com.yoterra.hippo.jpa.entities;
//
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import com.yoterra.hippo.jpa.data.collections.CollectionDeal;
//import com.yoterra.hippo.jpa.data.collections.CollectionItem;
//import com.yoterra.hippo.jpa.data.collections.CollectionProduct;
//import com.yoterra.hippo.jpa.data.data.Deal;
//import com.yoterra.hippo.jpa.data.data.Product;
//import com.yoterra.hippo.jpa.repositories.CollectionItemRepository;
//import com.yoterra.hippo.jpa.repositories.CollectionRepository;
//import com.yoterra.hippo.jpa.repositories.CommentCollectionRepository;
//import com.yoterra.hippo.jpa.repositories.FollowerUserRepository;
//import com.yoterra.hippo.jpa.repositories.UserRepository;
//
//@ExtendWith(SpringExtension.class)
//@DataJpaTest
//class JPATest {
//	
//	@Autowired
//	private UserRepository userRepository;
//	
//	@Autowired
//	private FollowerUserRepository followerUserRepository;
//	
//	@Autowired
//	private CollectionRepository collectionRepository;
//	
//	@Autowired
//	private CollectionItemRepository<?,?,CollectionItem<?>> collectionItemRepository;
//	
//	@Autowired
//	private CollectionItemRepository<String, Product, CollectionProduct> collectionProductRepository;
//	
//	@Autowired
//	private CollectionItemRepository<String, Deal, CollectionDeal> collectionDealRepository;
//	
////	@Autowired
////	private CommentCommentRepository commentCommentRepository;
//	
//	@Autowired
//	private CommentCollectionRepository commentCollectionRepository;
//	
//	@Test
//	void test() {
//		Assertions.assertEquals(0l,userRepository.count());
//		Assertions.assertEquals(0l,followerUserRepository.count());
//		Assertions.assertEquals(0l,collectionRepository.count());
//		Assertions.assertEquals(0l,collectionItemRepository.count());
//		Assertions.assertEquals(0l,collectionProductRepository.count());
//		Assertions.assertEquals(0l,collectionDealRepository.count());
////		Assertions.assertEquals(0l,commentCommentRepository.count());
//		Assertions.assertEquals(0l,commentCollectionRepository.count());
//	}
//}
