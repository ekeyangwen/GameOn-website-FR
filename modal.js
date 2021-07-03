function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeCross = document.querySelectorAll(".close"); //création d'une constante close
const form = document.getElementById("modalForm");
const submitBtn = document.querySelectorAll(".btn-submit");
const fnElem = document.getElementById("first");
const lastElem = document.getElementById("last");
const mailElem = document.getElementById("email");
const birthElem = document.getElementById("birthdate");
const qtityElem = document.getElementById("quantity");
const fnCheck = document.getElementById("fnCheck");
const fnTest = document.getElementById("fnTest");
const modalVal = document.getElementById("modalValid");
const btnClose = document.querySelectorAll(".btnClose");
const redBorderForm = document.querySelector(".formData");
const lastRedBorderForm = document.querySelector(".lastFormData");
const red = document.querySelector(".text-control");
const lastRed = document.querySelector(".last-text-control");
const mailRed = document.querySelector(".mail-text-control");
const mailRedBorderForm = document.querySelector(".mailFormData");
const birthRed = document.querySelector(".birth-text-control");
const birthRedBorderForm = document.querySelector(".birthFormData");
const qtityRed = document.querySelector(".qtity-text-control");
const qtityRedBorderForm = document.querySelector(".qtityFormData");
const inputRed = document.querySelector(".checkbox-input");
const cityRedBorderForm = document.querySelector(".cityFormData");
const cityCheck = document.getElementsByName("location");
const boxCheck = document.getElementById("checkbox1");
const boxRedBorderForm = document.querySelector(".boxesFormData");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeCross.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function reset() {
  form.reset();
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalbg.style.aria = "hidden";
  reset();
}

//Validation des champs

function first() {
  const fnRegExp = /[a-zA-Z-+]{2,}/g;
  let checkFnRegExp = fnRegExp.test(fnElem.value);
  if (fnElem.value == "") {
    redBorderForm.setAttribute("data-error", "Veuillez entrer un prénom");
    red.setAttribute("data-error-visible", "true");
    // on affiche un message
    return false;
  }
  if (!checkFnRegExp) {
    redBorderForm.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères valides ou plus pour le champ du prénom"
    );
    red.setAttribute("data-error-visible", "true");
    alert(fnElem);
    let fnTrimCheck = fnElem.value;
    return fnTrimCheck.trim();
  } else {
    redBorderForm.removeAttribute("data-error", "");
    red.removeAttribute("data-error-visible", "false");
    return true;
  }
}

function last() {
  const lastRegExp = /[a-zA-Z-+]{2,30}/g;
  let checklastRegExp = lastRegExp.test(lastElem.value);
  if (lastElem.value === "") {
    lastRedBorderForm.setAttribute("data-error", "Veuillez indiquer un nom");
    lastRed.setAttribute("data-error-visible", "true");

    return false;
  } else if (!checklastRegExp) {
    lastRedBorderForm.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères valides ou plus pour le champ du nom"
    );
    lastRed.setAttribute("data-error-visible", "true");
    return false;
  } else {
    lastRedBorderForm.removeAttribute("data-error", "");
    lastRed.removeAttribute("data-error-visible", "false");
    return true;
  }
}

function mail() {
  const mailRegExp = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/g;
  let checkmailRegExp = mailRegExp.test(mailElem.value);
  if (mailElem.value === "") {
    mailRedBorderForm.setAttribute("data-error", "Veuillez indiquer un email");
    mailRed.setAttribute("data-error-visible", "true");
    return false;
  } else if (!checkmailRegExp) {
    mailRedBorderForm.setAttribute(
      "data-error",
      "Veuillez indiquer un email valide"
    );
    mailRed.setAttribute("data-error-visible", "true");
    return false;
  } else {
    mailRedBorderForm.removeAttribute("data-error", "");
    mailRed.removeAttribute("data-error-visible", "false");
    return true;
  }
}

function birthdate() {
  const birthRegExp = /[^a-z]/;
  let checkbirthRegExp = birthRegExp.test(birthElem.value);
  if (birthElem.value === "") {
    birthRedBorderForm.setAttribute(
      "data-error",
      "Veuillez indiquer une date de naissance"
    );
    birthRed.setAttribute("data-error-visible", "true");
    return false;
  } else if (!checkbirthRegExp) {
    birthRedBorderForm.setAttribute(
      "data-error",
      "Veuillez indiquer une date de naissance valide"
    );
    birthRed.setAttribute("data-error-visible", "true");
    return false;
  } else {
    birthRedBorderForm.removeAttribute("data-error", "");
    birthRed.removeAttribute("data-error-visible", "false");
    return true;
  }
}

function quantity() {
  const quantityRegExp = /[0-9+]/g;
  let checkQtityRegExp = quantityRegExp.test(qtityElem.value);
  if (qtityElem.value === "") {
    qtityRedBorderForm.setAttribute(
      "data-error",
      "Veuillez indiquer un nombre de tournois"
    );
    qtityRed.setAttribute("data-error-visible", "true");
    return false;
  } else if (!checkQtityRegExp) {
    qtityRedBorderForm.setAttribute(
      "data-error",
      "Veuillez indiquer une valeur numérique"
    );
    qtityRed.setAttribute("data-error-visible", "true");
    return false;
  } else {
    qtityRedBorderForm.removeAttribute("data-error", "");
    qtityRed.removeAttribute("data-error-visible", "false");
    return true;
  }
}

function city() {
  for (c = 0; c < cityCheck.length; c++) if (cityCheck[c].checked) return true;
  {
  }
  cityRedBorderForm.setAttribute("data-error", "Veuillez indiquer une ville");
  birthRed.setAttribute("data-error-visible", "true");
  return false;
}

function boxes() {
  if (boxCheck.checked) return true;
  {
  }
  boxRedBorderForm.setAttribute(
    "data-error",
    "Veuillez accepter les conditions d'utilisation"
  );
  return false;
}

//Launch Valid form
submitBtn.forEach((btn) => btn.addEventListener("click", validation));
function validation(e) {
  e.preventDefault();
  if (
    !first() ||
    !last() ||
    !mail() ||
    !birthdate() ||
    !quantity() ||
    !city() ||
    !boxes()
  ) {
    modalVal.style.display = "none";
    return false;
  } else {
    modalVal.style.display = "block";
    closeModal();
    reset();
    return true;
  }
}

//Close Valid form
btnClose.forEach((btn) => btn.addEventListener("click", closeValid));
closeCross.forEach((btn) => btn.addEventListener("click", closeValid));
function closeValid() {
  modalVal.style.display = "none";
  modalVal.style.aria = "hidden";
}
