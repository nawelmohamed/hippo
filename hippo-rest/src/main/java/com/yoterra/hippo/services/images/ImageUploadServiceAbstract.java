package com.yoterra.hippo.services.images;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import com.yoterra.commons.DigestUtils;

public abstract class ImageUploadServiceAbstract implements ImageUploadService {
	
	
	@Override
	public abstract CompletableFuture<ImageUpload> uploadAsync(byte[] data, String fileName) throws IOException;
	
	@Override
	public ImageUpload upload(byte[] data, String fileName) throws IOException {
		try {
			return uploadAsync(data, fileName).get();
		} catch (InterruptedException | ExecutionException | IOException e) {
			throw new IOException(e);
		}
	}

	@Override
	public CompletableFuture<ImageUpload> uploadAsync(byte[] data, byte[]...ids) throws IOException {
		String fileName = DigestUtils.md5SumBase64Safe(ids);
		return uploadAsync(data, fileName);
	
	}
	
	@Override
	public ImageUpload upload(byte[] data, byte[]...ids) throws IOException {
		String fileName = DigestUtils.md5SumBase64Safe(ids);
		return upload(data, fileName);
	}
}
