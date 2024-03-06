let bar = document.getElementById("icon");
let menu = document.getElementById("menu");

bar.addEventListener("click",function() {
  if (bar.className === "fa fa-bars") {
    bar.className = "fa fa-times";
    menu.style.right = 0;
  } else {
    bar.className = "fa fa-bars";
    menu.style.right = "-1000px";
  }
})