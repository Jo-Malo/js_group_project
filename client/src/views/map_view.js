const Leaflet = require('leaflet');
const PubSub = require('../helpers/pub_sub.js');

const MapView = function() {
  this.myMap = Leaflet.map('map').setView([1, 1], 2);

}

MapView.prototype.renderMap = function() {



  Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1Ijoiam9tYWxvIiwiYSI6ImNqajlxenFjdjMzZGYza3BndDF0cHJwNG8ifQ.GxdRYwwkA1aQ4I4R1sOt3Q'
  }).addTo(this.myMap);
};

MapView.prototype.bindEvents = function() {
  PubSub.subscribe('Cryptid:data-loaded', (evt) => {
    const cryptids = evt.detail;
    cryptids.forEach((cryptid) => {
      this.renderPin(cryptid);
    })
  });
}
MapView.prototype.renderPin = function(cryptid) {
  const marker = Leaflet.marker(cryptid.coords);
  marker.bindPopup(`${cryptid.name}`).openPopup();
  marker.addTo(this.myMap)
};
 module.exports = MapView;
