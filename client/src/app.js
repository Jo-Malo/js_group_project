const Map = require('./models/map.js');
document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const url = 'http://localhost:3000/api/cryptids';
  const map = new Map(url);
  map.getData();


});
