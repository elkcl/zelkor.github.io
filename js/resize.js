function resizeMain() {
	var user = detect.parse(navigator.userAgent);
	if (user.browser.family == "Firefox") {
		var add = 20;
	}
	else {
		var add = 0;
	}
	if (document.body.clientHeight < (640 + add)) {
		document.getElementById("main").style.height = toString(450 + add) + "px";
	}
}

window.onload = resizeMain;
window.onresize = resizeMain;