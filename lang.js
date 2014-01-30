"use strict";


// Detecting browser's language
var FB_PROFILE_VISITOR_myPrefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
var FB_PROFILE_VISITOR_myUserAgentLocale = FB_PROFILE_VISITOR_myPrefs.getCharPref("general.useragent.locale");
var FB_PROFILE_VISITOR_loadLanguage;


// Default language is English
if (FB_PROFILE_VISITOR_myUserAgentLocale != null){
		if (FB_PROFILE_VISITOR_myUserAgentLocale == 'it') {
		FB_PROFILE_VISITOR_loadLanguage = 'italiano';
		}
		else if (FB_PROFILE_VISITOR_myUserAgentLocale == 'it-IT') {
		FB_PROFILE_VISITOR_loadLanguage = 'italiano';
		}
		else if (FB_PROFILE_VISITOR_myUserAgentLocale == 'fr'){
		FB_PROFILE_VISITOR_loadLanguage = 'french';
		}
		else if (FB_PROFILE_VISITOR_myUserAgentLocale == 'fr-FR'){
		FB_PROFILE_VISITOR_loadLanguage = 'french';
		}
		else {
		FB_PROFILE_VISITOR_loadLanguage = 'default';
		}

}
else {
FB_PROFILE_VISITOR_loadLanguage = 'default';
}



