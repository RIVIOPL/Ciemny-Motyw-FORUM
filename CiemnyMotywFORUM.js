// ==UserScript==
// @name         Ciemny Motyw dla td2 (FORUM)
// @namespace    https://greasyfork.org/pl/scripts/418580-ciemny-motyw-dla-td2-forum
// @version      1.2(BETA)
// @description  ciemny motyw dla td2.info.pl Autor RIVIO @2020
// @author       RIVIO @2020
// @match        https://td2.info.pl/*
// @run-at       document-end
// ==/UserScript==

(function() {var css = [

/*NIE MODYFIKUJEMY bez zgody autora(w celu naprawy zgłoś się do autora skryptu)*/

/*Skrypt*/

    /* Główne */
    "body {",
    "    background: #1b1b1b ;",
    "    background: #1b1b1b url(https://img.td2.info.pl/images/2020/12/13/backdrop2.png) repeat-x;",
    "}",
    "li.greeting, a:link, a:visited, .dropmenu a, h1, h2, h3, h4, h5, h6, li {",
    "    color: #fff;",
    "}",
    "#header div.frame, #header {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 1% -480px;",
    "}",
    "#header {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 1% -480px;",
    "}",
    "#content_section, #content_section div.frame {",
    "    background: #FFFFFF url(https://img.td2.info.pl/images/2020/12/13/frame_repeat.png) repeat-y top left;",
    "}",
    ".windowbg span.topslice span, .windowbg span.topslice {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 100% -30px no-repeat;",
    "}",
    ".windowbg span.botslice {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 0 -40px no-repeat;",
    "}",
    ".windowbg2 span.topslice {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 0 -60px no-repeat;",
    "}",
    ".windowbg2 span.botslice {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 0 -71px no-repeat;",
    "}",
    ".windowbg span.botslice span {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 100% -40px no-repeat;",
    "}",
    ".windowbg2 span.botslice span {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 100% -71px no-repeat;",
    "}",
    ".windowbg2 span.topslice span {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 100% -60px no-repeat;",
    "}",
    "#footer_section div.frame {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 1% -820px;",
    "}",
    "#footer_section {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 1% -820px;",
    "}",
    "span.upperframe {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 0 -90px no-repeat;",
    "}",
    "span.lowerframe {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 0 -102px no-repeat;",
    "}",
    "span.upperframe span {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 100% -90px no-repeat;",
    "}",
    "span.lowerframe span {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) 100% -102px no-repeat;",
    "}",
    "h4.titlebg, h3.titlebg {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 100% -200px;",
    "}",
    "div.roundframe div.cat_bar h3.catbg {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 100% -240px;",
    "}",
    "div.title_barIC h4.titlebg {",
    "    background: url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 100% -120px;",
    "}",
    "div.title_barIC {",
    "    background: #343434 url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 0 -120px;",
    "}",
    ".titlebg, .titlebg2, tr.titlebg th, tr.titlebg td, tr.titlebg2 td {",
    "    background: #FFFFFF url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat -10px -380px;",
    "}",
    "div.title_bar {",
    "    background: #e3e9ef url(https://img.td2.info.pl/images/2020/12/13/main_block.png) no-repeat 0 -200px;",
    "}",
    ".windowbg, #preview_body, .content, div#helpmain, .windowbg2, .roundframe, h3.titlebg, h3.titlebg, h4.titlebg, h4.titlebg a {",
    "    background-color: #212121;",
    "    color: #fff;",
    "}",
    "h3.titlebg a, h3.titlebg, h4.titlebg, h4.titlebg a, table.table_list p, .dropmenu li a.firstlevel span.firstlevel, body, td, th, tr, .titlebg, .titlebg2, tr.titlebg th, tr.titlebg td, tr.titlebg2 td {",
    "    color: #fff;",
    "}",
    "a:link, a:visited {",
    "    color: #dadada;",
    "}",
    ".table_list tbody.content td.info a.subject {",
    "    color: #9e9e9e;",
    "}",
    ".shd_attachment, .information, .description, .description_board, .plainbox, .like_post {",
    "    background: #1b1b1b;",
    "}",
    ".shd_replybutton {",
    "    background: url(https://td2.info.pl/Themes/default/images/simpledesk/respond.png) no-repeat left;",
    "    background-position: 10px;",
    "}",
    ".shd_advancedbutton {",
    "    background: url(https://td2.info.pl/Themes/default/images/simpledesk/advanced.png) no-repeat left;",
    "    background-position: 10px;",
    "}",
    "ul.dropmenu>li>ul>li>a>span {",
    "    background: #313131;",
    "}",
    ".global, .global2 {",
    "    background: #313131;",
    "    color: #fff;",
    "}",
    ".stickybg, .stickybg2, .lockedbg2 {",
    "    background: #212121;",
    "}",
    ".lockedbg, .lockedbg2 {",
    "    background: #1b1b1b;",
    "}",
    "a[style|='color: #0000FF;'] {",
    "    color: #3030ff !important;",
    "}",
    "table.table_grid td {",
    "border-bottom: 1px solid #000;",
    "border-right: 1px solid #000;",
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
	"}"


/*To cię nie interesuje, tak jak mnie :P*/

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