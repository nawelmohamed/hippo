package com.yoterra.hippo.jpa.specs;
import java.sql.Timestamp;
import java.util.Collection;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;

public class SpecificationsRoot {
	
	protected static String prepareLikeString(String value, char escapeChar, boolean pref, boolean suff){
		String e = "" + escapeChar;
		value = StringUtils.replace(value, e, e+e);
		value = StringUtils.replace(value, "%", e+'%');
		value = StringUtils.replace(value, "_", e+'_');
		return (suff ? "%" : "") + value + (pref ? "%" : "");
	}
	
	protected static <T> Specification<T> before(final SingularAttribute<T, Timestamp> tfld, final Timestamp t) {
		return (root, cq, cb) -> cb.lessThan(root.get(tfld), t);
	}
	
	protected static <T> Specification<T> notAfter(final SingularAttribute<T, Timestamp> tfld, final Timestamp t) {
		return (root, cq, cb) -> cb.lessThanOrEqualTo(root.get(tfld), t);
	}
	
	protected static <T> Specification<T> after(final SingularAttribute<T, Timestamp> tfld, final Timestamp t) {
		return (root, cq, cb) -> cb.greaterThan(root.get(tfld), t);
	}
	
	protected static <T> Specification<T> notBefore(final SingularAttribute<T, Timestamp> tfld, final Timestamp t) {
		return (root, cq, cb) -> cb.greaterThanOrEqualTo(root.get(tfld), t);
	}
	
	protected static <T> Specification<T> maxSpec(final SingularAttribute<T, Integer> fld, final int max) {
		return (root, cq, cb) -> cb.lessThanOrEqualTo(root.get(fld), max);
	}
	
	protected static <T> Specification<T> maxSpec(final SingularAttribute<T, Long> fld, final long max) {
		return (root, cq, cb) -> cb.lessThanOrEqualTo(root.get(fld), max);
	}
	
	protected static <T> Specification<T> maxSpec(final SingularAttribute<T, Float> fld, final float max) {
		return (root, cq, cb) -> cb.lessThanOrEqualTo(root.get(fld), max);
	}
	
	protected static <T> Specification<T> maxSpec(final SingularAttribute<T, Double> fld, final double max) {
		return (root, cq, cb) -> cb.lessThanOrEqualTo(root.get(fld), max);
	}
	
	protected static <T> Specification<T> minSpec(final SingularAttribute<T, Integer> fld, final int min) {
		return (root, cq, cb) -> cb.greaterThanOrEqualTo(root.get(fld), min);
	}
	
	protected static <T> Specification<T> minSpec(final SingularAttribute<T, Long> fld, final long min) {
		return (root, cq, cb) -> cb.greaterThanOrEqualTo(root.get(fld), min);
	}
	
	protected static <T> Specification<T> minSpec(final SingularAttribute<T, Float> fld, final float min) {
		return (root, cq, cb) -> cb.greaterThanOrEqualTo(root.get(fld), min);
	}
	
	protected static <T> Specification<T> minSpec(final SingularAttribute<T, Double> fld, final double min) {
		return (root, cq, cb) -> cb.greaterThanOrEqualTo(root.get(fld), min);
	}
	
	public static <T> Specification<T> prefixIs(
			final SingularAttribute<T, String> field, final String pref, boolean ignoreCase) {
		return (root, cq, cb) -> prefixIsLike(root.get(field), pref, cb, ignoreCase);
	}
	
	public static <T,M> Specification<T> prefixIs(
			final SingularAttribute<T, M> parent, final SingularAttribute<M, String> field, final String pref, boolean ignoreCase) {
		return (root, cq, cb) -> prefixIsLike(root.get(parent).get(field), pref, cb, ignoreCase);
	}
	
	public static <T> Specification<T> contains(final SingularAttribute<T, String> field, final String k, boolean ignoreCase) {
		return (root, cq, cb) -> containsLike(root.get(field), k, cb, ignoreCase);
	}
	
	public static <T,M> Specification<T> contains(final SingularAttribute<T, M> parent, final SingularAttribute<M, String> field, final String k, boolean ignoreCase) {
		return (root, cq, cb) -> containsLike(root.get(parent).get(field), k, cb, ignoreCase);
	}
	
	public static <T,S,M> Specification<T> contains(final SingularAttribute<T, S> l, final SingularAttribute<S, M> m, 
			final SingularAttribute<M, String> r, final String k, boolean ignoreCase) {
		return(root, cq, cb) -> containsLike(root.get(l).get(m).get(r), k, cb, ignoreCase);
	}
	
	public static <T> Specification<T> exists(final SingularAttribute<T, String> field, final boolean b) {
		return (root, cq, cb) -> pathExists(root.get(field), cb, b);
	}
	
	public static <T,M> Specification<T> exists(final SingularAttribute<T, M> parent, final SingularAttribute<M, String> field, boolean b) {
		return (root, cq, cb) -> pathExists(root.get(parent).get(field), cb, b);
	}
	
	public static <T,S,M> Specification<T> exists(final SingularAttribute<T, S> l, final SingularAttribute<S, M> m, 
			final SingularAttribute<M, String> r, final boolean b) {
		return (root, cq, cb) -> pathExists(root.get(l).get(m).get(r), cb, b);
	}
	
	public static <T,V> Specification<T> isMember(final ListAttribute<T, V> field, final V v) {
		return (root, cq, cb) -> cb.isMember(v, root.get(field));
	}
	
	public static <T,V> Specification<T> isNotMember(final ListAttribute<T, V> field, final V v) {
		return (root, cq, cb) -> cb.isNotMember(v, root.get(field));
	}
	
	public static <T> Predicate containsLike(Path<String> path, String k, CriteriaBuilder cb, boolean ignoreCase) {
		Expression<String> exp = ignoreCase ? cb.lower(path) : path;
		k = ignoreCase ? k = StringUtils.lowerCase(k) : k; 
		
		return cb.like(exp, prepareLikeString(k, '!', true, true), '!');
	}
	
	public static <T> Predicate prefixIsLike(Path<String> path, String k, CriteriaBuilder cb, boolean ignoreCase) {
		Expression<String> exp = ignoreCase ? cb.lower(path) : path;
		k = ignoreCase ? k = StringUtils.lowerCase(k) : k; 
		return cb.like(exp, prepareLikeString(k, '!', true, false), '!');
	}
	
	public static <T> Predicate pathExists(Path<String> path, CriteriaBuilder cb, boolean b) {
		Predicate exists = cb.and(cb.isNotNull(path), cb.not(cb.equal(path, "")));
		return b ? exists : cb.not(exists);
	}
	
	public static <T,V> Specification<T> isNull(final SingularAttribute<T, V> field) {
		return (root, cq, cb) -> cb.isNull(root.get(field));
	}
	
	public static <T,V> Specification<T> isNotNull(final SingularAttribute<T, V> field) {
		return (root, cq, cb) -> cb.isNotNull(root.get(field));
	}
	
	public static <T,V> Specification<T> equal(final SingularAttribute<T, V> field, final V v) {
		return (root, cq, cb) -> cb.equal(root.get(field), v);
	}
	
	public static <T,V,M, ME extends M> Specification<T> equal(final SingularAttribute<T, ME> parent, final SingularAttribute<M, V> field, final V v) {
		return (root, cq, cb)  -> cb.equal(root.get(parent).get(field), v);
	}		
	
	public static <L, M,ME extends M, R,RE extends R, V> Specification<L> equal(final SingularAttribute<L, ME> l, final SingularAttribute<M, RE> m, final SingularAttribute<R,V> r, final V v) {
		return (root, cq, cb) -> cb.equal(root.get(l).get(m).get(r), v);
	}
	
	public static <T,V> Specification<T> bool(final SingularAttribute<T, Boolean> field, final boolean v) {
		return (root, cq, cb) -> v ? cb.isTrue(root.get(field)) : cb.isFalse(root.get(field));
	}
	
	public static <T> Predicate equal(Path<String> path, String k, CriteriaBuilder cb) {
		return cb.equal(path, k);
	}
	
	public static <T> Specification<T> typeIs(Class<? extends T> type) {
		return (root, cq, cb) -> cb.equal(root.type(), cb.literal(type));
	}
	
	public static <T,V,M> Specification<T> bool(final SingularAttribute<T, M> parent, final SingularAttribute<M, Boolean> field, final boolean v) {
		return (root, cq, cb) -> {
			Path<Boolean> p = root.get(parent).get(field);
			return v ? cb.isTrue(p) : cb.isFalse(p);
		};
	}
	
	public static <T,V,M,M1> Specification<T> bool(final SingularAttribute<T, M> grandParent, final SingularAttribute<M, M1> parent, final SingularAttribute<M1, Boolean> field, final boolean v) {
		return (root, cq, cb) -> {
			Path<Boolean> p = root.get(grandParent).get(parent).get(field);
			return v ? cb.isTrue(p) : cb.isFalse(p);
		};
	}
	
	public static <T,V> Specification<T> in(final SingularAttribute<T, V> field, final Collection<V> v) {
		return (root, cq, cb) -> root.get(field).in(v);
	}
}
