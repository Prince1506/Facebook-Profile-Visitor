"use strict";

// Switching main div visibility
function FB_PROFILE_VISITOR_extSwitchMenu(obj){
			var el = document.getElementById(obj);
			if (el.style.display != 'none') {
			el.style.display = 'none';
			}else {
			el.style.display = 'block';
			}
	}
