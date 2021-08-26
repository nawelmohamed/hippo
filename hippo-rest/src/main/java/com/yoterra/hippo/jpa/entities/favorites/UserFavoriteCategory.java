package com.yoterra.hippo.jpa.entities.favorites;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.utils.Opt;


@Entity
@DiscriminatorValue(UserFavoriteType.Aliases.CATEGORY)
public class UserFavoriteCategory extends UserFavorite<Long, TaxonomyElement>{

	public static final int MAX_PER_USER = 10;
	
	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name = "taxonomy_element_id")
	private TaxonomyElement taxonomyElement;
	
	@Override
	public UserFavoriteType getType() {
		return UserFavoriteType.CATEGORY;
	}

	public TaxonomyElement getTaxonomyElement() {
		return taxonomyElement;
	}

	public void setTaxonomyElement(TaxonomyElement taxonomyElement) {
		this.taxonomyElement = taxonomyElement;
	}
	
	public List<TaxonomyElement> getTaxonomy(){
		return Opt.get(taxonomyElement, TaxonomyElement::getTaxonomy);
	}

	@Override
	public TaxonomyElement getFavorite() {
		return getTaxonomyElement();
	}

	@Override
	public void setFavorite(TaxonomyElement favoritable) {
		setTaxonomyElement(favoritable);
	}
}
