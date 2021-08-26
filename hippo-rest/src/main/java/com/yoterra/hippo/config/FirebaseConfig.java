package com.yoterra.hippo.config;

import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;

@Configuration
public class FirebaseConfig {

	@Bean
	public FirebaseApp firebaseInit(
				@Value("${com.hippo.firebase.config.file}") String fbConfigFilePath,
				@Value("${com.hippo.firebase.database.url}") String fbDatabaseUrl
			) throws IOException{
		
		try(FileInputStream serviceAccount = new FileInputStream(fbConfigFilePath)){
			
			FirebaseOptions options = FirebaseOptions.builder()
					.setCredentials (GoogleCredentials.fromStream(serviceAccount))
					.setDatabaseUrl(fbDatabaseUrl)
					.build();
			if (FirebaseApp.getApps().isEmpty()) {
				FirebaseApp.initializeApp(options);
			}
			return FirebaseApp.getInstance();
		}
	}
	
	@Autowired
	@Bean
	public FirebaseAuth firebaseAuth(FirebaseApp app) throws IOException {
		return FirebaseAuth.getInstance(app);
	}
}
