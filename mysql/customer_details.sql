select mc.mccsid as `mccsid`,mc.name as `Customer_name`,mc.mobile as `Mobile`,
ma.name as `Apartment_name`,mb.name as `Block_name`,mf.name as `Flat_name`,
mc.created as `Start date`,mc.referral_contact as `Referral Contact`,
mw.total as `Wallet Total`,from_unixtime(mw.created) as `Last Recharge`
from mcart_customers as mc inner join 
mc_apartment as ma on mc.acode=ma.id inner join
mc_block as mb on mc.bcode=mb.id inner join
mc_flat as mf on mc.fcode=mf.id inner join
mcart_wallet as mw on mc.mccsid=mw.mccsid
where mw.id in (select max(id) from mcart_wallet group by mccsid)


select * from mcart_wallet where id in (
select max(id) from mcart_wallet group by mccsid);


select case when transaction_type="Deduction" then "Purchases" else transaction_type end from mcart_wallet
