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
const closeCross = document.querySelectorAll(".close"); //création d'une constante close
const submitBtn = document.getElementById("button");
const form = document.querySelector("#modalForm");
const fnElem = document.getElementById("first");
const lastElem = document.getElementById("last");
const mailElem = document.getElementById("email");
const birthElem = document.getElementById("birthdate");
const tournoisElem = document.getElementById("quantity");
const fnCheck = document.getElementById("fnCheck");
const lastCheck = document.getElementById("lastCheck");
const birthCheck = document.getElementById("birthCheck");
const mailCheck = document.getElementById("mailCheck");
const tournoisCheck = document.getElementById("qtityCheck");

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
firstRegExp = RegExp("^[a-zA-Z]+$[2,]", "g");

submitBtn.addEventListener("click", first);
function first(e) {
  e.preventDefault();
  if (fnElem.value === "") {
    fnCheck.innerHTML = "Veuillez indiquer un prénom";
    fnCheck.style.fontSize = "10px";
    fnCheck.style.color = "#FF4E60";

    // on affiche un message
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

submitBtn.addEventListener("click", last);
function last(e) {
  e.preventDefault();
  if (lastElem.value === "") {
    lastCheck.innerHTML = "Veuillez indiquer un nom";

    lastCheck.style.fontSize = "10px";
    lastCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

submitBtn.addEventListener("click", mail);
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
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

submitBtn.addEventListener("click", birthdate);
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
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

submitBtn.addEventListener("click", quantity);
function quantity(e) {
  e.preventDefault();
  if (tournoisElem.value === "") {
    tournoisCheck.innerHTML = "Veuillez indiquer un nombre de tournois";
    tournoisCheck.style.fontSize = "10px";
    tournoisCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}
