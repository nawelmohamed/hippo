package com.yoterra.hippo.jpa.entities.likes;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;

@Entity
@DiscriminatorValue(value=LikeableType.Values.BRAND)
public class LikeBrand extends Like<Brand> {

	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name="BRAND_ID")
	private Brand brand;

	@Override
	public Brand getParent() {
		return brand;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	@Override
	public void setParent(Brand parent) {
		setBrand(parent);
	}

	@Override
	public LikeableType getType() {
		return LikeableType.BRAND;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(brand);
	}
}