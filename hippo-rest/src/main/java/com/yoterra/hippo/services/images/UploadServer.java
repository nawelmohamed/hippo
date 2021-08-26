package com.yoterra.hippo.services.images;

import java.nio.file.Paths;

import org.apache.commons.lang3.StringUtils;

public class UploadServer {
	
	private String username;
	
	private String password;
	
	private String rootURL;
	
	private String uploadURL;
	
	private String baseDir;
	
	private int[] lengths;
	
	
	
	public UploadServer(String username, String password, String rootURL, String uploadURL, String baseDir,
			int[] lengths) {
		super();
		this.username = username;
		this.password = password;
		this.rootURL = rootURL;
		this.uploadURL = uploadURL;
		this.baseDir = baseDir;
		this.lengths = lengths;
	}

	public String getUsername() {
		return username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public String getUploadURL() {
		return uploadURL;
	}
	
	public String getRelativePath(String fileName) {
		StringBuilder path = new StringBuilder();
		int current = 0;
		for( int length : lengths ) {
			path.append(fileName.substring(current,current+length)).append("/images/");
			current += length;
		}
		path.append(fileName);
		return path.toString();
	}

	public String getAbsolutePath(String fileName) {
		return Paths.get(baseDir,getRelativePath(fileName)).toString();
	}
	
	public String getURL(String fileName) {
		return StringUtils.appendIfMissing(rootURL, "/") + "images/" + getRelativePath(fileName);
	}
	
	public static void main(String[] args) {
		System.out.println(StringUtils.appendIfMissing("13323/", "/")); 
	}
}
