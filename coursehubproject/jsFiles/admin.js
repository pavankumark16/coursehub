"use strict";

// ADMIN CREDENTIALS
const ADMIN_USERNAME = "a";
const ADMIN_PASSWORD = "a";

const adminForm = document.getElementById("adminLoginForm");
const adminMsg = document.getElementById("adminMsg");
const adminPanel = document.getElementById("adminPanel");
const userTable = document.getElementById("userTable");
const totalUsersEl = document.getElementById("totalUsers");

adminForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("admin_username").value.trim();
    const password = document.getElementById("admin_password").value.trim();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        adminMsg.style.color = "lightgreen";
        adminMsg.textContent = "Admin login successful ✅";
        // adminForm.style.display = "none";
        adminMsg.style.fontSize="18px";
        adminPanel.style.display = "block";
    

        loadUsers();
    } else {
        adminMsg.style.color = "red";
        adminMsg.textContent = "Unauthorized access ❌";
        adminMsg.style.fontSize="18px";
    }
},7000);

function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    totalUsersEl.textContent = "Total Registered Users: " + users.length;

    userTable.innerHTML = "";

    users.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>

        `;

        userTable.appendChild(row);
        userTable.style.color="white";
    });
}
