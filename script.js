const menuBar = document.querySelector(".fa-bars");
const Menu = document.querySelector("aside");
const cancel = document.querySelector(".fa-times");
const angle = document.querySelectorAll(".upnav_li");
const angleSide = document.querySelectorAll(".sidenav_li");

const curve = document.querySelectorAll(".fa-angle-down");
const dropBoxOne = document.querySelectorAll(".first-drop");
const dropBoxTwo = document.querySelectorAll(".second-drop");

menuBar.addEventListener("click", function () {
  Menu.style.width = "60vw";
});

cancel.addEventListener("click", function () {
  Menu.style.width = "0vw";
});

angle[0].addEventListener("click", function () {
  if (dropBoxOne[0].style.height != "140px") {
    dropBoxOne[0].style.height = "140px";
    curve[0].style.transform = "rotate(180deg)";
  } else {
    curve[0].style.transform = "rotate(0deg)";
    dropBoxOne[0].style.height = "0px";
  }
});
angle[1].addEventListener("click", function () {
  if (dropBoxTwo[0].style.height != "110px") {
    dropBoxTwo[0].style.height = "110px";
    curve[1].style.transform = "rotate(180deg)";
  } else {
    dropBoxTwo[0].style.height = "0px";
    curve[1].style.transform = "rotate(0deg)";
  }
});

angleSide[0].addEventListener("click", function () {
  if (dropBoxOne[1].style.height != "140px") {
    dropBoxOne[1].style.height = "140px";
    curve[2].style.transform = "rotate(180deg)";
  } else {
    dropBoxOne[1].style.height = "0px";
    curve[2].style.transform = "rotate(0deg)";
  }
});

angleSide[1].addEventListener("click", function () {
  if (dropBoxTwo[1].style.height != "110px") {
    dropBoxTwo[1].style.height = "110px";
    curve[3].style.transform = "rotate(180deg)";
  } else {
    dropBoxTwo[1].style.height = "0px";
    curve[3].style.transform = "rotate(0deg)";
  }
});
