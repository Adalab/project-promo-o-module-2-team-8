/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */

'use strict';
const createBtn = document.querySelector('.js-createBtn');
const collapsableShareSection = document.querySelector('.js-shareSection');
// 1º- Bring create button element from HTML
const btnCreateCard = document.querySelector('.js-createBtn');
const linkCreateCard = document.querySelector('.js-createCardLink');
let messageCard = document.querySelector('.js-hiddenMessage');
const twitterLink = document.querySelector('.js-twitterLink');

// 3º- Create function: when create button is clicked:
function handleCreateCard(ev) {
  ev.preventDefault(); // To prevent the submit event
  // take object formObjet and send to server
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(formObject),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((formObject) => {
      function writeMessage(message) {
        messageCard.innerHTML = message;
    }
    // cardPhoto.style.backgroundImage = 'url("./assets/images/fondo.jpg")'
      if(formObject.success) {
        createBtn.classList.remove('createBtnColor1');
        createBtn.classList.add('createBtnColor2');
        collapsableShareSection.classList.remove('hidden');
        linkCreateCard.innerHTML= formObject.cardURL;
        linkCreateCard.href= formObject.cardURL;
        messageCard.classList.add("js-message");
        messageCard.classList.remove("js-hiddenMessage");
        const textCard= "¡Mira la tarjeta que me ha creado Adufflabeers! 😱😱"
        writeMessage('¡Mira la tarjeta que me ha creado Adufflabeers! <br>   😱😱');
      
        twitterLink.href = `https://twitter.com/intent/tweet?text=${textCard}&url=${formObject.cardURL}`;
      } else {
        // catch(error)=> console.log(`Se ha producido un error: ${error}`);
        writeMessage('¡Debes rellenar todos los campos! <br> :(');
        messageCard.classList.add('js-message');
        messageCard.classList.remove('js-hiddenMessage');
        // window.alert('comprueba que has rellenado los campos requeridos');
      }
    });
}

// 2º- Create listener
btnCreateCard.addEventListener('click', handleCreateCard);
