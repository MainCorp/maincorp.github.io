'use strict';

var btnSendCoords = document.querySelector('.send-coords');
var latitude = document.querySelector('.info__latitude');
var longitude = document.querySelector('.info__longitude');

btnSendCoords.addEventListener('click', function(evt) {
  evt.preventDefault();
  navigator.geolocation.getCurrentPosition(function(pos) {
    var geo = pos.coords;
    latitude.innerHTML = geo.latitude;
    longitude.innerHTML = geo.longitude;
  });

});
