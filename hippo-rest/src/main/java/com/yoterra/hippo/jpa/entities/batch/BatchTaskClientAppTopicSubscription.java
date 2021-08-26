package com.yoterra.hippo.jpa.entities.batch;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.yoterra.hippo.jpa.entities.users.ClientApp;

@Entity
@DiscriminatorValue("ts")
public class BatchTaskClientAppTopicSubscription extends BatchTask{

	@ManyToOne
	@JoinColumn(name = "client_app_id")
	private ClientApp clientApp;
	
	public ClientApp getClientApp() {
		return clientApp;
	}

	public void setClientApp(ClientApp clientApp) {
		this.clientApp = clientApp;
	}
}
