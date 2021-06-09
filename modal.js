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
const submitBtn = document.querySelectorAll("btn-submit");
const fnElem = document.getElementById("first");
const lastElem = document.getElementById("last");
const mailElem = document.getElementById("email");
const birthElem = document.getElementById("birthdate");
const qtityElem = document.getElementById("quantity");
const cityElem = document.getElementById("city");

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

//test submit event
submitBtn.forEach((btn) => btn.addEventListener("click", first));
submitBtn.forEach((btn) => btn.addEventListener("click", last));
submitBtn.forEach((btn) => btn.addEventListener("click", mail));
submitBtn.forEach((btn) => btn.addEventListener("click", quantity));
submitBtn.forEach((btn) => btn.addEventListener("click", city));

function first(e) {
  if (fnElem.value === "") {
    // on affiche un message
    alert("Veuillez indiquer un nom");
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

//test validate form

function last() {
  if (lastElem.value === "") {
    // on affiche un message
    alert("Veuillez indiquer un nom");
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

function mail() {
  if (mailElem.value === "") {
    // on affiche un message

    alert("Veuillez indiquer un email");
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

function birthdate() {
  if (birthElem.value === "") {
    // on affiche un message

    alert("Veuillez indiquer une date de naissance");
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

function quantity() {
  if (qtityElem.value === "") {
    // on affiche un message

    alert("Veuillez indiquer un nombre de tournois");
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

function city() {
  if (cityElem.value === "") {
    // on affiche un message

    alert("Veuillez indiquer une ville");
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}
