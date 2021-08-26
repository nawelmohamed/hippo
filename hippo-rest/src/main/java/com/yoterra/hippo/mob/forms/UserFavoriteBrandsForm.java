package com.yoterra.hippo.mob.forms;

import java.util.Set;

import javax.validation.constraints.Size;

import org.springdoc.api.annotations.ParameterObject;

import com.datastax.oss.driver.shaded.guava.common.collect.Sets;
import com.yoterra.hippo.jpa.entities.favorites.UserFavoriteType;

import io.swagger.v3.oas.annotations.Parameter;

@ParameterObject
public class UserFavoriteBrandsForm implements IUserFavoriteForm<Long> {
	
	@Parameter(description = "Brand IDs. Max number of unique items: " + UserFavoriteType.Limits.BRAND)
	@Size(max = UserFavoriteType.Limits.BRAND, message = "Maximum number of favorite brands is " + UserFavoriteType.Limits.BRAND)
	private Set<Long> brands = Sets.newLinkedHashSet();
	
	public Set<Long> getBrands() {
		return brands;
	}
	public void setBrands(Set<Long> brands) {
		this.brands = brands;
	}
	@Override
	public Set<Long> getItemIds() {
		return getBrands();
	}
}
