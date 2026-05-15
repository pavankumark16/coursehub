"use strict";

// Simple Signup & Login using localStorage

// SIGNUP
const signupForm = document.getElementById("signupFrom");
const signupMsg = document.getElementById("signupMsg");

function updateUserCount() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("👑 ADMIN VIEW → Total Registered Users:", users.length);

}

updateUserCount();


if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("su_username").value.trim();
    const email = document.getElementById("su_email").value.trim();
const password = document.getElementById("su_password").value;
const confirmPassword = document.getElementById("su_confirm_password").value;


    if (password !== confirmPassword) {
      signupMsg.style.color = "red";
      signupMsg.textContent = "Passwords do not match❌";
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(u => u.username === username || u.email === email);
    if (userExists) {
      signupMsg.style.color = "red";
      signupMsg.textContent = "User already exists ";
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    signupMsg.style.color = "green";
    signupMsg.textContent = "Signup 🔐successful ! Please login.✅";
    updateUserCount();
    signupForm.reset();
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("li_username").value.trim();
    const password = document.getElementById("li_password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(u => u.username === username && u.password === password);

    if (validUser) {
      alert("Login 🔓successful! Welcome " + validUser.username);

      window.open("./index.html", "_blank");

      // window.location.href = "dashboard.html"; // optional redirect
    } else {
      alert("🔐 Invalid username or password");
    }
  },5000);
};
