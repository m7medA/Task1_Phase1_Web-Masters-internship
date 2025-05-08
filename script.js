"use strict";

const menuIcon = document.querySelector(".homePage .nav .media i");
const navList = document.querySelector(".homePage .nav .right");

document
  .querySelector(".homePage .nav .media")
  .addEventListener("click", function () {
    document.querySelector(".homePage .nav .right").classList.toggle("active");
  });

menuIcon.addEventListener("click", function () {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});
