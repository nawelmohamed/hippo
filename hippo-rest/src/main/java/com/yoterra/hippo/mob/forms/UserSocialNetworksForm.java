package com.yoterra.hippo.mob.forms;

import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.URL;
import org.springdoc.api.annotations.ParameterObject;

import com.yoterra.hippo.jpa.entities.users.UserSocialNetworks;
import com.yoterra.hippo.req.Form;

@ParameterObject
public class UserSocialNetworksForm implements Form {
	
	@Size(message = "Tagline can not be longer than " + UserSocialNetworks.TAGLINE_MAX_LEN + " characters.", 
			max = UserSocialNetworks.TAGLINE_MAX_LEN, groups = {Create.class, Edit.class})
	private String tagline;
	
	@URL(message = "Facebook page has to be a valid URL", groups = {Create.class, Edit.class})
	private String facebookPage;
	
	@URL(message = "Twitter page has to be a valid URL", groups = {Create.class, Edit.class})
	private String twitterPage;
	
	@URL(message = "Instagram page has to be a valid URL", groups = {Create.class, Edit.class})
	private String instagramPage;
	
	@URL(message = "Tiktok page has to be a valid URL", groups = {Create.class, Edit.class})
	private String tiktokPage;

	@URL(message = "Reddit page has to be a valid URL", groups = {Create.class, Edit.class})
	private String redditPage;
	
	@URL(message = "Youtube page has to be a valid URL", groups = {Create.class, Edit.class})	
	private String youtubePage;
	
	@URL(message = "Website page has to be a valid URL", groups = {Create.class, Edit.class})
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
	
	public UserSocialNetworks toUserSocialNetworks(){
		UserSocialNetworks usn = new UserSocialNetworks();
		
		usn.setTagline(tagline);
		usn.setFacebookPage(facebookPage);
		usn.setInstagramPage(instagramPage);
		usn.setRedditPage(redditPage);
		usn.setTiktokPage(tiktokPage);
		usn.setTwitterPage(twitterPage);
		usn.setWebsitePage(websitePage);
		usn.setYoutubePage(youtubePage);
		
		return usn;
	}
}