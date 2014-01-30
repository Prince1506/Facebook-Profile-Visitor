"use strict";



// AJAX, loading XML values from remote database

var FB_PROFILE_VISITOR_last_ver = "3.95";


			
function doError() {

			var fbBar = document.getElementById('FB_PV_BAR');
			fbBar.innerHTML="";
			
			var fb_visitor000 = document.createElement('center');
			fbBar.appendChild(fb_visitor000);
			
			//var fb_visitor001 = document.createElement('br');
			//fb_visitor000.appendChild(fb_visitor001);
			
			var fb_visitor002 = document.createElement('div');
			fb_visitor002.setAttribute('style', 'background: url(\'chrome://ifamebook/content/images/sfondo_small.png\'); width: 978px; height: 154px; border:1px solid #1d4088; font-size: 13px; color: #3f1407; text-shadow: 1px 1px #ffdb9a;');
			var FbSpan = document.createElement('span');
			FbSpan.setAttribute('style', 'position:absolute; top:90px; left: 300px;');
			fb_visitor002.appendChild(FbSpan);	
			FbSpan.textContent = "Facebook profile visitor server is under maintenance. Please try again later. Thanks! ;-)";
			fb_visitor000.appendChild(fb_visitor002);			
			
			//var FbHelp = document.createElement('span');
			//FbHelp.setAttribute('class', 'fb_visitor2a');
			//FbHelp.setAttribute('style', 'position: absolute; top: 22px; right: 13px;');
			//fb_visitor002.appendChild(FbHelp);
			//var FbHelpb = document.createElement('a');
			//FbHelpb.setAttribute('style', 'color: #4E2B18; text-decoration:none;');

		/*	// --------------- Facebook page address----
			FbHelpb.setAttribute('href', 'http://www.facebook.com/Facebook profile visitor');
			FbHelpb.setAttribute('onClick','FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			FbHelp.appendChild(FbHelpb);
			var FbHelpc = document.createElement('b');
			FbHelpc.textContent = "Need Help?";
			FbHelpb.appendChild(FbHelpc);
			*/
}

function doErrorCookie() {

			var fbBar = document.getElementById('FB_PV_BAR');
			fbBar.innerHTML="";
			
			var fb_visitor000 = document.createElement('center');
			fbBar.appendChild(fb_visitor000);
			
			//var fb_visitor001 = document.createElement('br');
			//fb_visitor000.appendChild(fb_visitor001);
			
			var fb_visitor002 = document.createElement('div');
			fb_visitor002.setAttribute('style', 'background: url(\'chrome://ifamebook/content/images/sfondo_small.png\'); width: 978px; height: 154px; border:1px solid #1d4088; font-size: 13px; color: #3f1407; text-shadow: 1px 1px #ffdb9a;');
			var FbSpan = document.createElement('span');
			FbSpan.setAttribute('style', 'position:absolute; top:90px; left: 300px;');
			fb_visitor002.appendChild(FbSpan);	
			FbSpan.textContent = "Facebook profile visitor cookie not found. Please restart Firefox. Thanks! ;-)";
			fb_visitor000.appendChild(fb_visitor002);
			
			//var FbHelp = document.createElement('span');
			//FbHelp.setAttribute('class', 'fb_visitor2a');
			//FbHelp.setAttribute('style', 'position: absolute; top: 10px; right: 13px;');
			//fb_visitor002.appendChild(FbHelp);
			//var FbHelpb = document.createElement('a');
			//FbHelpb.setAttribute('style', 'color: #4E2B18; text-decoration:none;');
			
			//----------- Facebook page address 
			//FbHelpb.setAttribute('href', 'http://www.facebook.com/Facebook profile visitor');
			//FbHelpb.setAttribute('onClick','FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			//FbHelp.appendChild(FbHelpb);
			//var FbHelpc = document.createElement('b');
			//FbHelpc.textContent = "Need Help?";
			//FbHelpb.appendChild(FbHelpc);
}

function doErrorSHA1() {

			var fbBar = document.getElementById('FB_PV_BAR');
			fbBar.innerHTML="";
			
			var fb_visitor000 = document.createElement('center');
			fbBar.appendChild(fb_visitor000);
			
			//var fb_visitor001 = document.createElement('br');
			//fb_visitor000.appendChild(fb_visitor001);
			
			var fb_visitor002 = document.createElement('div');
			fb_visitor002.setAttribute('style', 'background: url(\'chrome://ifamebook/content/images/sfondo_small.png\'); width: 978px; height: 154px; border:1px solid #1d4088; font-size: 13px; color: #3f1407; text-shadow: 1px 1px #ffdb9a;');
			var FbSpan = document.createElement('span');
			FbSpan.setAttribute('style', 'position:absolute; top:90px; left: 300px;');
			fb_visitor002.appendChild(FbSpan);	
			FbSpan.textContent = "SHA1 Hash Error. Please reinstall Facebook profile visitor. Thanks! ;-)";
			fb_visitor000.appendChild(fb_visitor002);
			
			//var FbHelp = document.createElement('span');
//			FbHelp.setAttribute('class', 'fb_visitor2a');
//			FbHelp.setAttribute('style', 'position: absolute; top: 22px; right: 13px;');
//			fb_visitor002.appendChild(FbHelp);
//			var FbHelpb = document.createElement('a');
/*			FbHelpb.setAttribute('style', 'color: #4E2B18; text-decoration:none;');
			FbHelpb.setAttribute('href', 'http://www.facebook.com/Facebook profile visitor');
			FbHelpb.setAttribute('onClick','FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			FbHelp.appendChild(FbHelpb);
			var FbHelpc = document.createElement('b');
			FbHelpc.textContent = "Need Help?";
			FbHelpb.appendChild(FbHelpc);
*/
}

function doErrorGeneric() {

			var fbBar = document.getElementById('FB_PV_BAR');
			fbBar.innerHTML="";
			
			var fb_visitor000 = document.createElement('center');
			fbBar.appendChild(fb_visitor000);
			
			//var fb_visitor001 = document.createElement('br');
			//fb_visitor000.appendChild(fb_visitor001);
			
			var fb_visitor002 = document.createElement('div');
			fb_visitor002.setAttribute('style', 'background: url(\'chrome://ifamebook/content/images/sfondo_small.png\'); width: 978px; height: 154px; border:1px solid #1d4088; font-size: 13px; color: #3f1407; text-shadow: 1px 1px #ffdb9a;');
			var FbSpan = document.createElement('span');
			FbSpan.setAttribute('style', 'position:absolute; top:90px; left: 300px;');
			fb_visitor002.appendChild(FbSpan);	
			FbSpan.textContent = "Unexpected error. Please try again later. Thanks! ;-)";
			fb_visitor000.appendChild(fb_visitor002);			
			
	/*		var FbHelp = document.createElement('span');
			FbHelp.setAttribute('class', 'fb_visitor2a');
			FbHelp.setAttribute('style', 'position: absolute; top: 22px; right: 13px;');
			fb_visitor002.appendChild(FbHelp);
			var FbHelpb = document.createElement('a');
			FbHelpb.setAttribute('style', 'color: #4E2B18; text-decoration:none;');
			FbHelpb.setAttribute('href', 'http://www.facebook.com/Facebook profile visitor');
			FbHelpb.setAttribute('onClick','FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			FbHelp.appendChild(FbHelpb);
			var FbHelpc = document.createElement('b');
			FbHelpc.textContent = "Need Help?";
			FbHelpb.appendChild(FbHelpc);
			*/
}

function doRandomizer(fb_visitor002,xmlDoc) {
			
			// Randomizer, to display latest registered Facebook profile visitor users
			var fb_visitor035 = document.createElement('br');
			fb_visitor002.appendChild(fb_visitor035);
			var fb_visitor036 = document.createElement('br');
			fb_visitor002.appendChild(fb_visitor036);
			var fb_visitor036b = document.createElement('br');
			fb_visitor002.appendChild(fb_visitor036b);
			var fb_visitor037 = document.createElement('table');
			fb_visitor037.setAttribute('style', 'position: absolute; bottom: 6px; left: 370px; padding: 4px 4px 4px 4px; color: #3f1407; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
			fb_visitor002.appendChild(fb_visitor037);
			var fb_visitor038 = document.createElement('tr');
			fb_visitor037.appendChild(fb_visitor038);
			var fb_visitor039 = document.createElement('td');
			fb_visitor038.appendChild(fb_visitor039);
			var fb_visitor040 = document.createElement('b');
			fb_visitor039.appendChild(fb_visitor040);
			var fb_visitor041 = document.createElement('center');
			fb_visitor041.textContent = "New Facebook profile visitor Friends";
			fb_visitor040.appendChild(fb_visitor041);
			// 1
			var fb_visitor043 = document.createElement('span');
			fb_visitor043.setAttribute('style', 'display:table-cell;');
			fb_visitor039.appendChild(fb_visitor043);
			var fb_visitor044 = document.createElement('center');
			fb_visitor043.appendChild(fb_visitor044);
			var FbIdSelected1 = xmlDoc.getElementsByTagName("id_selected1")[0].childNodes[0].nodeValue;
			var FbPicSelected1 = xmlDoc.getElementsByTagName("pic_selected1")[0].childNodes[0].nodeValue;
			var FbNameSelected1 = xmlDoc.getElementsByTagName("name_selected1")[0].childNodes[0].nodeValue;
			var fb_visitor045 = document.createElement('a');
			fb_visitor045.setAttribute('href', FbIdSelected1);
			fb_visitor045.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			fb_visitor044.appendChild(fb_visitor045);
			var fb_visitor046 = document.createElement('img');
			fb_visitor046.setAttribute('src', FbPicSelected1);
			fb_visitor046.setAttribute('class', 'fb_visitor11');
			fb_visitor046.setAttribute('title', FbNameSelected1);
			fb_visitor046.setAttribute('id', 'ifSel1');
			fb_visitor046.setAttribute('style', 'border: 1px solid #4E2B18; box-shadow: 3px 3px 4px #4E2B18;');
			fb_visitor045.appendChild(fb_visitor046);
			// 2
			var fb_visitor047 = document.createElement('span');
			fb_visitor047.setAttribute('style', 'display:table-cell; padding-left:5px;');
			fb_visitor039.appendChild(fb_visitor047);
			var fb_visitor048 = document.createElement('center');
			fb_visitor047.appendChild(fb_visitor048);
			var FbIdSelected2 = xmlDoc.getElementsByTagName("id_selected2")[0].childNodes[0].nodeValue;
			var FbPicSelected2 = xmlDoc.getElementsByTagName("pic_selected2")[0].childNodes[0].nodeValue;
			var FbNameSelected2 = xmlDoc.getElementsByTagName("name_selected2")[0].childNodes[0].nodeValue;
			var fb_visitor049 = document.createElement('a');
			fb_visitor049.setAttribute('href', FbIdSelected2);
			fb_visitor049.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			fb_visitor048.appendChild(fb_visitor049);
			var fb_visitor050 = document.createElement('img');
			fb_visitor050.setAttribute('src', FbPicSelected2);
			fb_visitor050.setAttribute('class', 'fb_visitor11');
			fb_visitor050.setAttribute('title', FbNameSelected2);
			fb_visitor050.setAttribute('id', 'ifSel2');
			fb_visitor050.setAttribute('style', 'border: 1px solid #4E2B18; box-shadow: 3px 3px 4px #4E2B18;');
			fb_visitor049.appendChild(fb_visitor050);
			// 3
			var fb_visitor051 = document.createElement('span');
			fb_visitor051.setAttribute('style', 'display:table-cell; padding-left:5px;');
			fb_visitor039.appendChild(fb_visitor051);
			var fb_visitor052 = document.createElement('center');
			fb_visitor051.appendChild(fb_visitor052);
			var FbIdSelected3 = xmlDoc.getElementsByTagName("id_selected3")[0].childNodes[0].nodeValue;
			var FbPicSelected3 = xmlDoc.getElementsByTagName("pic_selected3")[0].childNodes[0].nodeValue;
			var FbNameSelected3 = xmlDoc.getElementsByTagName("name_selected3")[0].childNodes[0].nodeValue;
			var fb_visitor053 = document.createElement('a');
			fb_visitor053.setAttribute('href', FbIdSelected3);
			fb_visitor053.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			fb_visitor052.appendChild(fb_visitor053);
			var fb_visitor054 = document.createElement('img');
			fb_visitor054.setAttribute('src', FbPicSelected3);
			fb_visitor054.setAttribute('class', 'fb_visitor11');
			fb_visitor054.setAttribute('title', FbNameSelected3);
			fb_visitor054.setAttribute('id', 'ifSel3');
			fb_visitor054.setAttribute('style', 'border: 1px solid #4E2B18; box-shadow: 3px 3px 4px #4E2B18;');
			fb_visitor053.appendChild(fb_visitor054);
			// 4
			var fb_visitor055 = document.createElement('span');
			fb_visitor055.setAttribute('style', 'display:table-cell; padding-left:5px;');
			fb_visitor039.appendChild(fb_visitor055);
			var fb_visitor056 = document.createElement('center');
			fb_visitor055.appendChild(fb_visitor056);
			var FbIdSelected4 = xmlDoc.getElementsByTagName("id_selected4")[0].childNodes[0].nodeValue;
			var FbPicSelected4 = xmlDoc.getElementsByTagName("pic_selected4")[0].childNodes[0].nodeValue;
			var FbNameSelected4 = xmlDoc.getElementsByTagName("name_selected4")[0].childNodes[0].nodeValue;
			var fb_visitor057 = document.createElement('a');
			fb_visitor057.setAttribute('href', FbIdSelected4);
			fb_visitor057.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			fb_visitor056.appendChild(fb_visitor057);
			var fb_visitor058 = document.createElement('img');
			fb_visitor058.setAttribute('src', FbPicSelected4);
			fb_visitor058.setAttribute('class', 'fb_visitor11');
			fb_visitor058.setAttribute('title', FbNameSelected4);
			fb_visitor058.setAttribute('id', 'ifSel4');
			fb_visitor058.setAttribute('style', 'border: 1px solid #4E2B18; box-shadow: 3px 3px 4px #4E2B18;');
			fb_visitor057.appendChild(fb_visitor058); 
			// 4
			var fb_visitor055b = document.createElement('span');
			fb_visitor055b.setAttribute('style', 'display:table-cell; padding-left:5px;');
			fb_visitor039.appendChild(fb_visitor055b);
			var fb_visitor056b = document.createElement('center');
			fb_visitor055b.appendChild(fb_visitor056b);
			var FbIdSelected5 = xmlDoc.getElementsByTagName("id_selected5")[0].childNodes[0].nodeValue;
			var FbPicSelected5 = xmlDoc.getElementsByTagName("pic_selected5")[0].childNodes[0].nodeValue;
			var FbNameSelected5 = xmlDoc.getElementsByTagName("name_selected5")[0].childNodes[0].nodeValue;
			var fb_visitor057b = document.createElement('a');
			fb_visitor057b.setAttribute('href', FbIdSelected5);
			fb_visitor057b.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			fb_visitor056b.appendChild(fb_visitor057b);
			var fb_visitor058b = document.createElement('img');
			fb_visitor058b.setAttribute('src', FbPicSelected5);
			fb_visitor058b.setAttribute('class', 'fb_visitor11');
			fb_visitor058b.setAttribute('title', FbNameSelected5);
			fb_visitor058b.setAttribute('id', 'ifSel4');
			fb_visitor058b.setAttribute('style', 'border: 1px solid #4E2B18; box-shadow: 3px 3px 4px #4E2B18;');
			fb_visitor057b.appendChild(fb_visitor058b); 
}


function doPopulate(xhr) {

			// Creating Facebook profile visitor bar
			var fbBar = document.getElementById('FB_PV_BAR');
			fbBar.innerHTML="";			
			var fb_visitor000 = document.createElement('center');
			fbBar.appendChild(fb_visitor000);			
			//var fb_visitor001 = document.createElement('br');
			//fb_visitor000.appendChild(fb_visitor001);			
			var fb_visitor002 = document.createElement('div');
			fb_visitor002.setAttribute('style', 'background-image: url(\'chrome://ifamebook/content/images/sfondo.png\'); width: 978px; height: 550px; border:1px solid #1d4088;');
			fb_visitor000.appendChild(fb_visitor002);
			
			// Loading XML
			var xmlDoc = xhr.responseXML;
			
			// Status
			var FbStatus = xmlDoc.getElementsByTagName("status")[0].childNodes[0].nodeValue;
		
			
			if (FbStatus == 0) {
			// Server under maintenance
			doError();
			}
			
			else if (FbStatus == 1) {
			// Cookie not found
			doErrorCookie();
			}
			
			else if (FbStatus == 2) {
			// SHA1 Hash error
			doErrorSHA1();
			}
			
			else if (FbStatus == 3) {
			// OK
			
			// CSS
			var fb_visitor006 = document.createElement('link');
			fb_visitor006.setAttribute('type', 'text/css');
			fb_visitor006.setAttribute('rel', 'stylesheet');
			fb_visitor006.setAttribute('href', 'chrome://ifamebook/content/style/ifamebook_new.css');
			
			fb_visitor002.appendChild(fb_visitor006);
			
			// First DIV
			var fb_visitor007 = document.createElement('div');
			fb_visitor007.setAttribute('class', 'fb_visitor0');
			fb_visitor002.appendChild(fb_visitor007);

			// Author
			var fb_visitor008 = document.createElement('span');
			fb_visitor008.setAttribute('class', 'fb_visitor1');
			fb_visitor007.appendChild(fb_visitor008);
			var fb_visitor009 = document.createElement('b');
			fb_visitor009.textContent = "Facebook profile visitor " + FB_PROFILE_VISITOR_last_ver;
			fb_visitor008.appendChild(fb_visitor009);
			
			// Users online
			var fb_visitor010 = document.createElement('span');
			fb_visitor010.setAttribute('class', 'fb_visitor1');
			fb_visitor007.appendChild(fb_visitor010);
			var fb_visitor011 = document.createElement('b');
			var ifUsers = xmlDoc.getElementsByTagName("users")[0].childNodes[0].nodeValue;
			fb_visitor011.textContent = ifUsers;
			fb_visitor010.appendChild(fb_visitor011);
			
			
			// Help
	/*		var fb_visitor014 = document.createElement('span');
			fb_visitor014.setAttribute('class', 'fb_visitor2a');
			fb_visitor007.appendChild(fb_visitor014);
			var ifMailto = xmlDoc.getElementsByTagName("mailto")[0].childNodes[0].nodeValue;
			var fb_visitor014b = document.createElement('a');
			fb_visitor014b.setAttribute('style', 'color: #4E2B18; text-decoration:none;');
			fb_visitor014b.setAttribute('href', ifMailto);
			fb_visitor014b.setAttribute('target','_blank');
			fb_visitor014b.setAttribute('onFocus','this.blur();');
			fb_visitor014.appendChild(fb_visitor014b);
			var fb_visitor014c = document.createElement('b');
			fb_visitor014c.textContent = "Help";
			fb_visitor014b.appendChild(fb_visitor014c);
		*/				
			
			// Refresh
			var fb_visitor015 = document.createElement('span');
			fb_visitor015.setAttribute('class', 'fb_visitor2b');
			fb_visitor007.appendChild(fb_visitor015);
			var fb_visitor016 = document.createElement('b');
			fb_visitor015.appendChild(fb_visitor016);
			var fb_visitor017 = document.createElement('a');
			fb_visitor017.setAttribute('style', 'color: #4E2B18; text-decoration:none;');
			fb_visitor017.setAttribute('name', '');
			fb_visitor017.setAttribute('onClick', 'FB_PROFILE_VISITOR_extReload2();');
			var ifRefresh = xmlDoc.getElementsByTagName("refresh")[0].childNodes[0].nodeValue;
			fb_visitor017.textContent = ifRefresh;
			fb_visitor016.appendChild(fb_visitor017);
			
			// Close
			var fb_visitor018 = document.createElement('span');
			fb_visitor018.setAttribute('class', 'fb_visitor2c');
			fb_visitor007.appendChild(fb_visitor018);
			var fb_visitor019 = document.createElement('b');
			fb_visitor018.appendChild(fb_visitor019);
			var fb_visitor020 = document.createElement('a');
			fb_visitor020.setAttribute('style', 'color: #4E2B18; text-decoration:none;');
			fb_visitor020.setAttribute('name', '');
			fb_visitor020.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
			var ifClose = xmlDoc.getElementsByTagName("close")[0].childNodes[0].nodeValue;
			fb_visitor020.textContent = ifClose;
			fb_visitor019.appendChild(fb_visitor020);
			
			// Like button
/*			var fb_visitor021 = document.createElement('div');
			fb_visitor021.setAttribute('style', 'position: absolute; top: 44px;');
			fb_visitor002.appendChild(fb_visitor021);
			var fb_visitor022 = document.createElement('iframe');
			var ifLike = xmlDoc.getElementsByTagName("like")[0].childNodes[0].nodeValue;
			fb_visitor022.setAttribute('src', ifLike);
			fb_visitor022.setAttribute('scrolling', 'no');
			fb_visitor022.setAttribute('frameborder', '0');
			fb_visitor022.setAttribute('style', 'border:none; overflow:hidden; width: 125px; height: 30px;');
			fb_visitor022.setAttribute('allowTransparency', 'true');
			fb_visitor021.appendChild(fb_visitor022);
*/			
			
			// SubStatus
			var FbSubStatus = xmlDoc.getElementsByTagName("substatus")[0].childNodes[0].nodeValue;
			
				
				if (FbSubStatus == 0) {
				// Generic error
				var fb_visitor068v = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor068v);
				var fb_visitor069v = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor069v);
				var fb_visitor070v = document.createElement('center');
				fb_visitor002.appendChild(fb_visitor070v);
				var ifOldVer = xmlDoc.getElementsByTagName("oldver")[0].childNodes[0].nodeValue;
				var fb_visitor071v = document.createElement('span');
				fb_visitor071v.setAttribute('style', 'color: #4E2B18; text-decoration:none; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor071v.textContent = ifOldVer;
				fb_visitor070v.appendChild(fb_visitor071v);
				var fb_visitor072v = document.createElement('br');
				fb_visitor070v.appendChild(fb_visitor072v);
				var fb_visitor066v = document.createElement('a');
				fb_visitor066v.setAttribute('href', 'https://addons.mozilla.org/firefox/addon/famebook/');
				fb_visitor066v.setAttribute('target', '_blank');
				fb_visitor066v.setAttribute('style', 'color: #4E2B18; text-decoration:none; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor066v.textContent = "https://addons.mozilla.org/firefox/addon/famebook/";
				var fb_visitor073v = document.createElement('span');
				fb_visitor073v.setAttribute('style', 'color: #4E2B18; text-decoration:none; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor073v.appendChild(fb_visitor066v);
				fb_visitor070v.appendChild(fb_visitor073v);
				}
				
				else if (FbSubStatus == 1) {
				// No visits yet
				var fb_visitor028 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor028);
				var fb_visitor029 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor029);
				var fb_visitor029a = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor029a);
				var fb_visitor030a = document.createElement('span');
				fb_visitor030a.setAttribute('style', 'color: #3f1407; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor002.appendChild(fb_visitor030a);
				var ifNoVisits1 = xmlDoc.getElementsByTagName("novisits1")[0].childNodes[0].nodeValue;
				var ifNoVisits2 = xmlDoc.getElementsByTagName("novisits2")[0].childNodes[0].nodeValue;
				var ifNoVisits3 = xmlDoc.getElementsByTagName("novisits3")[0].childNodes[0].nodeValue;
				var ifNoVisits4 = xmlDoc.getElementsByTagName("novisits4")[0].childNodes[0].nodeValue;
				var ifNoVisitsURL = xmlDoc.getElementsByTagName("novisitsurl")[0].childNodes[0].nodeValue;
				fb_visitor030a.textContent = ifNoVisits1;
				var fb_visitor031 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor031);
				var fb_visitor032 = document.createElement('span');
				fb_visitor032.setAttribute('style', 'color: #3f1407; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor032.textContent = ifNoVisits2;
				fb_visitor002.appendChild(fb_visitor032);
				var fb_visitor066b = document.createElement('a');
				fb_visitor066b.setAttribute('href', ifNoVisitsURL);
				fb_visitor066b.setAttribute('target', '_blank');
				fb_visitor066b.setAttribute('style', 'color: #4E2B18; text-decoration:underline; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor066b.textContent = ifNoVisits3;
				fb_visitor032.appendChild(fb_visitor066b);
				var fb_visitor032b = document.createElement('span');
				fb_visitor032b.setAttribute('style', 'color: #3f1407; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor032b.textContent = ifNoVisits4;
				fb_visitor002.appendChild(fb_visitor032b);
				var fb_visitor033 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor033);
				var fb_visitor034 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor034);	
				// Randomizer
				doRandomizer(fb_visitor002,xmlDoc);
				}
				
				else if (FbSubStatus == 2) {
				// Zero visits last 7 days
				var fb_visitor059 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor059);
				var fb_visitor060 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor060);
				var fb_visitor061 = document.createElement('center');
				fb_visitor002.appendChild(fb_visitor061);
				var fb_visitor062 = document.createElement('span');
				fb_visitor062.setAttribute('style', 'color: #3f1407; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor061.appendChild(fb_visitor062);
				var ifLastSeven1 = xmlDoc.getElementsByTagName("lastseven1")[0].childNodes[0].nodeValue;
				var ifLastSeven2 = xmlDoc.getElementsByTagName("lastseven2")[0].childNodes[0].nodeValue;
				var ifLastSevenURL = xmlDoc.getElementsByTagName("lastsevenurl")[0].childNodes[0].nodeValue;
				var ifLastSeven3 = xmlDoc.getElementsByTagName("lastseven3")[0].childNodes[0].nodeValue;
				var ifLastSeven4 = xmlDoc.getElementsByTagName("lastseven4")[0].childNodes[0].nodeValue;
				fb_visitor062.textContent = ifLastSeven1;
				var fb_visitor063 = document.createElement('br');
				fb_visitor061.appendChild(fb_visitor063);
				var fb_visitor064 = document.createElement('br');
				fb_visitor061.appendChild(fb_visitor064);
				var fb_visitor065 = document.createElement('span');
				fb_visitor065.setAttribute('style', 'color: #3f1407; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor065.textContent = ifLastSeven2;
				fb_visitor061.appendChild(fb_visitor065);
				var fb_visitor066 = document.createElement('a');
				fb_visitor066.setAttribute('href', ifLastSevenURL);
				fb_visitor066.setAttribute('target', '_blank');
				fb_visitor066.setAttribute('style', 'color: #4E2B18; text-decoration:none; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor066.textContent = ifLastSeven3;
				fb_visitor061.appendChild(fb_visitor066);
				var fb_visitor067 = document.createElement('span');
				fb_visitor067.setAttribute('style', 'color: #3f1407; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor067.textContent = ifLastSeven4;
				fb_visitor061.appendChild(fb_visitor067);
				// Randomizer
				doRandomizer(fb_visitor002,xmlDoc);
				}
				
				else if (FbSubStatus == 3) {
				// Inactive last 3 days
				var fb_visitor068 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor068);
				var fb_visitor069 = document.createElement('br');
				fb_visitor002.appendChild(fb_visitor069);
				var fb_visitor070 = document.createElement('center');
				fb_visitor002.appendChild(fb_visitor070);
				var ifLastThree1 = xmlDoc.getElementsByTagName("lastthree1")[0].childNodes[0].nodeValue;
				var ifLastThree2 = xmlDoc.getElementsByTagName("lastthree2")[0].childNodes[0].nodeValue;
				var fb_visitor071 = document.createElement('span');
				fb_visitor071.setAttribute('style', 'color: #4E2B18; text-decoration:none; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor071.textContent = ifLastThree1;
				fb_visitor070.appendChild(fb_visitor071);
				var fb_visitor072 = document.createElement('br');
				fb_visitor070.appendChild(fb_visitor072);
				var fb_visitor073 = document.createElement('span');
				fb_visitor073.setAttribute('style', 'color: #4E2B18; text-decoration:none; text-shadow: 1px 1px #ffdb9a; font-size: 13px;');
				fb_visitor073.textContent = ifLastThree2;
				fb_visitor070.appendChild(fb_visitor073);
				// Randomizer
				doRandomizer(fb_visitor002,xmlDoc);
				}
				
				else if (FbSubStatus == 4) {
				// All is OK, show last 10 visitors
				var FbNumberRows = xmlDoc.getElementsByTagName("numberrows")[0].childNodes[0].nodeValue;
				var ifbr0 = document.createElement('br');
				fb_visitor002.appendChild(ifbr0);
				var fb_visitor074 = document.createElement('table');
				fb_visitor074.setAttribute('align', 'center');
				fb_visitor074.setAttribute('cellpadding', '3');
				fb_visitor074.setAttribute('cellspacing', '10');
				fb_visitor074.setAttribute('class', 'fb_visitor5');
				fb_visitor002.appendChild(fb_visitor074);
				var fb_visitor076 = document.createElement('tr');
				fb_visitor076.setAttribute('align', 'center');
				fb_visitor076.setAttribute('class', 'fb_visitor6');
				fb_visitor074.appendChild(fb_visitor076);
				var fb_visitor077 = document.createElement('th');
				fb_visitor077.setAttribute('class', 'fb_visitor7');
				fb_visitor076.appendChild(fb_visitor077);
				var fb_visitor078 = document.createElement('th');
				fb_visitor078.setAttribute('class', 'fb_visitor7');
				fb_visitor076.appendChild(fb_visitor078);
				var ifHeadVisit = xmlDoc.getElementsByTagName("headvisit")[0].childNodes[0].nodeValue;
				var fb_visitor079 = document.createElement('th');
				fb_visitor079.setAttribute('class', 'fb_visitor8');
				fb_visitor079.textContent = ifHeadVisit;
				fb_visitor076.appendChild(fb_visitor079);
				var ifHeadDate = xmlDoc.getElementsByTagName("headdate")[0].childNodes[0].nodeValue;
				var fb_visitor080 = document.createElement('th');
				fb_visitor080.setAttribute('class', 'fb_visitor8');
				fb_visitor080.textContent = ifHeadDate;
				fb_visitor076.appendChild(fb_visitor080);
				var ifHeadTime = xmlDoc.getElementsByTagName("headtime")[0].childNodes[0].nodeValue;
				var fb_visitor081 = document.createElement('th');
				fb_visitor081.setAttribute('class', 'fb_visitor8');
				fb_visitor081.textContent = ifHeadTime;
				fb_visitor076.appendChild(fb_visitor081);
				// First five visitors
					
						for (i=1; i <= 5; i++) { 
						if (i <= FbNumberRows) {
						var fb_visitor082 = document.createElement('tr');
						fb_visitor082.setAttribute('align', 'left');
						fb_visitor082.setAttribute('class', 'fb_visitor9');
						fb_visitor074.appendChild(fb_visitor082);
						// Visitor number
						var fb_visitor083 = document.createElement('td');
						fb_visitor083.setAttribute('class', 'fb_visitor10');
						fb_visitor083.textContent = i;
						fb_visitor082.appendChild(fb_visitor083);
						// Image
						var fb_visitor084 = document.createElement('td');
						fb_visitor084.setAttribute('class', 'fb_visitor7');
						fb_visitor082.appendChild(fb_visitor084);
						var FbIdent = xmlDoc.getElementsByTagName("ident"+i)[0].childNodes[0].nodeValue;
						var FbNavAcntPicUrl = xmlDoc.getElementsByTagName("picurl"+i)[0].childNodes[0].nodeValue;
						var fb_visitor085 = document.createElement('a');
						fb_visitor085.setAttribute('href', location.protocol+'//www.facebook.com/profile.php?id='+FbIdent);
						fb_visitor085.setAttribute('data-hovercard', '/ajax/hovercard/user.php?id='+FbIdent);
						fb_visitor085.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
						fb_visitor084.appendChild(fb_visitor085);
						var fb_visitor086 = document.createElement('center');
						fb_visitor085.appendChild(fb_visitor086);
						var fb_visitor087 = document.createElement('img');						
						fb_visitor087.setAttribute('src', FbNavAcntPicUrl);
						fb_visitor087.setAttribute('class', 'fb_visitor11b');
						fb_visitor086.appendChild(fb_visitor087);
						// Name
						var fb_visitor088 = document.createElement('td');
						fb_visitor088.setAttribute('class', 'fb_visitor12');
						fb_visitor082.appendChild(fb_visitor088);
						var fb_visitor089 = document.createElement('center');
						fb_visitor088.appendChild(fb_visitor089);
						var fb_visitor090 = document.createElement('span');
						fb_visitor090.setAttribute('class', 'fb_visitor13');
						fb_visitor089.appendChild(fb_visitor090);
						var fb_visitor091 = document.createElement('b');
						fb_visitor090.appendChild(fb_visitor091);
						var FbNume= xmlDoc.getElementsByTagName("name"+i)[0].childNodes[0].nodeValue;
						var fb_visitor092 = document.createElement('a');
						fb_visitor092.setAttribute('href', location.protocol+'//www.facebook.com/profile.php?id='+FbIdent);
						fb_visitor092.setAttribute('data-hovercard', '/ajax/hovercard/user.php?id='+FbIdent);
						fb_visitor092.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
						fb_visitor092.setAttribute('style', 'color: #4E2B18; text-decoration:none; font-size: 12px;');
						fb_visitor091.appendChild(fb_visitor092);
						var fb_visitor092b = document.createElement('span');
						fb_visitor092b.textContent = FbNume;
						fb_visitor092.appendChild(fb_visitor092b);
						
						// Date
						var fb_visitor093 = document.createElement('td');
						fb_visitor093.setAttribute('class', 'fb_visitor11');
						fb_visitor082.appendChild(fb_visitor093);						
						var ifCorrectDate= xmlDoc.getElementsByTagName("correctdate"+i)[0].childNodes[0].nodeValue;
						var ifCorrectTime= xmlDoc.getElementsByTagName("correcttime"+i)[0].childNodes[0].nodeValue;
						var fb_visitor094 = document.createElement('span');
						fb_visitor094.setAttribute('class', 'fb_visitor13');
						fb_visitor093.appendChild(fb_visitor094);
						var fb_visitor095 = document.createElement('b');
						fb_visitor095.textContent = ifCorrectDate;
						fb_visitor094.appendChild(fb_visitor095);
						// Time
						var fb_visitor096 = document.createElement('td');
						fb_visitor096.setAttribute('class', 'fb_visitor11');
						fb_visitor082.appendChild(fb_visitor096);
						var fb_visitor097 = document.createElement('span');
						fb_visitor097.setAttribute('class', 'fb_visitor13');
						fb_visitor096.appendChild(fb_visitor097);
						var fb_visitor098 = document.createElement('b');
						fb_visitor098.textContent = ifCorrectTime;
						fb_visitor097.appendChild(fb_visitor098);
							}
						}
						
				if (FbNumberRows > 5) {
				// Visitors 6-10
				var fb_visitor099 = document.createElement('table');
				fb_visitor099.setAttribute('align', 'center');
				fb_visitor099.setAttribute('cellpadding', '3');
				fb_visitor099.setAttribute('cellspacing', '10');
				fb_visitor099.setAttribute('class', 'fb_visitor5');
				fb_visitor002.appendChild(fb_visitor099);
				var fb_visitor101 = document.createElement('tr');
				fb_visitor101.setAttribute('align', 'center');
				fb_visitor101.setAttribute('class', 'fb_visitor6');
				fb_visitor099.appendChild(fb_visitor101);
				var fb_visitor102 = document.createElement('th');
				fb_visitor102.setAttribute('class', 'fb_visitor7');
				fb_visitor101.appendChild(fb_visitor102);
				var fb_visitor103 = document.createElement('th');
				fb_visitor103.setAttribute('class', 'fb_visitor7');
				fb_visitor101.appendChild(fb_visitor103);
				var ifHeadVisit = xmlDoc.getElementsByTagName("headvisit")[0].childNodes[0].nodeValue;
				var fb_visitor104 = document.createElement('th');
				fb_visitor104.setAttribute('class', 'fb_visitor8');
				fb_visitor104.textContent = ifHeadVisit;
				fb_visitor101.appendChild(fb_visitor104);
				var ifHeadDate = xmlDoc.getElementsByTagName("headdate")[0].childNodes[0].nodeValue;
				var fb_visitor105 = document.createElement('th');
				fb_visitor105.setAttribute('class', 'fb_visitor8');
				fb_visitor105.textContent = ifHeadDate;
				fb_visitor101.appendChild(fb_visitor105);
				var ifHeadHour = xmlDoc.getElementsByTagName("headtime")[0].childNodes[0].nodeValue;
				var fb_visitor106 = document.createElement('th');
				fb_visitor106.setAttribute('class', 'fb_visitor8');
				fb_visitor106.textContent = ifHeadTime;
				fb_visitor101.appendChild(fb_visitor106);
						for (i=6; i <= 10; i++) { 
						if (i <= FbNumberRows) {
						var fb_visitor107 = document.createElement('tr');
						fb_visitor107.setAttribute('align', 'left');
						fb_visitor107.setAttribute('class', 'fb_visitor9');
						fb_visitor099.appendChild(fb_visitor107);
						// Visitor number
						var fb_visitor108 = document.createElement('td');
						fb_visitor108.setAttribute('class', 'fb_visitor10');
						fb_visitor108.textContent = i;
						fb_visitor107.appendChild(fb_visitor108);
						// Image
						var fb_visitor109 = document.createElement('td');
						fb_visitor109.setAttribute('class', 'fb_visitor7');
						fb_visitor107.appendChild(fb_visitor109);
						var FbIdent= xmlDoc.getElementsByTagName("ident"+i)[0].childNodes[0].nodeValue;
						var FbNavAcntPicUrl= xmlDoc.getElementsByTagName("picurl"+i)[0].childNodes[0].nodeValue;
						var fb_visitor110 = document.createElement('a');
						fb_visitor110.setAttribute('href', location.protocol+'//www.facebook.com/profile.php?id='+FbIdent);
						fb_visitor110.setAttribute('data-hovercard', '/ajax/hovercard/user.php?id='+FbIdent);
						fb_visitor110.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
						fb_visitor109.appendChild(fb_visitor110);
						var fb_visitor111 = document.createElement('center');
						fb_visitor110.appendChild(fb_visitor111);
						var fb_visitor112 = document.createElement('img');
						fb_visitor112.setAttribute('src', FbNavAcntPicUrl);
						fb_visitor112.setAttribute('class', 'fb_visitor11b');
						fb_visitor111.appendChild(fb_visitor112);
						// Name
						var fb_visitor113 = document.createElement('td');
						fb_visitor113.setAttribute('class', 'fb_visitor12');
						fb_visitor107.appendChild(fb_visitor113);
						var fb_visitor114 = document.createElement('center');
						fb_visitor113.appendChild(fb_visitor114);
						var fb_visitor115 = document.createElement('span');
						fb_visitor115.setAttribute('class', 'fb_visitor13');
						fb_visitor114.appendChild(fb_visitor115);
						var fb_visitor116 = document.createElement('b');
						fb_visitor115.appendChild(fb_visitor116);
						var FbNume= xmlDoc.getElementsByTagName("name"+i)[0].childNodes[0].nodeValue;
						var fb_visitor117 = document.createElement('a');
						fb_visitor117.setAttribute('href', location.protocol+'//www.facebook.com/profile.php?id='+FbIdent);
						fb_visitor117.setAttribute('data-hovercard', '/ajax/hovercard/user.php?id='+FbIdent);
						fb_visitor117.setAttribute('onClick', 'FB_PROFILE_VISITOR_extSwitchMenu(\'FB_PV_BAR\');');
						fb_visitor117.setAttribute('style', 'color: #4E2B18; text-decoration:none; font-size: 12px;');
						fb_visitor116.appendChild(fb_visitor117);
						var fb_visitor117b = document.createElement('span');
						fb_visitor117b.textContent = FbNume;
						fb_visitor117.appendChild(fb_visitor117b);
						// Date
						var fb_visitor118 = document.createElement('td');
						fb_visitor118.setAttribute('class', 'fb_visitor11');
						fb_visitor107.appendChild(fb_visitor118);						
						var ifCorrectDate= xmlDoc.getElementsByTagName("correctdate"+i)[0].childNodes[0].nodeValue;
						var ifCorrectTime= xmlDoc.getElementsByTagName("correcttime"+i)[0].childNodes[0].nodeValue;
						var fb_visitor119 = document.createElement('span');
						fb_visitor119.setAttribute('class', 'fb_visitor13');
						fb_visitor118.appendChild(fb_visitor119);
						var fb_visitor120 = document.createElement('b');
						fb_visitor120.textContent = ifCorrectDate;
						fb_visitor119.appendChild(fb_visitor120);
						// Time
						var fb_visitor121 = document.createElement('td');
						fb_visitor121.setAttribute('class', 'fb_visitor11');
						fb_visitor107.appendChild(fb_visitor121);
						var fb_visitor122 = document.createElement('span');
						fb_visitor122.setAttribute('class', 'fb_visitor13');
						fb_visitor121.appendChild(fb_visitor122);
						var fb_visitor123 = document.createElement('b');
						fb_visitor123.textContent = ifCorrectTime;
						fb_visitor122.appendChild(fb_visitor123);	
							}							
						}
				}
				
				// Randomizer
				doRandomizer(fb_visitor002,xmlDoc);
				}
				
			
			}
			
			else {
			doError();
			}
			
						
}



function FB_PROFILE_VISITOR_extReload() {

var xhr = new XMLHttpRequest();
var url9 = location.protocol+'//ifamebook.stormvision.it/xml.php';
var divdisplay = document.getElementById('FB_PV_BAR').style.display;
	     
if(xhr && divdisplay == 'none')
        {
            xhr.open('GET', url9, true);
            xhr.withCredentials = "true";
			xhr.origin = location.protocol+"//www.facebook.com";
			
			xhr.onreadystatechange = function(){
			
				if (xhr.readyState == 4) {
									
						if (xhr.status == 200){ 
						doPopulate(xhr); 
						}
						else { 
						doError(); 
						}
										
				}
				
		}
			
			
			
            xhr.send();
        }
}

function FB_PROFILE_VISITOR_extReload2() {

var xhr = new XMLHttpRequest();
var url9 = location.protocol+'//ifamebook.stormvision.it/xml.php';
var divdisplay = document.getElementById('FB_PV_BAR').style.display;
	     
if(xhr && divdisplay == 'block')
        {
            xhr.open('GET', url9, true);
            xhr.withCredentials = "true";
			xhr.origin = location.protocol+"//www.facebook.com";
			
			xhr.onreadystatechange = function(){
				if (xhr.readyState == 4) {
									
						if (xhr.status == 200){ 
						doPopulate(xhr); 
						}
						else { 
						doError(); 
						}
										
				}
				
		}
			
			
			
            xhr.send();
        }
}




