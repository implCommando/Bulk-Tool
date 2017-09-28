require 'mysql2'
require 'logger'
require 'yaml'
current_dir = File.expand_path(File.dirname(__FILE__))
crawler = Mysql2::Client.new(:host => "backend-db9.taboolasyndication.com", :username =>'trc', :password =>'taboola', database:'analysts', :flags => Mysql2::Client::MULTI_STATEMENTS)  
begin
	insertSQL = <<SQL
	use analysts;
	set lock_wait_timeout=30;	
	truncate table modes_stats_last_30_day;
	
	commit;
	
	truncate table modes_stats_last_3_day;
	
	commit;
	
	insert into modes_stats_last_30_day
	(publisher_id, publisher_name, mode, page_type, provider_type, platform, client_placement, views, clicks, mode_type, revenue, update_time)
	select a.publisher_id, a.pub_name, a.mode, pt.page_type_name, a.provider_type, bp.code, a.client_placement, a.views, a.clicks,  a.mode_type, sum(a.usd_revenue) revenue, now() as update_time from 
	(select b.*, b.revenue*cc.rate as usd_revenue from (
	select publisher_id, p1.name as pub_name, substring_index(substring_index(client_ui_mode, ':',1),'_$_',-1) mode, source_type, provider_type, platform_id, client_placement,  sum(num_views) views, sum(num_clicks) clicks, sum(revenue) revenue, p1.currency,'publisher_level' as mode_type from rawdata.platform_placement_aggregation ppa1
	join trc.publishers p1 on ppa1.publisher_id=p1.id
	where data_timestamp>now()-interval 31 day
	and client_ui_mode not like '%pub=%'
	and client_ui_mode not like '%rest-api%'
	and client_ui_mode not like '%N/A%'
	group by 1,2,3,4,5,6, p1.currency
	having pub_name not like 'msn-%'  and mode not like '%tracking%'
	union
	select p2.id as publisher_id, pub_name, mode, source_type, provider_type, platform_id, client_placement, views, clicks, revenue, a.currency, 'network_solution' from (
	select publisher_id, substring_index(substring_index(ppa2.client_ui_mode, 'pub=',-1),':',1) as pub_name, substring_index(substring_index(client_ui_mode, ':pub=',1),'_$_',-1) mode, source_type, provider_type, platform_id, client_placement, currency, sum(num_views) views, sum(num_clicks) clicks, sum(revenue) revenue from rawdata.platform_placement_aggregation ppa2
	join trc.publishers p3 on p3.id=publisher_id
	where data_timestamp>now()-interval 31 day
	and client_ui_mode like '%pub=%'
	and client_ui_mode not like '%rest-api%'
	and client_ui_mode not like '%N/A%'
	group by 2,3,4,5,6,currency ) a join trc.publishers p2 on p2.name=a.pub_name ) b
	join common.currency_conversion cc on b.currency=cc.from_currency
	where currency_date=(
	select max(currency_date) from common.currency_conversion) and to_currency = 'USD') a
	join apps_config.page_types pt on a.source_type=pt.id
	join apps_config.browser_platforms bp on a.platform_id=bp.id
	group by a.publisher_id, a.pub_name, a.mode, pt.page_type_name, a.provider_type, bp.code, a.client_placement,a.mode_type
	having  mode not like '%tracking%'
	;
	
	commit;

	insert into modes_stats_last_3_day
	(publisher_id, publisher_name, mode, page_type, provider_type, platform, client_placement, views, clicks, mode_type, revenue, update_time)
	select a.publisher_id, a.pub_name, a.mode, pt.page_type_name, a.provider_type, bp.code, a.client_placement, a.views, a.clicks,  a.mode_type, sum(a.usd_revenue) revenue, now() as update_time from 
	(select b.*, b.revenue*cc.rate as usd_revenue from (
	select publisher_id, p1.name as pub_name, substring_index(substring_index(client_ui_mode, ':',1),'_$_',-1) mode, source_type, provider_type, platform_id, client_placement,  sum(num_views) views, sum(num_clicks) clicks, sum(revenue) revenue, p1.currency,'publisher_level' as mode_type from rawdata.platform_placement_aggregation ppa1
	join trc.publishers p1 on ppa1.publisher_id=p1.id
	where data_timestamp>now()-interval 4 day
	and client_ui_mode not like '%pub=%'
	and client_ui_mode not like '%rest-api%'
	and client_ui_mode not like '%N/A%'
	group by 1,2,3,4,5,6, p1.currency
	having pub_name not like 'msn-%' and mode not like '%tracking%'
	union
	select p2.id as publisher_id, pub_name, mode, source_type, provider_type, platform_id, client_placement, views, clicks, revenue, a.currency, 'network_solution' from (
	select publisher_id, substring_index(substring_index(ppa2.client_ui_mode, 'pub=',-1),':',1) as pub_name, substring_index(substring_index(client_ui_mode, ':pub=',1),'_$_',-1) mode, source_type, provider_type, platform_id, client_placement, currency, sum(num_views) views, sum(num_clicks) clicks, sum(revenue) revenue from rawdata.platform_placement_aggregation ppa2
	join trc.publishers p3 on p3.id=publisher_id
	where data_timestamp>now()-interval 4 day
	and client_ui_mode like '%pub=%'
	and client_ui_mode not like '%rest-api%'
	and client_ui_mode not like '%N/A%'
	group by 2,3,4,5,6,currency ) a join trc.publishers p2 on p2.name=a.pub_name ) b
	join common.currency_conversion cc on b.currency=cc.from_currency
	where currency_date=(
	select max(currency_date) from common.currency_conversion) and to_currency = 'USD') a
	join apps_config.page_types pt on a.source_type=pt.id
	join apps_config.browser_platforms bp on a.platform_id=bp.id
	group by a.publisher_id, a.pub_name, a.mode, pt.page_type_name, a.provider_type, bp.code, a.client_placement,a.mode_type
	having  mode not like '%tracking%'
	;
	
	commit;
	
	update  modes_stats_last_30_day ms
	join trc_client.versions v on v.publisher_id=ms.publisher_id
	join trc_client.modes m on m.mode_name=ms.mode and m.version_id=v.version_id
	set ms.mode_id=m.mode_id
	;
	
	commit;
	
	update  modes_stats_last_3_day ms
	join trc_client.versions v on v.publisher_id=ms.publisher_id
	join trc_client.modes m on m.mode_name=ms.mode and m.version_id=v.version_id
	set ms.mode_id=m.mode_id
	;
	
	commit;
	
	truncate table active_modes_30_day;
	
	commit;
	
	insert into active_modes_30_day
	(mode_id)
	select distinct mode_id from modes_stats_last_30_day
	where mode_id>0
	union
	select distinct mode_id from trc_client.modes
	where mode_date > now()-interval 12 month
	and mode_name like 'ab_%'
	;
	
	commit;
	
	truncate table modes_current_properties;
	
	commit;
	
	insert into modes_current_properties
	(mode_id, property, property_value, change_revision)
	select a.mode_id, a.property_name, pv2.property_value, a.change_revision from
	(
	select pv.mode_id, p.property_name, max(change_revision) change_revision from trc_client.property_values pv
	join trc_client.properties p on p.property_id=pv.property_id
	join (select mode_id from analysts.active_modes_30_day 
        union select mode_id from trc_client.modes where mode_date
 > now()-interval 120 day  and mode_name not like 'rbox%') 
        am on am.mode_id=pv.mode_id
	where p.property_name in 
	
	('header',
	'.trc_rbox_header/font-family',
	'.trc_rbox_header/font-size',
	'.trc_rbox_header/font-weight',
	'.trc_rbox_header/color',
	'.video-title/font-family',
	'.video-title/font-size',
	'.video-title/font-weight',
	'.video-title/color',
	'.video-title/line-height',
	'.video-title/max-height',
	'.syndicatedItem .video-title/font-family',
	'.syndicatedItem .video-title/font-size',
	'.syndicatedItem .video-title/font-weight',
	'.syndicatedItem .video-title/color',
	'.syndicatedItem .video-title/line-height',
	'.syndicatedItem .video-title/max-height',
	'.syndicatedItem .branding/color',
	'.syndicatedItem .branding/font-size',
	'.syndicatedItem .branding/font-family',
	'.syndicatedItem .branding/font-weight',
	'responsive-rules',
	'mode-custom-css',
	'list-suffix',
	'item-renderer',
	'item-data-filter',
	'detail-order',
	'detail-order-syndicated',
	'disclosure-position',
	'attribution-position',
	'enable-read-more',
	'read-more-box-selector',
	'read-more-minimized-size',
	'widget-creator-revision',
	'read-more-caption',
	'widget-creator-layout',
	'smart-ellipsis',
    'publisher-logo'
	)
	
	
	group by 1,2 ) a
	join trc_client.property_values pv2
	on pv2.change_revision=a.change_revision and a.mode_id=pv2.mode_id
	;
	
	commit;
	
	drop table modes_current_properties_per_mode
	;
	
	commit;
	
	create table modes_current_properties_per_mode as 
	select 
	mode_id, 
	max(is_editable) as 'is_editable',
	max(header) as header,
	max(header_font_weight) as '.trc_rbox_header/font-weight',
	max(syndicated_title_max_height) as '.syndicatedItem .video-title/max-height',
	max(syndicated_line_height) as '.syndicatedItem .video-title/line-height',
	max(syndicated_font_weight) as '.syndicatedItem .video-title/font-weight',
	max(syndicated_font_size) as '.syndicatedItem .video-title/font-size',
	max(syndicated_font_family) as '.syndicatedItem .video-title/font-family',
	max(syndicated_title_color) as '.syndicatedItem .video-title/color', 
	max(header_font_size) as '.trc_rbox_header/font-size',
	max(header_font_family) as '.trc_rbox_header/font-family',
	max(header_color) as '.trc_rbox_header/color',
	max(title_font_size) as '.video-title/font-size', 
	max(font_family) as '.video-title/font-family', 
	max(title_font_weight) as '.video-title/font-weight', 
	max(title_line_height) as '.video-title/line-height',
	max(title_max_height) as '.video-title/max-height',
	max(color) as '.video-title/color', 
	max(branding) as '.syndicatedItem .branding/font-weight',
	max(branding_font_size) as '.syndicatedItem .branding/font-size',
	max(branding_font_family) as '.syndicatedItem .branding/font-family',
	max(branding_color) as '.syndicatedItem .branding/color',
	case when max(attribution_position) is null then 'top' else max(attribution_position) end as 'attribution-position',
	case when max(disclosure_position) is null then 'top' else max(disclosure_position) end as 'disclosure-position',
	max(responsive_rules) as 'responsive-rules',
	max(item_data_filter) as 'item-data-filter',
	max(item_render) as 'item-renderer',
	max(list_suffix) as 'list-suffix',
	max(enable_read_more) as 'enable-read-more',
	max(read_more_minimized_size) as 'read-more-minimized-size',
	max(read_more_caption) as 'read-more-caption',
	max(read_more_box_selector) as 'read-more-box-selector',
	max(mode_custom_css) as 'mode-custom-css',
	max(detail_order) as 'detail-order',
	max(detail_order_syndicated) as 'detail-order-syndicated',
	max(widget_layout) as 'widget-creator-layout',
	max(smart_ellipsis) as 'smart-ellipsis',
    max(publisher_logo) as 'publisher-logo'

	from
	(
	select * , 
	case when property='.video-title/color' then property_value end as color, 
	case when property='.video-title/font-family' then property_value end as font_family  ,
	case when property='.video-title/font-size' then property_value end as title_font_size  ,
	case when property='.video-title/font-weight' then property_value end as title_font_weight,  
	case when property='.video-title/line-height' then property_value end as title_line_height , 
	case when property='.video-title/max-height' then property_value end as title_max_height  ,
	case when property='detail-order' then property_value end as detail_order  ,
	case when property='header' then property_value end as header  ,
	case when property='item-renderer' then property_value end as item_render  ,
	case when property='list-suffix' then property_value end as list_suffix  ,
	case when property='widget-creator-revision' and property_value=change_revision then 'yes' else 'no' end as is_editable  ,
	case when property='responsive-rules' then property_value end as responsive_rules  ,
	case when property='read-more-minimized-size' then property_value end as read_more_minimized_size  ,
	case when property='read-more-caption' then property_value end as read_more_caption  ,
	case when property='read-more-box-selector' then property_value end as read_more_box_selector  ,
	case when property='mode-custom-css' then property_value end as mode_custom_css  ,
	case when property='item-data-filter' then property_value end as item_data_filter  ,
	case when property='enable-read-more' then property_value end as enable_read_more  ,
	case when property='detail-order-syndicated' then property_value end as detail_order_syndicated  ,
	case when property='attribution-position' then property_value end as attribution_position  ,
	case when property='disclosure-position' then property_value end as disclosure_position  ,
	case when property='.trc_rbox_header/font-weight' then property_value end as header_font_weight  ,
	case when property='.trc_rbox_header/font-size' then property_value end as header_font_size  ,
	case when property='.trc_rbox_header/font-family' then property_value end as header_font_family  ,
	case when property='.trc_rbox_header/color' then property_value end as header_color  ,
	case when property='.syndicatedItem .video-title/max-height' then property_value end as syndicated_title_max_height  ,
	case when property='.syndicatedItem .video-title/line-height' then property_value end as syndicated_line_height  ,
	case when property='.syndicatedItem .video-title/font-weight' then property_value end as syndicated_font_weight  ,
	case when property='.syndicatedItem .video-title/font-size' then property_value end as syndicated_font_size  ,
	case when property='.syndicatedItem .video-title/font-family' then property_value end as syndicated_font_family  ,
	case when property='.syndicatedItem .video-title/color' then property_value end as syndicated_title_color  ,
	case when property='.syndicatedItem .branding/font-weight' then property_value end as branding  ,
	case when property='.syndicatedItem .branding/font-size' then property_value end as branding_font_size  ,
	case when property='.syndicatedItem .branding/font-family' then property_value end as branding_font_family  ,
	case when property='.syndicatedItem .branding/color' then property_value end as branding_color  ,
	case when property='widget-creator-layout' then property_value end as widget_layout  ,
	case when property='smart-ellipsis' then property_value end as smart_ellipsis   ,
    case when property='publisher-logo' then property_value end as publisher_logo
	from  modes_current_properties
	) a
	group by mode_id
	;
	
	commit;
	
	alter table modes_current_properties_per_mode add index `mode_id` (`mode_id`);
	
	commit;	
SQL
	crawler.query(insertSQL)
end
