package com.yoterra.hippo.jpa.entities.data;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.apache.commons.lang3.StringUtils;

import com.google.common.collect.Lists;
import com.yoterra.hippo.jpa.entities.Autocompletable;
import com.yoterra.hippo.jpa.entities.Favoritable;

@Entity
@Table(schema = "HIPPO", name = "TAXONOMY_ELEMENT")
@SequenceGenerator(schema = "hippo", name="taxonomy_element_generator", sequenceName = "taxonomy_element_sequence", initialValue = 1, allocationSize = 50)
public class TaxonomyElement implements Favoritable<Long>, Autocompletable<Long> {

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="taxonomy_element_generator")
    private Long id;
	
	@Column(nullable = false)	
	private int level;		// 0-major, 1-minor, ...
	
	@Column(nullable = false)
	private String name; 
	
	@ManyToOne
//	@OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name="PARENT_ID", nullable = true)
	private TaxonomyElement parent;
	
	public List<TaxonomyElement> getTaxonomy(){
		LinkedList<TaxonomyElement> l = Lists.newLinkedList();
		TaxonomyElement te = this;
		do {
			l.addFirst(te);
			te = te.getParent();
		}while(te != null);
		return l;
	}
	
	public List<String> getNameTaxonomy(){
		List<TaxonomyElement> tx = getTaxonomy();
		List<String> ntx = tx.stream().map(TaxonomyElement::getName).collect(Collectors.toList());
		return ntx;
	}

	@Override
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public TaxonomyElement getParent() {
		return parent;
	}

	public void setParent(TaxonomyElement parent) {
		this.parent = parent;
	}

	@Override
	public String getDisplayName() {
		return StringUtils.join(getNameTaxonomy(), " > ");
	}
}	
