package com.yoterra.hippo.jpa.entities.favorites;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;


@Entity
@DiscriminatorValue(UserFavoriteType.Aliases.BRAND)
public class UserFavoriteBrand extends UserFavorite<Long, Brand>{

	public static final int MAX_PER_USER = 10;
	
	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "brand_id")
	private Brand brand;
	
	@Override
	public UserFavoriteType getType() {
		return UserFavoriteType.BRAND;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	@Override
	public Brand getFavorite() {
		return getBrand();
	}

	@Override
	public void setFavorite(Brand favoritable) {
		setBrand(favoritable);
	}
	
	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(brand);
	}
}
