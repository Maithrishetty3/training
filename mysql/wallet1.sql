REVOKE DELETE ON wallet FROM 'maithri'@'%';
delete from wallet where id=2;

delete from wallet where id=2;

SET SQL_SAFE_UPDATES = 0;
delete from wallet;

update wallet
set transaction_type="COD"
where id=2;

SET SQL_SAFE_UPDATES = 0;
update payment.wallet set reversal='Paytm';

rename table wallet TO customer_wallet;