const PubSub = require('../helpers/pub_sub.js');
const Leaflet = require('leaflet');

const CryptidView = function(cryptidContainer) {
  this.cryptidContainer = cryptidContainer;
  console.log(this.cryptidContainer);
};

CryptidView.prototype.bindEvents = function () {
  PubSub.subscribe('Cryptid:data-selected', (evt) => {
    const cryptidData = evt.detail[0];
    console.log(cryptidData);
    const newNameHeader = this.createNewElement('h2', cryptidData.name);
    this.cryptidContainer.appendChild(newNameHeader);
    const newDescription = this.createNewElement('p', cryptidData.desc);
    this.cryptidContainer.appendChild(newDescription);
    const newImage = this.createNewElement('img', cryptidData.imageSrc);
    this.cryptidContainer.appendChild(newImage);
  })
};

CryptidView.prototype.createNewElement = function(type, content) {
  const newElement = document.createElement(type);
  newElement.textContent = content;
  console.log(content);
  return newElement;
};

module.exports = CryptidView;
