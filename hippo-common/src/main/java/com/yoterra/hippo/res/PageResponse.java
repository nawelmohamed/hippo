package com.yoterra.hippo.res;
//package com.yoterra.hippo.mob.model.response;
//
//public class PageResponse<D> extends Response<RPage<D>>{
//	
//
//	public static <T> PageResponse<T> error(){
//		return error(null, null);
//	}
//	
//	public static <T> PageResponse<T> error(String message){
//		return error(message, null);
//	}
//	
//	public static <T> PageResponse<T> error(String message, T data){
//		return new PageResponse<T>(Status.ERROR, message, data);
//	}
//	
//	public static <T> PageResponse<T> success(){
//		return success(null, null);
//	}
//	
//	public static <T> PageResponse<T> success(String message){
//		return success(message, null);
//	}
//	
//	public static <T> PageResponse<T> success(String message, T data){
//		return new PageResponse<T>(Status.SUCCESS, message, data);
//	}
//
//	
//	
//	public PageResponse(Status status, String message, D data) {
//		super();
//		this.status = status;
//		this.message = message;
//		this.data = data;
//	}
//	
//	public Status getStatus() {
//		return status;
//	}
//
//	public String getMessage() {
//		return message;
//	}
//	public D getData() {
//		return data;
//	}
//}
