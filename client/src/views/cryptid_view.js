const PubSub = require('../helpers/pub_sub.js');
const Leaflet = require('leaflet');

const CryptidView = function(cryptidContainer) {
  this.cryptidContainer = cryptidContainer;
};

CryptidView.prototype.bindEvents = function () {
  PubSub.subscribe('Cryptid:data-selected', (evt) => {
    const cryptidData = evt.detail[0];
    console.log(cryptidData);
    this.cryptidContainer.innerHTML = "";
    const newNameHeader = this.createNewElement('h2', cryptidData.name);
    this.cryptidContainer.appendChild(newNameHeader);
    const newCountry = this.createNewElement('p', cryptidData.country,'Country:');
    this.cryptidContainer.appendChild(newCountry);
    const newHabitat = this.createNewElement('p', cryptidData.habitat,'Habitat:');
    this.cryptidContainer.appendChild(newHabitat);
    const newDescription = this.createNewElement('p', cryptidData.desc, 'Info:');
    this.cryptidContainer.appendChild(newDescription);
  })
};

CryptidView.prototype.createNewElement = function(type, content, title="") {
  const newElement = document.createElement(type);
  newElement.textContent = title + ' ' + content;
  console.log(content);
  return newElement;
};

module.exports = CryptidView;
