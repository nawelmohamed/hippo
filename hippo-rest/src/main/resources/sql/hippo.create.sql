drop schema hippo cascade;
create schema hippo;
create table hippo.brand
(
   id bigint not null,
   verified boolean not null,
   primary key (id)
);
create table hippo.collection
(
   id bigint not null,
   disabled boolean,
   created timestamp not null,
   description TEXT not null,
   image_url varchar (128),
   modified timestamp,
   name varchar (255) not null,
   type varchar (255) not null,
   owner_id bigint,
   primary key (id)
);
create table hippo.collection_item
(
   type varchar (31) not null,
   id bigint not null,
   disabled boolean,
   added timestamp,
   collection_id bigint not null,
   deal_id VARCHAR (32),
   product_id VARCHAR (32),
   primary key (id)
);
create table hippo.comment
(
   type varchar (31) not null,
   id bigint not null,
   disabled boolean,
   content TEXT not null,
   created timestamp,
   modified timestamp,
   author_id bigint not null,
   brand_id bigint,
   collection_id bigint,
   collection_item_id bigint,
   deal_id VARCHAR (32),
   product_id VARCHAR (32),
   store_id bigint,
   primary key (id)
);
create table hippo.deal
(
   id VARCHAR (32) not null,
   status integer not null,
   primary key (id)
);
create table hippo.event
(
   type varchar (2) not null,
   id bigint not null,
   processed boolean,
   timestamp timestamp,
   collection_item_id bigint,
   collection_id bigint,
   comment_id bigint,
   follower_id bigint,
   deal_id VARCHAR (32),
   product_id VARCHAR (32),
   invitation_id bigint,
   like_id bigint,
   primary key (id)
);
create table hippo.follower
(
   type varchar (31) not null,
   id bigint not null,
   disabled boolean,
   date timestamp,
   follower_id bigint not null,
   
   collection_id bigint,
   user_id bigint,
   
   np_vector bigint not null,
   
   store_id bigint,
   brand_id bigint,
   primary key (id)
);
create table hippo.invitation
(
   id bigint not null,
   inviter_id bigint not null,
   invited_email_address varchar (255),
   date timestamp not null,
   status varchar (31) not null,
   clicked boolean default false,
   disabled boolean,
   primary key (id)
);
create table hippo.like_
(
   type varchar (31) not null,
   id bigint not null,
   disabled boolean,
   created timestamp,
   author_id bigint not null,
   brand_id bigint,
   collection_id bigint,
   collection_item_id bigint,
   deal_id VARCHAR (32),
   product_id VARCHAR (32),
   store_id bigint,
   primary key (id)
);
create table hippo.privilege
(
   id integer not null,
   name varchar (255) not null,
   primary key (id)
);
create table hippo.product
(
   id VARCHAR (32) not null,
   status integer not null,
   primary key (id)
);
create table hippo.store
(
   id bigint not null,
   verified boolean not null,
   primary key (id)
);
create table hippo.taxonomy_element
(
   id bigint not null,
   level integer not null,
   name varchar (255) not null,
   parent_id bigint,
   primary key (id)
);
create table hippo.user
(
   id bigint not null,
   disabled boolean,
   email varchar (255) not null,
   first_name varchar (255) not null,
   last_name varchar (255),
   image_url varchar (128),
   username varchar (255) not null,
   phone_number varchar (63),
   
   ap_uid varchar (127) not null,
   
   tagline varchar (127),
   facebook_page varchar (255),
   twitter_page varchar (255),
   instagram_page varchar (255),
   tiktok_page varchar (255),
   reddit_page varchar (255),
   youtube_page varchar (255),
   website_page varchar (255),
   
   primary key (id)
);

create table hippo.client_app
(
	id bigint not null,
	user_id bigint not null,
  	messaging_token varchar (255),
	primary key (id)
);

create table hippo.user_preferences
(
   user_id bigint not null,
   np_vector bigint not null,
   primary key (user_id)
);
create table hippo.user_favorite
(
   type varchar (2) not null,
   id bigint not null,
   disabled boolean,
   user_id bigint not null,
   brand_id bigint,
   taxonomy_element_id bigint,
   store_id bigint,
   primary key (id)
);

create table hippo.user_privileges
(
   user_id bigint not null,
   privilege_id integer not null,
   primary key
   (
      user_id,
      privilege_id
   )
);
create table hippo.user_statuses
(
   user_id bigint not null,
   statuses integer
);

create table hippo.batch_task
(
	type varchar (2) not null,
	id bigint not null,
	processed boolean,
	submitted_at timestamp not null,
	process_started_at timestamp,
	process_ended_at timestamp,
	
	client_app_id bigint,
	skipped boolean,
	skip_reason text,
	
	primary key (id)
);

alter table hippo.privilege add constraint UK_h7iwbdg4ev8mgvmij76881tx8 unique (name);
alter table hippo.user add constraint UK_ob8kqyqqgmefl0aco34akdtpe unique (email);
alter table hippo.user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username);
alter table hippo.user add constraint UK_user_apid_unique unique (ap_uid);
alter table hippo.client_app add constraint UK_client_app_user_messaging_token_unique unique (user_id, messaging_token);
alter table hippo.collection add constraint FK3umeo8njy8ae7cplyqmxpekc6 foreign key (owner_id) references hippo.user on delete cascade on update cascade;
alter table hippo.collection_item add constraint FKjo602vny7wm9snime4wm98y5k foreign key (collection_id) references hippo.collection on delete cascade on update cascade;
alter table hippo.collection_item add constraint FKctcix3bwbippxtypbugsebjow foreign key (deal_id) references hippo.deal on delete cascade on update cascade;
alter table hippo.collection_item add constraint FKss0b3h6c551urmuaj9h41ddmy foreign key (product_id) references hippo.product on delete cascade on update cascade;
alter table hippo.comment add constraint FKh1gtv412u19wcbx22177xbkjp foreign key (author_id) references hippo.user on delete cascade on update cascade;
alter table hippo.comment add constraint FKloi3hsg53wv8t8y3er20kwu7l foreign key (brand_id) references hippo.brand on delete cascade on update cascade;
alter table hippo.comment add constraint FKhyj5l48lfjyecy8d5pxp55oh2 foreign key (collection_id) references hippo.collection on delete cascade on update cascade;
alter table hippo.comment add constraint FKfmg4g9yli0xo83o3yjeog3q2u foreign key (collection_item_id) references hippo.collection_item on delete cascade on update cascade;
alter table hippo.comment add constraint FK4rrh7tw247vfsn29qqa6f6vfh foreign key (deal_id) references hippo.deal on delete cascade on update cascade;
alter table hippo.comment add constraint FKm1rmnfcvq5mk26li4lit88pc5 foreign key (product_id) references hippo.product on delete cascade on update cascade;
alter table hippo.comment add constraint FKgotffi66bqjpkid9st6lsq9uj foreign key (store_id) references hippo.store on delete cascade on update cascade;
alter table hippo.event add constraint FKrwbw0m3sc69lmwsoe0fxgdl2f foreign key (collection_item_id) references hippo.collection_item on delete cascade on update cascade;
alter table hippo.event add constraint FKo3djrsud8c6e4nk0f3dgm5iku foreign key (collection_id) references hippo.collection on delete cascade on update cascade;
alter table hippo.event add constraint FKglmuvwbtdlhha3hqjd24gehq8 foreign key (comment_id) references hippo.comment on delete cascade on update cascade;
alter table hippo.event add constraint FK95xx73yg03ad40i1erdxc58di foreign key (follower_id) references hippo.follower on delete cascade on update cascade;
alter table hippo.event add constraint FKng2ob1111ww2imt1gj4khbh7h foreign key (deal_id) references hippo.deal on delete cascade on update cascade;
alter table hippo.event add constraint FK2jolct24h7u660r2kpnmod6uq foreign key (product_id) references hippo.product on delete cascade on update cascade;
alter table hippo.event add constraint FKdx4la4w4kmecqf0uim0uc7o94 foreign key (invitation_id) references hippo.invitation on delete cascade on update cascade;
alter table hippo.event add constraint FK6ls4lj3i4f750hgxkwe9b9enj foreign key (like_id) references hippo.like_ on delete cascade on update cascade;
alter table hippo.follower add constraint FK2tkyv0rmjw4t203ipp5tdob4a foreign key (follower_id) references hippo.user on delete cascade on update cascade;
alter table hippo.follower add constraint FKo2tbguih9dmx6n4spq9s5cdrt foreign key (collection_id) references hippo.collection on delete cascade on update cascade;
alter table hippo.follower add constraint FKr99xseniq62g6519wn3i3duak foreign key (user_id) references hippo.user on delete cascade on update cascade;
alter table hippo.follower add constraint FK_follower_store_id foreign key (store_id) references hippo.store on delete cascade on update cascade;
alter table hippo.follower add constraint FK_follower_brand_id foreign key (brand_id) references hippo.brand on delete cascade on update cascade;
alter table hippo.invitation add constraint FKkf6tak68puup1gagenju00sa8 foreign key (inviter_id) references hippo.user on delete cascade on update cascade;
alter table hippo.like_ add constraint FK83j3kolfr52ivpkx1vias8ilh foreign key (author_id) references hippo.user on delete cascade on update cascade;
alter table hippo.like_ add constraint FKk9ul37fht701n0ntf2jjh74qg foreign key (brand_id) references hippo.brand on delete cascade on update cascade;
alter table hippo.like_ add constraint FKc11tesp7l7xye5gd89to4rtpl foreign key (collection_id) references hippo.collection on delete cascade on update cascade;
alter table hippo.like_ add constraint FKm92kqngyc2rbe3iwwodfiqscv foreign key (collection_item_id) references hippo.collection_item on delete cascade on update cascade;
alter table hippo.like_ add constraint FKs4snghjyvlmiv2594jpjpwkbx foreign key (deal_id) references hippo.deal on delete cascade on update cascade;
alter table hippo.like_ add constraint FKiwjpnl6p71tiqfckma3149jya foreign key (product_id) references hippo.product on delete cascade on update cascade;
alter table hippo.like_ add constraint FKtdellccqx1jhv48epm3s20r2p foreign key (store_id) references hippo.store on delete cascade on update cascade;
alter table hippo.taxonomy_element add constraint FK7jbuqiywqugxb2p1xf3k7p5fq foreign key (parent_id) references hippo.taxonomy_element on delete cascade on update cascade;
alter table hippo.user_preferences add constraint FK_user_preferences_to_user foreign key (user_id) references hippo.user on delete cascade on update cascade;
alter table hippo.client_app add constraint FK_client_app_to_user foreign key (user_id) references hippo.user on delete cascade on update cascade;
alter table hippo.user_favorite add constraint FK2eajkverwrmx1fdy0oovpxrx0 foreign key (user_id) references hippo.user on delete cascade on update cascade;
alter table hippo.user_favorite add constraint FKs760nw2n5115bfi3y420y5t6y foreign key (brand_id) references hippo.brand on delete cascade on update cascade;
alter table hippo.user_favorite add constraint FK1b087sx1wuyujdnwoth597f3c foreign key (taxonomy_element_id) references hippo.taxonomy_element on delete cascade on update cascade;
alter table hippo.user_favorite add constraint FKfbs70ljg86kgll6c69mc2rss7 foreign key (store_id) references hippo.store on delete cascade on update cascade;
alter table hippo.user_privileges add constraint FK6rrv8daxxrco69tdpfu3a29le foreign key (privilege_id) references hippo.privilege;
alter table hippo.user_privileges add constraint FKhkt8ag37wvaq72wjkg453otlk foreign key (user_id) references hippo.user;
alter table hippo.user_statuses add constraint FK4gouagupwvopapqelc7x19req foreign key (user_id) references hippo.user;
alter table hippo.batch_task add constraint FK_batch_tast_client_app_id foreign key (client_app_id) references hippo.client_app on delete cascade on update cascade;

-- https://stackoverflow.com/questions/47896049/h2-sequence-is-generating-negative-no-in-column-jpa-spring
create sequence hippo.collection_item_sequence start with 1 increment by 50;
create sequence hippo.collection_sequence start with 1 increment by 50;
create sequence hippo.comment_sequence start with 1 increment by 50;
create sequence hippo.event_sequence start with 1 increment by 50;
create sequence hippo.follower_sequence start with 1 increment by 50;
create sequence hippo.invitation_sequence start with 1 increment by 50;
create sequence hippo.like_sequence start with 1 increment by 50;
create sequence hippo.privilege_sequence start with 1 increment by 50;
create sequence hippo.taxonomy_element_sequence start with 1 increment by 50;
create sequence hippo.user_favorite_sequence start with 1 increment by 50;
create sequence hippo.user_sequence start with 1 increment by 50;
create sequence hippo.client_app_sequence start with 1 increment by 50;
create sequence hippo.batch_task_sequence start with 1 increment by 50;

