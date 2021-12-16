'use strict';
// VARIABLES
// Collapsables variables
const collapsableTitle = document.querySelector('.js-arrowCollapsable');
const collapsableTitle2 = document.querySelector('.js-arrowCollapsable2');
const collapsableTitle3 = document.querySelector('.js-arrowCollapsable3');

const shareBtn = document.querySelector('.js-shareBtn');
const collapsableShareSection = document.querySelector('.js-shareSection');

//botón reset
const resetBtn = document.querySelector('.js-reset');

// Input variables
const inputName = document.querySelector('.js-inputName');
const inputJob = document.querySelector('.js-inputJob');
const inputEmail = document.querySelector('.js-inputEmail');
const inputPhone = document.querySelector('.js-inputPhone');
const inputLinkedin = document.querySelector('.js-inputLinkedin');
const inputGitHub = document.querySelector('.js-inputGitHub');

// Preview variables
const cardName = document.querySelector('.js-cardName');
const cardJob = document.querySelector('.js-cardJob');
const cardEmail = document.querySelector('.js-cardEmail');
const cardPhone = document.querySelector('.js-cardPhone');
const cardLinkedin = document.querySelector('.js-cardLinkedin');
const cardGitHub = document.querySelector('.js-cardGitHub');

// Palettes
const palettesInput= document.querySelectorAll('.js-palette');

const rectangle= document.querySelector('.js-rectangle');


// FUNCTIONS
// Collapsed containers function
function handlerClickHeader(event) {
  event.currentTarget.parentNode.parentNode.classList.toggle('collapsed');
  if (event.currentTarget) {
    event.currentTarget.classList.toggle('rotateArrow');
  }
}

// Collapsed btn
function handlerClickShareBtn() {
  collapsableShareSection.classList.remove('hidden');
  shareBtn.classList.remove('shareBtnColor1');
  shareBtn.classList.add('shareBtnColor2');
}



// Function palette
let arrPalette= palettesInput.length;
for(const eachPalette of arrPalette){
  eachPalette.addEventListener('click', handleClickPalette);
  
}



// Form objet

let formObject = {
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  gitHub: '',
};

function nameInputPreview() {
  formObject.name = inputName.value;
  const namePreview = formObject.name;
  if (namePreview === '') {
    cardName.innerHTML = 'Nombre Apellido';
  } else {
    cardName.innerHTML = namePreview;
  }
}

function jobInputPreview() {
  formObject.job = inputJob.value;
  const jobPreview = formObject.job;
  if (jobPreview === '') {
    cardJob.innerHTML = 'Front developer';
  } else {
    cardJob.innerHTML = jobPreview;
  }
}
function emailInputPreview() {
  formObject.email = inputEmail.value;
  const emailPreview = formObject.email;
  if (emailPreview === '') {
    cardEmail.href = ``;
  } else {
    cardEmail.href = `mailto:${emailPreview}`;
  }
}

function phoneInputPreview() {
  formObject.phone = parseInt(inputPhone.value);
  const phonePreview = formObject.phone;
  if (phonePreview === '') {
    cardPhone.href = ``;
  } else {
    cardPhone.href = `tel: ${phonePreview}`;
  }
}

function linkedinInputPreview() {
  formObject.linkedin = inputLinkedin.value;
  const linkedinPreview = formObject.linkedin;
  if (linkedinPreview === '') {
    cardLinkedin.href = ``;
  } else {
    cardLinkedin.href = `https://www.${linkedinPreview}`;
  }
}

function gitHubInputPreview() {
  formObject.gitHub = inputGitHub.value;
  const gitHubPreview = formObject.gitHub;
  if (gitHubPreview === '') {
    cardGitHub.href = ``;
  } else {
    cardGitHub.href = `https://github.com/${gitHubPreview}`;
  }
}

function handlerInputPreview() {
  nameInputPreview();
  jobInputPreview();
  emailInputPreview();
  phoneInputPreview();
  linkedinInputPreview();
  gitHubInputPreview();
}

//función botón reset

function handlerClickResetBtn() {
  formObject.name = '';
  inputName.value = formObject.name;

  formObject.job = '';
  inputJob.value = formObject.job;

  formObject.phone = '';
  inputPhone.value = formObject.phone;

  formObject.email = '';
  inputEmail.value = formObject.email;

  formObject.linkedin = '';
  inputLinkedin.value = formObject.linkedin;

  formObject.gitHub = '';
  inputGitHub.value = formObject.gitHub;
  handlerInputPreview();

  //coger valores
}

// LISTENERS:
// Collapsed function Listeners
collapsableTitle.addEventListener('click', handlerClickHeader);
collapsableTitle2.addEventListener('click', handlerClickHeader);
collapsableTitle3.addEventListener('click', handlerClickHeader);

shareBtn.addEventListener('click', handlerClickShareBtn);

//Reset Btn Listener

resetBtn.addEventListener('click', handlerClickResetBtn);

// Fill function Listeners
inputName.addEventListener('keyup', handlerInputPreview);
inputJob.addEventListener('keyup', handlerInputPreview);
inputEmail.addEventListener('keyup', handlerInputPreview);
inputPhone.addEventListener('keyup', handlerInputPreview);
inputLinkedin.addEventListener('keyup', handlerInputPreview);
inputGitHub.addEventListener('keyup', handlerInputPreview);

// function handlerUpdatePreview(){
//   cardName.innerHTML= formObject.name.value;
// }
