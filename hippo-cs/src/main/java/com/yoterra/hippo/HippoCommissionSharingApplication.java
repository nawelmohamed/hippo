package com.yoterra.hippo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(scanBasePackages = "com.yoterra.hippo.*", exclude = {SecurityAutoConfiguration.class})
public class HippoCommissionSharingApplication {

	public static void main(String[] args) {
		SpringApplication.run(HippoCommissionSharingApplication.class, args);
	}

}
