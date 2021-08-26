package com.yoterra.hippo.jpa.entities.users;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserSocialNetworks {
	
	public static final int TAGLINE_MAX_LEN = 100;
	
	@Column
	private String tagline;
	
	@Column
	private String facebookPage;
	@Column
	private String twitterPage;
	@Column
	private String instagramPage;
	@Column
	private String tiktokPage;
	@Column
	private String redditPage;
	@Column
	private String youtubePage;
	@Column
	private String websitePage;
	
	public String getTagline() {
		return tagline;
	}
	public void setTagline(String tagline) {
		this.tagline = tagline;
	}
	public String getFacebookPage() {
		return facebookPage;
	}
	public void setFacebookPage(String facebookPage) {
		this.facebookPage = facebookPage;
	}
	public String getTwitterPage() {
		return twitterPage;
	}
	public void setTwitterPage(String twitterPage) {
		this.twitterPage = twitterPage;
	}
	public String getInstagramPage() {
		return instagramPage;
	}
	public void setInstagramPage(String instagramPage) {
		this.instagramPage = instagramPage;
	}
	public String getTiktokPage() {
		return tiktokPage;
	}
	public void setTiktokPage(String tiktokPage) {
		this.tiktokPage = tiktokPage;
	}
	public String getRedditPage() {
		return redditPage;
	}
	public void setRedditPage(String redditPage) {
		this.redditPage = redditPage;
	}
	public String getYoutubePage() {
		return youtubePage;
	}
	public void setYoutubePage(String youtubePage) {
		this.youtubePage = youtubePage;
	}
	public String getWebsitePage() {
		return websitePage;
	}
	public void setWebsitePage(String websitePage) {
		this.websitePage = websitePage;
	}
}