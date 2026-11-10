


// NIRVEE VISA CUSTOMER PORTAL

document.addEventListener("DOMContentLoaded", function () {

  // Customer Registration
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Registration form submitted successfully!");

    });
  }

  // Customer Login
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Login system will be connected to secure authentication.");

    });
  }

  // Application Status
  const statusButton = document.getElementById("checkStatus");

  if (statusButton) {
    statusButton.addEventListener("click", function () {
      alert("Application tracking will be available soon.");
    });
  }

});
