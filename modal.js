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
const form = document.getElementById("modalForm"); //création d'une constante pour le formulaire entier
const submitBtn = document.querySelectorAll(".btn-submit"); //création d'une constante pour le bouton submit
const fnElem = document.getElementById("first"); //champ prénom
const lastElem = document.getElementById("last"); //champ nom
const mailElem = document.getElementById("email"); //champs email
const birthElem = document.getElementById("birthdate"); //champ date de naissance
const qtityElem = document.getElementById("quantity"); //champ qtité de tournois
const fnCheck = document.getElementById("fnCheck"); //champ radio
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
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //evennement sur le bouton "je m'inscris" pour déclencher fonction launchModal

// close modal event
closeCross.forEach((btn) => btn.addEventListener("click", closeModal)); //evennement sur la croix pour déclencher fonction closeModal

// launch modal form
function launchModal() {
  //fonction pour afficher la modal formulaire
  modalbg.style.display = "block";
}
function reset() {
  //création de la fonction reset pour réinitialiser tout le formulaire
  form.reset();
}
// close modal form
function closeModal() {
  // fonction pour fermer la modal
  modalbg.style.display = "none";
  modalbg.style.aria = "hidden";
  reset();
}

//Validation des champs

function first() {
  //Regex pour validation du champ prénom
  const fnRegExp = /[a-zA-Z-+]{2,}/g; //plusieurs lettres (min 2)
  let checkFnRegExp = fnRegExp.test(fnElem.value); //comparaison entre regex et valeur du champ
  if (fnElem.value == "") {
    //si champs vide
    // on affiche un message derreur cf CSS
    redBorderForm.setAttribute("data-error", "Veuillez entrer un prénom");
    red.setAttribute("data-error-visible", "true");
    return false;
  }
  if (!checkFnRegExp) {
    //si regex non respectée
    // on affiche un message derreur cf CSS
    redBorderForm.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères valides ou plus pour le champ du prénom" //message d'erreur
    );
    red.setAttribute("data-error-visible", "true"); // Apparence du message d'erreur cf CSS
    return false;
  } else {
    //autrement
    redBorderForm.removeAttribute("data-error", ""); //suppression du message d'erreur
    red.removeAttribute("data-error-visible", "false"); // supression de la mise en forme CSS
    return true;
  }
}
//cf first même process
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
//cf first même process
function mail() {
  const mailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$/g;
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
//cf first même process
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
  }
  birthRedBorderForm.removeAttribute("data-error", "");
  birthRed.removeAttribute("data-error-visible", "false");
  return true;
}

//cf first même process
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
// validation des boutons radio
function city() {
  for (
    c = 0;
    c < cityCheck.length;
    c++ /*"c" premiere entrée, tant que"c" est plus petit que la longueur des entrées on passe à c+1 pour vérification du champ*/
  )
    if (cityCheck[c].checked) {
      //si "c" est checked qqpart on retourne une validation
      cityRedBorderForm.setAttribute("data-error", "");
      birthRed.setAttribute("data-error-visible", "false");
      return true;
    }
  //sinon message d'erreur
  cityRedBorderForm.setAttribute("data-error", "Veuillez indiquer une ville");
  birthRed.setAttribute("data-error-visible", "true");
  return false;
}

//validation des checkbox
function boxes() {
  if (boxCheck.checked) {
    boxRedBorderForm.setAttribute(
      //aucun message prêt pour la validation
      "data-error",
      ""
    );
    return true; //si la case est coché on retourne une validation
  } else {
    boxRedBorderForm.setAttribute(
      //sinon message d'erreur
      "data-error",
      "Veuillez accepter les conditions d'utilisation"
    );
    return false;
  }
}

//Launch Valid form
submitBtn.forEach((btn) => btn.addEventListener("click", validation)); //evennement sur le bouton submit
function validation(e) {
  //fonction renvoyée sur "onclick" de la modal
  e.preventDefault(); //empêche le comportement par defaut (cad envoi du formulaire)
  let firstResult = first();
  let lastResult = last();
  let mailResult = mail();
  let birthdateResult = birthdate();
  let quantityResult = quantity();
  let cityResult = city();
  let boxesResult = boxes();
  if (
    //si chaque entrée est vérifiée
    firstResult &&
    lastResult &&
    mailResult &&
    birthdateResult &&
    quantityResult &&
    cityResult &&
    boxesResult
  ) {
    modalVal.style.display = "block"; //on affiche la modal de validation
    closeModal(); //on ferme la modal du formulaire
    reset(); //on réinitialise le formulaire
    return true;
  } else {
    modalVal.style.display = "none";
    return false;
  }
}

//Close Valid form
btnClose.forEach((btn) => btn.addEventListener("click", closeValid)); //evenement sur le bouton Close de la modal de validation
closeCross.forEach((btn) => btn.addEventListener("click", closeValid)); //evenement sur la croix entraine la fonction closeValid
function closeValid() {
  reset(); //on réinitialise le formulaire
  modalVal.style.display = "none"; //disparition de la modal
  modalVal.style.aria = "hidden";
}
