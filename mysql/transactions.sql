CREATE TABLE transaction (
id	int(10) unsigned not null auto_increment comment "Id",
cid	int(10) unsigned not null comment "Customer Id",
sid	int(10) unsigned not null comment "Subscription Id",
amount decimal(10,2) comment "Amount" ,
total decimal(10,2) comment "Total",

transaction_id	varchar(255) comment "Transcation Id",
payment_id varchar(255) comment "Payment Id",
transaction_type varchar(255) comment "Transcation Type",
`status` tinyint(1) comment "Status",
created	datetime comment "Creation Time",
updated	datetime comment "Update Time",
response varchar(45),
primary key(`id`),
UNIQUE KEY (`transaction_id`),
 UNIQUE KEY (`payment_id`)	
);

start transaction;
insert into wallet values (1,2,3,4,5,10.20,20.10,"acc1","pay01","tez",
"yes",1,"2010-10-10","2010-10-10",6,"2010-10-10");
insert into transaction values(1,2,3,10.20,20.10,"acc1","pay01","tez",
1,"2010-10-10","2010-10-10","yes");
commit;


START TRANSACTION;
update wallet
set transaction_type="online"
where id=1;
update transaction
set transaction_type="online"
where id=1;
rollback;

START TRANSACTION;
insert into wallet values (2,3,4,5,6,10.20,20.10,"acc1","pay01","paytm",
"yes",1,"2010-10-10","2010-10-10",6,"2010-10-10");
insert into transaction values(2,3,4,10.20,20.10,"acc1","pay01","paytm",
1,"2010-10-10","2010-10-10","yes");
savepoint a;
update wallet
set transaction_type="online"
where id=2;
update transaction
set transaction_type="online"
where id=2;
rollback to savepoint a;

GRANT SELECT,UPDATE,DELETE ON wallet TO 'maithri'@'%';
GRANT SELECT ON wallet TO 'maithri'@'%';

delete from wallet where id=2;

REVOKE SELECT ON wallet FROM 'maithri'@'%';

SET SQL_SAFE_UPDATES = 0;
delete from wallet;

insert into wallet values (6,7,8,9,0,10.20,20.10,"acc1","pay01","paytm",
"yes",1,"2010-10-10","2010-10-10",6,"2010-10-10");

update wallet
set transaction_type="COD"
where id=6;

rename table customer_wallet TO wallet;