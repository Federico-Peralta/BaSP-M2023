var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var emailText = document.getElementById("email-input");
var passwordValue = document.getElementById("password-input");
var button = document.getElementById("login-button");
var forme = document.getElementById("form-js");
var emailState = false;
var passwordState = false;
emailText.addEventListener("blur", emailBlur);
emailText.addEventListener("focus", emailFocus);
passwordValue.addEventListener("blur", passwordBlur);
passwordValue.addEventListener("focus", passwordFocus);
// button.addEventListener("click", alertForm);
forme.addEventListener("submit", function (event) {
  event.preventDefault();
  alertForm();
});

function emailBlur() {
  if (!emailText.value.match(emailExpression)) {
    document.getElementById("email-message").textContent =
      "Please enter a valid email";
  } else {
    emailState = true;
  }
}

function emailFocus() {
  document.getElementById("email-message").textContent = "";
}

function passwordBlur() {
  let password = passwordValue.value;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  if (password.length > 8) {
    for (var i = 0; i < password.length; i++) {
      let char = password[i];
      if (char >= "A" && char <= "Z") {
        hasUpperCase = true;
      } else if (char >= "a" && char <= "z") {
        hasLowerCase = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
    }
  }
  if (hasUpperCase && hasLowerCase && hasNumber) {
    passwordState = true;
  } else {
    document.getElementById("password-message").textContent =
      "Enter a valid password";
  }
}

function passwordFocus() {
  document.getElementById("password-message").textContent = "";
}

function alertForm() {
  if (emailState && passwordState) {
    fetch(
      `https://api-rest-server.vercel.app/login?email=${emailText.value}&password=${passwordValue.value}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response.success) {
          alert(
            response.msg + " " + emailText.value + " " + passwordValue.value
          );
        } else {
          throw new Error(response.msg);
        }
      })
      .catch(function (response) {
        alert(response);
      });
    // alert("Email: " + emailText.value + " Password: " + passwordValue.value);
  } else {
    alert("Please complete the inputs");
  }
}
