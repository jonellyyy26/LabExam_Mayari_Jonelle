// script.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Both fields are required!");
    e.preventDefault();
  } else {
    window.location.href = "home.html"; // simulate login success
  }
});
