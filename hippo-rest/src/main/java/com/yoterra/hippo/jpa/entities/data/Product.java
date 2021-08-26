package com.yoterra.hippo.jpa.entities.data;

import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.apache.commons.lang.Validate;
import org.apache.commons.lang3.StringUtils;

import com.yoterra.commons.ProductImageWebUtils;
import com.yoterra.data.records.Company;
import com.yoterra.data.records.DataLocalityUtils;
import com.yoterra.data.records.GroupProduct;
import com.yoterra.data.records.Image;
import com.yoterra.data.records.Price;
import com.yoterra.data.records.ProductOffer;
import com.yoterra.hippo.jpa.entities.Autocompletable;
import com.yoterra.hippo.jpa.entities.DataResolvable;
import com.yoterra.hippo.jpa.entities.MetacountsMapImpl;
import com.yoterra.hippo.jpa.entities.collections.Collectable;
import com.yoterra.hippo.jpa.entities.collections.CollectionItemType;
import com.yoterra.hippo.jpa.entities.comments.Commentable;
import com.yoterra.hippo.jpa.entities.comments.CommentableType;
import com.yoterra.hippo.jpa.entities.likes.Likeable;
import com.yoterra.hippo.jpa.entities.likes.LikeableType;
import com.yoterra.utils.CollectionUtils;
import com.yoterra.utils.Opt;


@Entity
@Table(schema = "HIPPO", name = "PRODUCT")
public class Product extends MetacountsMapImpl implements Collectable<String>, Commentable<String>, Likeable<String>, 
															Autocompletable<String>, DataResolvable<String> {
	
	public static Product init(GroupProduct groupProduct) {
		Product product = new Product();
		product.setId(groupProduct.getStringId());
		product.setStatus(ItemStatus.AVAILABLE);						
		product.setData(groupProduct);
		return product;
	}

	@Id
	@Column(nullable = false, columnDefinition="VARCHAR(32)")
	private String id;
	
	@Column(nullable = false)
	@Enumerated
	private ItemStatus status;
	
	@Transient
	private GroupProduct data;
	
	@Transient
	private String locality;
	
	public Product() {
		this.locality = DataLocalityUtils.DEFAULT_LOCALITY;		// set the default - it should never be null 
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public ItemStatus getStatus() {
		return status;
	}
	
	public void setStatus(ItemStatus status) {
		this.status = status;
	}
	
	private GroupProduct getData() {	// it should not be accessible from outside, 
										// all the required method should be delegated and localization logic should be applied 
		
		Validate.notNull(data, "No product data");
		return data;
	}
	
	public void setData(GroupProduct data) {
		this.data = data;
	}
	
	public String getLocality() {
		return locality;
	}
	
	public void setLocality(String locality) {
		this.locality = locality;
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.PRODUCT;
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.PRODUCT;
	}

	@Override
	public CollectionItemType getCollectableType() {
		return CollectionItemType.PRODUCT;
	}	
	
	// **********************************************************************************
	// Group product delegate methods that encapsulate business logic for localization
	// **********************************************************************************
	
	public String getProductName() {
		return getData().getProductName();
	}

	public String getBrandName() {
		return getData().getBrandName();
	}
	
	public List<ProductOffer> getProductOffers() {
		return getData().getOffers(this::isExpectedLocality);
	}
	
	public List<ProductOffer> getProductOffers(Comparator<ProductOffer> sortComparator) {
		return getData().getOffers(this::isExpectedLocality, sortComparator);
	}
	
	public Price getLowestPrice() {
		return getPriceOfFirstOffer(ProductOffer.Comparators.BY_LOWER_PRICE_ASC);
	}

	public Price getHighestPrice() {
		Price lp = getLowestPrice();
		Price hp = getPriceOfFirstOffer(ProductOffer.Comparators.BY_LOWER_PRICE_DESC);
		return Objects.equals(lp, hp) ? null : hp;
	}

	private Price getPriceOfFirstOffer(Comparator<ProductOffer> sortComparator) {
		List<ProductOffer> productOffers = getProductOffers(sortComparator);
		Price lp = Opt.get(productOffers, CollectionUtils::first, ProductOffer::getLowerPrice);
		return lp;
	}
	
	public Company getIndexBrand(){
		return getData().getBrand();
	}
	
	public int getOfferCount() {
		return CollectionUtils.size(getProductOffers());
	}
	
	public String getDescription(){
		return getData().getDescription();			// not localized
	}
	
	public String getBestImageUrl(){									// image are not localized
		Collection<Image> allImages = getData().getAllImages();
		return ProductImageWebUtils.getBestImage(allImages);
	}
	
	public List<String> getClusteredImages(){									// image are not localized
		List<String> bpcImgs = Opt.strm(getData(), GroupProduct::getAllClusteredImages, Map::values)
			.map(ProductImageWebUtils::getBestImage)
			.filter(StringUtils::isNotBlank)
			.distinct()
			.toList();
		return bpcImgs;
	}
	
	private boolean isExpectedLocality(ProductOffer po) {
		Set<String> localities = po.getLocalities();
		return localities != null && localities.contains(locality);
	}
	
	@Override
	public String getDisplayName() {
		return getProductName();
	}
	
	@Override
	public boolean isDataResolved() {
		return data != null;
	}
}
