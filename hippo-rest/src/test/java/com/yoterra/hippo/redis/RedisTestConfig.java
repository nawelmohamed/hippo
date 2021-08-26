package com.yoterra.hippo.redis;

import javax.annotation.PreDestroy;

import org.springframework.boot.autoconfigure.data.redis.RedisProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;

import redis.embedded.RedisServer;

@TestConfiguration
@EnableConfigurationProperties(RedisProperties.class)
public class RedisTestConfig {
	
    private RedisServer redisServer;

    @Bean
    public RedisServer redisServer(RedisProperties redisProperties) {
        this.redisServer = new RedisServer(redisProperties.getPort());
        this.redisServer.start();
        return this.redisServer;
    }

    @PreDestroy
    public void preDestroy() {
        redisServer.stop();
    }
}
