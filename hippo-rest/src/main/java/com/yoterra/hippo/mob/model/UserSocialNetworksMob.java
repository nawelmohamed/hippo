package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.users.UserSocialNetworks;
import com.yoterra.utils.Opt;

public class UserSocialNetworksMob {
	
	private final String tagline;
	
	private final String facebookPage;
	private final String twitterPage;
	private final String instagramPage;
	private final String tiktokPage;
	private final String redditPage;
	private final String youtubePage;
	private final String websitePage;
	
	public static UserSocialNetworksMob of(UserSocialNetworks usn) {
		return Opt.get(usn, UserSocialNetworksMob::new);
	}
	
	public UserSocialNetworksMob(UserSocialNetworks usn){
		this.tagline = usn.getTagline();
		this.facebookPage = usn.getFacebookPage();
		this.twitterPage = usn.getTwitterPage();
		this.instagramPage = usn.getInstagramPage();
		this.tiktokPage = usn.getTiktokPage();
		this.redditPage = usn.getRedditPage();
		this.youtubePage = usn.getYoutubePage();
		this.websitePage = usn.getWebsitePage();
	}

	public String getTagline() {
		return tagline;
	}
	
	public String getFacebookPage() {
		return facebookPage;
	}

	public String getTwitterPage() {
		return twitterPage;
	}

	public String getInstagramPage() {
		return instagramPage;
	}

	public String getTiktokPage() {
		return tiktokPage;
	}

	public String getRedditPage() {
		return redditPage;
	}

	public String getYoutubePage() {
		return youtubePage;
	}

	public String getWebsitePage() {
		return websitePage;
	}
}