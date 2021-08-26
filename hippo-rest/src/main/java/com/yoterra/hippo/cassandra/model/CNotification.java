package com.yoterra.hippo.cassandra.model;

import java.time.Instant;

import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyClass;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyColumn;
import org.springframework.data.cassandra.core.mapping.Table;

import com.yoterra.hippo.notifications.data.Notification;
import com.yoterra.hippo.notifications.data.NotificationType;

@Table(value = "notifications")
public class CNotification {

	public static CNotification from(Notification n) {
		CNotification cn = new CNotification();
		KeyClass id = new KeyClass();
		id.timestamp = Instant.ofEpochMilli(n.getTimestamp());
		id.user = n.getReceiverId();
		id.event = n.getEventId();
		id.type = n.getType();
		cn.id = id;
		cn.seen = n.isSeen();
		return cn;
	}
	
	public CNotification() { }
	
	@PrimaryKey
    private KeyClass id;
	
	@Column("seen")
	private boolean seen;

    @PrimaryKeyClass
    public static class KeyClass {
        @PrimaryKeyColumn(ordinal = 0, name = "user", type = PrimaryKeyType.PARTITIONED)
        private long user;
    
        @PrimaryKeyColumn(ordinal = 1, name = "timestamp", type = PrimaryKeyType.CLUSTERED)
        private Instant timestamp;
        
        @PrimaryKeyColumn(ordinal = 2, name = "event", type = PrimaryKeyType.CLUSTERED)
        private long event;
        
        @PrimaryKeyColumn(ordinal = 3, name = "type", type = PrimaryKeyType.CLUSTERED)
        private NotificationType type;
        
        public long getUser() {
			return user;
		}
        
        public void setUser(long user) {
			this.user = user;
		}
        
        public Instant getTimestamp() {
			return timestamp;
		}
        public void setTimestamp(Instant timestamp) {
			this.timestamp = timestamp;
		}
        
        public long getEvent() {
			return event;
		}
        
        public void setEvent(long event) {
			this.event = event;
		}

		public NotificationType getType() {
			return type;
		}

		public void setType(NotificationType type) {
			this.type = type;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + (int) (event ^ (event >>> 32));
			result = prime * result + ((timestamp == null) ? 0 : timestamp.hashCode());
			result = prime * result + ((type == null) ? 0 : type.hashCode());
			result = prime * result + (int) (user ^ (user >>> 32));
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			KeyClass other = (KeyClass) obj;
			if (event != other.event)
				return false;
			if (timestamp == null) {
				if (other.timestamp != null)
					return false;
			} else if (!timestamp.equals(other.timestamp))
				return false;
			if (type != other.type)
				return false;
			if (user != other.user)
				return false;
			return true;
		}
    }
	
	
	public KeyClass getId() {
		return id;
	}
	
	public void setId(KeyClass id) {
		this.id = id;
	}
	
	public boolean isSeen() {
		return seen;
	}
	
	public void setSeen(boolean seen) {
		this.seen = seen;
	}
	
	public Notification toNotification() {
		long ts = this.id.timestamp.toEpochMilli();
		Notification n = new Notification(this.id.getType(), this.id.user, this.id.event, ts);
		n.setSeen(isSeen());
		return n;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CNotification other = (CNotification) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
