package com.yoterra.hippo.req;

import javax.validation.constraints.Size;

import org.springdoc.api.annotations.ParameterObject;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;

@ParameterObject
public class PageParams {
	
	protected static final int DEFAULT_PAGE_SIZE = 10;	
	public static final int MAX_PAGE_SIZE = 50;	
	
	@Parameter(required = false, description = "Results page number. The default is 1. The max page number may be limited IN THE FUTURE.")
	@Size(min = 1, message = "The page number can not be lower than 1")
	private int page = 1;
	
	@Parameter(required = false, description = "Results page size. The default size is "+DEFAULT_PAGE_SIZE+". Min-max size: (1-"+MAX_PAGE_SIZE+")")
	@Size(min = 1, max = MAX_PAGE_SIZE, message = "Invalid page size. The minumum is: 1. The maximum is: "+MAX_PAGE_SIZE+".")
	private int size = DEFAULT_PAGE_SIZE;
	
	public PageParams() {
	}
	
	public PageParams(int page, int size) {
		setSize(size);
		setPage(page);
	}

	@Schema(hidden = true)
	public Pageable getPageable(){
		return PageRequest.of(page - 1, size, getSort());
	}
	
	@Schema(hidden = true)
	public Sort getSort() {
		return Sort.unsorted();
	}
	
	public int getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = isValidPageNumber(page) ? page : 1;
	}
	
	public int getSize() {
		return size;
	}

	public void setSize(Integer size) {
		this.size = isValidPageSize(size) ? size : DEFAULT_PAGE_SIZE;
	}
	
	protected boolean isValidPageSize(int size) {
		return size >= 1 && size <= MAX_PAGE_SIZE;
	}
	
	protected boolean isValidPageNumber(Integer page) {
		return page != null && page >= 1;
	}
}
