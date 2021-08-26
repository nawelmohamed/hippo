package com.yoterra.hippo.jpa.entities.events;

import static org.junit.Assert.assertTrue;

import org.apache.commons.lang3.StringUtils;
import org.junit.Test;

public class EventTypeTest {

	private static final String LAST_UPDATE = 
			"INVITATION_ACCEPTED|CREATED_COLLECTION|COLLECTED_ITEM|GONE_DEAL|GONE_PRODUCT|COMMENTED_ITEM|LIKED_ITEM|FOLLOW_ITEM|";
	
	@Test
	public void sizeTest(){
		assertTrue("Number of event types must not be bigger than the number of Long bits.", EventType.values().length <= Long.BYTES * 8);
	}
	
	@Test
	public void consistencyTest(){
		String concAll = concatAll();
		assertTrue("Notification preferences vector depends on the semantics and the order of the EventType enums. "
				+ "Make sure the enum changes are not causing inconsistency in the stored preferences.", concAll.startsWith(LAST_UPDATE));
	}
	
	private static String concatAll() {
		EventType[] values = EventType.values();
		return StringUtils.join(values, "|") + "|";
	}
	
	public static void main(String[] args) {
		System.out.println(concatAll());
	}
}
