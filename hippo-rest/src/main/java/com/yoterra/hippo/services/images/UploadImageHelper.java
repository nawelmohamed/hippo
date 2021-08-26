package com.yoterra.hippo.services.images;

import java.io.IOException;

import org.apache.commons.lang3.StringUtils;
import org.apache.tika.Tika;
import org.springframework.web.multipart.MultipartFile;

import com.yoterra.hippo.exceptions.NotImageFileException;

public class UploadImageHelper {

	private static Tika TIKA = new Tika();
	
	public static boolean isImageFile(byte [] bytes, String fileName){
		String type = TIKA.detect(bytes, fileName);
		return StringUtils.startsWith(type, "image/");
	}
	
	public static boolean isImageFile(MultipartFile mFile){
		try {
			return isImageFile(mFile.getBytes(), mFile.getOriginalFilename());
		} catch (IOException e) {
			return false;
		}
	}
	
	public static void checkImageFile(MultipartFile mFile){
		if(!isImageFile(mFile))
			throw new NotImageFileException("Not an image file.");
	}
	
	public static void checkImageFile(byte [] bytes, String fileName){
		if(!isImageFile(bytes, fileName))
			throw new NotImageFileException("Not an image file.");
	}

}
