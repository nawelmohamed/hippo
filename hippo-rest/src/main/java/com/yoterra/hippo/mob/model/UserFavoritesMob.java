package com.yoterra.hippo.mob.model;

import java.util.List;

import org.apache.commons.lang3.Validate;

import com.google.common.collect.Lists;
import com.yoterra.hippo.jpa.entities.Favoritable;
import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;
import com.yoterra.hippo.jpa.entities.data.companies.Store;
import com.yoterra.hippo.jpa.entities.favorites.UserFavorite;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteType;

public class UserFavoritesMob {
	
	static {
		Validate.isTrue(UserFavoriteType.values().length == 3, "There are changes in UserFavoriteType.");			
	}
	
	private final List<CategoryMob> categories;
	private final List<BrandMob> brands;
	private final List<StoreMob> stores;
	
	public UserFavoritesMob(List<UserFavorite<?, ?>> userFavorites) {
		this.categories = Lists.newArrayList();
		this.brands = Lists.newArrayList();
		this.stores = Lists.newArrayList();
		
		for (UserFavorite<?, ?> uf : userFavorites) {
			Favoritable<?> f = uf.getFavorite();
			switch (uf.getType()) {
			case BRAND:
				brands.add(BrandMob.of((Brand)f));
				break;
			case STORE:
				stores.add(StoreMob.of((Store)f));
				break;
			case CATEGORY:
				categories.add(CategoryMob.of((TaxonomyElement)f));
				break;
			default:
				throw new IllegalStateException("Unsupported type: " + uf.getType());
			}
		}
	}
	
	public List<CategoryMob> getCategories() {
		return categories;
	}
	public List<BrandMob> getBrands() {
		return brands;
	}
	public List<StoreMob> getStores() {
		return stores;
	}
}
