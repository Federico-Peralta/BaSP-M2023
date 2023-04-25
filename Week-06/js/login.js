/*
Se debe crear un archivo llamado login.js en donde se debe poner toda la lógica
Javascript necesaria para el funcionamiento del formulario login.
La validación de cada campo se debe realizar en el evento “blur” de cada uno de los campos.
Además, si algún campo tiene un error de validación,
en el evento “focus” de dicho campo debe desaparecer el mensaje
porque se asume que el usuario está corrigiendo el error.

Se debe agregar un botón “Login” que al presionarlo se muestre un alert
con la información cargada en el formulario en caso de que haya pasado
todas las validaciones. Si alguna validación no pasó,
además de mostrar el error debajo del campo, también se debe mostrar el error en el alert.
*/

var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var emailText = document.getElementById("email-input");
var passwordValue = document.getElementById("password-input");
var button = document.getElementById("login-button");
var emailState = false;
var passwordState = false;
emailText.addEventListener("blur", emailBlur);
emailText.addEventListener("focus", emailFocus);
passwordValue.addEventListener("blur", passwordBlur);
passwordValue.addEventListener("focus", passwordFocus);
button.addEventListener("click", alertForm);

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
    alert("Email: " + emailText.value + " Password: " + passwordValue.value);
  } else {
    alert("Ingrese datos validos");
  }
}
