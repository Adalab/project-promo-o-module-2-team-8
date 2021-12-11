'use strict';
const collapsableTitle = document.querySelector('.js-collapsable_title');

function handlerClickHeader() {
  const collapsableContent = document.querySelector('.js-collapsable_content');
  collapsableContent.classList.toggle('collapsed');
}

collapsableTitle.addEventListener('click', handlerClickHeader);
