package com.yoterra.hippo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.redis.RedisProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;

import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.hippo.notifications.data.NotificationType;

@Configuration
@EnableRedisRepositories
@EnableConfigurationProperties(RedisProperties.class)
public class RedisConfig {
	
	@Bean
	public LettuceConnectionFactory redisConnectionFactory(RedisProperties redisProperties ) {
        return new LettuceConnectionFactory(redisProperties.getHost(), redisProperties.getPort());
	}

	@Bean(name = "notificationRedisSerializer")
	public RedisSerializer<Notification> notificationRedisSerializer() {
	    Jackson2JsonRedisSerializer<Notification> serializer = new Jackson2JsonRedisSerializer<Notification>(Notification.class);
		return serializer;
	}
	
	@Autowired
	@Bean(name="redisTemplate")
	public RedisTemplate<Long, Notification> redisTemplate(
			LettuceConnectionFactory connectionFactory, 
			RedisSerializer<Notification> notificationRedisSerializer) {
		
	    RedisTemplate<Long, Notification> template = new RedisTemplate<>();
	    template.setConnectionFactory(connectionFactory);
	    template.setValueSerializer(notificationRedisSerializer);
	    template.setHashValueSerializer(notificationRedisSerializer);
	    return template;
	}
	
	public static void main(String[] args) {
	    Jackson2JsonRedisSerializer<Notification> serializer = new Jackson2JsonRedisSerializer<Notification>(Notification.class);
	    byte[] bts = serializer.serialize(new Notification(NotificationType.COLLECTED_ITEM_TO_COLLECTION_FOLLOWER, 4, 5, 7));
	    String str = new String(bts);
	    System.out.println(str);
	    
	    Jackson2JsonRedisSerializer<Notification> serializer2 = new Jackson2JsonRedisSerializer<Notification>(Notification.class);
	    Notification des = serializer2.deserialize(bts);
	    System.out.println(des.getType());
 	}
}
