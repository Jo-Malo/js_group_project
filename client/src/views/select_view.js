const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(continentSelectContainer, countrySelectContainer) {
  this.continentSelectContainer = continentSelectContainer;
  this.countrySelectContainer = countrySelectContainer;
}

SelectView.prototype.bindEvents = function () {

  PubSub.subscribe('Cryptid:continents-ready', (evt) => {
    console.log('continent payload', evt.detail);
    this.populateContinentSelect(evt.detail);
  });

  this.continentSelectContainer.addEventListener('change', (evt) => {
    const selectedContinent = evt.target.value;
    console.log(selectedContinent);
    PubSub.publish('SelectView:select-change', selectedContinent);
  })
};

SelectView.prototype.populateContinentSelect = function (continents) {
  continents.forEach((continent, index) => {
    if (continent !== null) {
      const option = this.createContinentOption(continent, index);
      this.continentSelectContainer.appendChild(option);
    }
  })
};

SelectView.prototype.createContinentOption = function (continent, index) {
  const option = document.createElement('option');
  option.textContent = continent;
  option.value = index;
  return option;
};

module.exports = SelectView;
