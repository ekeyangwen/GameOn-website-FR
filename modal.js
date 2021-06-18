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
const redElement = document.querySelectorAll(".textControl");
const textControl = document.querySelectorAll(".textControl");
const closeCross = document.querySelectorAll(".close"); //création d'une constante close
const submitBtn = document.getElementById("button");
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

submitBtn.addEventListener("click", first);
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

submitBtn.addEventListener("click", last);
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

submitBtn.addEventListener("click", mail);
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

submitBtn.addEventListener("click", birthdate);
function birthdate(e) {
  e.preventDefault();
  const birthRegExp =
    /(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[12])[/](19([0-9][0-9])|(20[0-0][0-3]))/;
  let checkbirthRegExp = birthRegExp.test(birthElem.value);
  if (birthElem.value === "") {
    birthCheck.innerHTML = "Veuillez indiquer une date de naissance";
    birthCheck.style.fontSize = "10px";
    birthCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  } else if (!checkbirthRegExp) {
    birthCheck.innerHTML = "Veuillez indiquer une date de naissance valide";
    birthCheck.style.fontSize = "10px";
    birthCheck.style.color = "#FF4E60";
    return false;
  } else {
    birthCheck.innerHTML = "";
    return true;
  }
}

submitBtn.addEventListener("click", quantity);
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

let formValid = false;
let l = 0;
function validateRadio(e) {
  e.preventDefault();
  while (!formValid && l < cityLocation.length)
    if (cityLocation[l].checked) {
      formValid = true;
    }
  if (!formValid) {
    cityCheck.innerHTML = "Veuillez indiquer une ville";
    cityCheck.style.fontSize = "10px";
    cityCheck.style.color = "#FF4E60";
    return formValid;
    l++;
  }
  // les données sont ok, on enleve le message d'erreur et on peut envoyer le formulaire
  else cityCheck.innerHTML = "";
  return formValid;
}
