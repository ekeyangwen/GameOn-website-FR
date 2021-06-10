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
const fnElem = document.getElementById("first");
const lastElem = document.getElementById("last");
const mailElem = document.getElementById("email");
const birthElem = document.getElementById("birthdate");
const qtityElem = document.getElementById("quantity");
const cityElem = document.getElementById("city");
const form = document.getElementsByClassName("formData");

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
submitBtn.addEventListener("click", first);

submitBtn.addEventListener("click", last);
submitBtn.addEventListener("click", mail);
submitBtn.addEventListener("click", birthdate);
submitBtn.addEventListener("click", quantity);

//test validate form

function first(e) {
  e.preventDefault();
  if (fnElem.value === "") {
    // on affiche un message
    alert("Veuillez indiquer un prénom");
    // on entoure la case en rouge
    form.style.border = "solid 2px red";
    // et on indique de ne pas envoyer le formulaire
    return false;
  } else {
    form.style.border = "";
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}
function last(e) {
  e.preventDefault();
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

function mail(e) {
  e.preventDefault();
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

function birthdate(e) {
  e.preventDefault();
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

function quantity(e) {
  e.preventDefault();
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
