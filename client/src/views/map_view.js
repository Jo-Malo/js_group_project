const Leaflet = require('leaflet');
const PubSub = require('../helpers/pub_sub.js');
const LeafletSidebar = require('leaflet-sidebar');

const MapView = function() {
  this.cryptids = null;
  this.myMap = Leaflet.map('map',{
    zoomControl:false
  }).setView([22, 200], 2);
  // 22 ++ set the map down, 170 ++ set map to the left
}

MapView.prototype.renderMap = function() {

  Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

    // 1 is max zoom out, 10 is max zoom in. We have locked zoom level to between 6 + 3.

    maxZoom: 9,
    minZoom: 2,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1Ijoiam9tYWxvIiwiYSI6ImNqajlxenFjdjMzZGYza3BndDF0cHJwNG8ifQ.GxdRYwwkA1aQ4I4R1sOt3Q'
  }).addTo(this.myMap);

  Leaflet.control.zoom({
       position:'topright'
  }).addTo(this.myMap);

  // set the map it won't move,
  // this.myMap.on('dragend', function onDragEnd(){
  //   var width = map.getBounds().getEast() - map.getBounds().getWest();
  //   var height = map.getBounds().getNorth() - map.getBounds().getSouth();
  //
  //   alert (
  //       'center:' + map.getCenter() +'\n'+
  //       'width:' + width +'\n'+
  //       'height:' + height +'\n'+
  //       'size in pixels:' + map.getSize()
  //   )});
};

MapView.prototype.bindEvents = function() {
  PubSub.subscribe('Cryptid:data-loaded', (evt) => {
    this.cryptids = evt.detail;
    this.cryptids.forEach((cryptid) => {
      this.renderPin(cryptid);
    })
  });
}

MapView.prototype.zoomIn = function(){

  PubSub.subscribe('Cryptid:data-selected',(evt) =>{
    const cryptid = evt.detail;
    const latlong = cryptid[0].coords;
    const marker = Leaflet.marker(latlong);

    this.myMap.setView(latlong,10);
    console.log(cryptid);

    marker.unbindPopup();
    console.log(marker);

    const locationIcon = Leaflet.icon({
      iconUrl:'location_marker_icon.png',
      iconSize: [24,36],
      iconAnchor: [12,36]
    });
    // const popup = marker.bindPopup("<img src='" + `${cryptid.imageSrc}` + "'" + " class='popupImage' " + "/>");
    // console.log('I am here');
    // console.log(popup);
    // popup.openPopup();
  });

};

MapView.prototype.renderPin = function(cryptid) {
  const marker = Leaflet.marker(cryptid.coords);
  marker.on('click', (evt) => {
    const marker = evt.target;
    const ourMap = evt.target._map
    const latLong = evt.target._latlng

    ourMap.setView(latLong, 10);
    // this allows new popup with image to be created after closing previous popup
    marker.unbindPopup();
    const popup = marker.bindPopup("<img src='" + `${cryptid.imageSrc}` + "'" + " class='popupImage' " + "/>");
    console.log(popup);
    popup.openPopup();

    PubSub.publish('MapView: Pin-Selected', cryptid)
  });


  marker.on('mouseover', function(evt){
    marker.unbindPopup();
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


MapView.prototype.zoomToOriginMap = function () {
  this.myMap.on('click', ()=>{
    this.myMap.setView([22, 200], 2);
    console.log(this.cryptids);
    PubSub.publish('MapView:reloadData', this.cryptids);
  });
};


module.exports = MapView;
