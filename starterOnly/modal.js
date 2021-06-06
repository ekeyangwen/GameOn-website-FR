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
const submitBtn = document.querySelectorAll(".btn-submit");
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
submitBtn.forEach((btn) => btn.addEventListener("click", validate));

//test validate form
function validate() {
  // si la valeur du champ prenom est vide
  if (fnElem.value === "") {
    // on affiche un message
    alert("Veuillez indiquer un prénom");
    // et on indique de ne pas envoyer le formulaire
    return false;
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

function validate() {
  // si la valeur du champ nom est vide
  if (lastElem.value === "") {
    // on affiche un message
    alert("Veuillez indiquer un nom");
    // et on indique de ne pas envoyer le formulaire
    return false;
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}
