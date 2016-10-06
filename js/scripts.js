'use strict';

var contactName = document.querySelector('.contact-form__input--name');
var contactMail = document.querySelector('.contact-form__input--mail');
var contactBTN = document.querySelector('.contact-form__button');
contactBTN.disabled = true;

function isValid() {
  contactBTN.disabled = (contactName.value.length && contactMail.value.length) <= 0;
}

contactName.addEventListener('input', isValid);
contactMail.addEventListener('input', isValid);
