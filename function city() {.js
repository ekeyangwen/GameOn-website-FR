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
submitBtn.addEventListener("click", city);

    first.style.border = "solid 2px red";

let NbElements = form.elements.length;
// Boucle tous les éléments du formulaire
for (let l = 0; l < NbElements; l++)
  //test submit event
  submitBtn.addEventListener("click", first);
//test validate form

function first(e) {
  e.preventDefault();
  e.stopPropagation();
  if (fnElem.value === "") {
    // on affiche un message
    alert("Veuillez indiquer un prénom");
    // on entoure la case en rouge

    // et on indique de ne pas envoyer le formulaire
    return false;
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}

submitBtn.addEventListener("click", last);
function last(e) {
  e.preventDefault();
  e.stopPropagation();
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

submitBtn.addEventListener("click", mail);
function mail(e) {
  e.preventDefault();
  e.stopPropagation();
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

submitBtn.addEventListener("submit", birthdate);
function birthdate(e) {
  e.preventDefault();
  e.stopPropagation();
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

submitBtn.addEventListener("click", quantity);
function quantity(e) {
  e.preventDefault();
  e.stopPropagation();
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

submitBtn.addEventListener("click", radio);
function radio(e) {
  e.preventDefault();
  if (radioLocation.value === "") {
    // on affiche un message

    alert("Veuillez indiquer une ville");
    return false;
    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}
class input {
  constructor(input) {
    this.input = input;
  }
}

let first = new input(first);
let last = new input(last);

const form = document.getElementById("modalForm");



const mailElem = document.getElementById("email");
const birthElem = document.getElementById("birthdate");
const qtityElem = document.getElementById("quantity");
const cityElem = document.getElementById("city");
const radioLocation = document.getElementsByName("location");
const fnError = document.getElementById("fnError");
const lastError = document.getElementById("lastError");


submitBtn.addEventListener("click", mail);
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

submitBtn.addEventListener("submit", birthdate);
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

submitBtn.addEventListener("click", quantity);
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

submitBtn.addEventListener("click", validateRadio);
function validateRadio() {
  let formValid = false;
  let i = 0;
  while (!formValid && i < radios.length) {
    if (radioLocation[i].checked) formValid = true;
    i++;
  }

  if (!formValid) alert("Must check some option!");
  return formValid;
}

text - control.style.border("red 2px"); // on entoure la case en rouge

 //RegExp email


form.first.addEventListener("change", first);
function first() {
  validFn(this);
}

const validFn = function (first) {
  let fnRegExp = new RegExp("^[a-zA-Z-]+$");

  let testFn = fnRegExp.test(first.value);

  if (!testFn && fnElem === "") {
    alert = "Veuillez entrer un prénom"; // on affiche un message d'alerte
    return false; // les données sont ok, on peut envoyer le formulaire
  } else {
    return true;
  }
};

form.last.addEventListener("change", last);
function last() {
  validLast(this);
}

const validLast = function (inputLast) {
  let lastRegExp = new RegExp("^[a-zA-Z-]+$");

  let testLast = lastRegExp.test(inputLast.value);

  if (!testLast && lastElem === "") {
    console.log.alert = "Veuillez entrer un nom"; // on affiche un message d'alerte
    return false; // les données sont ok, on peut envoyer le formulaire
  } else {
    return true;
  }
};

  let testFn = firstRegExp.test(fnElem.value);!testFn &&
    fnElem.addEventListener("change", function () {
      firstInfo(this);
    });
  ;
  function firstInfo(e) {
    e.preventDefault(firstInfo);
    let firstOk = firstRegExp.test(firstInfo.value);
    if (!firstOk) {
      alert("Veuillez entrer au moins 2 caractère");
      return false;
    }
  }

  
submitBtn.addEventListener("click", validate);
let notvalidation =
  (fnElem.value === "",
  lastElem.value === "",
  mailElem.value === "",
  birthElem.value === "",
  tournoisElem.value === "");
let notRegexp = !fnRegExp;

function validate() {
  if (!notvalidation && notRegExp) {
    return false;
  } else {
    return true;
  }
}

  if (!fnRegExp.test) {
    fnCheck.innerHTML = "Veuillez remplir au moins deux caractères";
    return false;
  } else 
  let fnRegExp = new RegExp("^[a-zA-Z-]{2,}, g $");


  fnElem.addEventListener("click", first);
let fnRegExp = new RegExp("^[a-zA-Z-]{2,}, g $");
let i = 0;
function first(e) {
  e.preventDefault();

  while (!fnRegExp.test && fnElement.value === "") return false;
  if (!fnRegExp.test) {
    fnLength.innerHTML = "Veuillez remplir au moins deux caractères";
    return false;
  }
  if (fnElem.value === "") {
    fnCheck.innerHTML = "Veuillez indiquer un prénom";
    fnCheck.style.fontSize = "10px";
    fnCheck.style.color = "#FF4E60";
    return false;
    // on affiche un message

    // et on indique de ne pas envoyer le formulaire
  } else {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  }
}


submitBtn.addEventListener("click", validate);
let v = 0;
function validate(e) {
  e.preventDefault();
  while ((v < form.length, v++))
    if (!true) {
      return false;
    } else return true;
}


= fnRegExp.test;

 
 
/*let formValid = false;
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
    return formValid;²
*/


new RegExp("^[a-zA-Z-+]^/s*[^0-9]{2,}$", "g")

function first(e) {
  e.preventDefault();
  if (valueFn) {
    lastCheck.innerHTML = "Veuillez indiquer un prénom";
    fnCheck.style.fontSize = "10px";
    fnCheck.style.color = "#FF4E60";
    // on affiche un message
    return false;
  } else fnCheck.innerHTML = "";
  return true;
}


    // et on indique de ne pas envoyer le formulaire
  } else fnCheck.innerHTML = "";
  return true;
}
(19\d{2}|20[0-1]\d)


  } else if (!checkBirthRegExp) {
    birthCheck.innerHTML = "Veuillez indiquer une date de naissance valide";
    birthCheck.style.fontSize = "10px";
    birthCheck.style.color = "#FF4E60";
    return false;
  } else {
    birthCheck.innerHTML = "";
    return true;
  }
}
const birthRegExp =
    /(0[1-9]|1\d|2\d|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9]]|20[0-3])/;
  let checkBirthRegExp = birthRegExp.test(birthElem.value);

  let formValid = false;
let l = 0;
function validateRadio(e) {
  e.preventDefault();
  while (!formValid && l < cityLocation.length)
    if (cityLocation.checked) {
      formValid = true;
    } else !formValid;
  cityCheck.innerHTML = "Veuillez indiquer une ville";
  cityCheck.style.fontSize = "10px";
  cityCheck.style.color = "#FF4E60";
  return formValid;
  l++;
}
*

  

     modalbg.style.display = "none";
    modalbg.style.aria = "hidden";
    modalVal.style.display = "flex"

         modalVal.style.display = "none";
     modalVal.style.aria = "hidden";

     /*function validate
     
submitBtn.addEventListener("click", validate);
function validate(e) {
  e.preventDefault();
  if (
    first == false ||
    last == false ||
    mail == false ||
    birthdate == false ||
    quantity == false
  ) {
    alert("STOP");
    return false;
  } else {
    closeModal();
    launchValidModal();
    return true;
  }
}*/


submitBtn.forEach((btn) => btn.addEventListener("click", validation));
function validation(e) {
  e.preventDefault();
  let checkFirst = first.value;
  if (checkFirst == false && !last && !mail && !birthdate && !quantity) {
    alert("STOP");
    return false;
  } else {
    modalbg.style.aria = "hidden";
    modalbg.style.display = "none";
    modalVal.style.display = "block";
    return true;
  }
}
/*
.fnFormData::after,
.lastFormData::after,
.mailFormData::after,
.birthFormData::after,
.qtityFormData::after,
.cityFormData::after,
.CheckFormData

.fnFormData::after,
.lastFormData::after,
.mailFormData::after,
.birthFormData::after,
.qtityFormData::after,
.cityFormData::after,
.CheckFormData::after {
  content: attr(data-error-visible= "true");
  opacity: 1;
}

.[data-error]::after {
  content: attr(data-error);
  font-size: 0.4em;
  color: #e54858;
  display: block;
  margin-top: 7px;
  margin-bottom: 7px;
  text-align: right;
  line-height: 0.3;
  opacity: 0;
  transition: 0.3s;
}
*/