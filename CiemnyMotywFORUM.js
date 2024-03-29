// ==UserScript==
// @name         Ciemny Motyw dla td2 (FORUM)
// @namespace    https://greasyfork.org/pl/scripts/418580-ciemny-motyw-dla-td2-forum
// @version      6.1(OFFICIAL)
// @description  ciemny motyw dla td2.info.pl Autor RIVIO @2021
// @author       RIVIO @2021
// @match        https://td2.info.pl/*
// @run-at       document-end
// ==/UserScript==

(function() {var css = [

/*NIE MODYFIKUJEMY bez zgody autora(w celu naprawy zgłoś się do autora skryptu)*/

/*Skrypt*/

 /* Główne */

    /* Pierwszeństwo */
    "body {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/backdrop2.png) repeat-x !important;",
    "}",
    "#header div.frame, #header {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) no-repeat 1% -480px !important;",
    "}",
    "#content_section, #content_section div.frame {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/frame_repeat.png) repeat-y top left !important;",
    "}",
    ".windowbg span.topslice span, .windowbg span.topslice, .approvebg span.topslice span {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 100% -30px no-repeat !important;",
    "}",
    ".approvebg span.botslice span, .windowbg span.botslice span {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 100% -40px no-repeat !important;",
    "}",
    ".approvebg span.botslice, .windowbg span.botslice {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 0 -40px no-repeat !important;",
    "}",
    ".approvebg span.topslice {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 0 -30px no-repeat !important;",
    "}",
    ".windowbg2 span.botslice span {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 100% -71px no-repeat !important;",
    "}",
    ".windowbg2 span.topslice span {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 100% -60px no-repeat !important;",
    "}",
    ".windowbg2 span.topslice {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 0 -60px no-repeat !important;",
    "}",
    ".windowbg2 span.botslice {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 0 -71px no-repeat !important;",
    "}",
    "#footer_section div.frame, #footer_section {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) no-repeat 1% -820px !important;",
    "}",
    "span.upperframe {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 0 -90px no-repeat !important;",
    "}",
    "span.lowerframe {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 0 -102px no-repeat !important;",
    "}",
    "span.upperframe span {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 100% -90px no-repeat !important;",
    "}",
    "span.lowerframe span {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) 100% -102px no-repeat !important;",
    "}",
    "h4.titlebg, h3.titlebg {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) no-repeat 100% -200px !important;",
    "}",
    "div.roundframe div.cat_bar h3.catbg {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) no-repeat 100% -240px !important;",
    "}",
    "div.title_barIC h4.titlebg {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) no-repeat 100% -120px !important;",
    "}",
    "div.title_barIC {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) no-repeat 0 -120px !important;",
    "}",
    ".titlebg, .titlebg2, tr.titlebg th, tr.titlebg td, tr.titlebg2 td {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) no-repeat -10px -380px !important;",
    "}",
    "div.title_bar {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://img.td2.info.pl:8448/images/2020/12/13/main_block.png) no-repeat 0 -200px !important;",
    "}",
    ".shd_replybutton {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://td2.info.pl/Themes/default/images/simpledesk/respond.png) no-repeat left !important;",
    "    background-position: 10px !important;",
    "}",
    ".shd_advancedbutton {",
    "    background: #1b1b1b !important;",
    "    background: #1b1b1b url(https://td2.info.pl/Themes/default/images/simpledesk/advanced.png) no-repeat left !important;",
    "    background-position: 10px !important;",
    "}",
    "ul.quickbuttons li.quote_button {",
    "    background: url(https://img.td2.info.pl:8448/images/2020/12/13/quickbuttons.png) no-repeat 0 0 !important;",
    "}",
    "ul.quickbuttons li.modify_button {",
    "    background: url(https://img.td2.info.pl:8448/images/2020/12/13/quickbuttons.png) no-repeat 0 -62px !important;",
    "}",
    "ul.quickbuttons li.split_button {",
    "   background: url(https://img.td2.info.pl:8448/images/2020/12/13/quickbuttons.png) no-repeat 0 -152px !important;",
    "}",
    ".windowbg, #preview_body, .content, div#helpmain, .windowbg2, .roundframe, h3.titlebg, h3.titlebg, h4.titlebg, h4.titlebg a, .errorbox, .description, .description_board, .plainbox {",
    "    background-color: #212121 !important;",
    "    color: #fff !important;",
    "}",
    ".buttonlist ul li a{",
    "    color: #000 !important;",
    "}",
    "a:link, a:visited, a.new_win:link, a.new_win:visited {",
    "    color: #9e9e9e !important;",
    "}",
    ".approvebg {",
    "    background-color: #3c1c1c !important;",
    "    color: #fff !important;",
    "}",
    "tr.catbg>th>a, tr.catbg>th>a:link, fieldset legend, li.greeting, .dropmenu a, h1, h2, h3, h4, h5, h6, li, blockquote.bbc_alternate_quote, blockquote.bbc_standard_quote, .content>dl>dt>a, .smalltext.left_admmenu>li>strong>a, h3.titlebg a, h3.titlebg, h4.titlebg, h4.titlebg a, table.table_list p, .dropmenu li a.firstlevel span.firstlevel, body, td, th, tr, .titlebg, .titlebg2, tr.titlebg th, tr.titlebg td, tr.titlebg2 td {",
    "    color: #fff !important;",
    "}",
    ".shd_nowrap>a, #ic_recentposts.middletext>dt>strong>a, .like_post, .table_list tbody.content td.info a.subject, .attachments>div>a, .children.windowbg>a, .shd_ticket_description>strong>a, .description.shd_replybutton.floatright>a, .description.shd_advancedbutton.floatright>a, .description.shd_attachment>strong>a, .titlebg>td>a, li>a>span, .last>a, a.new_win, .bbc_link:link, .bbc_link:visited, .bbc_list>li>a, .nextlinks_bottom>a, td>div>strong>a, td>div>a, td>div>span>a, .children.windowbg>strong>a, .righttext>a, .content>div>a, .category>a, em>a, dd>a, .shd_profile_nav_inline>li>a, h5>strong>a, .smalltext.left_admmenu>li>a, .codeheader>a, .signature>a, .nextlinks>a, .pagelinks.floatleft>a, a.bbc_link>.bbc_size, .reset>li>a, h5>a, .smalltext.reportlinks>a, .reset.smalltext.quickbuttons>li>a {",
    "    color: #9e9e9e !important;",
    "}",
    "div#profile_error {",
    "    background: #6b0000 !important;",
    "}",
    "#facebox .content, .shd_attachment, .information, .description_board, .plainbox, .like_post, div.tborder>p.description, #topic_icons.description, .content>.description, #personal_messages>form>.description {",
    "    background: #1b1b1b !important;",
    "}",
    "ul.dropmenu>li>ul>li>a>span, .buttonlist ul li a span {",
    "    color: #000 !important;",
    "}",
    ".global, .global2 {",
    "    background: #313131 !important;",
    "    color: #fff !important;",
    "}",
    "quoteheader, bbc_standard_quote {",
    "    color: #666 !important;",
    "}",
    ".stickybg, .stickybg2, .lockedbg2 {",
    "    background: #212121 !important;",
    "}",
    ".lockedbg, .lockedbg2, code.bbc_code {",
    "    background: #1b1b1b !important;",
    "}",
    "table.table_grid td {",
    "    border-bottom: 1px solid #000 !important;",
    "    border-right: 1px solid #000 !important;",
    "}",
    ".shd_ticketlist td {",
    "    border-bottom: 1px solid #000 !important;",
    "}",
    "blockquote.bbc_standard_quote {",
    "    background-color: #1b1b1b !important;",
    "}",
    "blockquote.bbc_alternate_quote, div#cookies-message {",
    "    background-color: #212121 !important;",
    "}",
    "span[style|='color: blue;'], a[style|='color: #0000FF;'], span[style|='color: #0000FF;'], b>span[style|='color: #0000ff'], span[style|='color: navy;'], a.target_blank>font {",
    "    color: #005eff !important;",
    "}",
    "span[style|='color: #ff8c00'], a[style|='color: #ff8c00;'], span[style|='color: #ff8c00;'], b>span[style|='color: #ff8c00'], span[style|='color: #ff8c00'], a.target_blank>font {",
    "    color: #ff8c00 !important;",
    "}",
    "span[style|='color: #865fc5'], a[style|='color: #865fc5;'], span[style|='color: #865fc5;'], b>span[style|='color: #865fc5'], span[style|='color: #865fc5'], a.target_blank>font {",
    "    color: #865fc5 !important;",
    "}",
    "span[style|='color: #5cad89'], a[style|='color: #5cad89;'], span[style|='color: #5cad89;'], b>span[style|='color: #5cad89'], span[style|='color: #5cad89'], a.target_blank>font {",
    "    color: #5cad89 !important;",
    "}",
    "span[style|='color: #04ae04'], a[style|='color: #04ae04;'], span[style|='color: #04ae04;'], b>span[style|='color: #04ae04'], span[style|='color: #04ae04'], a.target_blank>font {",
    "    color: #04ae04 !important;",
    "}",
    "span[style|='color: #E7114E'], a[style|='color: #E7114E;'], span[style|='color: #E7114E;'], b>span[style|='color: #E7114E'], span[style|='color: #E7114E'], a.target_blank>font {",
    "    color: #005eff !important;",
    "}",
    "span[style|='color: #999966'], a[style|='color: #999966;'], span[style|='color: #999966;'], b>span[style|='color: #999966'], span[style|='color: #999966'], a.target_blank>font {",
    "    color: #999966 !important;",
    "}",
    "span[style|='color: #064E40'], a[style|='color: #064E40;'], span[style|='color: #064E40;'], b>span[style|='color: #064E40'], span[style|='color: #064E40'], a.target_blank>font {",
    "    color: #064E40 !important;",
    "}",
    "span[style|='color: #994C00'], a[style|='color: #994C00;'], span[style|='color: #994C00;'], b>span[style|='color: #994C00'], span[style|='color: #994C00'], a.target_blank>font {",
    "    color: #994C00 !important;",
    "}",
    "span[style|='color: #FF0000'], a[style|='color: #FF0000;'], span[style|='color: #FF0000;'], b>span[style|='color: #FF0000'], span[style|='color: #FF0000'], a.target_blank>font {",
    "    color: #FF0000 !important;",
    "}",
    "span[style|='color: #0059b2'], a[style|='color: #0059b2;'], span[style|='color: #0059b2;'], b>span[style|='color: #0059b2'], span[style|='color: #0059b2'], a.target_blank>font {",
    "    color: #0080ff !important;",
    "}",

    /* Brak Pierwszeństwa */
    ".shd_nowrap>a, .smalltext>a, .windowbg.lefttext>a, .windowbg>td>a, .windowbg2>td>a, .lastpost>p>a, #ic_recentposts.middletext>dt>strong>a, #ic_recentposts.middletext>dt>a {",
    "    color: #9e9e9e;",
    "}",
    "strong>a>font {",
    "    color: rgb(0, 175, 0);",
    "}",
    "#sceneriesOnline, #sceneriesOnline2, #trainsOnline, #trainsOnline2, #combinedOnline, #combinedOnline2 {",
    "    color: #ff0000;",
    "}",

    /* przewijak */
	" ::-webkit-scrollbar {",
	"    width: 10px!important;",
	"    height: 10px!important;",
	"}",
	"::-webkit-scrollbar-button {",
	"    width: 0px!important;",
	"    height: 0px!important;",
	"}",
	"::-webkit-scrollbar-thumb {",
	"    background: #6c6c6c!important;",
	"    border: none!important;",
	"    border-radius: 0px!important;",
	"}",
	"::-webkit-scrollbar-thumb:hover {",
	"    background: #6c6c6c!important;",
	"}",
	"::-webkit-scrollbar-thumb:active {",
	"    background: #7d7d7d!important;",
	"}",
	"::-webkit-scrollbar-track {",
	"    background: #313131!important;",
	"    border: none!important;",
	"    border-radius: 0px!important;",
	"}",
	"::-webkit-scrollbar-track:hover {",
	"    background: #333333!important;",
	"}",
	"::-webkit-scrollbar-track:active {",
	"    background: #4d4d4d!important;",
	"}",
	"::-webkit-scrollbar-corner {",
	"    background: transparent!important;",
	"}",

    ].join("\n");
      if (typeof GM_addStyle != "undefined") {
	    GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
	    PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
	    addStyle(css);
    } else {
	    var node = document.createElement("style");
	    node.type = "text/css";
	    node.appendChild(document.createTextNode(css));
	    var heads = document.getElementsByTagName("head");
	       if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		document.documentElement.appendChild(node);
	       }
       }
    })();
