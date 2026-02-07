// Welcome message
window.onload = function () {
  console.log("Em Know Entertainment website loaded");
};

// Simple form validation
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    form.reset();
  });
}
