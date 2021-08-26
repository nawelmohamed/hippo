package com.yoterra.hippo.jpa.entities.users;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.yoterra.hippo.jpa.entities.ActiveEntity;

@Entity
@Table(schema = "HIPPO", name = "CLIENT_APP")
@SequenceGenerator(schema = "hippo", name="ae_sec_gen", sequenceName = "client_app_sequence", initialValue = 1, allocationSize = 50)
@Where(clause = "id > 0")
public class ClientApp extends ActiveEntity{

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @Column(updatable = false)
	private String messagingToken;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getMessagingToken() {
		return messagingToken;
	}

	public void setMessagingToken(String messagingToken) {
		this.messagingToken = messagingToken;
	}
}
