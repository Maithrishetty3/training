create table sales_order_item(
item_id	int(10) unsigned not null auto_increment,
order_id int(10) unsigned not null default 0,
parent_item_id	int(10) unsigned,	
quote_item_id	int(10) unsigned,	
store_id	smallint(5) unsigned,
created_at	timestamp not null default CURRENT_TIMESTAMP,	
updated_at	timestamp	not null default CURRENT_TIMESTAMP	on update CURRENT_TIMESTAMP,
product_id	int(10) unsigned,
product_type	varchar(255),	
product_options	text,	
weight	decimal(12,4) default 0,	
is_virtual	smallint(5) unsigned,	
sku	varchar(255),	
name	varchar(255),	
description	text,	
applied_rule_ids	text,	
additional_data	text,	
is_qty_decimal	smallint(5) unsigned,	
no_discount	smallint(5) unsigned not null default 0,	
qty_backordered	decimal(12,4) default 0,	
qty_canceled	decimal(12,4)	default 0,	
qty_invoiced	decimal(12,4) default 0,	
qty_ordered	decimal(12,4) default 0,	
qty_refunded	decimal(12,4) default 0,	
qty_shipped	decimal(12,4) default 0,	
base_cost	decimal(12,4) default 0,	
price	decimal(12,4)	not null default 0,	
base_price	decimal(12,4)	not null default 0,	
original_price	decimal(12,4),	
base_original_price	decimal(12,4),	
tax_percent	decimal(12,4) default 0,	
tax_amount	decimal(12,4) default 0,	
Foreign key (order_id) references sales_order(entity_id),
primary key(item_id)
);


alter table sales_order_item
ADD column subscription_info INT(11),
ADD column subscription_type TEXT,
ADD column no_of_days TEXT;

alter table sales_order_item drop foreign key sales_order_item_ibfk_1;

alter table sales_order_item 
add foreign key (order_id) references sales_order(entity_id);


insert into sales_order_item values (
2,1,5,7,1,'2018-12-01 06:55:20','2018-12-01 06:55:20',9,"dress","color",12.0123,1,"sandesh","maithri","this","me","how",1,2,11.1245,34.1234,67.1234,987.5673,34.5673,35.7890,121.4567,23.4567,56.1234,123.9876,23.4567,56.1234,123.9876,11,"shirt","top"
);



