"use strict";

const btn = document.querySelector(".share-btn");
const share = document.querySelector(".share");

btn.addEventListener("click", function () {
  if (share.style.display === "none" || !share.style.display) {
    share.style.display = "flex";
  } else {
    share.style.display = "none";
  }
});

window.addEventListener("click", function (e) {
  if (!e.target.matches(".share-btn") && !e.target.matches(".share")) {
    share.style.display = "none";
  }
});
