package com.yoterra.hippo.mob.controllers;

import org.springframework.validation.BindingResult;

public interface IBaseController {
	String getOneErrorMessage(BindingResult errors);
}    
