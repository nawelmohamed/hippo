package com.yoterra.hippo.services.images;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest
@ExtendWith(SpringExtension.class)
public class ImageUploadServiceLocalTest {

	@Autowired
	private ImageUploadServiceLocal imageUploadService;
	
	@Test
	void test() throws IOException {
		String fileName = "blah";
		byte[] data = new byte[] {'h','e','l','l','o',',',' ','w','o','r','l','d'};
		ImageUpload upload = imageUploadService.upload(data,fileName);
		String path = upload.getUploadServer().getAbsolutePath(fileName);
		System.out.println(path);
		byte[] dataA = FileUtils.readFileToByteArray(new File(path));
		Assertions.assertArrayEquals(data, dataA);
		String url = upload.getUploadServer().getURL(fileName);
		System.out.println(url);
	}
}
