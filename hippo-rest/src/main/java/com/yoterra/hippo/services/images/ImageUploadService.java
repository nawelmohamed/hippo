package com.yoterra.hippo.services.images;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;

import com.yoterra.hippo.jpa.entities.UserDefinedImageable;

public interface ImageUploadService {
	
	CompletableFuture<ImageUpload> uploadAsync(byte[] data, byte[]...ids) throws IOException;
	
	CompletableFuture<ImageUpload> uploadAsync(byte[] data, String fileName) throws IOException;
	
	ImageUpload upload(byte[] data, byte[]...ids) throws IOException;
	
	ImageUpload upload(byte[] data, String fileName) throws IOException;
	
	default ImageUpload upload(byte[] data, UserDefinedImageable<?> imageable) throws IOException{
		return upload(data, imageable.getImageableType().tbytes(), imageable.getIdBytes());
	}
}
