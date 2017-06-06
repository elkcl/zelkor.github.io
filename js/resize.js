function resizeMain() {
	var columnHeight = document.getElementById("contacts").style.height;
	if (document.getElementById("main").style.height < (columnHeight + 10)) {
		document.getElementById("main").style.height = columnHeight + 10;
	}
}

window.onload = resizeMain;
window.onresize = resizeMain;