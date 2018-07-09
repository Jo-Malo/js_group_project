const Cryptid = require('./models/cryptid.js');
const CryptidView = require('./views/cryptid_view.js');
const MapView = require('./views/map_view.js');
const DirectoryView = require('./views/directory_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const url = 'http://localhost:3000/api/cryptids';
  const cryptid = new Cryptid(url);
  cryptid.getData();
  cryptid.bindEvents();
  cryptid.showCryptidOnSidebar();

  const mapView = new MapView();
  mapView.renderMap();
  mapView.renderSidebar();
  mapView.bindEvents();
  mapView.zoomIn();

  const container = document.querySelector('#sidebar-list')
  const directoryView = new DirectoryView(container);
  directoryView.bindEvents();


  const cryptidView = new CryptidView(container);
  cryptidView.bindEvents();
});
