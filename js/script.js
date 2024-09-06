// JavaScript to toggle the menu smoothly
document.querySelector(".nav-btn").addEventListener("click", function () {
  var menu = document.querySelector(".menu");
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    menu.style.maxHeight = menu.scrollHeight + "px";
  } else {
    menu.style.maxHeight = null;
  }
});
