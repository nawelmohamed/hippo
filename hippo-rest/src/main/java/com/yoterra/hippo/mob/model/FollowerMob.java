package com.yoterra.hippo.mob.model;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import com.yoterra.hippo.jpa.entities.followers.FollowableType;
import com.yoterra.hippo.jpa.entities.followers.Follower;
import com.yoterra.hippo.jpa.entities.followers.FollowerBrand;
import com.yoterra.hippo.jpa.entities.followers.FollowerCollection;
import com.yoterra.hippo.jpa.entities.followers.FollowerStore;
import com.yoterra.hippo.jpa.entities.followers.FollowerUser;
import com.yoterra.utils.Opt;

public abstract class FollowerMob {
	
	public static class FollowerBrandMob extends FollowerMob {

		private final BrandMob brand;
		
		public static FollowerBrandMob of (FollowerBrand follower) {
			return Opt.get(follower, FollowerBrandMob::new);
		}
		
		private FollowerBrandMob(FollowerBrand follower) {
			super(follower);
			this.brand = BrandMob.of(follower.getBrand());
		}

		public BrandMob getBrand() {
			return brand;
		}
	}
	
	public static class FollowerCollectionMob extends FollowerMob {

		private final CollectionMob collection;
		
		public static FollowerCollectionMob of (FollowerCollection follower) {
			return Opt.get(follower, FollowerCollectionMob::new);
		}
		
		private FollowerCollectionMob(FollowerCollection follower) {
			super(follower);
			this.collection = CollectionMob.of(follower.getCollection());
		}

		public CollectionMob getCollection() {
			return collection;
		}
	}
	
	public static class FollowerUserMob extends FollowerMob {

		private final UserMob user;
		
		public static FollowerUserMob of (FollowerUser follower) {
			return Opt.get(follower, FollowerUserMob::new);
		}
		
		private FollowerUserMob(FollowerUser follower) {
			super(follower);
			this.user = UserMob.of(follower.getUser());
		}

		public UserMob getUser() {
			return user;
		}

	}

	public static class FollowerStoreMob extends FollowerMob {
	
		private final StoreMob store;
		
		public static FollowerStoreMob of (FollowerStore follower) {
			return Opt.get(follower, FollowerStoreMob::new);
		}
		
		private FollowerStoreMob(FollowerStore follower) {
			super(follower);
			this.store = StoreMob.of(follower.getStore());
		}
	
		public StoreMob getStore() {
			return store;
		}
	}
	
	private static final Map<FollowableType, Function<Follower<?>, FollowerMob>> CONV_MAP;
	static {
		Map<FollowableType, Function<Follower<?>, FollowerMob>> m = new HashMap<>();
		m.put(FollowableType.BRAND, f -> FollowerBrandMob.of((FollowerBrand)f));
		m.put(FollowableType.STORE, f -> FollowerStoreMob.of((FollowerStore)f));
		m.put(FollowableType.COLLECTION, f -> FollowerCollectionMob.of((FollowerCollection)f));
		m.put(FollowableType.USER, f -> FollowerUserMob.of((FollowerUser)f));
		
		CONV_MAP = Collections.unmodifiableMap(m);
	}

	private final Long id;
	private final FollowableType type;
	private final UserMob follower;
	
	@SuppressWarnings("unchecked")
	public static <M extends FollowerMob> M resolve(Follower<?> f){ 
		if(f == null) return null;
		Function<Follower<?>, FollowerMob> conv = CONV_MAP.getOrDefault(f.getType(), null);
		if(conv == null)
			throw new UnsupportedOperationException("Unsupported type: " + f.getType());
		return (M) conv.apply(f);
	}
	
	protected FollowerMob(Follower<?> follower) {
		this.id = follower.getId();
		this.type = follower.getType();
		this.follower = new UserMob(follower.getFollower());
	}

	public Long getId() {
		return id;
	}

	public UserMob getFollower() {
		return follower;
	}
	
	public FollowableType getType() {
		return type;
	}
}
