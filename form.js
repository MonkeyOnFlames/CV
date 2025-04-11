//contact form
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    setTimeout(() => {
      form.reset();

      const inputs = form.querySelectorAll("input");

      inputs.forEach((input) => {
        input.style.display = "#ddd";
      });
    }, 300);
  }
});

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    showError("nameInput-error");
    isValid = false;
  } else {
    hideError("nameInput-error");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    showError("email-error");
    isValid = false;
  } else {
    hideError("email-error");
  }

  if (message.value.trim() === "") {
    showError("message-error");
    isValid = false;
  } else {
    hideError("message-error");
  }

  return isValid;
}

function hideError(id) {
  const errorElement = document.getElementById(id);
  errorElement.style.display = "none";

  const inputId = id.replace("-error", "");
  const inputElement = document.getElementById(inputId);
  //inputElement.style.borderColor = "#ddd";
}

function showError(id) {
  const errorElement = document.getElementById(id);
  errorElement.style.display = "block";

  const inputId = id.replace("-error", "");
  const inputElement = document.getElementById(inputId);
  //inputElement.style.borderColor = "#e74c3c";
}

nameInput.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    hideError("nameInput-error");
  }
});

email.addEventListener("input", function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(this.value)) {
    hideError("email-error");
  }
});

message.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    hideError("message-error");
  }
});
