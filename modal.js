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
const formData = document.querySelectorAll(".formData");
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
const fnRegExp = new RegExp("^[a-zA-Z-+]{2,}$", "g");
submitBtn.addEventListener("click", fnRegTest);
submitBtn.addEventListener("click", first);
submitBtn.addEventListener("click", last);
submitBtn.addEventListener("click", mail);
submitBtn.addEventListener("click", birthdate);
submitBtn.addEventListener("click", quantity);

function fnRegTest(e) {
  e.preventDefault();
  let checkFnRegExp = fnRegExp.test(fnElem.value);
  if (!checkFnRegExp) {
    fnCheck.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    fnCheck.style.fontSize = "10px";
    fnCheck.style.color = "#FF4E60";
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else fnCheck.innerHTML = "";
  return true;
}

function first(e) {
  e.preventDefault();
  if (fnElem.value === "") {
    lastCheck.innerHTML = "Veuillez indiquer un prénom";
    fnCheck.style.fontSize = "10px";
    fnCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  } else fnCheck.innerHTML = "";
  return true;
}

function last(e) {
  e.preventDefault();
  if (lastElem.value === "") {
    lastCheck.innerHTML = "Veuillez indiquer un nom";
    lastCheck.style.fontSize = "10px";
    lastCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else lastCheck.innerHTML = "";
  // les données sont ok, on enleve le message d'erreur et on peut envoyer le formulaire
  return true;
}

function mail(e) {
  e.preventDefault();
  if (mailElem.value === "") {
    mailCheck.innerHTML = "Veuillez indiquer un email";
    mailCheck.style.fontSize = "10px";
    mailCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on enleve le message d'erreur et on peut envoyer le formulaire
    mailCheck.innerHTML = "";
    return true;
  }
}

function birthdate(e) {
  e.preventDefault();
  if (birthElem.value === "") {
    birthCheck.innerHTML = "Veuillez indiquer une date de naissance";
    birthCheck.style.fontSize = "10px";
    birthCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on enleve le message d'erreur et on peut envoyer le formulaire
    birthCheck.innerHTML = "";
    return true;
  }
}

function quantity(e) {
  e.preventDefault();
  if (qtityElem.value === "") {
    tournoisCheck.style.fontSize = "10px";
    tournoisCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    tournoisCheck.innerHTML = "";
    // les données sont ok, on enleve le message d'erreur et on peut envoyer le formulaire
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
  } else {
    // les données sont ok, on enleve le message d'erreur et on peut envoyer le formulaire
    cityCheck.innerHTML = "";
    return formValid;
  }
}
