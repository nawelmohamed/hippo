//package com.yoterra.hippo.security;
//
//import java.sql.Timestamp;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.security.SecurityProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.AuthenticationEntryPoint;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import com.google.gson.Gson;
//
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true, prePostEnabled = true)
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//	private final Gson gson = new Gson(); 
//
//	@Autowired
//	private TokenAuthenticationFilter tokenAuthenticationFilter;
//
//	@Bean
//	public AuthenticationEntryPoint restAuthenticationEntryPoint() {
//		return (request, response, authExc) -> {
//			Map<String, Object> errorObject = new HashMap<String, Object>();
//			int errorCode = 401;
//			errorObject.put("message", authExc.getMessage());
//			errorObject.put("error", HttpStatus.UNAUTHORIZED);
//			errorObject.put("code", errorCode);
//			errorObject.put("timestamp", new Timestamp(new Date().getTime()));
//			response.setContentType("application/json;charset=UTF-8");
//			response.setStatus(errorCode);
//			response.getWriter().write(gson.toJson(errorObject));
//		};
//	}
//
//	@Bean
//	public CorsConfigurationSource corsConfigurationSource() {
//		CorsConfiguration configuration = new CorsConfiguration();
//		configuration.setAllowedOrigins(restSecProps.getAllowedOrigins());
//		configuration.setAllowedMethods(restSecProps.getAllowedMethods());
//		configuration.setAllowedHeaders(restSecProps.getAllowedHeaders());
//		configuration.setAllowCredentials(restSecProps.isAllowCredentials());
//		configuration.setExposedHeaders(restSecProps.getExposedHeaders());
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/**", configuration);
//		return source;
//	}
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		String[] allowedPublicApis = restSecProps.getAllowedPublicApis().stream().toArray(String[]::new);
//		http
//			.authenticationProvider(new AuthenticationProviderImpl())
//			.cors().configurationSource(corsConfigurationSource())
//		.and()
//			.csrf().disable()
//			.formLogin().disable()
//			.httpBasic().disable()
//			.exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint())
//		.and()
//			.addFilterBefore(tokenAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)			// ??? FIXME
//			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//		.and()
//			.authorizeRequests()
//			.antMatchers(allowedPublicApis).permitAll()
////			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//			.antMatchers("/auth").authenticated()
//			.antMatchers("/auth/register").access("authenticated && authentication.statusNoUser")
//			.anyRequest().access("authenticated && authentication.statusFull");
//	}
//	
////	@Autowired
////	public void tempHack(UserRepository userRepository) {
////		ActiveUser.init(userRepository);
//////		return ActiveUser.get();
////	}
//}
