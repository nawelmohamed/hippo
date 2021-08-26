package com.yoterra.hippo.jpa.entities.data;

import java.util.List;
import java.util.Objects;
import java.util.function.Predicate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.apache.commons.lang.Validate;
import org.apache.commons.lang3.StringUtils;

import com.yoterra.commons.ProductImageWebUtils;
import com.yoterra.data.dealservice.DealCategory;
import com.yoterra.data.dealservice.DealLookupMeta;
import com.yoterra.data.dealservice.DealLookupMetaFlag;
import com.yoterra.data.dealservice.DealRecordRaw;
import com.yoterra.data.dealservice.DealType;
import com.yoterra.data.dealservice.DealTypeInfo;
import com.yoterra.data.dealservice.DealUtils;
import com.yoterra.data.records.DataLocalityUtils;
import com.yoterra.data.records.DealRecordUtils;
import com.yoterra.data.records.GroupProduct;
import com.yoterra.data.records.Price;
import com.yoterra.data.records.ProductOffer;
import com.yoterra.data.records.RecordId;
import com.yoterra.data.records.RecordUtils;
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
@Table(schema = "HIPPO", name = "DEAL")
public class Deal extends MetacountsMapImpl implements Collectable<String>, Commentable<String>, Likeable<String>, 
														Autocompletable<String>, DataResolvable<String> {
	
	public static Deal init(DealRecordRaw rawDeal) {
		Deal deal = new Deal();
		deal.setId(RecordUtils.toBase64UrlSafeString(rawDeal.getId()));
		deal.setStatus(ItemStatus.AVAILABLE);
		deal.setData(rawDeal);
		deal.resolveMatchedProductInfo();
		return deal;
	}

	@Id
	@Column(nullable = false, columnDefinition="VARCHAR(32)")
	private String id;
	
	@Column(nullable = false)
	@Enumerated
	private ItemStatus status;
	
	@Transient
	private transient DealRecordRaw data;
	
	@Transient
	private transient ProductOffer matchedOffer;
	
	@Transient
	private transient GroupProduct matchedGroup;
	
	@Transient
	private transient String imageUrl;
	
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
	
	public void setData(DealRecordRaw data) {
		this.data = data;
		this.resolveMatchedProductInfo();
	}
	
	private DealRecordRaw getData() {		// 'data' should not be publicly accessible 
		Validate.notNull(data, "No deal data");
		return data;
	}

	@Override
	public CommentableType getCommentableType() {
		return CommentableType.DEAL;
	}

	@Override
	public LikeableType getLikeableType() {
		return LikeableType.DEAL;
	}

	@Override
	public CollectionItemType getCollectableType() {
		return CollectionItemType.DEAL;
	}

	//*******************************************************
	// Delegate data methods. Encapsulate localization rules
	//*******************************************************
	public String getTitle() {
		return DealRecordUtils.dealStringTextFix(getData().getTitle());
	}
	
	public String getDescription() {
		return getData().getDescription();
	}
	
	public String getTrackingUrl() {
		return getData().getTrackingUrl();
	}
	
	public String getProviderSite() {
		return getData().getProviderSite();
	}
	
	public String getProviderName() {
		return getData().getProvider();
	}
	
	public Long getEndDate() {
		return getData().getEndDate();
	}
	
	public Long getStartDate() {
		return getData().getStartDate();
	}
	
	public List<String> getTaxonomy() { 
		return getData().getTaxonomy();
	}
	
//	public String getTopDomain(){
//		return UrlUtils.extractTopPrivateDomainQuietly(_source.getProviderSite());
//	}
//	
//	public String getSiteDomain(){
//		return UrlUtils.extractRootUrlNoWWWnQuietly(_source.getProviderSite());
//	}
	
	public boolean isShippingType() {
		return isType(DealType.SHIPPING);
	}
	
	public boolean isDiscountType() {
		return isType(DealType.DISCOUNT);
	}
	
	public boolean isGiftCardType() {
		return isType(DealType.GIFTCARD);
	}
	
	public boolean isSiteWide() {
		return Objects.equals(getCategory(), DealCategory.SITE);
	}

	public boolean isType(DealType type) {
		return Opt.getOrDef(getData(), false, 
				DealRecordRaw::getDealTypeInfo, 
				DealTypeInfo::getDealTypes, 
				types -> types.contains(type));
	}
	
	public DealCategory getCategory() {
		return getData().getCategory();
	}
	
//	public Discount getDiscount() {
//		return !isDiscountType() ? null : Opt.get(getData(), DealRecordRaw::getDealTypeInfo, DealTypeInfo::getDiscount);
//	}
	
	@SuppressWarnings("deprecation")
	public String getDiscountDescription() {
		return !isDiscountType() ? null : 
			Opt.get(getData(), DealRecordRaw::getDealTypeInfo, DealTypeInfo::getDiscount, DealRecordUtils::discountStringRepresentation);
	}
	
	public String getShippingDescription() {
		return !isShippingType() ? null : 
			Opt.get(getData(), DealRecordRaw::getDealTypeInfo, DealTypeInfo::getShipping, DealRecordUtils::getShippingStringRepresentation);
	}
	
	public String getGiftCardDescription() {
		return !isGiftCardType() ? null : 
			Opt.get(getData(), DealRecordRaw::getDealTypeInfo, DealTypeInfo::getGiftCard, DealRecordUtils::giftCardStringRepresentation);
	}
	
	public String getCoupon(){
		return getData().getCouponValue();
	}
	
	public Price getSalePrice() {
		return Opt.get(getData(), DealUtils::getSalePrice);
	}
	
	public ProductOffer getMatchedOffer() {
		return matchedOffer;
	}
	
	public GroupProduct getMatchedGroup() {
		return matchedGroup;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
	
	@Override
	public String getDisplayName() {
		return getTitle();
	}
	
	@Override
	public boolean isDataResolved() {
		return data != null;
	}
	
	//*********************************************************************************************
	
	// TODO review this method, copied from com.yoterra.pricestarz.data.response.records.n.DealInfo
	@Deprecated // HACK
	private void resolveMatchedProductInfo() {
		com.yoterra.data.records.Product p = CollectionUtils.first(data.getProducts()); // HACK 
		if(p == null) return;
		
		DealLookupMeta dlm = CollectionUtils.first(data.getLookup());
		if(dlm == null) return;

		String vid = data.getVariantId(); 
		RecordId sid = data.getCompanyId();
		if(sid == null || StringUtils.isBlank(vid)) return;
		
		boolean isExact = Opt.getOrDef(dlm, false, DealLookupMeta::getFlags, l->l.contains(DealLookupMetaFlag.MATCHED));
		if(!isExact) return;
		
		GroupProduct gp = GroupProduct.create(p);
		Predicate<ProductOffer> filter = po -> 
				po.getLocalities().contains(DataLocalityUtils.DEFAULT_LOCALITY) && /// ????
				vid.equals(po.getVariantId()) && 
				sid.equals(po.getStoreId());
		
		List<ProductOffer> offers = gp.getOffers(filter);
		if(offers.isEmpty()) return;
		
		this.matchedGroup = gp;
		this.matchedOffer = CollectionUtils.first(offers);
		
		
		// copied from com.yoterra.pricestarz.data.response.records.n.DealInfo.resolveDealImage
		String img = Opt.get(matchedOffer, ProductOffer::getImages, ProductImageWebUtils::getBestImage);
		img = img != null ? img : Opt.get(matchedGroup, GroupProduct::getAllImages, ProductImageWebUtils::getBestImage);
		img = img != null ? img : ProductImageWebUtils.toEbayDealCdnImage(data); 
//		img = Opt.defVal(img, siteLogo); 
		this.imageUrl = img;
	}

}
