package com.yoterra.hippo.mob.controllers;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.yoterra.hippo.exceptions.DuplicateElementException;
import com.yoterra.hippo.exceptions.LimitExceededException;
import com.yoterra.hippo.exceptions.NotImageFileException;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.res.Response.ResponseException;
import com.yoterra.utils.CollectionUtils;
import com.yoterra.utils.Opt;

public abstract class BaseController implements IBaseController {

	private static final Logger LOG = LoggerFactory.getLogger(BaseController.class);
	
	@Override
	public String getOneErrorMessage(BindingResult errors){
		return Opt.get(errors, BindingResult::getAllErrors, CollectionUtils::first, ObjectError::getDefaultMessage);
	}

    @ExceptionHandler( Exception.class )
    public Response<?> handleException(Exception exception) {
    	LOG.error("", exception);
    	return Response.error(exception.getMessage());
    }
    
    @ExceptionHandler( EntityNotFoundException.class )
    public Response<?> handleEntityNotFoundException(EntityNotFoundException exception) {
    	return Response.error(exception.getMessage());
    }
    
    @ExceptionHandler( DuplicateElementException.class )
    public Response<?> handleDuplicateElementException(DuplicateElementException exception) {
    	return Response.error(exception.getMessage());
    }
    
    @ExceptionHandler( LimitExceededException.class )
    public Response<?> handleLimitExceededException(LimitExceededException exception) {
    	return Response.error(exception.getMessage());
    }
    
    @ExceptionHandler( NotImageFileException.class )
    public Response<?> handleNotImageFileException(NotImageFileException exception) {
    	return Response.error(exception.getMessage());
    }
    
//    @ExceptionHandler( {
//    	MaxUploadSizeExceededException.class, 
//    	org.apache.tomcat.util.http.fileupload.impl.FileSizeLimitExceededException.class,
//    	org.apache.tomcat.util.http.fileupload.impl.SizeLimitExceededException.class,
//    	org.apache.commons.fileupload.FileUploadBase.FileSizeLimitExceededException.class,
//    	org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException.class
//    })
//    public Response<?> handleSizeLimitExceededException(Exception exception) {
//    	return Response.error(exception.getMessage());
//    }
    
    @ExceptionHandler( ResponseException.class )
    public Response<?> responseException(ResponseException exception, HttpServletResponse response) {
    	response.setStatus(exception.status());
    	return exception.response();
    }
}    
