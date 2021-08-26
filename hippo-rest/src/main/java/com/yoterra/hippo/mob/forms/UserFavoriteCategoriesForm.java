package com.yoterra.hippo.mob.forms;

import java.util.Set;

import javax.validation.constraints.Size;

import org.springdoc.api.annotations.ParameterObject;

import com.datastax.oss.driver.shaded.guava.common.collect.Sets;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteType;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class UserFavoriteCategoriesForm implements IUserFavoriteForm<Long> {
	
	@Parameter(description = "Category (taxonomy) IDs. Max number of unique items: " + UserFavoriteType.Limits.CATEGORY)
	@Size(max = UserFavoriteType.Limits.CATEGORY, message = "Maximum number of favorite categories is " + UserFavoriteType.Limits.CATEGORY)
	private Set<Long> categories = Sets.newLinkedHashSet();
	
	public Set<Long> getCategories() {
		return categories;
	}
	public void setCategories(Set<Long> categories) {
		this.categories = categories;
	}
	
	@Override
	public Set<Long> getItemIds() {
		return getCategories();
	}
}
