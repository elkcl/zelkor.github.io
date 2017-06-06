function resizeMain() {
	if (document.body.clientHeight < 660) {
		document.getElementById("main").style.height = "470px";
	}
}

window.onload = resizeMain;
window.onresize = resizeMain;