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
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeCross.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalbg.style.aria = "hidden";
}

//Validation des champs

function first() {
  const fnRegExp = /[a-zA-Z-+]{2,}/;
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
    return false;
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
  const mailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/g;
  let checkmailRegExp = mailRegExp.test(mailElem.value);
  if (mailElem.value === "") {
    mailCheck.innerHTML = "Veuillez indiquer un email";
    mailCheck.style.fontSize = "10px";
    mailCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  } else if (!checkmailRegExp) {
    mailCheck.innerHTML = "Veuillez indiquer un email valide";
    mailCheck.style.fontSize = "10px";
    mailCheck.style.color = "#FF4E60";
    return false;
  } else {
    mailCheck.innerHTML = "";
    return true;
  }
}

function birthdate() {
  if (birthElem.value === "") {
    birthCheck.innerHTML = "Veuillez indiquer une date de naissance";
    birthCheck.style.fontSize = "10px";
    birthCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  } else {
    birthCheck.innerHTML = "";
    modalbg.style.display = "none";
    modalbg.style.aria = "hidden";
    return true;
  }
}

function quantity() {
  const quantityRegExp = /[0-9+]/g;
  let checkQtityRegExp = quantityRegExp.test(qtityElem.value);
  if (qtityElem.value === "") {
    qtityCheck.innerHTML = "Veuillez indiquer un nombre de tournois";
    qtityCheck.style.fontSize = "10px";
    qtityCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  } else if (!checkQtityRegExp) {
    qtityCheck.innerHTML = "Veuillez indiquer un nombre de tournois";
    qtityCheck.style.fontSize = "10px";
    qtityCheck.style.color = "#FF4E60";
    return false;
  } else {
    qtityCheck.innerHTML = "";
    return true;
  }
}

//Launch Valid form
submitBtn.forEach((btn) => btn.addEventListener("click", validation));

function validation(e) {
  e.preventDefault();
  if (!first() || !last() || !mail() || !birthdate() || !quantity()) {
    modalVal.style.display = "none";
    return false;
  } else {
    modalVal.style.display = "block";
    return true;
  }
}

//Close Valid form
btnClose.forEach((btn) => btn.addEventListener("click", closeValid));
function closeValid() {
  modalVal.style.display = "none";
  modalVal.style.aria = "hidden";
}
