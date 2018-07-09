const Leaflet = require('leaflet');
const PubSub = require('../helpers/pub_sub.js');
const LeafletSidebar = require('leaflet-sidebar');

const MapView = function() {
  this.myMap = Leaflet.map('map').setView([10, 190], 3);


  console.log(LeafletSidebar);
  console.log(Leaflet);
}

MapView.prototype.renderMap = function() {

  Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

    // 1 is max zoom out, 10 is max zoom in. We have locked zoom level to between 6 + 3.

    maxZoom: 9,
    minZoom: 3,
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

  marker.on('click', function(evt) {
    const ourMap = evt.target._map
    const latLong = evt.target._latlng
    ourMap.setView(latLong, 10);

    // this renders detailed popup
    const popup = Leaflet.popup()
      .setLatLng(latLong)
      .setContent(`${cryptid.name}`)
      .openOn(ourMap);
    });


  marker.on('mouseover', function(evt){
    marker.bindPopup(`${cryptid.name}`).openPopup();
  })

  marker.addTo(this.myMap)
};


MapView.prototype.renderSidebar = function() {
  const ourSidebar = Leaflet.control.sidebar('sidebar', {
    position: 'left'
  });
  this.myMap.addControl(ourSidebar);
  ourSidebar.show();
};

MapView.prototype.renderDetailedPopup = function (cryptid, ourMap) {
  console.log(ourMap);
  const popup = Leaflet.popup()
    .setLatLng(cryptid._latlng)
    .setContent(`${cryptid.name}`)
    .openOn(ourMap);
};


module.exports = MapView;
