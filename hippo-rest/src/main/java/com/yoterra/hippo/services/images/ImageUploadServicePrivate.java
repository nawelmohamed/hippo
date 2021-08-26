package com.yoterra.hippo.services.images;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.function.BiFunction;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.BoundRequestBuilder;
import org.asynchttpclient.ListenableFuture;
import org.asynchttpclient.Response;
import org.asynchttpclient.request.body.multipart.ByteArrayPart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.yoterra.commons.DigestUtils;
import com.yoterra.hippo.annotations.profiles.Remote;

@Service
@Remote
public class ImageUploadServicePrivate implements ImageUploadService {
	
	@Autowired
	private AsyncHttpClient client;

	@Value("${image.upload.server.username}")
	private String username;
	
	@Value("${image.upload.server.password}")
	private String password;
	
	@Value("${image.upload.server.base-dirs}")
	private String baseDirs[];
	
	@Value("${image.upload.server.dir-structure}")
	private int[] lengths;
	
	@Value("${image.upload.server.domains}")
	private String[] domains;

	@Value("${image.upload.server.upload-port}")
	private String uploadPort;
	
	private int current = 0;

	private static class Handler implements BiFunction<Response, Throwable, ImageUpload> {

		private Gson gson = new Gson();
		private UploadServer uploadServer;
		private String fileName;
		
		public Handler(UploadServer uploadServer, String fileName) {
			this.uploadServer = uploadServer;
			this.fileName = fileName;
		}

		@Override
		public ImageUpload apply(Response r, Throwable t) {
			if( t == null ) {
				if( r.getStatusCode() == 200 ) {
					UploadStatus status = gson.fromJson(r.getResponseBody(),UploadStatus.class);
					if( status.getHttpStatus() == HttpStatus.OK ) {
						ImageUpload upload = new ImageUpload();
						upload.setUploadServer(uploadServer);
						upload.setFileName(fileName);
						return upload;
					}
				}
			}
			return null;
		}
		
	}
	
	@Override
	public ImageUpload upload(byte[] data, String fileName) throws IOException {
		try {
			return uploadAsync(data, fileName).get();
		} catch (InterruptedException | ExecutionException | IOException e) {
			throw new IOException(e);
		}
	}
	
	@Override
	public CompletableFuture<ImageUpload> uploadAsync(byte[] data, String fileName) throws IOException {
		UploadServer uploadServer = getServerForUpload();
		
		String encoded = Base64.getEncoder().encodeToString((uploadServer.getUsername()+":"+uploadServer.getPassword()).getBytes(StandardCharsets.UTF_8));

		BoundRequestBuilder post = client
                .preparePost(uploadServer.getUploadURL())
                .addHeader("Authorization", "Basic " + encoded);
		
		String path = uploadServer.getAbsolutePath(fileName);
		post.addBodyPart(new ByteArrayPart("files", data, "image/jpg", null, path));
		
		ListenableFuture<Response> future = post.execute();
		
		CompletableFuture<Response> cf = future.toCompletableFuture();
		return cf.handleAsync(new Handler(uploadServer,fileName));
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
	
	private UploadServer getServerForUpload() {
		String domain;
		String baseDir;
		synchronized(this) {
			domain = domains[current];
			baseDir = baseDirs[current];
			current = (current+1)%domains.length;
		}
		String rootURL = "https://" + domain + "/i"; // TODO
		String uploadURL = "https://" + domain + ":" + uploadPort + "/uploadm";
		return new UploadServer(username, password, rootURL, uploadURL, baseDir, lengths);
	}
}
