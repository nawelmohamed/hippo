package com.yoterra.hippo.config;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import com.datastax.oss.driver.shaded.guava.common.collect.Maps;
import com.yoterra.hippo.jpa.entities.data.TaxonomyElement;
import com.yoterra.hippo.jpa.repositories.TaxonomyElementRepository;

@Configuration
public class TaxonomyConfig {
	
	private static final Logger log = LoggerFactory.getLogger(TaxonomyConfig.class);

	class TENode{
		private TENode parent;
		private TaxonomyElement element;
		private Map<String,TENode> children;
		
		public TENode(TENode parent, String element) {
			this.parent = parent;
			this.element = new TaxonomyElement();
			this.element.setName(element);
			this.element.setLevel(parent == null ? 0 : parent.getElement().getLevel() + 1);
			this.element.setParent(parent == null ? null : parent.getElement());
			this.children = Maps.newTreeMap();
		}
		
		public void addChild(TENode node){
			this.children.put(node.getElement().getName(), node);
		}
		
		public TENode getChild(String name) {
			return this.children.getOrDefault(name, null);
		}
		
		public TaxonomyElement getElement() {
			return element;
		}
		
		public Map<String, TENode> getChildren() {
			return children;
		}
		
		public TENode getParent() {
			return parent;
		}
		
		public void persistChildren(TaxonomyElementRepository taxonomyElementRepository){
			children.forEach((k,v)->{
				taxonomyElementRepository.save(v.getElement());
				v.persistChildren(taxonomyElementRepository);
			});
		}
	}
	
	@Autowired
	public void initTaxonomyTree(TaxonomyElementRepository taxonomyElementRepository) throws IOException, URISyntaxException {
		long count = taxonomyElementRepository.count();
		if(count == 0) {
			log.info("Taxonomy tree not loaded. Downloading the tree CSV ...");
			List<String[]> arrList = loadCSV();
			log.info("Taxonomy tree CSV downloaded with {} lines. Loading the in-memory taxonomy tree ...", arrList.size());
			TENode root = loadTree(arrList);
			log.info("Taxonomy tree loaded. Persisting to DB ...");
			root.persistChildren(taxonomyElementRepository);
			log.info("Taxonomy tree persisted. Total taxononmy elements in the DB: {}", taxonomyElementRepository.count());
		}else {
			log.info("Taxonomy tree was previously loaded with {} entries", count);
		}
		
	}

	private TENode loadTree(List<String[]> arr) {
		TENode root = new TENode(null, "root");
		TENode curr = root;
		for (String[] tuple : arr) {
			for (String te : tuple) {
				TENode child = curr.getChild(te);
				if(child == null) {
					child = new TENode(curr == root ? null : curr, te);
					curr.addChild(child);
				}
				curr = child;
			}
			curr = root;
		}
		return root;
	}

	private List<String[]> loadCSV() throws MalformedURLException, IOException {
		try(InputStream is = TaxonomyConfig.class.getClassLoader().getResourceAsStream("taxonomy-tree.txt")){
			List<String> lines = IOUtils.readLines(is, Charset.defaultCharset());
			List<String[]> arrList = lines.stream()
				.map(StringUtils::trim)
				.filter(StringUtils::isNotBlank)
				.filter(s->!StringUtils.startsWith(s, "#"))
				.sorted()
				.map(this::csvToArr)
				.collect(Collectors.toList());
			return arrList;
		}
	}
	
	private String [] csvToArr(String line) {
		String[] arr = StringUtils.split(line, ">");
		for (int i = 0; i < arr.length; i++) {
			arr[i] = StringUtils.normalizeSpace(arr[i]);
		}
		return arr;
	}
	
	public static void main(String[] args) throws MalformedURLException, IOException {
		TaxonomyConfig tc = new TaxonomyConfig();
		List<String[]> loadCSV = tc.loadCSV();
		for (String[] arr : loadCSV) {
			System.out.println(Arrays.toString(arr));
		}
	}
}
