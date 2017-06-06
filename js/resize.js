function resizeMain() {
	if (document.body.clientHeight < 552) {
		document.getElementById("main").style.height = "362px";
	}
}

window.onload = resizeMain;
window.onresize = resizeMain;