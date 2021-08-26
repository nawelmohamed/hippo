package com.yoterra.hippo.services.images;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.concurrent.CompletableFuture;

import javax.annotation.PostConstruct;

import org.apache.commons.lang.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.yoterra.hippo.annotations.profiles.Local;

@Service
@Local
public class ImageUploadServiceLocal extends ImageUploadServiceAbstract {
	
	@Autowired
	private WebProperties webProperties;
	
	@PostConstruct
	public void ensureDirectory() {
		File dir = new File(getDirectory());
		dir.mkdirs();
	}
	
	private String getDirectory() {
		String dir = webProperties.getResources().getStaticLocations()[0];
		Validate.isTrue(dir.startsWith("file:/"));
		return dir.substring("file:".length());
	}

	@Override
	public CompletableFuture<ImageUpload> uploadAsync(byte[] data, String fileName) throws IOException {
		String dir = getDirectory();
		File toWrite = new File(dir + "/images",fileName);
		try( FileOutputStream out = new FileOutputStream(toWrite) ) {
			out.write(data);
		}
		String rootURL = ServletUriComponentsBuilder.fromCurrentContextPath().build().toUriString();
		UploadServer uploadServer = new UploadServer("", "", rootURL, "", dir, new int[] {});
		ImageUpload upload = new ImageUpload();
		upload.setFileName(fileName);
		upload.setUploadServer(uploadServer);
		
		return CompletableFuture.completedFuture(upload);
	}

}
