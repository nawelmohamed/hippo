package com.yoterra.hippo.config;

import org.apache.commons.lang3.StringUtils;
import org.springdoc.core.customizers.OpenApiCustomiser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.PathItem;
import io.swagger.v3.oas.models.parameters.HeaderParameter;
import io.swagger.v3.oas.models.parameters.Parameter;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.security.SecurityScheme.In;
import io.swagger.v3.oas.models.security.SecurityScheme.Type;

@Configuration
public class OpenApiDocsConfig {
	
	@Bean
	@Autowired
	public OpenApiCustomiser openApiCustomiser(@Value("${com.hippo.docs.openapi.server.url}") String serverUrl) {
		return openApi -> {
			
			if(StringUtils.isNotBlank(serverUrl)) {
				openApi.getServers().forEach(server -> server.setUrl(serverUrl));
			}
			
			Parameter appVersHp = new HeaderParameter()
					.name("hippo-api-version")
					.description("The API version. It's used to check the compatibility of the app and the REST server versions.")
					.example("1.0.0")
					.required(true);
			
			SecurityScheme secSchema = new SecurityScheme()
				.in(In.HEADER)
				.type(Type.HTTP)
				.scheme("bearer")
				.bearerFormat("JWT")
				.description("Authorization (Bearer - JWT) token. <br/>"
						+ 	"In testing mode the token can be created using the following format: 'testtoken:[USER_EMAIL_ADDR]'");
			
			openApi.getComponents().addSecuritySchemes("bearerAuth", secSchema);
			SecurityRequirement secReq = new SecurityRequirement().addList("bearerAuth");
					
			for (PathItem pi : openApi.getPaths().values()) {
				pi.readOperations().forEach(op -> op
						.addSecurityItem(secReq)
						.addParametersItem(appVersHp)
				);
			}
		};
	}
}
