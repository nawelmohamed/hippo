package com.yoterra.hippo.config;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.DefaultAsyncHttpClientConfig;
import org.asynchttpclient.Dsl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.yoterra.hippo.annotations.profiles.Remote;

@Configuration
@Remote
public class AsyncHTTPClientConfig {
	
	@Value("${image.upload.server.client.connect-timeout}")
	private int conectTimeout;
	
	@Value("${image.upload.server.client.read-timeout}")
	private int readTimeout;
	
	@Value("${image.upload.server.client.request-timeout}")
	private int requestTimeout;
	
	@Value("${image.upload.server.client.async-threads}")
	private int asyncThreads;

	@Bean(destroyMethod = "close")
	public AsyncHttpClient asyncHttpClient() {
        DefaultAsyncHttpClientConfig.Builder config = Dsl
            .config()
            .setConnectTimeout(conectTimeout)
            .setReadTimeout(readTimeout)
            .setRequestTimeout(requestTimeout)
            .setIoThreadsCount(asyncThreads);

        return Dsl.asyncHttpClient(config);
	}

}
