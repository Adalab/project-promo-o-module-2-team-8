'use strict';
// VARIABLES
// Collapsables variables
const collapsableTitle = document.querySelector('.js-arrowCollapsable');
const collapsableTitle2 = document.querySelector('.js-arrowCollapsable2');
const collapsableTitle3 = document.querySelector('.js-arrowCollapsable3');
// Input variables
const inputName = document.querySelector('.js-inputName');
const inputJob = document.querySelector('.js-inputJob');
const inputEmail = document.querySelector('.js-inputEmail');
// const inputPhone = document.querySelector('.js-inputPhone');
// const inputLinkedin = document.querySelector('.js-inputLinkedin');
// const inputGitHub = document.querySelector('.js-inputGitHub');
// Preview variables
const cardName = document.querySelector('.js-cardName');
const cardJob = document.querySelector('.js-cardJob');
const cardEmail = document.querySelector('.js-cardEmail');
// const cardPhone = document.querySelector('.js-cardPhone');
// const cardLinkedin = document.querySelector('.js-cardLinkedin');
// const cardGitHub = document.querySelector('.js-cardGitHub');

// FUNCTIONS
// Collapsed containers function
function handlerClickHeader(event) {
  event.currentTarget.parentNode.parentNode.classList.toggle('collapsed');
  if(event.currentTarget){
    event.currentTarget.classList.toggle('rotateArrow');
  }
}

// Form objet

const formObject= {
  nameSurname: '',
  job: '',
  phone:'',
  email:'',
  linkedin:'',
  gitHub:''
};

function handlerNameInput(){
  formObject.nameSurname= inputName.value;
  const namePreview= formObject.nameSurname;
  if(namePreview===''){
    cardName.innerHTML='Nombre Apellido';
  }else{
    cardName.innerHTML= namePreview;
  }
}

function handlerJobInput(){
  formObject.job= inputJob.value;
  const jobPreview= formObject.job;
  if(jobPreview===''){
    cardJob.innerHTML='Front developer';
  }else{
    cardJob.innerHTML= jobPreview;
  }
}
function handlerEmailInput(){
  formObject.email= inputEmail.value;
  const emailPreview= formObject.job;
  if(emailPreview===''){
    cardEmail.href= ``;
  }else{
    cardEmail.href= `mailto:${emailPreview}`;
  }
}

// function handlerUpdatePreview(){
//   cardName.innerHTML= formObject.nameSurname.value;
// }


// LISTENERS:
// Collapsed function Listeners
collapsableTitle.addEventListener('click', handlerClickHeader);
collapsableTitle2.addEventListener('click', handlerClickHeader);
collapsableTitle3.addEventListener('click', handlerClickHeader);

// Fill function Listeners
inputName.addEventListener('keyup', handlerNameInput);
inputJob.addEventListener('keyup', handlerJobInput);
inputEmail.addEventListener('keyup', handlerEmailInput);