
$(document).ready(function(){
   

	function hideAll(){
		$('.page').fadeOut();
		$('.c_btn').removeClass('active');
	}

	hideAll();
	$('#home-page').delay(500).fadeIn();

	$('.c_btn').click(function(){

		var page = $(this).attr('data-page-name');
		console.log(page);

		switch (page) { 
			case 'home-page': 
				hideAll();
				$('#home-page').delay(500).fadeIn();				
				$(this).addClass(' active');
				break;			
			case 'copy-page':
				hideAll();
				$('#copy-page').delay(500).fadeIn();
				$(this).addClass(' active');
				initTextArea();
				break;				
			case 'purge-page':
				hideAll();
				//createPurgeCommands();
				$('#purge-page').delay(500).fadeIn();
				$(this).addClass(' active');
				initTextArea();				
				break;				
			case 'feed-copy-page':
				hideAll();
				$('#feed-copy-page').delay(500).fadeIn();
				$(this).addClass(' active');
				break;				
			case 'feed-edit-page': 
				hideAll();
				$('#feed-edit-page').delay(500).fadeIn();
				$(this).addClass(' active');
				break;				
			case 'abp-page': 
				hideAll();
				$('#feed-edit-page').delay(500).fadeIn();
				$(this).addClass(' active');
				change_ABP_mode();
				break;	
				

		}
		
	});



// closing the doc ready 
   
});



var jsonData = 
[{"publisher_id":1069352, "name":"pinkmelon", "language":"de", "mode_name":"thumbnails-a", "mode_id":176843, "is_editable":"yes", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":439,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":1,\"virtualThumbWidth\":3,\"virtualThumbHeight\":2},{\"minWidth\":440,\"maxWidth\":519,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":2,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":520,\"maxWidth\":769,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":770,\"maxWidth\":1000,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":4,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":1001,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5}]", ".trc_rbox_header/font-family":"'Open Sans', Helvetica, Verdana, sans-serif", ".syndicatedItem .video-title/font-family":"'Open Sans', Helvetica, Verdana, sans-serif", ".trc_rbox_header/color":"#a0003c", ".syndicatedItem .video-title/color":"#362a2f", ".syndicatedItem .branding/color":"#999999"}]
;



// to present
/*
[{"publisher_id":1060180, "name":"shrugmedia-nicerdaysorg", "mode_name":"thumbnails-a", "mode id":153561, "is_editable":"yes", ".syndicatedItem .video-title/font-size":"18.0px", ".syndicatedItem .video-title/line-height":"24.0px", ".syndicatedItem .video-title/max-height":"72.0px", ".video-title/font-size":"18.0px", ".video-title/line-height":"24.0px", ".video-title/max-height":"96.0px", "mode-custom-css":".thumbnails-a img {\n        max-width: none;\n}\n\n\/* override bootstrap default span definitions *\/\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .thumbnails-a .video-label-box {\n    height: 96.0px;\n}\n\n.thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":485,\"margin\":{\"v\":2,\"h\":2},\"rows\":10,\"cells\":1,\"virtualThumbWidth\":3,\"virtualThumbHeight\":2},{\"minWidth\":486,\"maxWidth\":568,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":2,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":569,\"maxWidth\":1189,\"margin\":{\"v\":2,\"h\":2},\"rows\":3,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":1190,\"margin\":{\"v\":2,\"h\":2},\"rows\":3,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\tfor(var i = 0; i < data.boxes.length; i++) {\n\t    data.boxes[i].style.height = 'auto';\n\n    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\tvar clearDiv = document.createElement('div');\n\n        \tclearDiv.style.clear = 'both';\n\t        clearDiv.style.width = '100%';\n\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t    }\n\t}\n    }\n}", "smart-ellipsis":"false"},
{"publisher_id":1065795, "name":"moneywise411-moneywise411", "mode_name":"alternating-thumbnails-a", "mode id":182869, "is_editable":"yes", ".syndicatedItem .video-title/font-size":"16.0px", ".syndicatedItem .video-title/line-height":"22.0px", ".syndicatedItem .video-title/max-height":"66.0px", ".video-title/font-size":"16.0px", ".video-title/line-height":"22.0px", ".video-title/max-height":"88.0px", "mode-custom-css":".alternating-thumbnails-a img {\n        max-width: none;\n}\n\n\/* override bootstrap default span definitions *\/\n.alternating-thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.alternating-thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n\n.alternating-thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.alternating-thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n\n.alternating-thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.alternating-thumbnails-a .videoCube a {\n    padding: 0;\n}\n\n.alternating-thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .alternating-thumbnails-a .video-label-box {\n    height: 88.0px;\n}\n\n.alternating-thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.alternating-thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.alternating-thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.alternating-thumbnails-a .video-label-box .branding {\n    display: block;\n}\n\n.alternating-thumbnails-a .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.alternating-thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.alternating-thumbnails-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.alternating-thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.alternating-thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":494,\"margin\":{\"v\":2,\"h\":2},\"rows\":4,\"cells\":1,\"virtualThumbWidth\":3,\"virtualThumbHeight\":2},{\"minWidth\":495,\"maxWidth\":580,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":2,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":581,\"maxWidth\":833,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":834,\"maxWidth\":979,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":980,\"maxWidth\":1265,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":1266,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\tfor(var i = 0; i < data.boxes.length; i++) {\n\t    data.boxes[i].style.height = 'auto';\n\n    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\tvar clearDiv = document.createElement('div');\n\n        \tclearDiv.style.clear = 'both';\n\t        clearDiv.style.width = '100%';\n\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t    }\n\t}\n    }\n}", "smart-ellipsis":"false"},
{"publisher_id":1066488, "name":"libertatea", "mode_name":"thumbnails-a", "mode id":166286, "is_editable":"yes", ".syndicatedItem .video-title/font-size":"16.0px", ".syndicatedItem .video-title/line-height":"22.0px", ".syndicatedItem .video-title/max-height":"66.0px", ".video-title/font-size":"16.0px", ".video-title/line-height":"22.0px", ".video-title/max-height":"88.0px", "mode-custom-css":".thumbnails-a img {\n        max-width: none;\n}\n\n\/* override bootstrap default span definitions *\/\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tbackground: transparent;\n\theight: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .thumbnails-a .video-label-box {\n    height: 88.0px;\n}\n\n.thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\n.thumbnails-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":419,\"margin\":{\"v\":2,\"h\":2},\"rows\":3,\"cells\":1,\"virtualThumbWidth\":3,\"virtualThumbHeight\":2},{\"minWidth\":420,\"maxWidth\":499,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":2,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":500,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\tfor(var i = 0; i < data.boxes.length; i++) {\n\t    data.boxes[i].style.height = 'auto';\n\n    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\tvar clearDiv = document.createElement('div');\n\n        \tclearDiv.style.clear = 'both';\n\t        clearDiv.style.width = '100%';\n\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t    }\n\t}\n    }\n}", "smart-ellipsis":"false"},
{"publisher_id":1069703, "name":"tickld-dailybuzz", "mode_name":"thumbnails-a", "mode id":177676, "is_editable":"yes", ".syndicatedItem .video-title/font-size":"18.0px", ".syndicatedItem .video-title/line-height":"24.0px", ".syndicatedItem .video-title/max-height":"72.0px", ".video-title/font-size":"18.0px", ".video-title/line-height":"24.0px", ".video-title/max-height":"96.0px", "mode-custom-css":".thumbnails-a img {\n        max-width: none;\n}\n\n\/* override bootstrap default span definitions *\/\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n\tmargin: 0px 0px 0px 0px;\n}\n\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .thumbnails-a .video-label-box {\n    height: 96.0px;\n}\n\n.thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":434,\"margin\":{\"v\":2,\"h\":2},\"rows\":11,\"cells\":1,\"virtualThumbWidth\":4,\"virtualThumbHeight\":3},{\"minWidth\":435,\"maxWidth\":514,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":2,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":515,\"maxWidth\":764,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":4,\"virtualThumbHeight\":5},{\"minWidth\":765,\"maxWidth\":1014,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":4,\"virtualThumbWidth\":4,\"virtualThumbHeight\":5},{\"minWidth\":1015,\"maxWidth\":1060,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":5,\"virtualThumbWidth\":4,\"virtualThumbHeight\":5},{\"minWidth\":1061,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":4,\"virtualThumbHeight\":5}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\tfor(var i = 0; i < data.boxes.length; i++) {\n\t    data.boxes[i].style.height = 'auto';\n\n    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\tvar clearDiv = document.createElement('div');\n\n        \tclearDiv.style.clear = 'both';\n\t        clearDiv.style.width = '100%';\n\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t    }\n\t}\n    }\n}", "smart-ellipsis":"false"},
{"publisher_id":1069798, "name":"nationmediagroup-dailynation", "mode_name":"thumbnails-a", "mode id":177901, "is_editable":"yes", ".syndicatedItem .video-title/font-size":"16.0px", ".syndicatedItem .video-title/line-height":"22.0px", ".syndicatedItem .video-title/max-height":"66.0px", ".video-title/font-size":"16.0px", ".video-title/line-height":"22.0px", ".video-title/max-height":"88.0px", "mode-custom-css":".thumbnails-a img {\n        max-width: none;\n}\n\n\/* override bootstrap default span definitions *\/\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n\tmargin: 0px 0px 0px 0px;\n}\n\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .thumbnails-a .video-label-box {\n    height: 88.0px;\n}\n\n.thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":459,\"margin\":{\"v\":2,\"h\":2},\"rows\":8,\"cells\":1,\"virtualThumbWidth\":3,\"virtualThumbHeight\":2},{\"minWidth\":460,\"maxWidth\":539,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":2,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":540,\"maxWidth\":789,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":790,\"maxWidth\":965,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":4,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":966,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\tfor(var i = 0; i < data.boxes.length; i++) {\n\t    data.boxes[i].style.height = 'auto';\n\n    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\tvar clearDiv = document.createElement('div');\n\n        \tclearDiv.style.clear = 'both';\n\t        clearDiv.style.width = '100%';\n\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t    }\n\t}\n    }\n}", "smart-ellipsis":"false"},
{"publisher_id":1070441, "name":"whatculturelimited", "mode_name":"thumbnails-a", "mode id":179458, "is_editable":"yes", ".syndicatedItem .video-title/font-size":"16.0px", ".syndicatedItem .video-title/line-height":"22.0px", ".syndicatedItem .video-title/max-height":"66.0px", ".video-title/font-size":"16.0px", ".video-title/line-height":"22.0px", ".video-title/max-height":"88.0px", "mode-custom-css":".thumbnails-a img {\n        max-width: none;\n}\n\n\/* override bootstrap default span definitions *\/\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .thumbnails-a .video-label-box {\n    height: 88.0px;\n}\n\n.thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":448,\"margin\":{\"v\":2,\"h\":2},\"rows\":4,\"cells\":1,\"virtualThumbWidth\":3,\"virtualThumbHeight\":2},{\"minWidth\":449,\"maxWidth\":528,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":2,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":529,\"maxWidth\":778,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":779,\"maxWidth\":799,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":4,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":800,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\tfor(var i = 0; i < data.boxes.length; i++) {\n\t    data.boxes[i].style.height = 'auto';\n\n    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\tvar clearDiv = document.createElement('div');\n\n        \tclearDiv.style.clear = 'both';\n\t        clearDiv.style.width = '100%';\n\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t    }\n\t}\n    }\n}", "smart-ellipsis":"false"},
{"publisher_id":1071463, "name":"tusfiles-tusfilesnet", "mode_name":"thumbnails-a", "mode id":181340, "is_editable":"yes", ".syndicatedItem .video-title/font-size":"12.0px", ".syndicatedItem .video-title/line-height":"16.0px", ".syndicatedItem .video-title/max-height":"48.0px", ".video-title/font-size":"12.0px", ".video-title/line-height":"16.0px", ".video-title/max-height":"64.0px", "mode-custom-css":".thumbnails-a img {\n        max-width: none;\n}\n\n\/* override bootstrap default span definitions *\/\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .thumbnails-a .video-label-box {\n    height: 64.0px;\n}\n\n.thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 16.0px;\n}\n.thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":419,\"margin\":{\"v\":2,\"h\":2},\"rows\":4,\"cells\":1,\"virtualThumbWidth\":3,\"virtualThumbHeight\":2},{\"minWidth\":420,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":4,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\tfor(var i = 0; i < data.boxes.length; i++) {\n\t    data.boxes[i].style.height = 'auto';\n\n    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\tvar clearDiv = document.createElement('div');\n\n        \tclearDiv.style.clear = 'both';\n\t        clearDiv.style.width = '100%';\n\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t    }\n\t}\n    }\n}", "smart-ellipsis":"false"},
{"publisher_id":1073270, "name":"cloud-filescdn", "mode_name":"thumbnails-a", "mode id":184097, "is_editable":"yes", ".syndicatedItem .video-title/font-size":"14.0px", ".syndicatedItem .video-title/line-height":"19.0px", ".syndicatedItem .video-title/max-height":"57.0px", ".video-title/font-size":"14.0px", ".video-title/line-height":"19.0px", ".video-title/max-height":"76.0px", "mode-custom-css":".thumbnails-a img {\n        max-width: none;\n}\n\n\/* override bootstrap default span definitions *\/\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-a .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: block;\n        width: auto;\n\tmargin: 0px 0px 0px 0px;\n\tbackground: transparent;\n\theight: auto;\n\tbackground-color: transparent;\n\tpadding: 0 0 6px 0;\n\tbox-sizing: initial;\n}\n\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: normal;\n}\n\n.thumbnails-a .logoDiv a {\n    font-size: 100%;\n}\n\n.thumbnails-a .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n\n.thumbnails-a .videoCube a {\n    padding: 0;\n}\n\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .thumbnails-a .video-label-box {\n    height: 76.0px;\n}\n\n.thumbnails-a .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.thumbnails-a .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n\n.thumbnails-a .video-label-box .branding {\n    display: block;\n}\n\n.thumbnails-a .syndicatedItem .branding {\n    line-height: 19.0px;\n}\n.thumbnails-a .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n\n.thumbnails-a .trc_header_right_part {\n\tmargin-top: 0px;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n", "responsive-rules":"[{\"minWidth\":0,\"maxWidth\":501,\"margin\":{\"v\":2,\"h\":2},\"rows\":4,\"cells\":1,\"virtualThumbWidth\":3,\"virtualThumbHeight\":2},{\"minWidth\":502,\"maxWidth\":581,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":2,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":582,\"maxWidth\":831,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":832,\"maxWidth\":1024,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":4,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":1025,\"maxWidth\":1237,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":3,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5},{\"minWidth\":1238,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":4,\"virtualThumbWidth\":6,\"virtualThumbHeight\":5}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\tfor(var i = 0; i < data.boxes.length; i++) {\n\t    data.boxes[i].style.height = 'auto';\n\n    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\tvar clearDiv = document.createElement('div');\n\n        \tclearDiv.style.clear = 'both';\n\t        clearDiv.style.width = '100%';\n\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t    }\n\t}\n    }\n}", "smart-ellipsis":"false"}];
*/

var feedWidgetsNames = ['organic-thumbnails-feed','thumbnails-feed','thumbnails-feed-a'];
var srcPubName =  "taboola-training";


var setDefaultRRcommands = "";
var setRRcommands = "";
var setCustomCommands = "";
var setHookCommands = "";
var copyCommands = "" ;
var purgeCommands = "" ;

var commands = "";

var custom_css_for_3x5 = "/*** Vertical Carousel ***\/\n@media screen and (min-width: 769px) {\n\t.ab_thumbnails-a_vertical-3x5 {\n\t\tposition: relative;\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer {\n\t\theight: 100%;\n\t    overflow: hidden;\n\t    position: relative;\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer .trc_rbox_div {\n\t\theight: auto;\n\t\toverflow-y: hidden;\n\t\toverflow-x: hidden;\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer .trc_rbox_div>div:first-of-type {\n\t\t display: table-cell;\n\t\t-moz-padding-bottom: 32px !important;\n  \t\t-webkit-padding-bottom: 32px !important;\n\t\tpadding-bottom: 32px !important;\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper {\n\t\tbox-sizing: border-box;\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\tbottom: 0px;\n\t\twidth: 100%;\n\t\tz-index: 2;\n\t\tpadding: 0px 12px 12px;\n\t\tbackground-color: #ffffff;\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up,\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tposition: absolute;\n\t    bottom: 8px;\n\t    left: calc(48% - 23px);\n\t    width: 80px;\n\t    z-index: 5;\n\t    padding: 25px 12px 12px;\n\t    background-color: #ffffff;\n\t    border-radius: 5px;\n\t    -webkit-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    -moz-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    background-repeat: no-repeat;\n\t    background-position: center center;\n\t    clip: rect(0,82px, 33px, 0px);\n\t    cursor: pointer;\n\t\t-moz-box-sizing: border-box;\n\t\t-webkit-box-sizing: border-box;\n\t\tbox-sizing: border-box;\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/57\/57c9df74-5cd5-42ae-877c-c5cbadf68e5b.png');\n\t\tdisplay: none;\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/cc\/cc832fc0-4af5-42d7-9684-6d7ce01d20a5.png');\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_outer.slideUp .trc_scroll_button_wrapper {\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t}\n\t.ab_thumbnails-a_vertical-3x5 .trc_rbox_div::-webkit-scrollbar {\n\t    display: none;\n\t}\n}";
var custom_css_for_3x5_smaller = "/*** Vertical Carousel ***\/\n@media screen and (min-width: 769px) {\n\t.ab_thumbnails-a_smaller-vertical-3x5 {\n\t\tposition: relative;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer {\n\t\theight: 100%;\n\t    overflow: hidden;\n\t    position: relative;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer .trc_rbox_div {\n\t\theight: auto;\n\t\toverflow-y: hidden;\n\t\toverflow-x: hidden;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer .trc_rbox_div>div:first-of-type {\n\t\t display: table-cell;\n\t\t-moz-padding-bottom: 32px !important;\n  \t\t-webkit-padding-bottom: 32px !important;\n\t\tpadding-bottom: 32px !important;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper {\n\t\tbox-sizing: border-box;\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\tbottom: 0px;\n\t\twidth: 100%;\n\t\tz-index: 2;\n\t\tpadding: 0px 12px 12px;\n\t\tbackground-color: #ffffff;\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up,\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tposition: absolute;\n\t    bottom: 8px;\n\t    left: calc(48% - 23px);\n\t    width: 80px;\n\t    z-index: 5;\n\t    padding: 25px 12px 12px;\n\t    background-color: #ffffff;\n\t    border-radius: 5px;\n\t    -webkit-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    -moz-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    background-repeat: no-repeat;\n\t    background-position: center center;\n\t    clip: rect(0,82px, 33px, 0px);\n\t    cursor: pointer;\n\t\t-moz-box-sizing: border-box;\n\t\t-webkit-box-sizing: border-box;\n\t\tbox-sizing: border-box;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/57\/57c9df74-5cd5-42ae-877c-c5cbadf68e5b.png');\n\t\tdisplay: none;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/cc\/cc832fc0-4af5-42d7-9684-6d7ce01d20a5.png');\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_outer.slideUp .trc_scroll_button_wrapper {\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x5 .trc_rbox_div::-webkit-scrollbar {\n\t    display: none;\n\t}\n}";
var custom_css_for_3x6 = "/*** Vertical Carousel ***\/\n@media screen and (min-width: 769px) {\n\t.ab_thumbnails-a_vertical-3x6 {\n\t\tposition: relative;\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer {\n\t\theight: 100%;\n\t    overflow: hidden;\n\t    position: relative;\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer .trc_rbox_div {\n\t\theight: auto;\n\t\toverflow-y: hidden;\n\t\toverflow-x: hidden;\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer .trc_rbox_div>div:first-of-type {\n\t\t display: table-cell;\n\t\t-moz-padding-bottom: 32px !important;\n  \t\t-webkit-padding-bottom: 32px !important;\n\t\tpadding-bottom: 32px !important;\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper {\n\t\tbox-sizing: border-box;\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\tbottom: 0px;\n\t\twidth: 100%;\n\t\tz-index: 2;\n\t\tpadding: 0px 12px 12px;\n\t\tbackground-color: #ffffff;\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up,\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tposition: absolute;\n\t    bottom: 8px;\n\t    left: calc(48% - 23px);\n\t    width: 80px;\n\t    z-index: 5;\n\t    padding: 25px 12px 12px;\n\t    background-color: #ffffff;\n\t    border-radius: 5px;\n\t    -webkit-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    -moz-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    background-repeat: no-repeat;\n\t    background-position: center center;\n\t    clip: rect(0,82px, 33px, 0px);\n\t    cursor: pointer;\n\t    -moz-box-sizing: border-box;\n\t    -webkit-box-sizing: border-box;\n\t    box-sizing: border-box;\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/57\/57c9df74-5cd5-42ae-877c-c5cbadf68e5b.png');\n\t\tdisplay: none;\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/cc\/cc832fc0-4af5-42d7-9684-6d7ce01d20a5.png');\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_outer.slideUp .trc_scroll_button_wrapper {\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t}\n\t.ab_thumbnails-a_vertical-3x6 .trc_rbox_div::-webkit-scrollbar {\n\t    display: none;\n\t}\n}";
var custom_css_for_3x6_smaller = "/*** Vertical Carousel ***\/\n@media screen and (min-width: 769px) {\n\t.ab_thumbnails-a_smaller-vertical-3x6 {\n\t\tposition: relative;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer {\n\t\theight: 100%;\n\t    overflow: hidden;\n\t    position: relative;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer .trc_rbox_div {\n\t\theight: auto;\n\t\toverflow-y: hidden;\n\t\toverflow-x: hidden;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer .trc_rbox_div>div:first-of-type {\n\t\t display: table-cell;\n\t\t-moz-padding-bottom: 32px !important;\n  \t\t-webkit-padding-bottom: 32px !important;\n\t\tpadding-bottom: 32px !important;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper {\n\t\tbox-sizing: border-box;\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\tbottom: 0px;\n\t\twidth: 100%;\n\t\tz-index: 2;\n\t\tpadding: 0px 12px 12px;\n\t\tbackground-color: #ffffff;\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up,\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tposition: absolute;\n\t    bottom: 8px;\n\t    left: calc(48% - 23px);\n\t    width: 80px;\n\t    z-index: 5;\n\t    padding: 25px 12px 12px;\n\t    background-color: #ffffff;\n\t    border-radius: 5px;\n\t    -webkit-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    -moz-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    background-repeat: no-repeat;\n\t    background-position: center center;\n\t    clip: rect(0,82px, 33px, 0px);\n\t    cursor: pointer;\n\t    -moz-box-sizing: border-box;\n\t    -webkit-box-sizing: border-box;\n\t    box-sizing: border-box;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/57\/57c9df74-5cd5-42ae-877c-c5cbadf68e5b.png');\n\t\tdisplay: none;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/cc\/cc832fc0-4af5-42d7-9684-6d7ce01d20a5.png');\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_outer.slideUp .trc_scroll_button_wrapper {\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t}\n\t.ab_thumbnails-a_smaller-vertical-3x6 .trc_rbox_div::-webkit-scrollbar {\n\t    display: none;\n\t}\n}";
var custom_css_for_3x3_to_3x6 = "/*** Vertical Carousel ***\/\n@media screen and (min-width: 769px) {\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 {\n\t\tposition: relative;\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer {\n\t\theight: 100%;\n\t    overflow: hidden;\n\t    position: relative;\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer .trc_rbox_div {\n\t\theight: auto;\n\t\toverflow-y: hidden;\n\t\toverflow-x: hidden;\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer .trc_rbox_div>div:first-of-type {\n\t\t display: table-cell;\n\t\t-moz-padding-bottom: 32px !important;\n  \t\t-webkit-padding-bottom: 32px !important;\n\t\tpadding-bottom: 32px !important;\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer .trc_scroll_button_wrapper {\n\t\tposition: absolute;\n\t\tleft: 0px;\n\t\tbottom: 0px;\n\t\twidth: 100%;\n\t\tz-index: 2;\n\t\tpadding: 0px 12px 12px;\n\t\tbackground-color: #ffffff;\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px -6px 10px 0px;\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up,\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tposition: absolute;\n\t    bottom: 8px;\n\t    left: calc(48% - 23px);\n\t    width: 80px;\n\t    z-index: 5;\n\t    padding: 25px 12px 12px;\n\t    background-color: #ffffff;\n\t    border-radius: 5px;\n\t    -webkit-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    -moz-box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    box-shadow: inset 3px 6px 6px -6px rgba(0,0,0,0.7);\n\t    background-repeat: no-repeat;\n\t    background-position: center center;\n\t    clip: rect(0,82px, 33px, 0px);\n\t    cursor: pointer;\n\t    -moz-box-sizing: border-box;\n\t    -webkit-box-sizing: border-box;\n\t    box-sizing: border-box;\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_up {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/57\/57c9df74-5cd5-42ae-877c-c5cbadf68e5b.png');\n\t\tdisplay: none;\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer .trc_scroll_button_wrapper .trc_button_down {\n\t\tbackground-image: url('\/\/cdn.taboola.com\/static\/cc\/cc832fc0-4af5-42d7-9684-6d7ce01d20a5.png');\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_outer.slideUp .trc_scroll_button_wrapper {\n\t\t-webkit-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\t-moz-box-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t\tbox-shadow: rgba(0,0,0,0.35) 0px 0px 10px 0px;\n\t}\n\t.ab_thumbnails-a_carousel-3x3-to-3x6 .trc_rbox_div::-webkit-scrollbar {\n\t    display: none;\n\t}\n}\n"; 

var hook_for_3x5 = "/***** Vertical Carousel *****\/\n    try {\n    \tvar viewport = TRC.Browser.ieUpto(8) ? document.documentElement.clientWidth : window.innerWidth;\n\t    if(viewport >= 769) {\n\t\t    \/*** Dynamic Height ***\/\n\t\t    var targetContainer = data.container._trc_container,\n\t\t    \twidgetContainer = itemsContainer.parentNode,\n\t\t    \twidgetContainerParent = widgetContainer.parentNode,\n\t\t    \tcontainerHeight = targetContainer.offsetHeight,\n\t\t    \twidgetContainerHeight = containerHeight\/2.27,\n\t\t    \tcontainerRight = -1,\n\t\t    \tscrollButton = document.createElement('div'),\n\t\t    \tisArrowChange = false\n\t\t    \tpassTheBottom = false,\n\t\t    \tpassTheTop = true;\n\t\t    \/\/Created bottons up and down\n\t\t\tscrollButton.className ='trc_scroll_button_wrapper';\n\t\t\tscrollButton.innerHTML = '<div class=\\'trc_button_up\\'><\/div><div class=\\'trc_button_down\\'><\/div>';\n\t\t\twidgetContainer.parentNode.insertBefore(scrollButton, widgetContainer.nextSibling);\n\t\t\twidgetContainer.scrollTop = 0;\n\t\t    \/\/Set wrapper height\n\t\t\twidgetContainer.style.height  = widgetContainerHeight + 'px';\n\t\t\t\/*** Scroll  ***\/\n\t\t\twidgetContainer.onscroll = function() {\n\t\t\t\tif (widgetContainer.scrollTop >= 0 && widgetContainer.scrollTop <= 1) {\n\t\t\t\t\tisArrowChange = false;\n\t\t\t\t}\n\t\t\t\t\/\/visible height + pixel scrolled = total height\n\t\t\t\telse if(widgetContainer.offsetHeight + widgetContainer.scrollTop >= widgetContainer.scrollHeight) {\n\t\t\t\t\tisArrowChange = true;\n\t\t\t\t\tif (widgetContainerParent.className.indexOf(' slideUp') < 0) {\n\t\t\t\t\t \twidgetContainerParent.className += ' slideUp';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainerParent.className = widgetContainerParent.className.replace(\/ slideUp\/gi , '' );\n\t\t\t\t}\n\t\t\t\t\/\/flag to detect if arrow need to change to top or bottom\n\t\t\t\tif (isArrowChange) {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t};\n\t\t\t\/*** Set Scroll After Arrow Visibility ***\/\n\t\t\tvar scrollHeight = containerHeight\/2.6;\n\t\t\tfunction isScrollEvent(event) {\n\t\t\t\tvar targetContainerRects = targetContainer.getClientRects()[0],\n\t\t\t\t\twindowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight),\n\t\t\t\t\tconstDist = (windowHeight)*0.05,\n\t\t\t\t\ttargetContainerBottomToBottom =  targetContainerRects.bottom,\n\t\t\t\t\ttargetContainerTopToBottom =  (targetContainerRects.top) - windowHeight,\n\t\t\t\t\ttargetContainerTopToTop =  (targetContainerRects.top),\n\t\t\t\t\tstartScroll = (targetContainerBottomToBottom+constDist) <= windowHeight;\n\t\t\t\tif (startScroll && (targetContainerBottomToBottom > 0)) {\n\t\t\t\t\tpassTheBottom = true;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom+targetContainerTopToTop) < 0) {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom + constDist) < 0) {\n\t\t\t\t\tpassTheTop = false;\n\t\t\t\t}\n\t\t\t\tif (!passTheTop) {\n\t\t\t\t\tif (widgetContainerHeight > windowHeight) {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+targetContainerBottomToBottom-constDist) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+((targetContainerBottomToBottom+constDist)\/2.5)) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (passTheBottom && passTheTop) {\n\t\t\t\t\twidgetContainer.style.overflowY = 'scroll';\n\t\t\t\t\tcontainerRight = widgetContainer.offsetWidth - widgetContainer.clientWidth + 1;\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + containerRight + 'px';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainer.style.overflowY = 'hidden';\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + 0 + 'px';\n\t\t\t\t}\n\t\t\t}\n\t\t\t\/\/find if browser supports passive event\n\t\t\tvar supportsPassive = false;\n\t\t\t!function() {\n\t\t\t    try {\n\t\t\t        var opts = Object.defineProperty({}, 'passive', {\n\t\t\t            get: function () {\n\t\t\t                supportsPassive = true;\n\t\t\t            }\n\t\t\t        });\n\t\t\t        window.addEventListener('test', null, opts);\n\t\t\t    } catch (e) {\n\t\t\t    }\n\t\t\t}(); \/\/ jshint ignore:line\n\t\t\tfunction addEventListenerWithOptions(target, type, handler, options) {\n\t\t\t    var optionsOrCapture = options;\n\t\t\t    if (!supportsPassive) {\n\t\t\t        optionsOrCapture = options.capture;\n\t\t\t    }\n\t\t\t    target.addEventListener(type, handler, optionsOrCapture);\n\t\t\t}\n\t\t\taddEventListenerWithOptions(window, 'scroll', isScrollEvent, {passive:true});\n\t\t\t\/*** Set Scroll On Button Click ***\/\n\t\t\tfunction move_up(el) {\n\t\t    \tel.scrollTop -= scrollHeight;\n\t\t  \t}\n\t\t\tfunction move_down(el) {\n\t\t\t\tel.scrollTop += scrollHeight;\n\t\t\t}\n\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].onclick = function() {move_up(widgetContainer)};\n\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].onclick = function() {move_down(widgetContainer)};\n\t\t}\n\t}\n\tcatch(e){\n\t}\n    \/*****************************************\/\n";
var hook_for_3x5_smaller = "/***** Vertical Carousel *****\/\n    try {\n    \tvar viewport = TRC.Browser.ieUpto(8) ? document.documentElement.clientWidth : window.innerWidth;\n\t    if(viewport >= 769) {\n\t\t    \/*** Dynamic Height ***\/\n\t\t    var targetContainer = data.container._trc_container,\n\t\t    \twidgetContainer = itemsContainer.parentNode,\n\t\t    \twidgetContainerParent = widgetContainer.parentNode,\n\t\t    \tcontainerHeight = targetContainer.offsetHeight,\n\t\t    \twidgetContainerHeight = containerHeight\/3.7,\n\t\t    \tcontainerRight = -1,\n\t\t    \tscrollButton = document.createElement('div'),\n\t\t    \tisArrowChange = false\n\t\t    \tpassTheBottom = false,\n\t\t    \tpassTheTop = true;\n\t\t    \/\/Created bottons up and down\n\t\t\tscrollButton.className ='trc_scroll_button_wrapper';\n\t\t\tscrollButton.innerHTML = '<div class=\\'trc_button_up\\'><\/div><div class=\\'trc_button_down\\'><\/div>';\n\t\t\twidgetContainer.parentNode.insertBefore(scrollButton, widgetContainer.nextSibling);\n\t\t\twidgetContainer.scrollTop = 0;\n\t\t    \/\/Set wrapper height\n\t\t\twidgetContainer.style.height  = widgetContainerHeight + 'px';\n\t\t\t\/*** Scroll  ***\/\n\t\t\twidgetContainer.onscroll = function() {\n\t\t\t\tif (widgetContainer.scrollTop >= 0 && widgetContainer.scrollTop <= 1) {\n\t\t\t\t\tisArrowChange = false;\n\t\t\t\t}\n\t\t\t\t\/\/visible height + pixel scrolled = total height\n\t\t\t\telse if(widgetContainer.offsetHeight + widgetContainer.scrollTop >= widgetContainer.scrollHeight) {\n\t\t\t\t\tisArrowChange = true;\n\t\t\t\t\tif (widgetContainerParent.className.indexOf(' slideUp') < 0) {\n\t\t\t\t\t \twidgetContainerParent.className += ' slideUp';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainerParent.className = widgetContainerParent.className.replace(\/ slideUp\/gi , '' );\n\t\t\t\t}\n\t\t\t\t\/\/flag to detect if arrow need to change to top or bottom\n\t\t\t\tif (isArrowChange) {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t};\n\t\t\t\/*** Set Scroll After Arrow Visibility ***\/\n\t\t\tvar scrollHeight = containerHeight\/2.6;\n\t\t\tfunction isScrollEvent(event) {\n\t\t\t\tvar targetContainerRects = targetContainer.getClientRects()[0],\n\t\t\t\t\twindowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight),\n\t\t\t\t\tconstDist = (windowHeight)*0.05,\n\t\t\t\t\ttargetContainerBottomToBottom =  targetContainerRects.bottom,\n\t\t\t\t\ttargetContainerTopToBottom =  (targetContainerRects.top) - windowHeight,\n\t\t\t\t\ttargetContainerTopToTop =  (targetContainerRects.top),\n\t\t\t\t\tstartScroll = (targetContainerBottomToBottom+constDist) <= windowHeight;\n\t\t\t\tif (startScroll && (targetContainerBottomToBottom > 0)) {\n\t\t\t\t\tpassTheBottom = true;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom+targetContainerTopToTop) < 0) {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom + constDist) < 0) {\n\t\t\t\t\tpassTheTop = false;\n\t\t\t\t}\n\t\t\t\tif (!passTheTop) {\n\t\t\t\t\tif (widgetContainerHeight > windowHeight) {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+targetContainerBottomToBottom-constDist) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+((targetContainerBottomToBottom+constDist)\/2.5)) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (passTheBottom && passTheTop) {\n\t\t\t\t\twidgetContainer.style.overflowY = 'scroll';\n\t\t\t\t\tcontainerRight = widgetContainer.offsetWidth - widgetContainer.clientWidth + 1;\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + containerRight + 'px';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainer.style.overflowY = 'hidden';\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + 0 + 'px';\n\t\t\t\t}\n\t\t\t}\n\t\t\t\/\/find if browser supports passive event\n\t\t\tvar supportsPassive = false;\n\t\t\t!function() {\n\t\t\t    try {\n\t\t\t        var opts = Object.defineProperty({}, 'passive', {\n\t\t\t            get: function () {\n\t\t\t                supportsPassive = true;\n\t\t\t            }\n\t\t\t        });\n\t\t\t        window.addEventListener('test', null, opts);\n\t\t\t    } catch (e) {\n\t\t\t    }\n\t\t\t}(); \/\/ jshint ignore:line\n\t\t\tfunction addEventListenerWithOptions(target, type, handler, options) {\n\t\t\t    var optionsOrCapture = options;\n\t\t\t    if (!supportsPassive) {\n\t\t\t        optionsOrCapture = options.capture;\n\t\t\t    }\n\t\t\t    target.addEventListener(type, handler, optionsOrCapture);\n\t\t\t}\n\t\t\taddEventListenerWithOptions(window, 'scroll', isScrollEvent, {passive:true});\n\t\t\t\/*** Set Scroll On Button Click ***\/\n\t\t\tfunction move_up(el) {\n\t\t    \tel.scrollTop -= scrollHeight;\n\t\t  \t}\n\t\t\tfunction move_down(el) {\n\t\t\t\tel.scrollTop += scrollHeight;\n\t\t\t}\n\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].onclick = function() {move_up(widgetContainer)};\n\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].onclick = function() {move_down(widgetContainer)};\n\t\t}\n\t}\n\tcatch(e){\n\t}\n    \/*****************************************\/\n";
var hook_for_3x6 = "/***** Vertical Carousel *****\/\n    try {\n    \tvar viewport = TRC.Browser.ieUpto(8) ? document.documentElement.clientWidth : window.innerWidth;\n\t    if(viewport >= 769) {\n\t\t    \/*** Dynamic Height ***\/\n\t\t    var targetContainer = data.container._trc_container,\n\t\t    \twidgetContainer = itemsContainer.parentNode,\n\t\t    \twidgetContainerParent = widgetContainer.parentNode,\n\t\t    \tcontainerHeight = targetContainer.offsetHeight,\n\t\t    \twidgetContainerHeight = containerHeight\/2.7,\n\t\t    \tcontainerRight = -1,\n\t\t    \tscrollButton = document.createElement('div'),\n\t\t    \tisArrowChange = false\n\t\t    \tpassTheBottom = false,\n\t\t    \tpassTheTop = true;\n\t\t    \/\/Created bottons up and down\n\t\t\tscrollButton.className ='trc_scroll_button_wrapper';\n\t\t\tscrollButton.innerHTML = '<div class=\\'trc_button_up\\'><\/div><div class=\\'trc_button_down\\'><\/div>';\n\t\t\twidgetContainer.parentNode.insertBefore(scrollButton, widgetContainer.nextSibling);\n\t\t\twidgetContainer.scrollTop = 0;\n\t\t    \/\/Set wrapper height\n\t\t\twidgetContainer.style.height  = widgetContainerHeight + 'px';\n\t\t\t\/*** Scroll  ***\/\n\t\t\twidgetContainer.onscroll = function() {\n\t\t\t\tif (widgetContainer.scrollTop >= 0 && widgetContainer.scrollTop <= 1) {\n\t\t\t\t\tisArrowChange = false;\n\t\t\t\t}\n\t\t\t\t\/\/visible height + pixel scrolled = total height\n\t\t\t\telse if(widgetContainer.offsetHeight + widgetContainer.scrollTop >= widgetContainer.scrollHeight) {\n\t\t\t\t\tisArrowChange = true;\n\t\t\t\t\tif (widgetContainerParent.className.indexOf(' slideUp') < 0) {\n\t\t\t\t\t \twidgetContainerParent.className += ' slideUp';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainerParent.className = widgetContainerParent.className.replace(\/ slideUp\/gi , '' );\n\t\t\t\t}\n\t\t\t\t\/\/flag to detect if arrow need to change to top or bottom\n\t\t\t\tif (isArrowChange) {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t};\n\t\t\t\/*** Set Scroll After Arrow Visibility ***\/\n\t\t\tvar scrollHeight = containerHeight\/2.6;\n\t\t\tfunction isScrollEvent(event) {\n\t\t\t\tvar targetContainerRects = targetContainer.getClientRects()[0],\n\t\t\t\t\twindowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight),\n\t\t\t\t\tconstDist = (windowHeight)*0.05,\n\t\t\t\t\ttargetContainerBottomToBottom =  targetContainerRects.bottom,\n\t\t\t\t\ttargetContainerTopToBottom =  (targetContainerRects.top) - windowHeight,\n\t\t\t\t\ttargetContainerTopToTop =  (targetContainerRects.top),\n\t\t\t\t\tstartScroll = (targetContainerBottomToBottom+constDist) <= windowHeight;\n\t\t\t\tif (startScroll && (targetContainerBottomToBottom > 0)) {\n\t\t\t\t\tpassTheBottom = true;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom+targetContainerTopToTop) < 0) {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom + constDist) < 0) {\n\t\t\t\t\tpassTheTop = false;\n\t\t\t\t}\n\t\t\t\tif (!passTheTop) {\n\t\t\t\t\tif (widgetContainerHeight > windowHeight) {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+targetContainerBottomToBottom-constDist) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+((targetContainerBottomToBottom+constDist)\/2.5)) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (passTheBottom && passTheTop) {\n\t\t\t\t\twidgetContainer.style.overflowY = 'scroll';\n\t\t\t\t\tcontainerRight = widgetContainer.offsetWidth - widgetContainer.clientWidth + 1;\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + containerRight + 'px';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainer.style.overflowY = 'hidden';\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + 0 + 'px';\n\t\t\t\t}\n\t\t\t}\n\t\t\t\/\/find if browser supports passive event\n\t\t\tvar supportsPassive = false;\n\t\t\t!function() {\n\t\t\t    try {\n\t\t\t        var opts = Object.defineProperty({}, 'passive', {\n\t\t\t            get: function () {\n\t\t\t                supportsPassive = true;\n\t\t\t            }\n\t\t\t        });\n\t\t\t        window.addEventListener('test', null, opts);\n\t\t\t    } catch (e) {\n\t\t\t    }\n\t\t\t}(); \/\/ jshint ignore:line\n\t\t\tfunction addEventListenerWithOptions(target, type, handler, options) {\n\t\t\t    var optionsOrCapture = options;\n\t\t\t    if (!supportsPassive) {\n\t\t\t        optionsOrCapture = options.capture;\n\t\t\t    }\n\t\t\t    target.addEventListener(type, handler, optionsOrCapture);\n\t\t\t}\n\t\t\taddEventListenerWithOptions(window, 'scroll', isScrollEvent, {passive:true});\n\t\t\t\/*** Set Scroll On Button Click ***\/\n\t\t\tfunction move_up(el) {\n\t\t    \tel.scrollTop -= scrollHeight;\n\t\t  \t}\n\t\t\tfunction move_down(el) {\n\t\t\t\tel.scrollTop += scrollHeight;\n\t\t\t}\n\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].onclick = function() {move_up(widgetContainer)};\n\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].onclick = function() {move_down(widgetContainer)};\n\t\t}\n\t}\n\tcatch(e){\n\t}\n    \/*****************************************\/\n";
var hook_for_3x6_smaller = "/***** Vertical Carousel *****\/\n    try {\n    \tvar viewport = TRC.Browser.ieUpto(8) ? document.documentElement.clientWidth : window.innerWidth;\n\t    if(viewport >= 769) {\n\t\t    \/*** Dynamic Height ***\/\n\t\t    var targetContainer = data.container._trc_container,\n\t\t    \twidgetContainer = itemsContainer.parentNode,\n\t\t    \twidgetContainerParent = widgetContainer.parentNode,\n\t\t    \tcontainerHeight = targetContainer.offsetHeight,\n\t\t    \twidgetContainerHeight = containerHeight\/4.4,\n\t\t    \tcontainerRight = -1,\n\t\t    \tscrollButton = document.createElement('div'),\n\t\t    \tisArrowChange = false\n\t\t    \tpassTheBottom = false,\n\t\t    \tpassTheTop = true;\n\t\t    \/\/Created bottons up and down\n\t\t\tscrollButton.className ='trc_scroll_button_wrapper';\n\t\t\tscrollButton.innerHTML = '<div class=\\'trc_button_up\\'><\/div><div class=\\'trc_button_down\\'><\/div>';\n\t\t\twidgetContainer.parentNode.insertBefore(scrollButton, widgetContainer.nextSibling);\n\t\t\twidgetContainer.scrollTop = 0;\n\t\t    \/\/Set wrapper height\n\t\t\twidgetContainer.style.height  = widgetContainerHeight + 'px';\n\t\t\t\/*** Scroll  ***\/\n\t\t\twidgetContainer.onscroll = function() {\n\t\t\t\tif (widgetContainer.scrollTop >= 0 && widgetContainer.scrollTop <= 1) {\n\t\t\t\t\tisArrowChange = false;\n\t\t\t\t}\n\t\t\t\t\/\/visible height + pixel scrolled = total height\n\t\t\t\telse if(widgetContainer.offsetHeight + widgetContainer.scrollTop >= widgetContainer.scrollHeight) {\n\t\t\t\t\tisArrowChange = true;\n\t\t\t\t\tif (widgetContainerParent.className.indexOf(' slideUp') < 0) {\n\t\t\t\t\t \twidgetContainerParent.className += ' slideUp';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainerParent.className = widgetContainerParent.className.replace(\/ slideUp\/gi , '' );\n\t\t\t\t}\n\t\t\t\t\/\/flag to detect if arrow need to change to top or bottom\n\t\t\t\tif (isArrowChange) {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t};\n\t\t\t\/*** Set Scroll After Arrow Visibility ***\/\n\t\t\tvar scrollHeight = containerHeight\/2.6;\n\t\t\tfunction isScrollEvent(event) {\n\t\t\t\tvar targetContainerRects = targetContainer.getClientRects()[0],\n\t\t\t\t\twindowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight),\n\t\t\t\t\tconstDist = (windowHeight)*0.05,\n\t\t\t\t\ttargetContainerBottomToBottom =  targetContainerRects.bottom,\n\t\t\t\t\ttargetContainerTopToBottom =  (targetContainerRects.top) - windowHeight,\n\t\t\t\t\ttargetContainerTopToTop =  (targetContainerRects.top),\n\t\t\t\t\tstartScroll = (targetContainerBottomToBottom+constDist) <= windowHeight;\n\t\t\t\tif (startScroll && (targetContainerBottomToBottom > 0)) {\n\t\t\t\t\tpassTheBottom = true;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom+targetContainerTopToTop) < 0) {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom + constDist) < 0) {\n\t\t\t\t\tpassTheTop = false;\n\t\t\t\t}\n\t\t\t\tif (!passTheTop) {\n\t\t\t\t\tif (widgetContainerHeight > windowHeight) {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+targetContainerBottomToBottom-constDist) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+((targetContainerBottomToBottom+constDist)\/2.5)) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (passTheBottom && passTheTop) {\n\t\t\t\t\twidgetContainer.style.overflowY = 'scroll';\n\t\t\t\t\tcontainerRight = widgetContainer.offsetWidth - widgetContainer.clientWidth + 1;\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + containerRight + 'px';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainer.style.overflowY = 'hidden';\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + 0 + 'px';\n\t\t\t\t}\n\t\t\t}\n\t\t\t\/\/find if browser supports passive event\n\t\t\tvar supportsPassive = false;\n\t\t\t!function() {\n\t\t\t    try {\n\t\t\t        var opts = Object.defineProperty({}, 'passive', {\n\t\t\t            get: function () {\n\t\t\t                supportsPassive = true;\n\t\t\t            }\n\t\t\t        });\n\t\t\t        window.addEventListener('test', null, opts);\n\t\t\t    } catch (e) {\n\t\t\t    }\n\t\t\t}(); \/\/ jshint ignore:line\n\t\t\tfunction addEventListenerWithOptions(target, type, handler, options) {\n\t\t\t    var optionsOrCapture = options;\n\t\t\t    if (!supportsPassive) {\n\t\t\t        optionsOrCapture = options.capture;\n\t\t\t    }\n\t\t\t    target.addEventListener(type, handler, optionsOrCapture);\n\t\t\t}\n\t\t\taddEventListenerWithOptions(window, 'scroll', isScrollEvent, {passive:true});\n\t\t\t\/*** Set Scroll On Button Click ***\/\n\t\t\tfunction move_up(el) {\n\t\t    \tel.scrollTop -= scrollHeight;\n\t\t  \t}\n\t\t\tfunction move_down(el) {\n\t\t\t\tel.scrollTop += scrollHeight;\n\t\t\t}\n\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].onclick = function() {move_up(widgetContainer)};\n\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].onclick = function() {move_down(widgetContainer)};\n\t\t}\n\t}\n\tcatch(e){\n\t}\n    \/*****************************************\/\n";
var hook_for_3x3_to_3x6 = "/***** Vertical Carousel *****\/\n    try {\n    \tvar viewport = TRC.Browser.ieUpto(8) ? document.documentElement.clientWidth : window.innerWidth;\n\t    if(viewport >= 769) {\n\t\t    \/*** Dynamic Height ***\/\n\t\t    var targetContainer = data.container._trc_container,\n\t\t    \twidgetContainer = itemsContainer.parentNode,\n\t\t    \twidgetContainerParent = widgetContainer.parentNode,\n\t\t    \tcontainerHeight = targetContainer.offsetHeight,\n\t\t    \twidgetContainerHeight = containerHeight\/1.85,\n\t\t    \tcontainerRight = -1,\n\t\t    \tscrollButton = document.createElement('div'),\n\t\t    \tisArrowChange = false\n\t\t    \tpassTheBottom = false,\n\t\t    \tpassTheTop = true;\n\t\t    \/\/Created bottons up and down\n\t\t\tscrollButton.className ='trc_scroll_button_wrapper';\n\t\t\tscrollButton.innerHTML = '<div class=\\'trc_button_up\\'><\/div><div class=\\'trc_button_down\\'><\/div>';\n\t\t\twidgetContainer.parentNode.insertBefore(scrollButton, widgetContainer.nextSibling);\n\t\t\twidgetContainer.scrollTop = 0;\n\t\t    \/\/Set wrapper height\n\t\t\twidgetContainer.style.height  = widgetContainerHeight + 'px';\n\t\t\t\/*** Scroll  ***\/\n\t\t\twidgetContainer.onscroll = function() {\n\t\t\t\tif (widgetContainer.scrollTop >= 0 && widgetContainer.scrollTop <= 1) {\n\t\t\t\t\tisArrowChange = false;\n\t\t\t\t}\n\t\t\t\t\/\/visible height + pixel scrolled = total height\n\t\t\t\telse if(widgetContainer.offsetHeight + widgetContainer.scrollTop >= widgetContainer.scrollHeight) {\n\t\t\t\t\tisArrowChange = true;\n\t\t\t\t\tif (widgetContainerParent.className.indexOf(' slideUp') < 0) {\n\t\t\t\t\t \twidgetContainerParent.className += ' slideUp';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainerParent.className = widgetContainerParent.className.replace(\/ slideUp\/gi , '' );\n\t\t\t\t}\n\t\t\t\t\/\/flag to detect if arrow need to change to top or bottom\n\t\t\t\tif (isArrowChange) {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].style.display = 'none';\n\t\t\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].style.display = 'block';\n\t\t\t\t}\n\t\t\t};\n\t\t\t\/*** Set Scroll After Arrow Visibility ***\/\n\t\t\tvar scrollHeight = containerHeight\/2.6;\n\t\t\tfunction isScrollEvent(event) {\n\t\t\t\tvar targetContainerRects = targetContainer.getClientRects()[0],\n\t\t\t\t\twindowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight),\n\t\t\t\t\tconstDist = (windowHeight)*0.05,\n\t\t\t\t\ttargetContainerBottomToBottom =  targetContainerRects.bottom,\n\t\t\t\t\ttargetContainerTopToBottom =  (targetContainerRects.top) - windowHeight,\n\t\t\t\t\ttargetContainerTopToTop =  (targetContainerRects.top),\n\t\t\t\t\tstartScroll = (targetContainerBottomToBottom+constDist) <= windowHeight;\n\t\t\t\tif (startScroll && (targetContainerBottomToBottom > 0)) {\n\t\t\t\t\tpassTheBottom = true;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom+targetContainerTopToTop) < 0) {\n\t\t\t\t\tpassTheBottom = false;\n\t\t\t\t}\n\t\t\t\tif ((targetContainerBottomToBottom + constDist) < 0) {\n\t\t\t\t\tpassTheTop = false;\n\t\t\t\t}\n\t\t\t\tif (!passTheTop) {\n\t\t\t\t\tif (widgetContainerHeight > windowHeight) {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+targetContainerBottomToBottom-constDist) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tif (startScroll && (targetContainerTopToTop+((targetContainerBottomToBottom+constDist)\/2.5)) > 0) {\n\t\t\t\t\t\t\tpassTheTop = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (passTheBottom && passTheTop) {\n\t\t\t\t\twidgetContainer.style.overflowY = 'scroll';\n\t\t\t\t\tcontainerRight = widgetContainer.offsetWidth - widgetContainer.clientWidth + 1;\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + containerRight + 'px';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\twidgetContainer.style.overflowY = 'hidden';\n\t\t\t\t\twidgetContainer.style.marginRight  = '-' + 0 + 'px';\n\t\t\t\t}\n\t\t\t}\n\t\t\t\/\/find if browser supports passive event\n\t\t\tvar supportsPassive = false;\n\t\t\t!function() {\n\t\t\t    try {\n\t\t\t        var opts = Object.defineProperty({}, 'passive', {\n\t\t\t            get: function () {\n\t\t\t                supportsPassive = true;\n\t\t\t            }\n\t\t\t        });\n\t\t\t        window.addEventListener('test', null, opts);\n\t\t\t    } catch (e) {\n\t\t\t    }\n\t\t\t}(); \/\/ jshint ignore:line\n\t\t\tfunction addEventListenerWithOptions(target, type, handler, options) {\n\t\t\t    var optionsOrCapture = options;\n\t\t\t    if (!supportsPassive) {\n\t\t\t        optionsOrCapture = options.capture;\n\t\t\t    }\n\t\t\t    target.addEventListener(type, handler, optionsOrCapture);\n\t\t\t}\n\t\t\taddEventListenerWithOptions(window, 'scroll', isScrollEvent, {passive:true});\n\t\t\t\/*** Set Scroll On Button Click ***\/\n\t\t\tfunction move_up(el) {\n\t\t    \tel.scrollTop -= scrollHeight;\n\t\t  \t}\n\t\t\tfunction move_down(el) {\n\t\t\t\tel.scrollTop += scrollHeight;\n\t\t\t}\n\t\t\tscrollButton.getElementsByClassName('trc_button_up')[0].onclick = function() {move_up(widgetContainer)};\n\t\t\tscrollButton.getElementsByClassName('trc_button_down')[0].onclick = function() {move_down(widgetContainer)};\n\t\t}\n\t}\n\tcatch(e){\n\t}\n    \/*****************************************\/\n";

var client_properties = ['.syndicatedItem .branding/color','.syndicatedItem .branding/font-family','.syndicatedItem .branding/font-size','.syndicatedItem .branding/font-weight','.syndicatedItem .video-title/color','.syndicatedItem .video-title/font-family','.syndicatedItem .video-title/font-size','.syndicatedItem .video-title/font-weight','.syndicatedItem .video-title/line-height','.syndicatedItem .video-title/max-height','.trc_rbox_header/color','.trc_rbox_header/font-family','.trc_rbox_header/font-size','.trc_rbox_header/font-weight','.video-title/color','.video-title/font-family','.video-title/font-size','.video-title/font-weight','.video-title/line-height','.video-title/max-height','attribution-position','detail-order','detail-order-syndicated','disclosure-position','enable-read-more','header','is_editable','item-data-filter','item-renderer','list-suffix','mode-custom-css','mode_id','read-more-box-selector','read-more-caption','read-more-minimized-size','responsive-rules','widget-creator-layout'];



/*
function setActive() {
  aObj = document.getElementById('main_nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
    if(document.location.href.indexOf(aObj[i].href)>=0 && aObj[i].id != 'logo'){
      aObj[i].className += 'active';
    }  
  }

  var page = document.location.href;
  page = page.substring(page.lastIndexOf('/')+1, page.length);
  page = page.substring(0, page.indexOf('.html'));  
  console.log(page);  
  switch (page) {
  	case 'purge':
	  	createPurgeCommands(); 
	  	break;
	case 'simple_CP_changes':
		updateClientProperties();
		break;
	case 'common_bulks':
		document.getElementById('commonBulks').className += ' active';
		break;
	case 'font_size_16px':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('titles_16px');
		break;
	case 'vertical_carousel_3x5':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('vertical_carousel_3x5');
		break;
	case 'smaller_vertical_carousel_3x5':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('smaller_vertical_carousel_3x5');
		break;			
	case 'vertical_carousel_3x6':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('vertical_carousel_3x6');
		break;
	case 'smaller_vertical_carousel_3x6':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('smaller_vertical_carousel_3x6');
		break;				
	case '3X2_mobile_ratio':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('3X2_mobile_ratio');
		break;
	case '3X2_ratio_on_rightrail':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('3X2_ratio_on_rightrail');
		break;						
	case '2X1_desktop_ratio':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('2X1_desktop_ratio');
		break;			
	case 'abp':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('abp');	
		break;	
	case 'fraud_implementation':
	  	document.getElementById('commonBulks').className += ' active';
		runFullBulk('fraud_implementation');			
		break;
		
  }


};

//	window.onload = setActive;
*/

String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};




function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'file:///Users/chen.s/Desktop/Project/data/widgets.json', true); 

    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 
// get RR
// return array with all the responsive rules as json objects 
function splitRRtoArray(original_responsive_rules) {
  return original_responsive_rules.slice();
};


// get the new array with changes
// return the new responsive rules
function joinArrayToRR(RRarray) {
  // add open brackets
  var res = "[";
  for (var i = 0; i < RRarray.length; i++) {   
      res += JSON.stringify(RRarray[i]);
      res += ",";
  }
  //remove the last comma
  res = res.substring(0, res.length - 1);
  // add closing brackets 
  return res += "]";
};

function addRR(minWidth, maxWidth, margin, rows, cells, virtualThumbWidth, virtualThumbHeight) {
  if (maxWidth === -1) {
    return {
      "minWidth": minWidth,
      "margin": margin,  
      "rows": rows,
      "cells": cells, 
      "virtualThumbWidth": virtualThumbWidth,
      "virtualThumbHeight": virtualThumbHeight
    };
  } else {
    return {
      "minWidth": minWidth,
      "maxWidth": maxWidth,
      "margin": margin,  
      "rows": rows,
      "cells": cells, 
      "virtualThumbWidth": virtualThumbWidth,
      "virtualThumbHeight": virtualThumbHeight
    };
  }  
};


function fitRRtoCarousel(RRarray, carouselRowsNum) {
  var rr;

  for (var i = 0; i < RRarray.length; i++) {   
    rr = RRarray[i];
    //console.log(rr);
    // case 1
    if (rr.minWidth < 769 && rr.maxWidth === undefined) {
        // update the current rule to be before the last rule        
        rr.maxWidth = 768;
        // create new rule
        var newRR = addRR(769, -1, rr.margin, carouselRowsNum, rr.cells, rr.virtualThumbWidth, rr.virtualThumbHeight);
        //console.log("new RR: ", newRR);
        RRarray.push(newRR);
        break;
    } 
    // case 2
    else if(rr.minWidth < 769 && rr.maxWidth >= 769) {
        //console.log("case 2");      
        maxWidth = rr.maxWidth;
        rr.maxWidth = 768;
        var newRR = addRR(769, maxWidth, rr.margin, carouselRowsNum, rr.cells, rr.virtualThumbWidth, rr.virtualThumbHeight);   
        RRarray.splice(i+1, 0, newRR);        
    }    
    // case 3
    else if(rr.minWidth > 769 && (rr.maxWidth > 769 || rr.maxWidth === undefined)) {
         rr.rows = carouselRowsNum;
    }
    
  }  
  return RRarray;
  
};


function changeCarouselRR(variant, carouselRowsNum, widget_type) {
  for (var i = 0; i < jsonData.length; i++) {   
      
      var mode = jsonData[i];
      var rr = JSON.parse(mode['responsive-rules']);
    
      // split the RR to array
      var arr = splitRRtoArray(rr);

      // make all the changes on the RR
      arr = fitRRtoCarousel(arr, carouselRowsNum);
      // return the array to the RR format
      var arr = joinArrayToRR(arr);

      arr = arr.replaceAll('"', '\\\"');

      console.log(widget_type);
      if (widget_type == 'ab_widget')
      	var setCmd = "\nclient-properties-new set " + mode['name'] + " default ab_" + mode['mode_name'] + "_" + variant + " responsive-rules " + '\"' + arr + '\"' + "\n";
      else // default widget
      	var setCmd = "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " responsive-rules " + '\"' + arr + '\"' + "\n";
	  
      commands += setCmd;
  
  }

};


function fitRR_0_1(RRarray, maxRows, maxCells) {
  var rr;
  for (var i = 0; i < RRarray.length; i++) {   
    rr = RRarray[i];
    // case 1 - already exist rule 0-1
    if (rr.minWidth === 0 && rr.maxWidth === 1) {
        // update the number of rows and cells
        rr.rows = maxRows;
        rr.cells = maxCells;
        break;
    } 
    // case 2 
    else if(rr.minWidth === 0 && rr.maxWidth > 1) {
        var newRR = addRR(2, rr.maxWidth, rr.margin, rr.rows, rr.cells, rr.virtualThumbWidth, rr.virtualThumbHeight);   
        rr.maxWidth = 1;
        // update the number of rows and cells
        rr.rows = maxRows;
        rr.cells = maxCells;         
        RRarray.splice(i+1, 0, newRR);   
        break;
    }    
    // case 3 - only one rr
    else if(rr.minWidth === 0 && rr.maxWidth === undefined) {
        var newRR = addRR(2, -1, rr.margin, rr.rows, rr.cells, rr.virtualThumbWidth, rr.virtualThumbHeight);   
        rr.maxWidth = 1;
        // update the number of rows and cells
        rr.rows = maxRows;
        rr.cells = maxCells;         
        RRarray.splice(i+1, 0, newRR);   
        break;
    }
    
  }  

  return RRarray;
  
};


function changeDefaultRRIncludeMaxItems(maxRows, maxCells) {
  for (var i = 0; i < jsonData.length; i++) {   
      
      var mode = jsonData[i];
	  
	  // ~~~~ IF THE DEFAULT IS NOT LOCKED ~~~~      
      if (mode['is_editable'] === 'no') {

	      var rr = JSON.parse(mode['responsive-rules']);
	    
	      // split the RR to array
	      var arr = splitRRtoArray(rr);

	      // add RR 0-1 to include the max number of items
	      arr = fitRR_0_1(arr, maxRows, maxCells);
	      // return the array to the RR format
	      var arr = joinArrayToRR(arr);

	      arr = arr.replaceAll('"', '\\\"');

	      var setCmd = "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " responsive-rules " + '\"' + arr + '\"' + "\n";

	      commands += setCmd;
	  }
	  else
	  	console.log("Pub: " + mode['name'] + ", Mode: " + mode['mode_name'])
  
  }

  //console.log(setRRcommands);
};




function createPurgeCommands() {
	commands = "";
	
    for (var i = 0; i < jsonData.length; i++) {   
        var mode = jsonData[i];
        var purgeCmd = "\nclient-properties-new purge " + mode['name'] + " default\n";
        commands += purgeCmd
    }

    // remove duplicates commands
    //console.log(commands);
    var purgeCommandsHTML = commands.replaceAll("\n", "<br>");
   	document.getElementById("big_textarea_purge").innerHTML = purgeCommandsHTML;    
};



function createCopyCommands(variant) {
    commands = "";

    for (var i = 0; i < jsonData.length; i++) {   
        var mode = jsonData[i];
        var copyCmd = "\nclient-properties-new copy " + mode['name'] + " default " + mode['mode_name'] + " to " + mode['name'] + " default ab_" + mode['mode_name'] + "_" + variant + " | client-properties-new import\n";
        commands += copyCmd
    }
    console.log(commands);
    var copyCommandsHTML = commands.replaceAll("\n", "<br>");
   	document.getElementById("big_textarea_copy").innerHTML = copyCommandsHTML;
};

function initTextArea() {
	
	console.log('initTextArea');
	$('.big_textarea').innerHTML = "";
};

function addCustomCode(variant, widget_type) {

    var customCode = "";
    switch(variant) {
        case 'vertical-3x5':
            customCode = custom_css_for_3x5;
            break;
        case 'smaller-vertical-3x5':
            customCode = custom_css_for_3x5_smaller;
            break;            
        case 'vertical-3x6':
            customCode = custom_css_for_3x6;
            break;
        case 'smaller-vertical-3x6':
            customCode = custom_css_for_3x6_smaller;
            break;            
        case 'carousel-3x3-to-3x6':
            customCode = custom_css_for_3x3_to_3x6;
            break;
        default:
            customCode = "";
            berak;
    }

    for (var i = 0; i < jsonData.length; i++) {       
        var mode = jsonData[i];
        var oldCustom = mode['mode-custom-css'];
        oldCustom = oldCustom.replaceAll(mode['mode_name'], 'ab_'+mode['mode_name']+'_'+variant);
        var newCustom = customCode.replaceAll('ab_thumbnails-a_'+variant, 'ab_'+mode['mode_name']+'_'+variant);
        var finalCustom = oldCustom.concat("\n\n").concat(newCustom);
        //console.log(finalCustom);
        if (widget_type === 'ab_widget')
        	commands += "\nclient-properties-new set " + mode['name'] + " default ab_" + mode['mode_name'] + "_" + variant + " mode-custom-css " + '\"' + finalCustom + '\"' + "\n";
        else // default widget
        	commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " mode-custom-css " + '\"' + finalCustom + '\"' + "\n";
    }
}




function addHookCode(variant, widget_type) {

    var hook = "";
    // fix the hook (original due to string issues with \\' sign)
    hook_for_3x5 = hook_for_3x5.replaceAll("\\\'", "\\\\'");
    hook_for_3x5_smaller = hook_for_3x5_smaller.replaceAll("\\\'", "\\\\'");
    hook_for_3x6 = hook_for_3x6.replaceAll("\\\'", "\\\\'");
    hook_for_3x6_smaller = hook_for_3x6_smaller.replaceAll("\\\'", "\\\\'");
    hook_for_3x3_to_3x6 = hook_for_3x3_to_3x6.replaceAll("\\\'", "\\\\'");

    switch(variant) {
        case 'vertical-3x5':
            hook = hook_for_3x5;
            break;
        case 'smaller-vertical-3x5':
            hook = hook_for_3x5_smaller;
            break;
        case 'vertical-3x6':
            hook = hook_for_3x6;
            break;
        case 'smaller-vertical-3x6':
            hook = hook_for_3x6_smaller;
            break;            
        case 'carousel-3x3-to-3x6':
            hook = hook_for_3x3_to_3x6;
            break;
        default:
            hook = "";
            break;
    }

    for (var i = 0; i < jsonData.length; i++) {       
        var mode = jsonData[i];
        var oldHook = mode['list-suffix'];
        oldHook = oldHook.slice(0, -1);
        var finalHook = oldHook.concat("\n\n").concat(hook).concat("\n\}");
        
        if (widget_type === 'ab_widget')
        	commands += "\nclient-properties-new set " + mode['name'] + " default ab_" + mode['mode_name'] + "_" + variant + " list-suffix " + '\"' + finalHook + '\"' + "\n";
        else // default widget
        	commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " list-suffix " + '\"' + finalHook + '\"' + "\n";
    }
}

function change_vertical_carousel(variant, rowsNumber, widget_type) {

    if (widget_type === 'ab_widget') {
	    // change default RR
	    console.log("changing the 0-1 responsive-rules on default variant");
		changeDefaultRRIncludeMaxItems(6,3);
    }

	console.log(widget_type);

    // change RR of ab widget
    console.log("changing the responsive-rules on AB variant");
    changeCarouselRR(variant, rowsNumber, widget_type);
    // change hook
    console.log("added HOOK code");
    addHookCode(variant, widget_type);
    // chnage custom css
	console.log("added CUSTOM-CSS code");    
    addCustomCode(variant, widget_type);
   
}

/********************************  Functionality to EDIT FONT SIZE bulk ********************************/

function writeToFile(text) {

	if (!text)
		text = commands;
    var content = "data:text/csv;charset=utf-8,"+ text;
    var encodedUri = encodeURI(content);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "commands.txt");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
};


// create 7 client-properties commands foreach publisher 
// in order to change the titles' font-size
// this affects on line-height, max-size, height and branding line-height
function change_titles_size(new_font_size, new_line_height) {

    for (var i = 0; i < jsonData.length ; i++) {       
    	console.log("------ "+i+" ------");
		var needChange = false;
		var newCustom = "";
		var oldCustom = "";    	

        var mode = jsonData[i];
    	console.log(mode['mode_name']);        
        // edit FONT-SIZE client-properties
        commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-title/font-size\" \"" + new_font_size + ".0px\"\n";
        commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " \".video-title/font-size\" \"" + new_font_size + ".0px\"\n";

        // edit LINE-HEIGHT client-properties
        commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-title/line-height\" \"" + new_line_height + ".0px\"\n";
        commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " \".video-title/line-height\" \"" + new_line_height + ".0px\"\n";

        // calculate the number of ROWS
        var rows = parseInt(mode['.syndicatedItem .video-title/max-height'])/parseInt(mode['.syndicatedItem .video-title/line-height']);
        console.log("number of rows: " + rows);

        // edit MAX-HEIGHT client-properties
        commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-title/max-height\" \"" + rows*new_line_height + ".0px\"\n";
        commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " \".video-title/max-height\" \"" + (rows+1)*new_line_height + ".0px\"\n";

        // SET HEIGHT IN CUSTOM-CSS
        oldCustom = mode['mode-custom-css'];

        if (mode['mode_name'].indexOf('text-links') > -1) {
        	var selectors = "." + mode['mode_name'] + " .videoCube .video-label-box";
	        var index = oldCustom.indexOf(selectors);
	        // video-label-box height selector was found
	        if (index > -1) {
	            // PART 1 OF CUSTOM
	            var custom_part1 = oldCustom.substring(0, index);
	            var temp = oldCustom.substring(index);
	            temp = temp.substring(0, temp.indexOf('}')+1);
	            // PART 3 OF CUSTOM
	            var custom_part3 = oldCustom.substring(index+temp.length);
	            // working on temp part (custom_part2)
	            var heightIndex = temp.indexOf('min-height:');
	            if (heightIndex > -1) {
	            	var oldHeight = temp.substring(heightIndex+11);
	            	oldHeight = oldHeight.substring(0, oldHeight.indexOf(';'));
	            	temp = temp.replace(oldHeight, " " + (new_line_height) + ".0px" );
	            	newCustom = custom_part1.concat("\n").concat(temp).concat("\n").concat(custom_part3);
	            	needChange = true;
	            }
	        }
	        else {
	        // video-label-box selector was not found
	    		console.log("video-label-box selector was not found");
	    	}

        }
        else {
        	if (mode['mode_name'].indexOf('autosized') > -1) {
        		console.log("autosized");
				var selectors = "." + mode['mode_name'] + " .videoCube .video-label-box";
        	}
			else { // not autosize and not text-links 
				console.log("not autosized");
				var selectors = ".trc_elastic ." + mode['mode_name'] + " .video-label-box";
			}

	        var index = oldCustom.indexOf(selectors);
	        // video-label-box height selector was found
	        if (index > -1) {
	            // PART 1 OF CUSTOM
	            var custom_part1 = oldCustom.substring(0, index);
	            var temp = oldCustom.substring(index);
	            temp = temp.substring(0, temp.indexOf('}')+1);
	            // PART 3 OF CUSTOM
	            var custom_part3 = oldCustom.substring(index+temp.length);
	            // working on temp part (custom_part2)
	            var heightIndex = temp.indexOf('height:');
	            if (heightIndex > -1) {
	            	var oldHeight = temp.substring(heightIndex+7);
	            	oldHeight = oldHeight.substring(0, oldHeight.indexOf(';'));
	            	temp = temp.replace(oldHeight, " " + ((rows+1)*new_line_height) + ".0px" );
	            	newCustom = custom_part1.concat("\n").concat(temp).concat("\n").concat(custom_part3);
	            	//console.log("newCustom: " + newCustom);
	            	needChange = true;
	            }
	        }
	        else { // video-label-box selector was not found
	    		console.log("video-label-box selector was not found");
	    	}
	    }
    	if (newCustom.length === 0) {
    		console.log("newCustom is NOT DEFINED");
    		var newCustom = oldCustom;
    	}

        // SET BRANDING LINE-HEIGHT IN CUSTOM-CSS               
        var selectors = "." + mode['mode_name'] + " .syndicatedItem .branding";
       	var index = newCustom.indexOf(selectors);
        // video-label-box line-height of branding selector was found
        if (index > -1) {
            // PART 1 OF CUSTOM
            var custom_part1 = newCustom.substring(0, index);
            var temp = newCustom.substring(index);
            temp = temp.substring(0, temp.indexOf('}')+1);
            console.log(temp);
            // PART 3 OF CUSTOM
            var custom_part3 = newCustom.substring(index+temp.length);
            // working on temp part (custom_part2)
            
            var heightIndex = temp.indexOf('line-height:');
            //console.log(temp);
            //console.log(heightIndex);
       		if (heightIndex > -1) {
            	var oldHeight = temp.substring(heightIndex+12);
            	oldHeight = oldHeight.substring(0, oldHeight.indexOf(';'));
            	temp = temp.replace(oldHeight, " " + new_line_height + ".0px" );
            	var newCustom = custom_part1.concat("\n").concat(temp).concat("\n").concat(custom_part3);
            	needChange = true;
            }
       		else
				console.log("line-height was NOT found");
        }
        else
        // line-height was not found!
      		console.log(".syndicatedItem .branding selector was not found");

        if (newCustom.length > 0 && needChange) { 
        	commands += "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " mode-custom-css " + '\"' + newCustom + '\"' + "\n";        
        	console.log("added new command");
        	console.log("\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " mode-custom-css " + '\"' + newCustom + '\"' + "\n");
        }
       
    }

};


/********************************  Functionality to CHANGE 3X2 RATIO ON MOBILE bulk ********************************/


function fitRRratio3X2Mobile(RRarray) {
  var rr;
  var mobileChanged = false;

  for (var i = 0; i < RRarray.length; i++) {   
    rr = RRarray[i];
    // case 1 - no seperation to mobile
    if ((rr.maxWidth > 550 || rr.maxWidth === undefined) && !mobileChanged){
        // create new rule
        var newRR = addRR(0, 550, rr.margin, rr.rows, rr.cells, 3, 2);

        // update the current rule         
        rr.minWidth = 551;
        break;
    } 
    // case 2
    else if(rr.maxWidth <= 550) {
         rr.virtualThumbWidth = 3;
         rr.virtualThumbHeight = 2;
         mobileChanged = true;
    }
    
  }
  if (newRR)
    RRarray.splice(0, 0, newRR);                

  return RRarray;
  
};


function change_mobile_ratio_to_3x2() {
  for (var i = 0; i < jsonData.length; i++) {   
      
      var mode = jsonData[i];
      var rr = JSON.parse(mode['responsive-rules']);
      //originalRR += mode['responsive-rules'] + "\n\n";
    
      console.log("\n\n-----------------RR number "+ (i+1) + " -----------------");
      console.log(mode['responsive-rules'] + "\n\n");

      // split the RR to array
      var arr = splitRRtoArray(rr);

      // make all the changes on the RR
      arr = fitRRratio3X2Mobile(arr);
      // return the array to the RR format
      var arr = joinArrayToRR(arr);

      arr = arr.replaceAll('"', '\\\"');

      var setCmd = "\nclient-properties-new set " + mode['name'] + " default ab_" + mode['mode_name'] + "_3x2 responsive-rules " + '\"' + arr + '\"' + "\n";

      //console.log(setCmd);
      commands += setCmd;
  
  }

};


function fitRRratio3X2ToRightRail(RRarray) {
  var rr;

  for (var i = 0; i < RRarray.length; i++) {   
    rr = RRarray[i];
    if (rr.cells === 1 && rr.virtualThumbWidth === 2 && rr.virtualThumbHeight === 1){
         rr.virtualThumbWidth = 3;
         rr.virtualThumbHeight = 2;
    } 
  }
  return RRarray;
  
};


// change on the default variant (no AB test)
// if the layout is 1xY and the ratio is 2:1 
// changing the ratio to 2:1
function change_rightrail_ratio_to_3x2() {
  for (var i = 0; i < jsonData.length; i++) {   
      
      var mode = jsonData[i];
      var rr = JSON.parse(mode['responsive-rules']);
      //originalRR += mode['responsive-rules'] + "\n\n";
    
      console.log("\n\n-----------------RR number "+ (i+1) + " -----------------");
      console.log(mode['responsive-rules'] + "\n\n");

      // split the RR to array
      var arr = splitRRtoArray(rr);

      // make all the changes on the RR
      arr = fitRRratio3X2ToRightRail(arr);
      // return the array to the RR format
      var arr = joinArrayToRR(arr);

      arr = arr.replaceAll('"', '\\\"');

      var setCmd = "\nclient-properties-new set " + mode['name'] + " default " + mode['mode_name'] + " responsive-rules " + '\"' + arr + '\"' + "\n";

      //console.log(setCmd);
      commands += setCmd;
  
  }

};





function change_desktop_ratio_to_2X1() {
	
	console.log("change_desktop_ratio_to_2X1");

	for (var i = 0; i < jsonData.length; i++) {   
	  
	  var mode = jsonData[i];
	  console.log(mode);
	  console.log(mode['responsive-rules']);

	  var rr = JSON.parse(mode['responsive-rules']);
	  //originalRR += mode['responsive-rules'] + "\n\n";

	  console.log("\n\n-----------------RR number "+ (i+1) + " -----------------");
	  console.log(mode['responsive-rules'] + "\n\n");

	  // split the RR to array
	  var arr = splitRRtoArray(rr);

	  // make all the changes on the RR
	  arr = fitRRratio2X1Desktop(arr);
	  // return the array to the RR format
	  var arr = joinArrayToRR(arr);

	  arr = arr.replaceAll('"', '\\\"');

	  var setCmd = "\nclient-properties-new set " + mode['name'] + " default ab_" + mode['mode_name'] + "_ratio-2x1 responsive-rules " + '\"' + arr + '\"' + "\n";

	  //console.log(setCmd);
	  commands += setCmd;

	}	

};


function fitRRratio2X1Desktop(RRarray) {
  var rr;

  for (var i = 0; i < RRarray.length; i++) {   
    rr = RRarray[i];
    console.log(rr);
    if (rr.cells === 1 && rr.virtualThumbWidth === 2 && rr.virtualThumbHeight === 1){
         rr.virtualThumbWidth = 3;
         rr.virtualThumbHeight = 2;
    } 
  }
  return RRarray;
  
};





function fitRRtoABP(RRarray) {

  var rr;

  // test cases of modes autosize/text-links/organic --> not touch
  // add code...
  
  for (var i = 0; i < RRarray.length; i++) {   
    rr = RRarray[i];
    // case 1
    /*
    if (rr.minWidth < 769 && rr.maxWidth === undefined) {
        // update the current rule to be before the last rule        
        rr.maxWidth = 768;
        // create new rule
        var newRR = addRR(769, -1, rr.margin, 1, rr.cells, rr.virtualThumbWidth, rr.virtualThumbHeight);
        //console.log("new RR: ", newRR);
        RRarray.push(newRR);
        break;
    } 
    // case 2
    else if(rr.minWidth < 769 && rr.maxWidth >= 769) {
        //console.log("case 2");      
        maxWidth = rr.maxWidth;
        rr.maxWidth = 768;
        var newRR = addRR(769, maxWidth, rr.margin, 1, rr.cells, rr.virtualThumbWidth, rr.virtualThumbHeight);   
        RRarray.splice(i+1, 0, newRR);        
    }    
    // case 3
    else if(rr.minWidth > 769 && (rr.maxWidth > 769 || rr.maxWidth === undefined)) {
         rr.rows = 1;
    }
	*/
	//The easy way
	// if (rr.minWidth >= 480) {
	rr.rows = 1;
	//}
	
  }  
  return RRarray; 
  
};

function change_ABP_mode() {
  
  for (var i = 0; i < jsonData.length; i++) {   
      
      var mode = jsonData[i];
      try {
	      var rr = JSON.parse(mode['responsive-rules']);
	    
	      console.log("\n\n-----------------RR number "+ (i+1) + " -----------------");
	      console.log(mode['responsive-rules'] + "\n\n");

	      // split the RR to array
	      var arr = splitRRtoArray(rr);

	      // make all the changes on the RR
	      arr = fitRRtoABP(arr);
	      // return the array to the RR format
	      var arr = joinArrayToRR(arr);

	      arr = arr.replaceAll('"', '\\\"');

	      var setCmd = "\nclient-properties-new set " + mode['name'] + " default ab_" + mode['mode_name'] + "_abp-mode responsive-rules " + '\"' + arr + '\"' + "\n";

	      //console.log(setCmd);
	      commands += setCmd;
	  }
	  catch(err) {}
  
  }
	var HTMLCommands = "";
	var HTMLCommands = commands.replaceAll("\n", "<br>");
	document.getElementById("big_textarea_abp").innerHTML = HTMLCommands; 

};


function updateClientProperties() {
	var selectObj = document.getElementById("cp");
 	for (var i = 0; i < client_properties.length; i++) {   
		if (selectObj.selectedIndex >= 0) {
		    var option = document.createElement("option");
		    option.text = client_properties[i];
		    var sel = selectObj.options[selectObj.selectedIndex]; 
		    selectObj.add(option, sel);
		}
	}
};


function fraud_implementation() {

    // fix the hook (original due to string issues with \\' sign)
    //hook_for_3x5 = hook_for_3x5.replaceAll("\\\'", "\\\\'");
	
    for (var i = 0; i < jsonData.length; i++) {  
   		var fraudHook = "function() {\n\t\/**************************************************************************************\/\n\ttry {\n\t\tvar isTrafficToCheck = Math.floor(Math.random()*100),\n\t\t\tpublisherId = ***PUB_ID***,\n\t\t\tpublisherName = '***PUB_NAME***',\n\t\t\tcompanyToReplaceParam = ['forQ','proMed'];\n\t\tvar providers = {\n\t\t\t forQ : {\n\t\t\t \turlTemplate : '\/\/c.fqtag.com\/tag\/implement-r.js?org=Y2ImCSNCW12ZYo3AyTgR&p={PUBLISHER_ID}&a={name}&rd={REFERRER}&rt=display&sl=1&fq=1',\n\t\t\t \tcallback : function(data) {\n\t\t\t\t\t\t    FQTag({\n\t\t\t\t\t\t    \trt: 'click',\n\t    \t\t\t\t\t\torg: 'Y2ImCSNCW12ZYo3AyTgR',\n\t    \t\t\t\t\t\tsl: 1,\n\t    \t\t\t\t\t\tp: publisherId,\n\t    \t\t\t\t\t\ta: publisherName,\n\t    \t\t\t\t\t\tcmp: data.placement\n\t\t\t\t\t\t    });\n\t\t\t\t\t\t  }\n\t\t\t},\n\t\t\tproMed : {\n\t\t\t \turlTemplate : '\/\/js.ad-score.com\/score.min.js?pid=1000075#tid=src1&l1={PUBLISHER_ID}&l2={name}&uid={USER_ID}&ref={REFERRER}',\n\t\t\t \tcallback : function(data){adScore('send', 'adclick',  {}, {l3: data.placement,l6:'clicked'});}\n\t\t\t},\n\t\t\tperiX : {\n\t\t\t \turlTemplate : '\/\/client.perimeterx.net\/PX2JzW8J9u\/main.min.js',\n\t\t\t \tcallback : function (data) {\n\t\t\t\t\t\t    \/\/ get px's client id\n\t\t\t\t\t\t    var i, u = window.PX2JzW8J9u && window.PX2JzW8J9u.ClientUuid;\n\t\t\t\t\t\t    \/\/ make sure px loaded\n\t\t\t\t\t    \tif (u) {\n\t\t\t\t\t    \t\tvar i = new Image(),\n\t\t\t\t\t    \t\t\tcontainerToAddImgTo = document.getElementsByTagName('head')[0];\n\t\t\t\t\t   \t\t\t\/\/ use pixel to send data\n\t\t\t\t\t    \t\ti.src = '\/\/collector-px2jzw8j9u.perimeterx.net\/api\/v1\/collector\/pxPixel.gif?appId=PX2JzW8J9u&uuid=' + u + '&p1=' + PX2JzW8J9u_pxParam1 + '&p2=' + PX2JzW8J9u_pxParam2 + '&p3=' + PX2JzW8J9u_pxParam3 + '&p5=' + data.placement + '&p6=1';\n\t\t\t\t\t    \t\t\/\/ Append Img Tag\n\t\t\t\t\t    \t\tcontainerToAddImgTo.appendChild(i);\n\t\t\t\t\t   \t\t}\n\t\t\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tif (isTrafficToCheck >= 69) {\n\t\t\tvar companyToInject,\n\t\t\t\tthirdPartyScriptUrl;\n\t\t\t\t\/\/Choose Random Company to Inject\n\t\t\t\tif (isTrafficToCheck >= 69 && isTrafficToCheck < 79) {\n\t\t\t\t\tcompanyToInject = 'forQ';\n\t\t\t\t}\n\t\t\t\telse if (isTrafficToCheck >= 79 && isTrafficToCheck < 89) {\n\t\t\t\t\t companyToInject = 'proMed';\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tPX2JzW8J9u_pxParam1=publisherId.toString();\n\t\t\t\t\tPX2JzW8J9u_pxParam2=publisherName;\n\t\t\t\t\tPX2JzW8J9u_pxParam3=TRC.pageManager.getValue('user-id');\n\t\t\t\t\tcompanyToInject = 'periX';\n\t\t\t\t}\n\t           \t\/\/ Set URL Parameters\n\t           \tthirdPartyScriptUrl = providers[companyToInject].urlTemplate;\n\t           \tif (companyToReplaceParam.indexOf(companyToInject) !== -1) {\n\t\t\t\t\tthirdPartyScriptUrl = thirdPartyScriptUrl\n\t\t \t\t \t\t \t\t\t.replace('{PUBLISHER_ID}', publisherId)\n\t\t \t\t \t\t \t\t\t.replace('{name}', publisherName)\n\t\t \t\t \t\t \t\t\t.replace('{USER_ID}', TRC.pageManager.getValue('user-id'))\n\t\t \t\t \t\t \t\t\t.replace('{REFERRER}', document.referrer);\n\t\t \t\t}\n\t \t\t \t\/\/ Append Script To Page\n\t           \tTRC.net.loadScript(thirdPartyScriptUrl,'js',null,null,true);\n\t           \t\/\/ Send Click Event\n\t           \t_taboola.push({\n\t\t\t\t\tlistenTo: 'click',\n\t\t\t\t\thandler: function(event) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tproviders[companyToInject].callback(event.detail);\n\t\t\t\t   \t\t}\n\t\t\t\t   \t\tcatch (e) {\n\t\t\t\t   \t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t}\n\tcatch (e) {\n\t}\n\t\/**************************************************************************************\/\n}\n";
   		//"function() {\n\t\/**************************************************************************************\/\n\tvar isTrafficToCheck = Math.floor(Math.random()*100),\n\t\tpublisherId = '***PUB_ID***',\n\t\tpublisherName = '***PUB_NAME***',\n\t\tcompanyToReplaceParam = ['forQ','proMed'];\n\tvar providers = {\n\t\t forQ : {\n\t\t \turlTemplate : '\/\/c.fqtag.com\/tag\/implement-r.js?org=Y2ImCSNCW12ZYo3AyTgR&p={PUBLISHER_ID}&a={name}&rd={REFERRER}&rt=display&sl=1&fq=1',\n\t\t \tcallback : function(data) {\n\t\t\t\t\t    FQTag({\n\t\t\t\t\t    \trt: 'click',\n    \t\t\t\t\t\torg: 'Y2ImCSNCW12ZYo3AyTgR',\n    \t\t\t\t\t\tsl: 1,\n    \t\t\t\t\t\tp: publisherId,\n    \t\t\t\t\t\ta: publisherName,\n    \t\t\t\t\t\tcmp: data.placement\n\t\t\t\t\t    });\n\t\t\t\t\t  }\n\t\t},\n\t\tproMed : {\n\t\t \turlTemplate : '\/\/js.ad-score.com\/score.min.js?pid=1000075#tid=src1&l1={PUBLISHER_ID}&l2={name}&uid={USER_ID}&ref={REFERRER}',\n\t\t \tcallback : function(data){adScore('send', 'adclick',  {}, {l3: data.placement,l6:'clicked'});}\n\t\t},\n\t\tperiX : {\n\t\t \turlTemplate : '\/\/client.perimeterx.net\/PX2JzW8J9u\/main.min.js',\n\t\t \tcallback : function (data) {\n\t\t\t\t\t    \/\/ get px's client id\n\t\t\t\t\t    var i, u = window.PX2JzW8J9u && window.PX2JzW8J9u.ClientUuid;\n\t\t\t\t\t    \/\/ make sure px loaded\n\t\t\t\t    \tif (u) {\n\t\t\t\t    \t\tvar i = new Image(),\n\t\t\t\t    \t\t\tcontainerToAddImgTo = document.getElementsByTagName('head')[0];\n\t\t\t\t   \t\t\t\/\/ use pixel to send data\n\t\t\t\t    \t\ti.src = '\/\/collector-px2jzw8j9u.perimeterx.net\/api\/v1\/collector\/pxPixel.gif?appId=PX2JzW8J9u&uuid=' + u + '&p1=' + PX2JzW8J9u_pxParam1 + '&p2=' + PX2JzW8J9u_pxParam2 + '&p3=' + PX2JzW8J9u_pxParam3 + '&p5=' + data.placement + '&p6=1';\n\t\t\t\t    \t\t\/\/ Append Img Tag\n\t\t\t\t    \t\tcontainerToAddImgTo.appendChild(i);\n\t\t\t\t   \t\t}\n\t\t\t\t\t}\n\t\t}\n\t};\n\tif (isTrafficToCheck >= 69) {\n\t\tvar companyToInject,\n\t\t\tthirdPartyScriptUrl;\n\t\t\t\/\/Choose Random Company to Inject\n\t\t\tif (isTrafficToCheck >= 69 && isTrafficToCheck < 79) {\n\t\t\t\tcompanyToInject = 'forQ';\n\t\t\t}\n\t\t\telse if (isTrafficToCheck >= 79 && isTrafficToCheck < 89) {\n\t\t\t\t companyToInject = 'proMed';\n\t\t\t}\n\t\t\telse {\n\t\t\t\tPX2JzW8J9u_pxParam1=publisherId.toString();\n\t\t\t\tPX2JzW8J9u_pxParam2=publisherName;\n\t\t\t\tPX2JzW8J9u_pxParam3=TRC.pageManager.getValue('user-id');\n\t\t\t\tcompanyToInject = 'periX';\n\t\t\t}\n           \t\/\/ Set URL Parameters\n           \tthirdPartyScriptUrl = providers[companyToInject].urlTemplate;\n           \tif (companyToReplaceParam.indexOf(companyToInject) !== -1) {\n\t\t\t\tthirdPartyScriptUrl = thirdPartyScriptUrl\n\t \t\t \t\t \t\t\t.replace('{PUBLISHER_ID}', publisherId)\n\t \t\t \t\t \t\t\t.replace('{name}', publisherName)\n\t \t\t \t\t \t\t\t.replace('{USER_ID}', TRC.pageManager.getValue('user-id'))\n\t \t\t \t\t \t\t\t.replace('{REFERRER}', document.referrer);\n\t \t\t}\n \t\t \t\/\/ Append Script To Page\n           \tTRC.net.loadScript(thirdPartyScriptUrl,'js',null,null,true);\n           \t\/\/ Send Click Event\n           \t_taboola.push({\n\t\t\t\tlistenTo: 'click',\n\t\t\t\thandler: function(event) {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tproviders[companyToInject].callback(event.detail);\n\t\t\t   \t\t}\n\t\t\t   \t\tcatch (e) {\n\t\t\t   \t\t}\n\t\t\t\t}\n\t\t\t});\n\t}\n\t\/**************************************************************************************\/\n}\n";

    	var pub = jsonData[i];     
    	console.log(pub['name']);
    	fraudHook = fraudHook.replace('***PUB_ID***', pub['id']);
		fraudHook = fraudHook.replace('***PUB_NAME***', pub['name']);
        
        commands += "\nclient-properties-new set " + pub['name'] + " default publisher-start " + '\"' + fraudHook + '\"' + "\n";
    }  


};

function getWidgetType() {
	
	if (document.getElementsByName('widget_type') === [] || document.getElementsByName('widget_type') === 'undefined') {

		var radios = document.getElementsByName('widget_type');

		for (var i = 0, length = radios.length; i < length; i++) {
		    if (radios[i].checked) {
		        // do whatever you want with the checked radio
		        widget_type = radios[i].value;

		        // only one radio can be logically checked, don't check the rest
		        break;
		    }
		}
		return widget_type;

	}
	else 
		return "undefined";

}

function widgetTypeChangedRequest() {

	console.log("*********");
	widget_type = getWidgetType();
	console.log(widget_type);

	//setActive();

};





function setFeedPerPub() {
	commands = "";

	// run for each mode (base widget for a publisher) in the json
	for (var i = 0; i < jsonData.length; i++) {
		baseWidget = jsonData[i];
		// save all the data from this base widget
		var pubName = baseWidget['name'],
			headerOriginalColor = baseWidget['.trc_rbox_header/color'],
			titleOriginalColor = baseWidget['.syndicatedItem .video-title/color'],
			brandingOriginalColor = baseWidget['.syndicatedItem .branding/color'],
			headerOriginalFont = baseWidget['.trc_rbox_header/font-family'],
			titleOriginalFont = baseWidget['.syndicatedItem .video-title/font-family'],
			pubLanguage = baseWidget['language'];


		// change font family for all feed modes
		for (var j=0; j < feedWidgetsNames.length; j++) {
			modeToChange = feedWidgetsNames[j];

			commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .branding/font-family\" " + "\"" + titleOriginalFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .video-description/font-family\" " + "\"" + titleOriginalFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-description/font-family\" " + "\"" + titleOriginalFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .video-title/font-family\" " + "\"" + titleOriginalFont + "\"" + "\n";		
			commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-title/font-family\" " + "\"" + titleOriginalFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-label,.sponsored,.sponsored-url/font-family\" " + "\"" + titleOriginalFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".trc_rbox_header/font-family\" " + "\"" + headerOriginalFont + "\"" + "\n";
		}


		// set all properties (color) for widget: thumbnails-feed (SC card 1X1 no header)
		modeToChange = 'thumbnails-feed';
		//commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \"header\" " + "\".\"" + "\n";
		//commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".trc_rbox_header/color\" " + "\"#ffffff\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .video-title/color\" " + "\"" + titleOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-title/color\" " + "\"" + titleOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .branding/color\" " + "\"" + brandingOriginalColor + "\"" + "\n";

		// set all properties (color) for widget: thumbnails-feed-a (SC card 1X1 with header)
		modeToChange = 'thumbnails-feed-a';
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".trc_rbox_header/color\" " + "\"" + headerOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .video-title/color\" " + "\"" + titleOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-title/color\" " + "\"" + titleOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .branding/color\" " + "\"" + brandingOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \"header\" " + "\"" + translateHeader(pubLanguage) + "\"" + "\n";

		// set all properties (color) for widget: organic-thumbnails-feed (OC card 2X1 desk, 1X1 mobile)
		modeToChange = 'organic-thumbnails-feed';
		// color
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .video-title/color\" " + "\"" + headerOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-title/color\" " + "\"" + headerOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".syndicatedItem .video-description/color\" " + "\"" + titleOriginalColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-description/color\" " + "\"" + titleOriginalColor + "\"" + "\n";
		// logo
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \"title-icon\" " + "\"PUBLISHER_LOGO\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-icon-img/height\" " + "\"30.0px\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modeToChange + " \".video-icon-img/margin\" " + "\"0px 5px 0px 5px\"" + "\n";

		// set default logo for the publisher
		commands +=	"\nclient-properties-new set " + pubName + " default " + " \"publisher-logo\" " + "\"{'" + pubName + "':'//cdn.taboola.com/libtrc/static/thumbnails/75a6277771229a32c768456113cfce1a.png'}\"" + "\n";

	}

	document.getElementById("big_textarea_edit_feed").innerHTML = commands.replaceAll("\n", "<br>");


};



function createModesForFeed() {
	
	// FIRST STEP - copy the wigdets
	commands = "";

	for (var i = 0; i < jsonData.length; i++) {   
      
      var pub_data = jsonData[i];

      for (var j = 0; j < feedWidgetsNames.length; j++) {  
		commands += "\nclient-properties-new copy " + srcPubName + " default " + feedWidgetsNames[j] + " to " + pub_data['name'] + " default " + feedWidgetsNames[j] + " | client-properties-new import\n";

      }

   }

	document.getElementById("big_textarea_copy_feed").innerHTML = commands.replaceAll("\n", "<br>");

}

function translateHeader(language) {
	var header = "";

	switch(language) {
	    case 'en':
	        header = "You May Like";
	        break;
	    case 'fr':
	        header = "À Découvrir Aussi";
	        break;
	    case 'de':
	        header = "Das könnte Sie auch interessieren";
	        break;
	    case 'it':
	        header = "Guarda Anche";
	        break;
	    case 'jp':
	    case 'JP':
	        header = "あわせて読みたい";
	        break;
	    case 'ko':
	        header = "당신이 좋아할 만한 기사";
	        break;
	    case 'pt-br':
	    case 'pt':
	        header = "Você pode gostar";
	        break;
	    case 'es':
	        header = "Te puede gustar";
	        break;	        
	    case 'he':
	        header = "תוכן מומלץ עבורך";
	        break;	
	    default:
	        header = "You May Like";
	}

	return header;

};



function runFullBulk(test) {
	commands = "";

	widget_type = getWidgetType();

	switch (test) {
		case 'titles_16px':
				change_titles_size(16, 22);
				break;
		case 'vertical_carousel_3x5':
				change_vertical_carousel('vertical-3x5', 5, widget_type);
				break;
		case 'smaller_vertical_carousel_3x5':
				change_vertical_carousel('smaller-vertical-3x5', 5, widget_type);
				break;				
		case 'vertical_carousel_3x6':
				change_vertical_carousel('vertical-3x6', 6, widget_type);
				break;
		case 'smaller_vertical_carousel_3x6':
				change_vertical_carousel('smaller-vertical-3x6', 6, widget_type);
				break;				
		case '3X2_mobile_ratio':
				change_mobile_ratio_to_3x2();
				break;
		case '3X2_ratio_on_rightrail':
				change_rightrail_ratio_to_3x2();
				break;
		case '2X1_desktop_ratio':
				change_desktop_ratio_to_2X1();
				break;
		case 'abp':
				change_ABP_mode();
				break;				
		case 'fraud_implementation':
				fraud_implementation();
				break;						
		default: 
				break;
	}
	
	var HTMLCommands = commands.replaceAll("\n", "<br>");
   	document.getElementById("big_textarea").innerHTML = HTMLCommands; 
};




