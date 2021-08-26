package com.yoterra.hippo.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class TaxonomyConfig {
	
//	private static final Logger log = LoggerFactory.getLogger(TaxonomyConfig.class);
//
//	@Autowired
//	public void initTaxonomyTree(TaxonomyElementRepository taxonomyElementRepository) throws IOException, URISyntaxException {
//		long count = taxonomyElementRepository.count();
//		if(count == 0) {
//			log.info("Taxonomy tree not loaded. Downloading the tree CSV ...");
//			List<String[]> arrList = loadCSV();
//			log.info("Taxonomy tree CSV downloaded with {} lines. Loading the in-memory taxonomy tree ...", arrList.size());
//			TENode root = loadTree(arrList);
//			log.info("Taxonomy tree loaded. Persisting to DB ...");
//			root.persistChildren(taxonomyElementRepository);
//			log.info("Taxonomy tree persisted. Total taxononmy elements in the DB: {}", taxonomyElementRepository.count());
//		}else {
//			log.info("Taxonomy tree was previously loaded with {} entries", count);
//		}
//		
//	}
}
