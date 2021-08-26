package com.yoterra.hippo.services;

import javax.persistence.EntityManager;
import javax.persistence.EntityNotFoundException;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.apache.commons.lang.Validate;
import org.apache.commons.validator.routines.EmailValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.yoterra.commons.FIXME;

@Component
public class DeactivationProcessor {
	
	private static final Logger log = LoggerFactory.getLogger(DeactivationProcessor.class);

	@PersistenceContext
	private EntityManager em;
	
	@Transactional
	public boolean dectivateUser(long id){
		Validate.isTrue(id > 0);
		int uru = sql("UPDATE hippo.user SET id = -id WHERE id = " + id);
		log.info("User rows updated: {}", uru);
		
		int cru = sql("UPDATE hippo.collection SET id = -id WHERE id > 0 AND owner_id < 0");
		log.info("Collection rows updated: {}", cru);
		
		int ciru= sql("UPDATE hippo.collection_item SET id = -id WHERE id > 0 AND collection_id < 0");
		log.info("Collection item rows updated: {}", ciru);
		
		int ufru= sql("UPDATE hippo.user_favorite SET id = -id WHERE id > 0 AND user_id < 0");
		log.info("User favorite rows updated: {}", ufru);
		
		int iru = sql("UPDATE hippo.invitation SET id = -id WHERE id > 0 AND inviter_id < 0");
		log.info("Invitation rows updated: {}", iru);
		
		int caru = sql("UPDATE hippo.client_app SET id = -id WHERE id > 0 AND user_id < 0");
		log.info("Client app rows updated: {}", caru);
		
		// ------------- Likes ----------------
		int lru = sql("UPDATE hippo.like_ SET id = -id "
					+ "WHERE id > 0 AND ("
						+ "author_id < 0 OR "
						+ "(collection_id IS NOT NULL AND collection_id < 0) OR "
						+ "(collection_item_id IS NOT NULL AND collection_item_id < 0)"
					+ ")"
		);
		log.info("Like rows updated: {}", lru);
		
		// ------------- Comments ----------------
		int cmru = sql("UPDATE hippo.comment SET id = -id "
				+ "WHERE id > 0 AND ("
					+ "author_id < 0 OR "
					+ "(collection_id IS NOT NULL AND collection_id < 0) OR "
					+ "(collection_item_id IS NOT NULL AND collection_item_id < 0)"
				+ ")"
		);
		log.info("Comment rows updated: {}", cmru);
	
		// ------------- Followers ----------------
		int fru = sql("UPDATE hippo.follower SET id = -id "
				+ "WHERE id > 0 AND ("
					+ "follower_id < 0 OR "
					+ "(collection_id IS NOT NULL AND collection_id < 0) OR "
					+ "(user_id IS NOT NULL AND user_id < 0)"
				+ ")"
		);
		log.info("Follower rows updated: {}", fru);
		
		em.flush();
		
		FIXME.warn("Unsubscribe from topcis");
		
		return true;
	}
	
	@Transactional
	public boolean activateUser(String email){
		Validate.isTrue(EmailValidator.getInstance().isValid(email), "Invalid e-mail address.");		// prevent SQL injection
		
		int uru = sql("UPDATE hippo.user SET id = -id WHERE id < 0 AND email = '" + email + "'");
		log.info("User rows updated: {}", uru);
		if(uru == 0)
			throw new EntityNotFoundException("There is no deactivated user account with this email address.");
		
		int cru = sql("UPDATE hippo.collection SET id = -id WHERE id < 0 AND owner_id > 0");
		log.info("Collection rows updated: {}", cru);
		
		int ciru= sql("UPDATE hippo.collection_item SET id = -id WHERE id < 0 AND collection_id > 0");
		log.info("Collection item rows updated: {}", ciru);
		
		int ufru= sql("UPDATE hippo.user_favorite SET id = -id WHERE id < 0 AND user_id > 0");
		log.info("User favorite rows updated: {}", ufru);
		
		int iru = sql("UPDATE hippo.invitation SET id = -id WHERE id < 0 AND inviter_id > 0");
		log.info("Invitation rows updated: {}", iru);
		
		int caru = sql("UPDATE hippo.client_app SET id = -id WHERE id < 0 AND user_id > 0");
		log.info("Client app rows updated: {}", caru);
		
		// ------------- Likes ----------------
		int lru = sql("UPDATE hippo.like_ SET id = -id "
					+ "WHERE id < 0 AND ("
						+ "author_id > 0 AND "
						+ "(collection_id IS NULL OR collection_id > 0) AND "
						+ "(collection_item_id IS NULL OR collection_item_id > 0)"
					+ ")"
		);
		log.info("Like rows updated: {}", lru);
		
		// ------------- Comments ----------------
		int cmru = sql("UPDATE hippo.comment SET id = -id "
				+ "WHERE id < 0 AND ("
					+ "author_id > 0 AND "
					+ "(collection_id IS NULL OR collection_id > 0) AND "
					+ "(collection_item_id IS NULL OR collection_item_id > 0)"
				+ ")"
		);
		log.info("Comment rows updated: {}", cmru);
	
		// ------------- Followers ----------------
		int fru = sql("UPDATE hippo.follower SET id = -id "
				+ "WHERE id < 0 AND ("
					+ "follower_id > 0 AND "
					+ "(collection_id IS NULL OR collection_id > 0) AND "
					+ "(user_id IS NULL OR user_id > 0)"
				+ ")"
		);
		log.info("Follower rows updated: {}", fru);
		
		em.flush();
		
		FIXME.warn("Subscribe to topcis");
		
		return true;
	}

	private int sql(String q) {
		return em.createNativeQuery(q).executeUpdate();
	}
}
