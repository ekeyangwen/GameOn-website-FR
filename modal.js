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
const textControl = document.querySelectorAll(".textControl");
const closeCross = document.querySelectorAll(".close"); //création d'une constante close
const submitBtn = document.querySelectorAll(".btn-submit");
const form = document.querySelector("#modalForm");
const fnElem = document.getElementById("first");
const lastElem = document.getElementById("last");
const mailElem = document.getElementById("email");
const birthElem = document.getElementById("birthdate");
const qtityElem = document.getElementById("quantity");
const fnCheck = document.getElementById("fnCheck");
const fnTest = document.getElementById("fnTest");
const lastCheck = document.getElementById("lastCheck");
const birthCheck = document.getElementById("birthCheck");
const mailCheck = document.getElementById("mailCheck");
const tournoisCheck = document.getElementById("qtityCheck");
const cityLocation = document.querySelectorAll(".radio");
const cityCheck = document.getElementById("cityCheck");
const redBorder = document.getElementsByClassName(".formData");
const modalVal = document.getElementById("modalValid");
const btnClose = document.querySelectorAll(".btnClose");
const inputs = document.querySelectorAll(".input");

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

submitBtn.forEach((btn) => btn.addEventListener("click", first));
function first(e) {
  e.preventDefault();
  const fnRegExp = /[^\s][a-zA-Z-+]{2,30}/g;
  let checkFnRegExp = fnRegExp.test(fnElem.value);
  if (fnElem.value == "") {
    fnCheck.innerHTML = "Veuillez indiquer un prénom";
    fnCheck.style.fontSize = "10px";
    fnCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  }
  if (!checkFnRegExp) {
    fnCheck.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    fnCheck.style.fontSize = "10px";
    fnCheck.style.color = "#FF4E60";
    return false;
  } else {
    fnCheck.innerHTML = "";
    return true;
  }
}

submitBtn.forEach((btn) => btn.addEventListener("click", last));
function last(e) {
  e.preventDefault();
  const lastRegExp = /[^\s][a-zA-Z-+]{2,30}/g;
  let checklastRegExp = lastRegExp.test(lastElem.value);
  if (lastElem.value === "") {
    lastCheck.innerHTML = "Veuillez indiquer un nom";
    lastCheck.style.fontSize = "10px";
    lastCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  } else if (!checklastRegExp) {
    lastCheck.innerHTML =
      "Veuillez entrer 2 caractères valides ou plus pour le champ du nom";
    lastCheck.style.fontSize = "10px";
    lastCheck.style.color = "#FF4E60";
    return false;
  } else {
    lastCheck.innerHTML = "";
    return true;
  }
}

submitBtn.forEach((btn) => btn.addEventListener("click", mail));
function mail(e) {
  e.preventDefault();
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

submitBtn.forEach((btn) => btn.addEventListener("click", birthdate));
function birthdate(e) {
  e.preventDefault();
  if (birthElem.value === "") {
    birthCheck.innerHTML = "Veuillez indiquer une date de naissance";
    birthCheck.style.fontSize = "10px";
    birthCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  } else {
    birthCheck.innerHTML = "";
    return true;
  }
}

submitBtn.forEach((btn) => btn.addEventListener("click", quantity));
function quantity(e) {
  e.preventDefault();
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
submitBtn.forEach((btn) => btn.addEventListener("click", validate));
function validate(e) {
  e.preventDefault();
  if (
    first == false ||
    last == false ||
    mail == false ||
    birthdate == false ||
    quantity == false
  ) {
    modalVal.style.display = "none";
    modalVal.style.aria = "hidden";
    alert("STOP");
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
