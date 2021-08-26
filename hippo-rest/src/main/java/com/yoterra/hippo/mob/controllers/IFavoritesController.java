package com.yoterra.hippo.mob.controllers;

import java.util.List;

import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yoterra.hippo.exceptions.LimitExceededException;
import com.yoterra.hippo.jpa.entities.Favoritable;
import com.yoterra.hippo.jpa.entities.favorites.UserFavorite;
import com.yoterra.hippo.mob.forms.IUserFavoriteForm;
import com.yoterra.hippo.res.Response;
import com.yoterra.hippo.services.IFavoritesService;
import com.yoterra.utils.Opt;

import io.swagger.v3.oas.annotations.Operation;

public interface IFavoritesController<ID, 
									M,		// ...Mob response record	
									F extends Favoritable<ID>, 
									UF extends UserFavorite<ID, F>, 
									FF extends IUserFavoriteForm<ID>
		> extends IBaseController, LoggerProvider, IEntityController<ID> {
	
	IFavoritesService<ID, F, UF> getFavoritesService();
	
	M userFavoriteToMob(F fav);
	

	@Operation(summary = "Set current user profile 'favorites'", 
			description = "Set current user profile 'favorites'. The number of favorite items is limited (see the params specification). "
					+ "The specified set of favorite items will completely replace the previous set of favorite items (no incremental set updates).")
	@RequestMapping(value = "/favorites/set", method = RequestMethod.POST)
	public default Response<?> setUserFavorites(@ModelAttribute @Validated FF form, BindingResult errors) {
		
		getLogger().info("Set user favorites.");
		
		if(errors.hasErrors())
			Response.throwError(getOneErrorMessage(errors));
		
		try {
			getFavoritesService().setUserFavorites(form.getItemIds());
		} catch (LimitExceededException e) {
			Response.throwError(e.getMessage());
		}
		
		return Response.success("User favorites set successfully", null);
	}
	
	@Operation(summary = "Get a list of favorite items of the current user.", description = "Get a list of favorite items of the current user.")
	@RequestMapping(value = "/favorites", method = RequestMethod.GET)
	public default Response<List<M>> getFavorites() {
		
		IFavoritesService<ID, F, UF> service = getFavoritesService();
		
		getLogger().info("Get list of favorite [{}] of the current user.", service.getUserFavoriteType());

		List<UF> favs = service.getUserFavorites();
		List<M> mobs = Opt.strm(favs).map(UF::getFavorite).noNulls().map(this::userFavoriteToMob).toList();
		
		return Response.success(null, mobs);
	}
}
