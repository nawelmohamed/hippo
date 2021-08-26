//package com.yoterra.hippo.config;
//
//import org.apache.coyote.http11.AbstractHttp11Protocol;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
//import org.springframework.boot.web.server.WebServerFactoryCustomizer;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class TomcatConfig {
//	
//	@Bean
//	public WebServerFactoryCustomizer<TomcatServletWebServerFactory> tomcatServerCustomizer(
//			@Value("${server.tomcat.max-swallow-size:-1}") int maxSwallowSize) {
//
//		WebServerFactoryCustomizer<TomcatServletWebServerFactory> customizer = factory -> {
//			factory.addConnectorCustomizers(connector -> {
//				if (connector.getProtocolHandler() instanceof AbstractHttp11Protocol) {
//					AbstractHttp11Protocol<?> p = (AbstractHttp11Protocol<?>) connector.getProtocolHandler();
//					p.getMaxSwallowSize();
//				}
//			});
//		};
//		
//		return customizer;
//	}
//}
