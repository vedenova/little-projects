"use strict";

const signupModal = document.querySelector(".signup-form-wrapper");
const loginModal = document.querySelector(".login-form-wrapper");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const xBtnLogin = document.querySelector(".login-x");
const xBtnSignup = document.querySelector(".signup-x");
const formContainer = document.querySelector(".form-container");

signupBtn.addEventListener("click", () => {
  signupModal.classList.add("display");
  formContainer.classList.add("disable");
});

loginBtn.addEventListener("click", () => {
  loginModal.classList.add("display");
  formContainer.classList.add("disable");
});

xBtnSignup.addEventListener("click", () => {
  signupModal.classList.remove("display");
  formContainer.classList.remove("disable");
});

xBtnLogin.addEventListener("click", () => {
  loginModal.classList.remove("display");
  formContainer.classList.remove("disable");
});
