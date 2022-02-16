"use strict";
var btn = document.getElementById("btn");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const btnCloseForm = document.querySelector(".close-form");
const btnsShowForm = document.querySelectorAll(".show-form");

const openForm = function () {
  form.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeForm = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsShowForm.length; i++) {
  btnsShowForm[i].addEventListener("click", openForm);
}
