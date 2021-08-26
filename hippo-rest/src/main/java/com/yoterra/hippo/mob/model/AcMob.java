package com.yoterra.hippo.mob.model;

import com.yoterra.hippo.jpa.entities.Autocompletable;
import com.yoterra.utils.Opt;

public class AcMob {

	private final String id;
	private final String displayName;
	
	public static <ID> AcMob of(Autocompletable<ID> ac){
		return Opt.get(ac, AcMob::new);
	}

	public <ID> AcMob(Autocompletable<ID> ac){
		this(ac.getId(), ac.getDisplayName());
	}
	
	public <ID> AcMob(ID id, String displayName){
		this.id = Opt.get(id, Object::toString);
		this.displayName = displayName;
	}

	public String getId() {
		return id;
	}

	public String getDisplayName() {
		return displayName;
	}
}
