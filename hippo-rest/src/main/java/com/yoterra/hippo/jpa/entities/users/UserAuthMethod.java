package com.yoterra.hippo.jpa.entities.users;
//package com.yoterra.hippo.jpa.entities;
//
//import com.google.firebase.auth.FirebaseToken;
//import com.yoterra.commons.FIXME;
//
//public enum UserAuthMethod {
//	EMAIL_PASSWORD(null), 
//	EMAIL_LINK(null), 
//	PHONE(null), 
//	GOOGLE("google.com"), 
//	FACEBOOK("facebook.com"),
//	APPLE(null);
//	
//	private final String issuer;
//	private static final UserAuthMethod [] VALS = UserAuthMethod.values();
//	
//	private UserAuthMethod(String issuer) {
//		this.issuer = issuer;
//	}
//	
//	public static UserAuthMethod extract (FirebaseToken token){
//		FIXME.warn("Finish");
////		Map<String, ?> firebase = Opt.get(token.getClaims(), m->m.get("firebase"));
////		if(BooleanUtils.isTrue(emPass))
//			return EMAIL_PASSWORD;
//		
////		return FIXME.err("Not implemented");
//	}
////	public static UserAuthMethod findByIssuer(String issuer){
////		for (UserAuthMethod m : VALS) {
////			if(Objects.equals(issuer, m.getIssuer())) {
////				return m;
////			}
////		}
////		throw new UnsupportedOperationException("Unsupported issuer: " + issuer);
////	}
//	
//	public String getIssuer() {
//		return issuer;
//	}
//}
