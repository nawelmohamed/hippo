package com.yoterra.hippo.mob.model;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import com.yoterra.hippo.jpa.entities.comments.Comment;
import com.yoterra.hippo.jpa.entities.comments.CommentBrand;
import com.yoterra.hippo.jpa.entities.comments.CommentCollection;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionDeal;
import com.yoterra.hippo.jpa.entities.comments.CommentCollectionProduct;
import com.yoterra.hippo.jpa.entities.comments.CommentDeal;
import com.yoterra.hippo.jpa.entities.comments.CommentProduct;
import com.yoterra.hippo.jpa.entities.comments.CommentStore;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.utils.Opt;

public class CommentMob {
	
	public static class BrandCommentMob extends CommentMob {
		private final BrandMob item;
		public BrandMob getItem() {
			return item;
		}
		public static BrandCommentMob of(CommentBrand l){ 
			return Opt.get(l, BrandCommentMob::new); 
		}
		private BrandCommentMob(CommentBrand l) { 
			super(l); 
			this.item = BrandMob.of(l.getParent());
		}
	}
	
	public static class StoreCommentMob extends CommentMob {
		private final StoreMob item;
		public StoreMob getItem() {
			return item;
		}
		public static StoreCommentMob of(CommentStore l){ 
			return Opt.get(l, StoreCommentMob::new); 
		}
		private StoreCommentMob(CommentStore l) { 
			super(l); 
			this.item = StoreMob.of(l.getParent());
		}
	}
	
	public static class ProductCommentMob extends CommentMob {
		private final ProductMob item;
		public ProductMob getItem() {
			return item;
		}
		public static ProductCommentMob of(CommentProduct l){ 
			return Opt.get(l, ProductCommentMob::new); 
		}
		private ProductCommentMob(CommentProduct l) { 
			super(l); 
			this.item = ProductMob.of(l.getParent());
		}
	}
	
	public static class DealCommentMob extends CommentMob {
		private final DealMob item;
		public DealMob getItem() {
			return item;
		}
		public static DealCommentMob of(CommentDeal l){ 
			return Opt.get(l, DealCommentMob::new); 
		}
		private DealCommentMob(CommentDeal l) { 
			super(l); 
			this.item = DealMob.of(l.getParent());
		}
	}
	
	public static class CollectionCommentMob extends CommentMob {
		private final CollectionMob item;
		public CollectionMob getItem() {
			return item;
		}
		public static CollectionCommentMob of(CommentCollection l){ 
			return Opt.get(l, CollectionCommentMob::new); 
		}
		private CollectionCommentMob(CommentCollection l) { 
			super(l); 
			this.item = CollectionMob.of(l.getParent());
		}
	}
	
	public static class CollectionProductCommentMob extends CommentMob {
		private final CollectionProductMob<ProductMob> item;
		public CollectionProductMob<ProductMob> getItem() {
			return item;
		}
		public static CollectionProductCommentMob of(CommentCollectionProduct l){ 
			return Opt.get(l, CollectionProductCommentMob::new); 
		}
		private CollectionProductCommentMob(CommentCollectionProduct l) { 
			super(l); 
			this.item = CollectionProductMob.of(l.getParent());
		}
	}
	
	public static class CollectionDealCommentMob extends CommentMob {
		private final CollectionDealMob<DealMob> item;
		public CollectionDealMob<DealMob> getItem() {
			return item;
		}
		public static CollectionDealCommentMob of(CommentCollectionDeal l){ 
			return Opt.get(l, CollectionDealCommentMob::new); 
		}
		private CollectionDealCommentMob(CommentCollectionDeal l) { 
			super(l); 
			this.item = CollectionDealMob.of(l.getParent());
		}
	}
	
	private static final Map<CommentableType, Function<Comment<?>, CommentMob>> CONV_MAP;
	static {
		Map<CommentableType, Function<Comment<?>, CommentMob>> m = new HashMap<>();
		m.put(CommentableType.BRAND, c -> BrandCommentMob.of((CommentBrand)c));
		m.put(CommentableType.STORE, c -> StoreCommentMob.of((CommentStore)c));
		m.put(CommentableType.COLLECTION, c -> CollectionCommentMob.of((CommentCollection)c));
		m.put(CommentableType.COLLECTION_DEAL, c -> CollectionDealCommentMob.of((CommentCollectionDeal)c));
		m.put(CommentableType.COLLECTION_PRODUCT, c -> CollectionProductCommentMob.of((CommentCollectionProduct)c));
		m.put(CommentableType.DEAL, c -> DealCommentMob.of((CommentDeal)c));
		m.put(CommentableType.PRODUCT, c -> ProductCommentMob.of((CommentProduct)c));
//		m.put(CommentableType.COMMENT, c -> CommentCommentMob.of((CommentComment)c));
		
		CONV_MAP = Collections.unmodifiableMap(m);
	}
	
	private final Long id;
	private final Long timestamp;
	private final UserMob from;
	private final String text;
	private final CommentableType type;
	
	@SuppressWarnings("unchecked")
	public static <M extends CommentMob> M resolve(Comment<?> c){ 
		if(c == null) return null;
		Function<Comment<?>, CommentMob> conv = CONV_MAP.getOrDefault(c.getType(), null);
		if(conv == null)
			throw new UnsupportedOperationException("Unsupported type: " + c.getType());
		return (M)conv.apply(c);
	}
	
	private CommentMob(Comment<?> comment){
		this.id = comment.getId();
		this.timestamp = comment.getCreated().getTimeInMillis();
		this.from = new UserMob(comment.getAuthor());
		this.text = comment.getContent();
		this.type = comment.getType();
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

	public String getText() {
		return text;
	}
	
	public CommentableType getType() {
		return type;
	}
}