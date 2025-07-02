

document.getElementById("loginForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Both fields are required!");
    e.preventDefault(); // Prevent form submission if fields are empty
  } else {
    window.location.href = "home.html"; // Redirect to home.html if login is successful
  }
});
