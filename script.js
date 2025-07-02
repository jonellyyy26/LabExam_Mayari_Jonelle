function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Both fields are required.");
    return false;
  }

  return true;
}
