var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var nameInp = document.getElementById("name-input");
var lastNamInp = document.getElementById("last-name-input");
var dniInp = document.getElementById("dni-input");
var emailInp = document.getElementById("email-input");
var dateBirInp = document.getElementById("date-birth-input");
var cellpInp = document.getElementById("cellphone-input");
var adressInp = document.getElementById("adress-input");
var locatInp = document.getElementById("location-input");
var postalInp = document.getElementById("postal-input");
var passInp = document.getElementById("password-input");
var repeatPassInp = document.getElementById("repeat-password-input");
var validName;
var validLastNam;
var validDni;
var validEmail;
var validDate;
var validCellp;

var locationValid;
var postalCodeValid;
var passwordValid;
var repeatPasswordValid;

// Name validations
nameInp.addEventListener("blur", nameValidation);
nameInp.addEventListener("focus", nameFocus);

function nameValidation() {
  let hasLetters = false;
  let hasNumber = false;
  let nameLength = nameInp.value;
  if (nameLength.length > 3) {
    console.log(nameLength);
    for (var i = 0; i < nameLength.length; i++) {
      let char = nameLength[i];
      console.log(nameLength[i]);
      if (char >= "A" && char <= "Z") {
        hasLetters = true;
        validName = true;
      } else if (char >= "a" && char <= "z") {
        hasLetters = true;
        validName = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
    }
    if (hasLetters == true && hasNumber == true) {
      document.getElementById("name-p").textContent = "Enter a valid name";
      validName = false;
    }
  } else {
    document.getElementById("name-p").textContent = "Enter a valid name";
    validName = false;
  }
}

function nameFocus() {
  document.getElementById("name-p").textContent = "";
}

// Last name validations
lastNamInp.addEventListener("blur", lastNameValidation);
lastNamInp.addEventListener("focus", lastNameFocus);

function lastNameValidation() {
  let hasLetters = false;
  let hasNumber = false;
  let lastNameLength = lastNamInp.value;
  if (lastNameLength.length > 3) {
    for (var i = 0; i < lastNameLength.length; i++) {
      let char = lastNameLength[i];
      console.log(lastNameLength[i]);
      if (char >= "A" && char <= "Z") {
        hasLetters = true;
        validLastNam = true;
      } else if (char >= "a" && char <= "z") {
        hasLetters = true;
        validLastNam = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
    }
    if (hasLetters == true && hasNumber == true) {
      document.getElementById("last-name-p").textContent =
        "Enter a valid last name";
      validLastNam = false;
    }
  } else {
    document.getElementById("last-name-p").textContent =
      "Enter a valid last name";
    validLastNam = false;
  }
}

function lastNameFocus() {
  document.getElementById("last-name-p").textContent = "";
}

// DNI validations
dniInp.addEventListener("blur", dniValidation);
dniInp.addEventListener("focus", dniFocus);

function dniValidation() {
  let hasLetters = false;
  let hasNumber = false;
  let dniLong = dniInp.value;
  if (dniLong.length > 7) {
    for (var i = 0; i < dniLong.length; i++) {
      let numb = dniLong[i];
      console.log(numb[i]);
      if (numb >= "A" && numb <= "Z") {
        hasLetters = true;
      } else if (numb >= "a" && numb <= "z") {
        hasLetters = true;
      } else if (numb >= "0" && numb <= "9") {
        hasNumber = true;
        validDni = true;
      }
    }
    if (hasLetters) {
      document.getElementById("dni-p").textContent = "Enter a valid DNI";
      validDni = false;
    }
  } else {
    document.getElementById("dni-p").textContent = "Enter a valid DNI";
    validDni = false;
  }
}

function dniFocus() {
  document.getElementById("dni-p").textContent = "";
}

// Email validations
emailInp.addEventListener("blur", emailValidation);
emailInp.addEventListener("focus", emailFocus);

function emailValidation() {
  if (!emailInp.value.match(emailExpression)) {
    document.getElementById("email-p").textContent =
      "Please enter a valid email";
    validEmail = false;
  } else {
    validEmail = true;
  }
}

function emailFocus() {
  document.getElementById("email-p").textContent = "";
}

// Date validations
dateBirInp.addEventListener("blur", dateValidation);
dateBirInp.addEventListener("focus", dateFocus);

function dateValidation() {
  var date = dateBirInp.value;

  var parts = date.split("-");
  var year = parts[0];
  var month = parts[1];
  var day = parts[2];

  if (parts.length !== 3 || isNaN(year) || isNaN(month) || isNaN(day)) {
    document.getElementById("date-p").textContent = "Enter a valid date";
    validDate = false;
  } else {
    validDate = true;
  }

  year = parseInt(year, 10);
  month = parseInt(month, 10);
  day = parseInt(day, 10);

  if (year < 0 || month < 1 || month > 12 || day < 1 || day > 31) {
    document.getElementById("date-p").textContent = "Enter a valid date";
    validDate = false;
  } else {
    validDate = true;
  }
}

function dateFocus() {
  document.getElementById("date-p").textContent = "";
}

// Cellphone validations
cellpInp.addEventListener("blur", cellphoneValidation);
cellpInp.addEventListener("focus", cellphoneFocus);

function cellphoneValidation() {
  let hasLetters = false;
  let hasNumber = false;
  let cellpLong = cellpInp.value;
  if (cellpLong.length === 10) {
    for (var i = 0; i < cellpLong.length; i++) {
      let numb = cellpLong[i];
      if (numb >= "A" && numb <= "Z") {
        hasLetters = true;
      } else if (numb >= "a" && numb <= "z") {
        hasLetters = true;
      } else if (numb >= "0" && numb <= "9") {
        hasNumber = true;
        validCellp = true;
      }
    }
    if (hasLetters) {
      document.getElementById("cellphone-p").textContent =
        "Enter a valid cellphone";
      validCellp = false;
    }
  } else {
    document.getElementById("cellphone-p").textContent =
      "Enter a valid cellphone";
    validCellp = false;
  }
}

function cellphoneFocus() {
  document.getElementById("cellphone-p").textContent = "";
}

// Adress validation

//adressInp.addEventListener("blur");
//adressInp.addEventListener("focus");

//function adressValidation() {}

// Location validation

locatInp.addEventListener("blur", locationValidation);
locatInp.addEventListener("focus", locationFocus);

function locationValidation() {
  let hasLetters = false;
  let hasNumber = false;
  let location = locatInp.value;
  if (location.length > 3) {
    for (var i = 0; i < location.length; i++) {
      let char = location[i];
      if (char >= "A" && char <= "Z") {
        hasLetters = true;
      } else if (char >= "a" && char <= "z") {
        hasLetters = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
    }
    if (hasNumber && hasLetters) {
      locationValid = true;
    } else {
      document.getElementById("location-p").textContent =
        "Enter a valid location";
    }
  } else {
    document.getElementById("location-p").textContent =
      "Enter a valid location";
  }
}

function locationFocus() {
  document.getElementById("location-p").textContent = "";
}

// Postal Code validation

postalInp.addEventListener("blur", postalCodeValidation);
postalInp.addEventListener("focus", postalCodeFocus);

function postalCodeValidation() {
  let hasLetters = false;
  let hasNumber = false;
  let postal = postalInp.value;
  if (postal.length >= 4 && postal.length <= 5) {
    for (var i = 0; i < postal.length; i++) {
      let char = postal[i];
      if (char >= "A" && char <= "Z") {
        hasLetters = true;
      } else if (char >= "a" && char <= "z") {
        hasLetters = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
    }
    if (hasLetters) {
      document.getElementById("postal-code-p").textContent =
        "Enter a valid postal code";
    } else {
      postalCodeValid = true;
    }
  } else {
    document.getElementById("postal-code-p").textContent =
      "Enter a valid postal code";
  }
}

function postalCodeFocus() {
  document.getElementById("postal-code-p").textContent = "";
}

// Password validation

passInp.addEventListener("blur", passwordValidation);
passInp.addEventListener("focus", passwordFocus);

function passwordValidation() {
  let password = passInp.value;
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
    passwordValid = true;
  } else {
    document.getElementById("password-p").textContent =
      "Enter a valid password";
  }
}

function passwordFocus() {
  document.getElementById("password-p").textContent = "";
}

// Repeat Password validation

repeatPassInp.addEventListener("blur", repeatPasswordValidation);
repeatPassInp.addEventListener("focus", repeatPasswordFocus);

function repeatPasswordValidation() {
  let passwordA = passInp.value;
  let passwordB = repeatPassInp.value;
  if (passwordA == passwordB) {
    repeatPasswordValid = true;
  } else {
    document.getElementById("repeat-password").textContent =
      "The passwords are not the same";
  }
}

function repeatPasswordFocus() {
  document.getElementById("repeat-password").textContent = "";
}
