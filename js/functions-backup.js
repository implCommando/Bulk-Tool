
var feedWidgetsData = 
[{"publisher_id":1038154, "name":"socialsweetheartsgmbh-buzzhearts-en", "mode_name":"organic-thumbnails-fa", "mode_id":180439, "is_editable":"no", ".syndicatedItem .video-title/font-size":"16.0px", ".syndicatedItem .video-title/line-height":"22.0px", ".syndicatedItem .video-title/max-height":"44.0px", ".video-title/font-size":"16.0px", ".video-title/line-height":"22.0px", ".video-title/max-height":"44.0px", "mode-custom-css":".organic-thumbnails-fa img {\n        max-width: none;\n}\n\/* override bootstrap default span definitions *\/\n.organic-thumbnails-fa [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbnails-fa .trc_rbox_header {\n    line-height: 1.2em;\n    position: relative;\n    display: inline-block;\n    width: 100%;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-fa .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-fa .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: inherit;\n}\n.organic-thumbnails-fa .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbnails-fa .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.organic-thumbnails-fa .videoCube a {\n    padding: 0;\n}\n.organic-thumbnails-fa .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .organic-thumbnails-fa .video-label-box {\n    height: auto;\n}\n.organic-thumbnails-fa .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.organic-thumbnails-fa .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbnails-fa .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.organic-thumbnails-fa .video-label-box .branding {\n    display: block;\n}\n.organic-thumbnails-fa .syndicatedItem .branding {\n    line-height: 22.0px;\n}\n.organic-thumbnails-fa .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-fa .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbnails-fa .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\/***** Lazy Loading Feed *****\/\n.trc_related_container .organic-thumbnails-fa .trc_rbox_outer .trc_rbox_div {\n\tmargin-bottom: 0px;\n}\n.trc_related_container .organic-thumbnails-fa .trc_rbox_header .pub-icon {\n\tfloat: left;\n    height: 40px;\n    width: 35px;\n\tmargin: 0px 4px;\n    vertical-align: middle;\n    display: inline-block;\n}\n.organic-thumbnails-fa .videoCube .video-label-box {\n\tpadding: 0px 5px;\n}\n.organic-thumbnails-fa .videoCube .video-label-box .video-description {\n\tmargin-top: 6px;\n}\n.organic-thumbnails-fa .videoCube .video-label-box .video-title {\n\tdisplay: none !important;\n}\n.organic-thumbnails-fa .trc_rbox_header .trc_rbox_header_span {\n\tvertical-align: middle;\n\tpadding-top: 5px;\n\tpadding-right: 5px;\n\t-webkit-line-clamp: 2;\n\tword-wrap: break-word;\n    overflow: hidden;\n    display: block;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n}\n@media screen and (min-width: 381px) and (max-width: 480px) {\n\t.trc_related_container .trc_rbox_container .organic-thumbnails-fa .trc_rbox_header .pub-icon {\n    \tmargin-left: 1px;\n\t}\n\t.organic-thumbnails-fa .trc_rbox_header {\n\t\tfont-size: 18px;\n\t\tpadding-top: 0px;\n\t}\n\t.organic-thumbnails-fa .trc_rbox_header .trc_rbox_header_span {\n\t\tpadding-top: 4px;\n\t}\n}\n@media screen and (max-width: 380px) {\n\t.trc_related_container .trc_rbox_container .organic-thumbnails-fa .trc_rbox_header .pub-icon {\n\t\tbackground-size: 30px 35px !important;\n\t    height: 32px;\n\t    width: 30px;\n\t    margin-left: 1px;\n\t}\n\t.trc_related_container .trc_rbox_container .organic-thumbnails-fa .trc_rbox_header {\n\t\tfont-size: 17px;\n\t\tline-height: 18px;\n\t\tpadding-top: 0px;\n\t}\n\t.organic-thumbnails-fa .trc_rbox_header .trc_rbox_header_span {\n\t\tpadding-top: 3px;\n\t\tmax-height: 38px;\n\t}\n}", "responsive-rules":"[{\"minWidth\":0,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":1,virtualThumbWidth:16,virtualThumbHeight:9}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\t\tfor(var i = 0; i < data.boxes.length; i++) {\n\t\t    data.boxes[i].style.height = 'auto';\n\t    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\t\tvar clearDiv = document.createElement('div');\n\t        \tclearDiv.style.clear = 'both';\n\t\t        clearDiv.style.width = '100%';\n\t\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t\t    }\n\t\t}\n    }\n    \/***** Lazy Loading Feed *****\/\n    try {\n\t\tvar targetContainer = data.container._trc_container,\n\t\t\tcurrentHeader =  (data['header']).getElementsByClassName('trc_rbox_header_span')[0],\n    \t\titemTitle = (data['recommendationList'][0])['title'];\n    \tif (currentHeader && itemTitle) {\n    \t\tvar currentHeaderParent =  currentHeader.parentNode;\n\t    \t\/\/Set title as Header\n\t    \tcurrentHeader.innerHTML = itemTitle;\n\t    \t\/\/Add header icon\n\t\t\tvar pubIconImg = '\/\/cdn.taboola.com\/static\/77\/770161a2-e2c5-4ff4-878d-4589d287c6ef.png',\n\t\t\t\tpubIcon = document.createElement('span');\n\t\t\tpubIcon.setAttribute('class','pub-icon');\n\t\t\tpubIcon.style.background = 'url(\\\"' + pubIconImg + '\\\") center center \/ 35px 40px no-repeat';\n\t\t\tcurrentHeaderParent.insertBefore(pubIcon, currentHeader);\n\t\t}\n\t}\n\tcatch(e) {\n\t}\n\t\/****************************\/\n}", "smart-ellipsis":"true"},
{"publisher_id":1038154, "name":"socialsweetheartsgmbh-buzzhearts-en", "mode_name":"organic-thumbnails-fb", "mode_id":180440, "is_editable":"no", ".syndicatedItem .video-title/font-size":"16.0px", ".syndicatedItem .video-title/line-height":"22.0px", ".syndicatedItem .video-title/max-height":"66.0px", ".video-title/font-size":"16.0px", ".video-title/line-height":"22.0px", ".video-title/max-height":"66.0px", "mode-custom-css":".organic-thumbnails-fb img {\n        max-width: none;\n}\n\/* override bootstrap default span definitions *\/\n.organic-thumbnails-fb [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.organic-thumbnails-fb .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-fb .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-fb .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        line-height: inherit;\n}\n.organic-thumbnails-fb .logoDiv a {\n    font-size: 100%;\n}\n.organic-thumbnails-fb .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.organic-thumbnails-fb .videoCube a {\n    padding: 0;\n}\n.organic-thumbnails-fb .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .organic-thumbnails-fb .video-label-box {\n    height: auto;\n}\n.organic-thumbnails-fb .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.organic-thumbnails-fb .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.organic-thumbnails-fb .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.organic-thumbnails-fb .video-label-box .branding {\n    display: block;\n}\n.organic-thumbnails-fb .syndicatedItem .branding {\n    line-height: 24.0px;\n}\n.organic-thumbnails-fb .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.organic-thumbnails-fb .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.organic-thumbnails-fb .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\/***** Lazy Loading Feed *****\/\n.trc_related_container .organic-thumbnails-fb .trc_rbox_outer .trc_rbox_div {\n\tmargin-bottom: 0px;\n}\n.trc_related_container .organic-thumbnails-fb .trc_rbox_header .pub-icon {\n\tfloat: left;\n    height: 40px;\n    width: 35px;\n\tmargin-right: 4px;\n\tmargin-left: 1px;\n    vertical-align: middle;\n    display: inline-block;\n}\n.organic-thumbnails-fb .videoCube .video-label-box .video-description {\n\tmargin-top: 5px;\n}\n.organic-thumbnails-fb .videoCube .video-label-box .video-title {\n\tmargin-top: 6px;\n\tpadding-left: 5px;\n}\n.organic-thumbnails-fb .trc_rbox_header .trc_rbox_header_span {\n\tvertical-align: middle;\n}\n\/***** Carousel *****\/\n.trc_related_container .organic-thumbnails-fb .trc_rbox_outer .trc_rbox_div {\n    -webkit-overflow-scrolling: touch;\n    -webkit-animation-duration: 4000ms;\n\toverflow-scrolling: touch;\n\toverflow: scroll;\n}\n.organic-thumbnails-fb .trc_rbox_div > div {\n    width: 290%!important;\n}\n.trc_rbox_container .organic-thumbnails-fb .trc_rbox_outer {\n    margin-left: 0px;\n}\n.organic-thumbnails-fb .trc_rbox_outer .trc_rbox_div .videoCube:not(.videoCube_1_child) {\n    margin-left: 1.2%;\n}\n.organic-thumbnails-fb .trc_rbox_outer .trc_rbox_div .videoCube.videoCube_1_child {\n    margin-left: 0px;\n}\n@media screen and (max-width: 380px) {\n\t.trc_related_container .trc_rbox_container .organic-thumbnails-fb .trc_rbox_header .pub-icon {\n\t\tbackground-size: 30px 35px !important;\n\t    height: 32px;\n\t    width: 30px;\n\t}\n\t.trc_related_container .trc_rbox_container .organic-thumbnails-fb .trc_rbox_header {\n\t\tfont-size: 17px;\n\t\tline-height: 25px;\n\t}\n}\n", "responsive-rules":"[{\"minWidth\":0,\"margin\":{\"v\":1,\"h\":1},\"rows\":1,\"cells\":4,virtualThumbWidth:16,virtualThumbHeight:9}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\t\tfor(var i = 0; i < data.boxes.length; i++) {\n\t\t    data.boxes[i].style.height = 'auto';\n\t    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\t\tvar clearDiv = document.createElement('div');\n\t        \tclearDiv.style.clear = 'both';\n\t\t        clearDiv.style.width = '100%';\n\t\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t\t    }\n\t\t}\n    }\n    \/***** Lazy Loading Feed *****\/\n    try {\n\t\tvar targetContainer = data.container._trc_container,\n\t\t\tcurrentHeader =  targetContainer.getElementsByClassName('trc_rbox_header_span')[0],\n\t\t\tcurrentHeaderParent;\n    \t\/\/Add header icon\n\t\tvar pubIconImg = '\/\/cdn.taboola.com\/static\/77\/770161a2-e2c5-4ff4-878d-4589d287c6ef.png',\n\t\t\tpubIcon = document.createElement('span');\n\t\tpubIcon.setAttribute('class','pub-icon');\n\t\tif (currentHeader) {\n\t\t\tcurrentHeaderParent =  currentHeader.parentNode;\n\t\t\tpubIcon.style.background = 'url(\"' + pubIconImg + '\") center center \/ 35px 40px no-repeat';\n\t\t\tcurrentHeaderParent.insertBefore(pubIcon, currentHeader);\n\t\t}\n\t}\n\tcatch(e) {\n\t}\n\t\/****************************\/\n}", "smart-ellipsis":"true"},
{"publisher_id":1038154, "name":"socialsweetheartsgmbh-buzzhearts-en", "mode_name":"thumbnails-fa", "mode_id":180441, "is_editable":"no", ".syndicatedItem .video-title/font-size":"16.0px", ".syndicatedItem .video-title/line-height":"22.0px", ".syndicatedItem .video-title/max-height":"44.0px", ".video-title/font-size":"16.0px", ".video-title/line-height":"22.0px", ".video-title/max-height":"44.0px", "mode-custom-css":".thumbnails-fa img {\n        max-width: none;\n}\n\/* override bootstrap default span definitions *\/\n.thumbnails-fa [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-fa .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-fa .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-fa .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: inherit;\n}\n.thumbnails-fa .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-fa .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-fa .videoCube a {\n    padding: 0;\n}\n.thumbnails-fa .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-fa .video-label-box {\n    height: auto;\n}\n.thumbnails-fa .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.thumbnails-fa .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-fa .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.thumbnails-fa .video-label-box .branding {\n    display: block;\n}\n.thumbnails-fa .syndicatedItem .branding {\n    line-height: 23.0px;\n}\n.thumbnails-fa .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-fa .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-fa .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\/***** Lazy Loading Feed *****\/\n.trc_related_container .thumbnails-fa .trc_rbox_outer .trc_rbox_div {\n\tmargin-bottom: 0px;\n}\n.trc_related_container .thumbnails-fa .trc_rbox_header .taboola-icon {\n\tfloat: left;\n    height: 30px;\n    width: 35px;\n    vertical-align: middle;\n}\n.thumbnails-fa .trc_rbox_header .trc_rbox_header_span {\n\tvertical-align: middle;\n\tpadding-right: 5px\n}\n.thumbnails-fa .videoCube .video-label-box {\n    padding: 0px 5px;\n}\n@media screen and (min-width: 381px) and (max-width: 480px) {\n\t.trc_related_container .trc_rbox_container .thumbnails-fa .trc_rbox_header .taboola-icon {\n\t    background-size: 25px 25px !important;\n    \theight: 26px;\n    \twidth: 30px;\n    \tmargin-right: 3px;\n\t}\n\t.trc_related_container .trc_rbox_container .thumbnails-fa .trc_rbox_header {\n\t\tline-height: 23px;\n\t}\n}\n@media screen and (max-width: 380px) {\n\t.trc_related_container .trc_rbox_container .thumbnails-fa .trc_rbox_header .taboola-icon {\n\t    background-size: 20px 17px !important;\n\t    height: 24px;\n\t    width: 21px;\n\t}\n\t.trc_related_container .trc_rbox_container .thumbnails-fa .trc_rbox_header {\n\t\tfont-size: 16px;\n\t\tline-height: 21px;\n\t}\n}\n", "responsive-rules":"[{\"minWidth\":0,maxWidth:480,\"margin\":{\"v\":2,\"h\":2},\"rows\":2,\"cells\":1,virtualThumbWidth:16,virtualThumbHeight:9},{\"minWidth\":481,maxWidth:749,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":2,virtualThumbWidth:16,virtualThumbHeight:9},{\"minWidth\":750,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":2,virtualThumbWidth:16,virtualThumbHeight:9}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\t\tfor(var i = 0; i < data.boxes.length; i++) {\n\t\t    data.boxes[i].style.height = 'auto';\n\t    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\t\tvar clearDiv = document.createElement('div');\n\t        \tclearDiv.style.clear = 'both';\n\t\t        clearDiv.style.width = '100%';\n\t\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t\t    }\n\t\t}\n    }\n     \/***** Lazy Loading Feed *****\/\n    try {\n    \t\/\/Add header icon\n\t\tvar taboolaIconImg = '\/\/cdn.taboola.com\/static\/d0\/d07b304c-6546-48cd-adc9-08771d79b35a.gif',\n\t\t\ttargetContainer = data.container._trc_container,\n\t\t\ttaboolaIcon = document.createElement('span'),\n\t\t\tcurrentHeader =  targetContainer.getElementsByClassName('trc_rbox_header_span')[0],\n\t\t\tcurrentHeaderParent;\n\t\ttaboolaIcon.setAttribute('class','taboola-icon');\n\t\tif (currentHeader) {\n\t\t\tcurrentHeaderParent =  currentHeader.parentNode;\n\t\t\ttaboolaIcon.style.background = 'url(\"' + taboolaIconImg + '\") center center \/ 24px 20px no-repeat';\n\t\t\tcurrentHeaderParent.insertBefore(taboolaIcon, currentHeader);\n\t\t}\n\t}\n\tcatch(e) {\n\t}\n\t\/****************************\/\n}", "smart-ellipsis":"true"},
{"publisher_id":1038154, "name":"socialsweetheartsgmbh-buzzhearts-en", "mode_name":"thumbnails-fb", "mode_id":180442, "is_editable":"no", ".syndicatedItem .video-title/font-size":"16.0px", ".syndicatedItem .video-title/line-height":"22.0px", ".syndicatedItem .video-title/max-height":"66.0px", ".video-title/font-size":"16.0px", ".video-title/line-height":"22.0px", ".video-title/max-height":"66.0px", "mode-custom-css":".thumbnails-fb img {\n        max-width: none;\n}\n\/* override bootstrap default span definitions *\/\n.thumbnails-fb [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-fb .trc_rbox_header {\n        line-height: 1.2em;\n        position: relative;\n        display: inline-block;\n        width: 100%;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-fb .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-fb .trc_rbox_header .logoDiv {\n    font-size: inherit;\n    line-height: inherit;\n}\n.thumbnails-fb .logoDiv a {\n    font-size: 100%;\n}\n.thumbnails-fb .logoDiv a span {\n    display: inline;\n    color: #000000;\n    font-weight: normal;\n    font-size: 11.0px;\n}\n.thumbnails-fb .videoCube a {\n    padding: 0;\n}\n.thumbnails-fb .thumbBlock {\n    margin: 0;\n}\n.trc_elastic .thumbnails-fb .video-label-box {\n    height: auto;\n}\n.thumbnails-fb .videoCube .video-label-box {\n    margin-top: 5px;\n}\n.thumbnails-fb .videoCube .video-label-box .video-title {\n    text-decoration: none;\n    margin: 0;\n}\n.thumbnails-fb .videoCube:hover .video-label-box .video-title {\n    text-decoration: underline;\n}\n.thumbnails-fb .video-label-box .branding {\n    display: block;\n}\n.thumbnails-fb .syndicatedItem .branding {\n    line-height: 23.0px;\n}\n.thumbnails-fb .trc_header_left_column {\n\twidth: 48%;\n\tdisplay: inline-block;\n\tbackground: transparent;\n\theight: auto;\n}\n.thumbnails-fb .trc_rbox_header .logoDiv a {\n\tfont-size: 100%;\n}\n.thumbnails-fb .trc_rbox_header .trc_header_ext {\n\tposition: relative;\n\ttop: auto;\n\tright: auto;\n}\n\/***** Lazy Loading Feed *****\/\n.trc_related_container .thumbnails-fb .trc_rbox_outer .trc_rbox_div {\n\tmargin-bottom: 0px;\n}\n.trc_related_container .thumbnails-fb .trc_rbox_header .taboola-icon {\n\tfloat: left;\n    height: 26px;\n    width: 30px;\n    margin-right: 3px;\n    vertical-align: middle;\n}\n.thumbnails-fb .videoCube .video-label-box {\n    padding: 0px 5px;\n}\n.thumbnails-fb .videoCube .video-label-box .video-description {\n\tmargin-top: 5px;\n}\n.thumbnails-fb .videoCube .video-label-box .video-title {\n\tmargin-top: 6px;\n}\n.thumbnails-fb .trc_rbox_header .trc_rbox_header_span {\n\tvertical-align: middle;\n}\n@media screen and (max-width: 380px) {\n\t.trc_related_container .trc_rbox_container .thumbnails-fb .trc_rbox_header .taboola-icon {\n\t\tbackground-size: 21px 17px !important;\n\t    height: 24px;\n\t    width: 24px;\n\t    margin-right: 2px;\n\t}\n\t.trc_related_container .trc_rbox_container .thumbnails-fb .trc_rbox_header {\n\t\tfont-size: 17px;\n    \tline-height: 25px;\n\t}\n}\n", "responsive-rules":"[{\"minWidth\":0,\"margin\":{\"v\":2,\"h\":2},\"rows\":1,\"cells\":1,virtualThumbWidth:16,virtualThumbHeight:9}]", "list-suffix":"function(itemsContainer, data) {\n    if(TRCImpl && TRCImpl.modes[data.mode_name] && !TRCImpl.modes[data.mode_name]['mode-is-responsive']) {\n\t\tfor(var i = 0; i < data.boxes.length; i++) {\n\t\t    data.boxes[i].style.height = 'auto';\n\t    \t    if((i % (data.boxes.length \/ data.rows) == 0) && i != 0) {\n\t\t\tvar clearDiv = document.createElement('div');\n\t        \tclearDiv.style.clear = 'both';\n\t\t        clearDiv.style.width = '100%';\n\t\t    \titemsContainer.insertBefore(clearDiv, data.boxes[i]);\n\t\t    }\n\t\t}\n    }\n    \/***** Lazy Loading Feed *****\/\n    try {\n\t\tvar targetContainer = data.container._trc_container,\n\t\t\tcurrentHeader =  targetContainer.getElementsByClassName('trc_rbox_header_span')[0],\n\t\t\tcurrentHeaderParent;\n    \t\/\/Add header icon\n\t\tvar pubIconImg = '\/\/cdn.taboola.com\/static\/d0\/d07b304c-6546-48cd-adc9-08771d79b35a.gif',\n\t\t\tpubIcon = document.createElement('span');\n\t\tpubIcon.setAttribute('class','taboola-icon');\n\t\tif (currentHeader) {\n\t\t\tcurrentHeaderParent =  currentHeader.parentNode;\n\t\t\tpubIcon.style.background = 'url(\"' + pubIconImg + '\") center center \/ 25px 22px no-repeat';\n\t\t\tcurrentHeaderParent.insertBefore(pubIcon, currentHeader);\n\t\t}\n\t}\n\tcatch(e) {\n\t}\n\t\/****************************\/\n}", "smart-ellipsis":"true"}]
;

var feed_platforms = "ALL";




function getPlatform() {
	
	if (document.getElementsByName('feed_platforms')) {

		var radios = document.getElementsByName('feed_platforms');

		for (var i = 0, length = radios.length; i < length; i++) {
		    if (radios[i].checked) {
		        // do whatever you want with the checked radio
		        feed_platforms = radios[i].value;

		        // only one radio can be logically checked, don't check the rest
		        break;
		    }
		}
		return feed_platforms;

	}
	else 
		return "undefined";

	console.log("platform: " + feed_platforms);


}

function updatePlatform() {

	feed_platforms = getPlatform();
	console.log("platform: " + feed_platforms);

};


// create 7 client-properties commands foreach publisher 
// in order to change the titles' font-size
// this affects on line-height, max-size, height and branding line-height
function feed_change_font_size(new_font_size, new_line_height) {

	var data = []; //= feedWidgetsData;
	if (feed_platforms === "PHON") {
		data.push(feedWidgetsData[0]);
		data.push(feedWidgetsData[1]);
		data.push(feedWidgetsData[3]);
	}
	else if (feed_platforms === "DESK") {
		data.push(feedWidgetsData[0]);
		data.push(feedWidgetsData[2]);
	}	
	else {
		var data = feedWidgetsData;
	}
	console.log(data);

	var srcMode = jsonData[0];

    for (var i = 0; i < data.length ; i++) {       
    	console.log("------ "+i+" ------");
		var needChange = false;
		var newCustom = "";
		var oldCustom = "";    	

        var mode = data[i];
    	console.log(mode['mode_name']);        
        // edit FONT-SIZE client-properties
        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-title/font-size\" \"" + new_font_size + "\"\n";
        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".video-title/font-size\" \"" + new_font_size + "\"\n";

        // edit LINE-HEIGHT client-properties
        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-title/line-height\" \"" + new_line_height + "\"\n";
        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".video-title/line-height\" \"" + new_line_height + "\"\n";

        // calculate the number of ROWS
    	var rows = parseInt(srcMode['.syndicatedItem .video-title/max-height'])/parseInt(srcMode['.syndicatedItem .video-title/line-height']); 
        // edit MAX-HEIGHT client-properties
        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-title/max-height\" \"" + rows*parseInt(new_line_height) + ".0px\"\n";
        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".video-title/max-height\" \"" + (rows+1)*parseInt(new_line_height) + ".0px\"\n";

        // SET HEIGHT IN CUSTOM-CSS
        if (mode['newCustom'])
        	oldCustom = mode['newCustom'];
        else
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
	            	temp = temp.replace(oldHeight, " " + new_line_height );
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
	            	temp = temp.replace(oldHeight, " " + ((rows+1)*parseInt(new_line_height)) + ".0px" );
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
            	temp = temp.replace(oldHeight, " " + new_line_height);
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
        	commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " mode-custom-css " + '\"' + newCustom + '\"' + "\n";        
        	console.log("added new command");
        	console.log("\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " mode-custom-css " + '\"' + newCustom + '\"' + "\n");
        }

        // edit description sizes for organic widgets
        if (mode['mode_name'].indexOf('organic-') === 0) {

	        // edit FONT-SIZE client-properties
	        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-description/font-size\" \"" + new_font_size + "\"\n";
	        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".video-description/font-size\" \"" + new_font_size + "\"\n";

	        // edit LINE-HEIGHT client-properties
	        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-description/line-height\" \"" + new_line_height + "\"\n";
	        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".video-description/line-height\" \"" + new_line_height + "\"\n";

	        // edit MAX-HEIGHT client-properties
	        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".syndicatedItem .video-description/max-height\" \"" + rows*parseInt(new_line_height) + ".0px\"\n";
	        commands += "\nclient-properties-new set " + srcMode['name'] + " default " + mode['mode_name'] + " \".video-description/max-height\" \"" + (rows+1)*parseInt(new_line_height) + ".0px\"\n";

		}


       
    } // end of FOR loop

};


function copyModesForFeed() {

	var mode = jsonData[0];
	var pubName, baseWidget;

	// Getting the parameters - pub & base widget
	if (document.getElementById('pubName').value !== "")
		pubName = document.getElementById('pubName').value;
	else
		pubName = mode['name'];
	console.log(pubName);
	if (document.getElementById('baseWidget').value !== "")
		baseWidget = document.getElementById('baseWidget').value;
	else
		baseWidget = mode['mode_name'];
	console.log(baseWidget);

	// FIRST STEP - copy the wigdets
	var srcPubName =  "socialsweetheartsgmbh-buzzhearts-en";
	commands = "";
    commands += "\nclient-properties-new copy " + srcPubName + " default thumbnails-fa to " + pubName + " default thumbnails-fa | client-properties-new import\n";
	commands += "\nclient-properties-new copy " + srcPubName + " default thumbnails-fb to " + pubName + " default thumbnails-fb | client-properties-new import\n";
    commands += "\nclient-properties-new copy " + srcPubName + " default organic-thumbnails-fa to " + pubName + " default organic-thumbnails-fa | client-properties-new import\n";
	commands += "\nclient-properties-new copy " + srcPubName + " default organic-thumbnails-fb to " + pubName + " default organic-thumbnails-fb | client-properties-new import\n";
	
	commands += "\nclient-properties-new copy " + pubName + " default " + baseWidget + " to " + pubName + " default thumbnails-feed | client-properties-new import\n";

	document.getElementById("big_textarea").innerHTML += commands.replaceAll("\n", "<br>");

}




// the olf function for creation feed with parameters (from a form) in the old implementation way
function createFeed() {
	//baseWidget, logo, font, headerSize, headerLineHeight, headerMaxHeight, titleSize, titleLineHeight, titleMaxHeight

	console.log("test feed");
	var mode = jsonData[0];


	/* *************** Getting the parameters *************** */

	if (document.getElementById('pubName').value !== "")
		pubName = document.getElementById('pubName').value;
	else
		pubName = mode['name'];
	console.log(pubName);
	if (document.getElementById('baseWidget').value !== "")
		baseWidget = document.getElementById('baseWidget').value;
	else
		baseWidget = mode['mode_name'];
	console.log(baseWidget);

	var newLogo = document.getElementById('icon').value;
	console.log(newLogo);

	if (document.getElementById('titleFont').value !== "")
		var titleFont = document.getElementById('titleFont').value;
	else 
		var titleFont = mode['.syndicatedItem .video-title/font-family'];
	console.log(titleFont);

	if (document.getElementById('headerFont').value !== "")
		var headerFont = document.getElementById('headerFont').value;
	else 
		var headerFont = mode['.syndicatedItem .video-title/font-family'];
	console.log(headerFont);

	if (document.getElementById('headerSize').value !== "")
		var headerSize = document.getElementById('headerSize').value;
	else
		var headerSize = mode['.trc_rbox_header/font-size'];
	console.log(headerSize);

	var headerLineHeight = document.getElementById('headerLineHeight').value;
	console.log(headerLineHeight);
	// var headerMaxHeight = document.getElementById('headerMaxHeight').value;
	// console.log(headerMaxHeight);		

	if (document.getElementById('titleSize').value !== "") 
		var titleSize = document.getElementById('titleSize').value;
	else 
		var titleSize = mode['.syndicatedItem .video-title/font-size'];
	console.log(titleSize);

	if (document.getElementById('titleLineHeight').value !== "")
		var titleLineHeight = document.getElementById('titleLineHeight').value;
	else
		var titleLineHeight = mode['.syndicatedItem .video-title/line-height'];
	console.log(titleLineHeight);
	// var titleMaxHeight = document.getElementById('titleMaxHeight').value;
	// console.log(titleMaxHeight);

	/* *************** SET THE BASE WIDGET *************** */

	commands = "";
	//reset the header to '.'
	commands += "\n\n\n/***************************** set header *****************************/ \n\n\n";
	/**/
	commands += "\nclient-properties-new set " + pubName + " default thumbnails-feed header \".\"\n" 
	commands += "\nclient-properties-new set " + pubName + " default thumbnails-feed \".trc_rbox_header/color\" \"#fff\"\n";

	// change the color in custom css to #fff
    var oldCustom = mode['mode-custom-css'];
    // console.log("oldCustom:\n", oldCustom);
    var customChanges = false, 
    	newCustom = "";

	var selectors = "." + mode['mode_name'] + " .trc_rbox_header";
    var index = oldCustom.indexOf(selectors);
    // .trc_rbox_header selector was found
    if (index > -1) {
        // PART 1 OF CUSTOM
        var custom_part1 = oldCustom.substring(0, index);
        var temp = oldCustom.substring(index);
        temp = temp.substring(0, temp.indexOf('}')+1);

        // PART 3 OF CUSTOM
        var custom_part3 = oldCustom.substring(index+temp.length);
        // working on temp part (custom_part2)
        var colorIndex = temp.indexOf('color:');
        if (colorIndex > -1) {
        	var oldColor = temp.substring(colorIndex+6);
        	oldColor = oldColor.substring(0, oldColor.indexOf(';'));
        	temp = temp.replace(oldColor, " #fff");
        	newCustom = custom_part1.concat("\n").concat(temp).concat("\n").concat(custom_part3);
        	customChanges = true;
        }
        // else {
        // 	temp = temp.substring(0,temp.lastIndexOf('}')-1);
        // 	newRow = "\ncolor: #fff;\n}\n";
        // 	temp = temp.concat(newRow);
        // 	newCustom = custom_part1.concat("\n").concat(temp).concat("\n").concat(custom_part3);
        	
        // }

        if (newCustom.length > 0 && newCustom !== 'undefined' && customChanges) { 
        	newCustom = newCustom.replaceAll("."+baseWidget, ".thumbnails-feed");
        	// console.log("newCustom:\n" + newCustom);
        	commands += "\nclient-properties-new set " + pubName + " default thumbnails-feed mode-custom-css " + '\"' + newCustom + '\"' + "\n";        
        }        

    }
    else {
    	// trc_rbox_header selector was not found
		console.log("trc_rbox_header selector was not found");
	}

	/* *************** SET THE FEED WIDGETS *************** */
	
	// organic widgets - change the logo
	commands += "\n\n\n/***************************** organic widgets:list-suffix set LOGO *****************************/\n\n\n";
	// get the list suffix for desktop (organic-thumbnails-fa)
	var listSuffixDesk = feedWidgetsData[0]['list-suffix'];	
	var index_start = listSuffixDesk.indexOf('//cdn.taboola.com');
	var lsTemp = listSuffixDesk.substring(listSuffixDesk.indexOf('//cdn.taboola.com'), listSuffixDesk.length);
	var oldLogo = lsTemp.substring(0, lsTemp.indexOf("',"));
	var newListSuffixDesk = listSuffixDesk.replace(oldLogo, newLogo);
	// get the list suffix for mobile (organic-thumbnails-fb)
	var listSuffixPhon = feedWidgetsData[1]['list-suffix'];	
	index_start = listSuffixPhon.indexOf('//cdn.taboola.com');
	lsTemp = listSuffixPhon.substring(listSuffixPhon.indexOf('//cdn.taboola.com'), listSuffixPhon.length);
	oldLogo = lsTemp.substring(0, lsTemp.indexOf("',"));
	var newListSuffixPhon = listSuffixPhon.replace(oldLogo, newLogo);


	if (feed_platforms === "PHON" || feed_platforms === "ALL") {
		commands += "\nclient-properties-new set " + pubName + " default organic-thumbnails-fb list-suffix " + '\"' + newListSuffixPhon + '\"' + "\n";	
	}
	commands += "\nclient-properties-new set " + pubName + " default organic-thumbnails-fa list-suffix " + '\"' + newListSuffixDesk + '\"' + "\n";	


	commands += "\n\n\n/***************************** all widgets: font-family & header font-size *****************************/\n\n\n";

	if (feed_platforms === "DESK") {
		var modes = ["thumbnails-fa", "organic-thumbnails-fa"];
	} 
	else if (feed_platforms === "PHON") {
		var modes = ["thumbnails-fb", "organic-thumbnails-fa", "organic-thumbnails-fb"];
	}
	else {
		var modes = ["thumbnails-fa", "thumbnails-fb", "organic-thumbnails-fa", "organic-thumbnails-fb"];
	}

	console.log(titleFont);

	for (var i=0; i<modes.length; i++) {
		// font family changes
		if (titleFont) {
			commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".syndicatedItem .branding/font-family\" " + "\"" + titleFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".syndicatedItem .video-description/font-family\" " + "\"" + titleFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".video-description/font-family\" " + "\"" + titleFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".syndicatedItem .video-title/font-family\" " + "\"" + titleFont + "\"" + "\n";		
			commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".video-title/font-family\" " + "\"" + titleFont + "\"" + "\n";
			commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".video-label,.sponsored,.sponsored-url/font-family\" " + "\"" + titleFont + "\"" + "\n";
		}
		if (headerFont) {
			commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".trc_rbox_header/font-family\" " + "\"" + headerFont + "\"" + "\n";
		}
		// header font-size
		if (headerSize) {
			commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".trc_rbox_header/font-size\" " + "\"" + headerSize + "\"" + "\n";
		}

	} // end of for loop the modes

	// header line-height change in mode-custom-css
	if (headerLineHeight !== "") {
		commands += "\n\n\n/***************************** header line-height in custom-css *****************************/\n\n\n";
		for (var i=0; i<feedWidgetsData.length; i++) {
		    var oldCustom = feedWidgetsData[i]['mode-custom-css'];
		    //console.log("oldCustom:\n", oldCustom);
		    var customChanges = false, 
		    	newCustom = "";

			var selectors = "." + feedWidgetsData[i]['mode_name'] + " .trc_rbox_header";
		    var index = oldCustom.indexOf(selectors);
		    // .trc_rbox_header selector was found
		    if (index > -1) {
		        // PART 1 OF CUSTOM
		        var custom_part1 = oldCustom.substring(0, index);
		        var temp = oldCustom.substring(index);
		        temp = temp.substring(0, temp.indexOf('}')+1);

		        // PART 3 OF CUSTOM
		        var custom_part3 = oldCustom.substring(index+temp.length);
		        // working on temp part (custom_part2)
		        var heightIndex = temp.indexOf('line-height:');
		        if (heightIndex > -1) {
		        	var oldHeight = temp.substring(heightIndex+12);
		        	oldHeight = oldHeight.substring(0, oldHeight.indexOf(';'));
	            	temp = temp.replace(oldHeight, " " + headerLineHeight + ".0px" );
		        	newCustom = custom_part1.concat("\n").concat(temp).concat("\n").concat(custom_part3);
		        	customChanges = true;
		        }

		        if (newCustom.length > 0 && newCustom !== 'undefined' && customChanges) { 
		        	console.log("newCustom:\n" + newCustom);
		        	commands += "\nclient-properties-new set " + pubName + " default " + feedWidgetsData[i]['mode_name'] + " mode-custom-css " + '\"' + newCustom + '\"' + "\n";
		        	feedWidgetsData[i].newCustom = newCustom;
		        }        

		    }
		    else {
		    	// trc_rbox_header selector was not found
				console.log("trc_rbox_header selector was not found");
			}	
		}
	}
	else
		// try to find line height in custom css
		console.log("headerLineHeight not defined");


	commands += "\n\n\n/***************************** font-size titles + descriptions + branding *****************************/\n\n\n";
	// font-size changes
	feed_change_font_size(titleSize, titleLineHeight);



	var srcMode = jsonData[0];
	var headerColor = srcMode[".trc_rbox_header/color"],
		rcTitleColor = srcMode[".video-title/color"],
		scTitleColor = srcMode[".syndicatedItem .video-title/color"],
		brandingColor = srcMode[".syndicatedItem .branding/color"];

	commands += "\n\n\n/***************************** colors header + titles + branding *****************************/\n\n\n";
	for (var i=0; i<modes.length; i++) {
		// header
		commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".trc_rbox_header/color\" " + "\"" + headerColor + "\"" + "\n";
		// title
		commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".video-title/color\" " + "\"" + rcTitleColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".syndicatedItem .video-title/color\" " + "\"" + scTitleColor + "\"" + "\n";
		// branding
		commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".syndicatedItem .branding/color\" " + "\"" + brandingColor + "\"" + "\n";		
		// description
		commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".video-description/color\" " + "\"" + rcTitleColor + "\"" + "\n";
		commands +=	"\nclient-properties-new set " + pubName + " default " + modes[i] + " \".syndicatedItem .video-description/color\" " + "\"" + scTitleColor + "\"" + "\n";

	} // end of for loop the modes


	// last
	document.getElementById("big_textarea").innerHTML += commands.replaceAll("\n", "<br>");
	// writeToFile();

};
