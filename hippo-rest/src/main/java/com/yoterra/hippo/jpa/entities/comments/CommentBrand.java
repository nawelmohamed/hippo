package com.yoterra.hippo.jpa.entities.comments;

import java.util.Arrays;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.data.companies.Brand;

@Entity
@DiscriminatorValue(value=CommentableType.Values.BRAND)
public class CommentBrand extends Comment<Brand> {

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
	public CommentableType getType() {
		return CommentableType.BRAND;
	}

	@Override
	public Iterable<DataResolvable<?>> getDataResolvables() {
		return Arrays.asList(brand);
	}
}