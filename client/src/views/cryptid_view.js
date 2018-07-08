const PubSub = require('../helpers/pub_sub.js');
const Leaflet = require('leaflet');

const CryptidView = function() {

};

CryptidView.prototype.bindEvents = function () {
  PubSub.subscribe('Cryptid:data-selected', (evt) => {
    console.log(evt.detail);
  })
};

module.exports = CryptidView;
