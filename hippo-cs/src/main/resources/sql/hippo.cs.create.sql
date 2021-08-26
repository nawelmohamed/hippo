drop schema hippocs cascade;
create schema hippocs;

create table hippocs.usercommission
(
   id bigint not null,
   status varchar (255) not null,
   created_time timestamp not null,

   affiliate_provider varchar (31) not null,	
   tracking_id varchar (255) not null,
   
   source_id varchar (255) not null,
   
   buyer_id bigint not null,
   user_id bigint not null,

   collection_id bigint not null,
   collection_item_id bigint not null,
   deal_id varchar (255),
   product_id varchar (255),
   offer_id varchar (255),
   
   amount_value decimal not null,
   amount_currency varchar (15) not null,
   
   payout_req_id bigint,
   
   primary key (id)
);

create table hippocs.payoutrequest
(
   id bigint not null,
   status varchar (255) not null,

   user_id bigint not null,
   
   created_time timestamp not null,
   
   amount_value decimal not null,
   amount_currency varchar (15) not null,
   
   processed_time timestamp,
   processed_by_id bigint,
   
   primary key (id)
);

create table hippocs.admin
(
   id bigint not null,
   status varchar (255) not null,

   created_time timestamp not null,
   
   amount_value decimal not null,
   amount_currency varchar (15) not null,
   
   processed_time timestamp,
   processed_by_id bigint,
   
   primary key (id)
);

-- https://stackoverflow.com/questions/47896049/h2-sequence-is-generating-negative-no-in-column-jpa-spring
create sequence hippocs.usercommission_id_seq start with 1 increment by 50;
create sequence hippocs.payout_id_seq start with 1 increment by 50;

alter table hippocs.usercommission add constraint UK_usercommission_aff_pvd_tracking_id unique (affiliate_provider, tracking_id);
alter table hippocs.usercommission add constraint FK_usercommission_payoutrequest foreign key (payout_req_id) references hippocs.payoutrequest on update cascade on delete cascade;


