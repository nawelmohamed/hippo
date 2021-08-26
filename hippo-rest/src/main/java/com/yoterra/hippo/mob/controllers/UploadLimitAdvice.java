package com.yoterra.hippo.mob.controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import com.google.gson.Gson;
import com.yoterra.hippo.res.Response;

@ControllerAdvice
public class UploadLimitAdvice {
	
	private static final Logger log = LoggerFactory.getLogger(UploadLimitAdvice.class);
	
	private Gson GSON = new Gson();
	
	@Value("${spring.servlet.multipart.max-file-size}")
	private String maxFileSize;

    @ExceptionHandler( {
    	MaxUploadSizeExceededException.class, 
    	org.apache.tomcat.util.http.fileupload.impl.FileSizeLimitExceededException.class,
    	org.apache.tomcat.util.http.fileupload.impl.SizeLimitExceededException.class,
    	org.apache.commons.fileupload.FileUploadBase.FileSizeLimitExceededException.class,
    	org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException.class
    })
    public void handleSizeLimitExceededException(Exception exception, HttpServletResponse response) {
    	Response<?> r = Response.error("Maximum upload file size is " + maxFileSize + ".");
    	String json = GSON.toJson(r);
    	try {
			PrintWriter writer = response.getWriter();
			writer.append(json);
		} catch (IOException e) {
			log.error("Error: {}", e);
		}
    }
}


//curl -X 'POST' \
//'https://testing.pricestarz.com/hippo/products/comments/add?id=tl1sNc_JStWanjLdcuXRlA&text=synthetic' \
//-H 'accept: */*' \
//-H 'hippo-api-version: 1.0.0' \
//-H 'Authorization: Bearer testtoken:gordana.vujovic@yoterra.com' \
//-d ''
//
//
//curl -X 'GET' \ 'https://testing.pricestarz.com/hippo/user/preferences' \ -H 'accept: */*' \ -H 'hippo-api-version: 1.0.0' \ -H 'Authorization: Bearer testtoken:gordana.vujovic@yoterra.com'
//{ "status": "ERROR", "message": "Invalid settings type: INVITATION_ACCEPTED_TO_INVITER", "data": null }
