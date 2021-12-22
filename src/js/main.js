'use strict';
// VARIABLES
// Collapsables variables
const collapsableTitle = document.querySelector('.js-arrowCollapsable');
const collapsableTitle2 = document.querySelector('.js-arrowCollapsable2');
const collapsableTitle3 = document.querySelector('.js-arrowCollapsable3');

// const createBtn= document.querySelector('.js-createBtn');
// const collapsableShareSection= document.querySelector('.js-shareSection');

//botón reset
const resetBtn = document.querySelector('.js-reset');

// Input variables
// const inputPalette = document.querySelector('.js-inputGitHub');
const inputName = document.querySelector('.js-inputName');
const inputJob = document.querySelector('.js-inputJob');
const inputEmail = document.querySelector('.js-inputEmail');
const inputPhone = document.querySelector('.js-inputPhone');
const inputLinkedin = document.querySelector('.js-inputLinkedin');
const inputGitHub = document.querySelector('.js-inputGitHub');

//const allInputs= document.querySelectorAll('.js-allInputs');

// Preview variables
const cardName = document.querySelector('.js-cardName');
const cardJob = document.querySelector('.js-cardJob');
const cardEmail = document.querySelector('.js-cardEmail');
const cardPhone = document.querySelector('.js-cardPhone');
const cardLinkedin = document.querySelector('.js-cardLinkedin');
const cardGitHub = document.querySelector('.js-cardGitHub');
const cardPhoto= document.querySelector('.js__profile-image');
const cardPreviewPhoto= document.querySelector('.js__profile-preview');

// Palettes
const choiceColours = document.querySelectorAll('.js-choiceColours');

const palettesRadio = document.querySelectorAll('.js-palette');


// FUNCTIONS
// Collapsed containers function
function handlerClickHeader(event) {
  if (event.currentTarget===collapsableTitle){
    event.currentTarget.parentNode.parentNode.classList.toggle('collapsed');
    collapsableTitle2.parentNode.parentNode.classList.add('collapsed');
    collapsableTitle3.parentNode.parentNode.classList.add('collapsed');
  }else if(event.currentTarget===collapsableTitle2){
    event.currentTarget.parentNode.parentNode.classList.toggle('collapsed');
    collapsableTitle.parentNode.parentNode.classList.add('collapsed');
    collapsableTitle3.parentNode.parentNode.classList.add('collapsed');
  }else if(event.currentTarget===collapsableTitle3){
    event.currentTarget.parentNode.parentNode.classList.toggle('collapsed');
    collapsableTitle.parentNode.parentNode.classList.add('collapsed');
    collapsableTitle2.parentNode.parentNode.classList.add('collapsed');
  }
  if(event.currentTarget){
    event.currentTarget.classList.toggle('rotateArrow');
  }
}

// Form objet

let formObject= {
  palette: 1,
  name: '',
  job: '',
  phone:'',
  email:'',
  linkedin:'',
  github:'',
  photo:'url("./assets/images/fondo.jpg")'
};


// Function palette

function paintCardPreview(event){
  const paletteChecked= parseInt(event.currentTarget.id);
  if(paletteChecked=== 1){
    paintDefault();
    formObject.palette= 1;
  }else if(paletteChecked===2){
    paintChoice2();
    formObject.palette= 2;
  }else{
    paintChoice3();
    formObject.palette= 3;
  }
}



function paintChoice2(){
  for(const eachPalette of choiceColours){
    eachPalette.classList.remove('colorDefault');
    eachPalette.classList.remove('colorChoice3');
    eachPalette.classList.add('colorChoice2');
  }
}

function paintChoice3(){
  for(const eachPalette of choiceColours){
    eachPalette.classList.remove('colorDefault');
    eachPalette.classList.remove('colorChoice2');
    eachPalette.classList.add('colorChoice3');
  }
}

function paintDefault(){
  for(const eachPalette of choiceColours){
    eachPalette.classList.remove('colorChoice2');
    eachPalette.classList.remove('colorChoice3');
    eachPalette.classList.add('colorDefault');
  }
}

for (const eachRadio of palettesRadio) {
  eachRadio.addEventListener('click', paintCardPreview);
}


function nameInputPreview(){
  formObject.name= inputName.value;
  const namePreview= formObject.name;
  if(namePreview===''){
    cardName.innerHTML='Nombre Apellido';
  }else{
    cardName.innerHTML= namePreview;
  }
}

function jobInputPreview(){
  formObject.job= inputJob.value;
  const jobPreview= formObject.job;
  if(jobPreview===''){
    cardJob.innerHTML='Front developer';
  }else{
    cardJob.innerHTML= jobPreview;
  }
}
function emailInputPreview(){
  formObject.email= inputEmail.value;
  const emailPreview= formObject.email;
  if(emailPreview===''){
    cardEmail.href= ``;
  }else{
    cardEmail.href= `mailto:${emailPreview}`;
  }
}

function phoneInputPreview(){
  formObject.phone= inputPhone.value;
  const phonePreview= formObject.phone;
  if(phonePreview===''){
    cardPhone.href= ``;
  }else{
    cardPhone.href= `${phonePreview}`;
  }
}

function linkedinInputPreview(){
  formObject.linkedin= inputLinkedin.value;
  const linkedinPreview= formObject.linkedin;
  if(linkedinPreview===''){
    cardLinkedin.href= ``;
  }else{
    cardLinkedin.href= `${linkedinPreview}`;
  }
}

function gitHubInputPreview(){
  formObject.github= inputGitHub.value;
  const gitHubPreview= formObject.github;
  if(gitHubPreview===''){
    cardGitHub.href= ``;
  }else{
    cardGitHub.href= `${gitHubPreview}`;
  }
}

function handlerInputPreview(){
  nameInputPreview();
  jobInputPreview();
  emailInputPreview();
  phoneInputPreview();
  linkedinInputPreview();
  gitHubInputPreview();

  //save input values
  localStorage.setItem('formObject', JSON.stringify(formObject));
  loadSavedUserData();
}


//función botón reset

function handlerClickResetBtn() {
  formObject.palette= paintDefault();
  palettesRadio[0].checked= true;

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

  formObject.github = '';
  inputGitHub.value = formObject.github;

  cardPhoto.style.backgroundImage= 'url("./assets/images/fondo.jpg")';
  cardPreviewPhoto.style.backgroundImage = '';

  handlerInputPreview();

  //coger valores
}

// Recover saved input value (localStorage):
function loadSavedUserData(){
  const savedUserData= JSON.parse(localStorage.getItem('formObject'));
  if(savedUserData !== null){
    formObject= savedUserData;
    handlerInputPreview();
  }
}


// LISTENERS:
// Collapsed function Listeners
collapsableTitle.addEventListener('click', handlerClickHeader);
collapsableTitle2.addEventListener('click', handlerClickHeader);
collapsableTitle3.addEventListener('click', handlerClickHeader);

// createBtn.addEventListener('click',palettePreview);

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
//   cardName.innerHTML= formObject.nameSurname.value;
// }