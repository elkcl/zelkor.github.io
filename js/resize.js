function resizeMain() {
	
	if (document.body.clientHeight < (640)) {
		document.getElementById("main").style.height = "450px";
	}
}

window.onload = resizeMain;
window.onresize = resizeMain;