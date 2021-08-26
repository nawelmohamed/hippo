package com.yoterra.hippo.mob.model;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import com.yoterra.hippo.jpa.entities.likes.Like;
import com.yoterra.hippo.jpa.entities.likes.LikeBrand;
import com.yoterra.hippo.jpa.entities.likes.LikeCollection;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionDeal;
import com.yoterra.hippo.jpa.entities.likes.LikeCollectionProduct;
import com.yoterra.hippo.jpa.entities.likes.LikeDeal;
import com.yoterra.hippo.jpa.entities.likes.LikeProduct;
import com.yoterra.hippo.jpa.entities.likes.LikeStore;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.utils.Opt;

public abstract class LikeMob {
	
	public static class BrandLikeMob extends LikeMob {
		private final BrandMob item;
		public BrandMob getItem() {
			return item;
		}
		public static BrandLikeMob of(LikeBrand l){ 
			return Opt.get(l, BrandLikeMob::new); 
		}
		private BrandLikeMob(LikeBrand l) { 
			super(l); 
			this.item = BrandMob.of(l.getParent());
		}
	}
	
	public static class StoreLikeMob extends LikeMob {
		private final StoreMob item;
		public StoreMob getItem() {
			return item;
		}
		public static StoreLikeMob of(LikeStore l){ 
			return Opt.get(l, StoreLikeMob::new); 
		}
		private StoreLikeMob(LikeStore l) { 
			super(l); 
			this.item = StoreMob.of(l.getParent());
		}
	}
	
	public static class ProductLikeMob extends LikeMob {
		private final ProductMob item;
		public ProductMob getItem() {
			return item;
		}
		public static ProductLikeMob of(LikeProduct l){ 
			return Opt.get(l, ProductLikeMob::new); 
		}
		private ProductLikeMob(LikeProduct l) { 
			super(l); 
			this.item = ProductMob.of(l.getParent());
		}
	}
	
	public static class DealLikeMob extends LikeMob {
		private final DealMob item;
		public DealMob getItem() {
			return item;
		}
		public static DealLikeMob of(LikeDeal l){ 
			return Opt.get(l, DealLikeMob::new); 
		}
		private DealLikeMob(LikeDeal l) { 
			super(l); 
			this.item = DealMob.of(l.getParent());
		}
	}
	
	public static class CollectionLikeMob extends LikeMob {
		private final CollectionMob item;
		public CollectionMob getItem() {
			return item;
		}
		public static CollectionLikeMob of(LikeCollection l){ 
			return Opt.get(l, CollectionLikeMob::new); 
		}
		private CollectionLikeMob(LikeCollection l) { 
			super(l); 
			this.item = CollectionMob.of(l.getParent());
		}
	}
	
	public static class CollectionProductLikeMob extends LikeMob {
		private final CollectionProductMob<ProductMob> item;
		public CollectionProductMob<ProductMob> getItem() {
			return item;
		}
		public static CollectionProductLikeMob of(LikeCollectionProduct l){ 
			return Opt.get(l, CollectionProductLikeMob::new); 
		}
		private CollectionProductLikeMob(LikeCollectionProduct l) { 
			super(l); 
			this.item = CollectionProductMob.of(l.getParent());
		}
	}
	
	public static class CollectionDealLikeMob extends LikeMob {
		private final CollectionDealMob<DealMob> item;
		public CollectionDealMob<DealMob> getItem() {
			return item;
		}
		public static CollectionDealLikeMob of(LikeCollectionDeal l){ 
			return Opt.get(l, CollectionDealLikeMob::new); 
		}
		private CollectionDealLikeMob(LikeCollectionDeal l) { 
			super(l); 
			this.item = CollectionDealMob.of(l.getParent());
		}
	}
	
	private static final Map<LikeableType, Function<Like<?>, LikeMob>> CONV_MAP;
	static {
		Map<LikeableType, Function<Like<?>, LikeMob>> m = new HashMap<>();
		m.put(LikeableType.BRAND, l -> BrandLikeMob.of((LikeBrand)l));
		m.put(LikeableType.STORE, l -> StoreLikeMob.of((LikeStore)l));
		m.put(LikeableType.COLLECTION, l -> CollectionLikeMob.of((LikeCollection)l));
		m.put(LikeableType.COLLECTION_DEAL, l -> CollectionDealLikeMob.of((LikeCollectionDeal)l));
		m.put(LikeableType.COLLECTION_PRODUCT, l -> CollectionProductLikeMob.of((LikeCollectionProduct)l));
		m.put(LikeableType.DEAL, l -> DealLikeMob.of((LikeDeal)l));
		m.put(LikeableType.PRODUCT, l -> ProductLikeMob.of((LikeProduct)l));
//		m.put(LikeableType.COMMENT, l -> CommentLikeMob.of((LikeComment)l));
		
		CONV_MAP = Collections.unmodifiableMap(m);
	}
	
	
	private final Long id;
	private final Long timestamp;
	private final UserMob from;
	private final LikeableType type;
	
	
	@SuppressWarnings("unchecked")
	public static <M extends LikeMob> M resolve(Like<?> l){ 
		if(l == null) return null;
		Function<Like<?>, LikeMob> conv = CONV_MAP.getOrDefault(l.getType(), null);
		if(conv == null)
			throw new UnsupportedOperationException("Unsupported type: " + l.getType());
		return (M) conv.apply(l);
	}
	
	protected LikeMob(Like<?> like){
		this.id = like.getId();
		this.timestamp = like.getCreated().getTimeInMillis();
		this.type = like.getType();
		this.from = new UserMob(like.getAuthor());
	}

	public Long getId() {
		return id;
	}

	public Long getTimestamp() {
		return timestamp;
	}

	public UserMob getFrom() {
		return from;
	}

	public LikeableType getType() {
		return type;
	}
}