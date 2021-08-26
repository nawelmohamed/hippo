package com.yoterra.hippo.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.yoterra.hippo.jpa.entities.Privilege;
import com.yoterra.hippo.jpa.entities.users.User;
import com.yoterra.hippo.jpa.entities.users.UserStatus;

public class UserPrincipal implements UserDetails {

	private static final long serialVersionUID = 1L;

	private final User user;

	public UserPrincipal(User user) {
		this.user = user;
	}

	@Override
	public String getUsername() {
		return user.getUsername();
	}

	@Override
	public String getPassword() {
		return null; // no passwords
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		final List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		for (final Privilege privilege : user.getPrivileges()) {
			authorities.add(new SimpleGrantedAuthority(privilege.getName()));
		}
		return authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		return !user.isStatus(UserStatus.EXPIRED);
	}
	
	@Override
    public boolean isAccountNonLocked() {
		return !user.isStatus(UserStatus.LOCKED);
    }

    @Override
    public boolean isCredentialsNonExpired() {
    	return !user.isStatus(UserStatus.CREDENTIALS_EXPIRED);
    }

    @Override
    public boolean isEnabled() {
    	return !user.isStatus(UserStatus.DISABLED);
    }

    public User getUser() {
        return user;
    }

}
