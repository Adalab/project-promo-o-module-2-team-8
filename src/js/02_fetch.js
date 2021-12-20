/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */

'use strict';

// 1º- Bring create button element from HTML
const btnCreateCard= document.querySelector('.js-createBtn');
const linkCreateCard= document.querySelector('.js-createCardLink');
// 3º- Create function: when create button is clicked:
function handleCreateCard(ev){
    ev.preventDefault(); // To prevent the submit event
    // take object formObjet and send to server
    fetch('https://awesome-profile-cards.herokuapp.com/card',
    {
      method: 'POST',
      body: JSON.stringify(formObject),
      headers: {'Content-Type': 'application/json'},
    })
    .then((response) => response.json())
    .then((formObject) => {
      console.log(formObject);
      if(formObject.success){
      linkCreateCard.innerHTML= formObject.cardURL;
      linkCreateCard.href= formObject.cardURL;
      } else{
          console.log('Error');
      }
    });
}

// 2º- Create listener
btnCreateCard.addEventListener('click', handleCreateCard);