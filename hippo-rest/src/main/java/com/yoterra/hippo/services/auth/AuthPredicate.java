package com.yoterra.hippo.services.auth;

import java.util.Objects;
import java.util.function.Predicate;
import java.util.function.Supplier;

import org.springframework.security.access.AccessDeniedException;

@FunctionalInterface
public interface AuthPredicate extends Predicate<Void> {

//	default void authorize() {
//		if (!test(null))
//			throw new AccessDeniedException("");
//	}
	
	default void authorize(String msg) {
		if (!test(null))
			throw new AccessDeniedException(msg);
	}
	
	default <E extends Exception> void authorize(Supplier<E> excSupplier) throws E {
		if (!test(null))
			throw excSupplier.get();
	}
	
	default AuthPredicate and(AuthPredicate other) {
		Objects.requireNonNull(other);
		return (t) -> test(t) && other.test(t);
	}

	default AuthPredicate negate() {
		return (t) -> !test(t);
	}

	default AuthPredicate or(AuthPredicate other) {
		Objects.requireNonNull(other);
		return (t) -> test(t) || other.test(t);
	}
}
