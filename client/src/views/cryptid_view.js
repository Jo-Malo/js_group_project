const PubSub = require('../helpers/pub_sub');
const Leaflet = require('leaflet');
const CryptidView = function(cryptidContainer) {
  this.cryptidContainer = cryptidContainer;
};

CryptidView.prototype.bindEvents = function() {
  PubSub.subscribe('Cryptid:data-selected', (evt) => {
    const cryptidData = evt.detail[0];
    this.cryptidContainer.innerHTML = "";
    this.createNewElement('h2', cryptidData.name);
    this.createNewElement('p', cryptidData.continent,'Continent:');
    this.createNewElement('p', cryptidData.country,'Country:');
    this.createNewElement('p', cryptidData.habitat,'Habitat:');
    this.createNewElement('p', cryptidData.type,'Type:');
    this.createNewElement('p', cryptidData.desc, 'Info:');

  })
};

CryptidView.prototype.createNewElement = function(type, content, title="") {
  const newElement = document.createElement(type);
  newElement.textContent = title + ' ' + content;
  this.cryptidContainer.appendChild(newElement);
};

module.exports = CryptidView;
