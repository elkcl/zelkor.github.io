function resizeMain() {
	if (document.body.clientHeight < 582) {
		document.getElementById("main").style.height = "392px";
	}
}

window.onload = resizeMain;
window.onresize = resizeMain;