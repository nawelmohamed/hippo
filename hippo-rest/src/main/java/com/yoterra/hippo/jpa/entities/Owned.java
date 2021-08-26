package com.yoterra.hippo.jpa.entities;

import com.yoterra.hippo.jpa.entities.users.User;

public interface Owned {

	User getOwner();
}
