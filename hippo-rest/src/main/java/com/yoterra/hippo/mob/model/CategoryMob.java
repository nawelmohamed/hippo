package com.yoterra.hippo.mob.model;

import java.util.List;

import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.utils.Opt;

public class CategoryMob {
	
	public static class CategoryElemMob{
		final Long id;
		final String name;
		final Integer level;
		
		public CategoryElemMob(TaxonomyElement te) {
			this(te.getId(), te.getName(), te.getLevel());
		}

		public CategoryElemMob(Long id, String name, Integer level) {
			super();
			this.id = id;
			this.name = name;
			this.level = level;
		}
		public Long getId() {
			return id;
		}
		public String getName() {
			return name;
		}
		public Integer getLevel() {
			return level;
		}
	}
	
	private final Long id;
	private final List<CategoryElemMob> tuple;

	public static CategoryMob of(TaxonomyElement te) {
		return Opt.get(te, CategoryMob::new);
	}
	
	private CategoryMob(TaxonomyElement te) {
		this.id = te.getId();
		this.tuple = Opt.strm(te.getTaxonomy()).map(CategoryElemMob::new).toList();
	}

	public Long getId() {
		return id;
	}
	
	public List<CategoryElemMob> getTuple() {
		return tuple;
	}
}
