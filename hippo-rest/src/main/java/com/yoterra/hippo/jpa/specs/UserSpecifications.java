package com.yoterra.hippo.jpa.specs;

import java.util.Collection;

import org.springframework.data.jpa.domain.Specification;

import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.entities.users.User_;

public class UserSpecifications extends SpecificationsRoot {

	public static Specification<User> usernameIs(String q) {
		return equal(User_.username, q);
	}
	
	public static Specification<User> usernameContains(String q, boolean ignoreCase) {
		return contains(User_.username, q, ignoreCase);
	}
	
	public static Specification<User> usernamePrefixIs(String q, boolean ignoreCase) {
		return prefixIs(User_.username, q, ignoreCase);
	}
	
	public static Specification<User> firstNameIs(String q) {
		return equal(User_.firstName, q);
	}
	
	public static Specification<User> firstNameContains(String q, boolean ignoreCase) {
		return contains(User_.firstName, q, ignoreCase);
	}
	
	public static Specification<User> firstNamePrefixIs(String q, boolean ignoreCase) {
		return prefixIs(User_.firstName, q, ignoreCase);
	}
	
	public static Specification<User> lastNameIs(String q) {
		return equal(User_.lastName, q);
	}
	
	public static Specification<User> lastNameContains(String q, boolean ignoreCase) {
		return contains(User_.lastName, q, ignoreCase);
	}
	
	public static Specification<User> lastNamePrefixIs(String q, boolean ignoreCase) {
		return prefixIs(User_.lastName, q, ignoreCase);
	}
	
	public static Specification<User> emailIs(String q) {
		return equal(User_.email, q);
	}
	
	public static Specification<User> emailIn(Collection<String> emails) {
		return in(User_.email,emails);
	}
}
