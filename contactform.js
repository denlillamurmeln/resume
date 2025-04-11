document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  const resultContainer = document.getElementById("resultContainer");
  const resultContent = document.getElementById("resultContent");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const hideBtn = document.getElementById("hideBtn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      displayResult();
    }
  });

  function validateForm() {
    if (!name.value || !email.value || !message.value) {
      alert("Please fill in all fields.");
      return false;
    }

    if (!isEmail(email.value)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  }

  function isEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  }

  function displayResult() {
    resultContent.innerHTML = `
        <p>Name: ${name.value}</p>
        <p>Email:</strong> ${email.value}</p>
        <p>Message: ${message.value}</p><br>
      `;
    resultContainer.style.display = "block";
    
  }

  //hide result
  hideBtn.addEventListener("click", function () {
    resultContainer.style.display = "none";
  });
});
