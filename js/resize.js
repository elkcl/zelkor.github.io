function resizeMain() {
  if (document.body.clientWidth > (800)) {
    new ResizeSensor(document.getElementById("main"), function () {
      document.getElementById("main").style.height = "";
      if (document.body.clientHeight < (640)) {
        document.getElementById("main").style.height = "420px";
      }
    });
  }
}

window.onload = resizeMain;
