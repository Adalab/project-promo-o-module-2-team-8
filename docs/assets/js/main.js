"use strict";const collapsableTitle=document.querySelector(".js-arrowCollapsable"),collapsableTitle2=document.querySelector(".js-arrowCollapsable2"),collapsableTitle3=document.querySelector(".js-arrowCollapsable3"),shareBtn=document.querySelector(".js-shareBtn"),collapsableShareSection=document.querySelector(".js-shareSection"),resetBtn=document.querySelector(".js-reset"),inputName=document.querySelector(".js-inputName"),inputJob=document.querySelector(".js-inputJob"),inputEmail=document.querySelector(".js-inputEmail"),inputPhone=document.querySelector(".js-inputPhone"),inputLinkedin=document.querySelector(".js-inputLinkedin"),inputGitHub=document.querySelector(".js-inputGitHub"),cardName=document.querySelector(".js-cardName"),cardJob=document.querySelector(".js-cardJob"),cardEmail=document.querySelector(".js-cardEmail"),cardPhone=document.querySelector(".js-cardPhone"),cardLinkedin=document.querySelector(".js-cardLinkedin"),cardGitHub=document.querySelector(".js-cardGitHub"),choiceColours=document.querySelectorAll(".js-choiceColours"),palettesRadio=document.querySelectorAll(".js-palette");function handlerClickHeader(e){e.currentTarget.parentNode.parentNode.classList.toggle("collapsed"),e.currentTarget&&e.currentTarget.classList.toggle("rotateArrow")}function handlerClickShareBtn(e){e&&(collapsableShareSection.classList.remove("hidden"),shareBtn.classList.remove("shareBtnColor1"),shareBtn.classList.add("shareBtnColor2"))}function paintCardPreview(e){const t=parseInt(e.currentTarget.id);1===t?paintDefault():2===t?paintChoice2():paintChoice3()}function paintChoice2(){for(const e of choiceColours)e.classList.remove("colorDefault"),e.classList.remove("colorChoice3"),e.classList.add("colorChoice2")}function paintChoice3(){for(const e of choiceColours)e.classList.remove("colorDefault"),e.classList.remove("colorChoice2"),e.classList.add("colorChoice3")}function paintDefault(){for(const e of choiceColours)e.classList.remove("colorChoice2"),e.classList.remove("colorChoice3"),e.classList.add("colorDefault")}for(const e of palettesRadio)e.addEventListener("click",paintCardPreview);let formObject={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",gitHub:""};function nameInputPreview(){formObject.name=inputName.value;const e=formObject.name;cardName.innerHTML=""===e?"Nombre Apellido":e}function jobInputPreview(){formObject.job=inputJob.value;const e=formObject.job;cardJob.innerHTML=""===e?"Front developer":e}function emailInputPreview(){formObject.email=inputEmail.value;const e=formObject.email;cardEmail.href=""===e?"":"mailto:"+e}function phoneInputPreview(){formObject.phone=inputPhone.value;const e=formObject.phone;cardPhone.href=""===e?"":""+e}function linkedinInputPreview(){formObject.linkedin=inputLinkedin.value;const e=formObject.linkedin;cardLinkedin.href=""===e?"":""+e}function gitHubInputPreview(){formObject.gitHub=inputGitHub.value;const e=formObject.gitHub;cardGitHub.href=""===e?"":""+e}function handlerInputPreview(){nameInputPreview(),jobInputPreview(),emailInputPreview(),phoneInputPreview(),linkedinInputPreview(),gitHubInputPreview()}function handlerClickResetBtn(){formObject.name="",inputName.value=formObject.name,formObject.job="",inputJob.value=formObject.job,formObject.phone="",inputPhone.value=formObject.phone,formObject.email="",inputEmail.value=formObject.email,formObject.linkedin="",inputLinkedin.value=formObject.linkedin,formObject.gitHub="",inputGitHub.value=formObject.gitHub,handlerInputPreview()}collapsableTitle.addEventListener("click",handlerClickHeader),collapsableTitle2.addEventListener("click",handlerClickHeader),collapsableTitle3.addEventListener("click",handlerClickHeader),shareBtn.addEventListener("click",handlerClickShareBtn),resetBtn.addEventListener("click",handlerClickResetBtn),inputName.addEventListener("keyup",handlerInputPreview),inputJob.addEventListener("keyup",handlerInputPreview),inputEmail.addEventListener("keyup",handlerInputPreview),inputPhone.addEventListener("keyup",handlerInputPreview),inputLinkedin.addEventListener("keyup",handlerInputPreview),inputGitHub.addEventListener("keyup",handlerInputPreview);