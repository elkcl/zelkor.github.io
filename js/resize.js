function resizeMain() {
  
  if (document.body.clientHeight < (640)) {
    document.getElementById("main").style.height = "420px";
  }
}

window.onload = resizeMain;
window.onresize = resizeMain;