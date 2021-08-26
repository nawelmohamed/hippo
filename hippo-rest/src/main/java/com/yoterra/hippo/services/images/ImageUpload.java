package com.yoterra.hippo.services.images;

public class ImageUpload {

	private UploadServer uploadServer;
	
	private String fileName;

	public void setUploadServer(UploadServer uploadServer) {
		this.uploadServer = uploadServer;
	}
	
	public UploadServer getUploadServer() {
		return uploadServer;
	}
	
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
	public String getFileName() {
		return fileName;
	}
	
	public String getURL() {
		return uploadServer.getURL(fileName);
	}
}
