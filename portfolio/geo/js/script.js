'use strict';

var btnSendCoords = document.querySelector('.send-coords');

btnSendCoords.addEventListener('click', function(evt) {
  evt.preventDefault();
  navigator.geolocation.getCurrentPosition(function(geo) {
    console.log(geo);
  });
});
