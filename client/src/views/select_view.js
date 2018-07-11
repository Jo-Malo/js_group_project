const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(continentSelectContainer, countrySelectContainer, habitatSelectContainer, typeSelectContainer) {
  this.continentSelectContainer = continentSelectContainer;
  this.countrySelectContainer = countrySelectContainer;
  this.habitatSelectContainer = habitatSelectContainer;
  this.typeSelectContainer = typeSelectContainer;
}

SelectView.prototype.bindEvents = function () {

  PubSub.subscribe('Cryptid:continents-ready', (evt) => {
    this.populateContinentSelect(evt.detail);
  });

  this.continentSelectContainer.addEventListener('change', (evt) => {
    const selectedContinent = evt.target.value;
    PubSub.publish('SelectView:continent-select-change', selectedContinent);
  })


  PubSub.subscribe('Cryptid:countries-ready', (evt) => {
    this.populateCountrySelect(evt.detail);
  });

  this.countrySelectContainer.addEventListener('change', (evt) => {
    const selectedCountry = evt.target.value;
    PubSub.publish('SelectView:country-select-change', selectedCountry);
  })


  PubSub.subscribe('Cryptid:habitats-ready', (evt) => {
    this.populateHabitatSelect(evt.detail);
  });

  this.habitatSelectContainer.addEventListener('change', (evt) => {
    const selectedHabitat = evt.target.value;
    PubSub.publish('SelectView:habitat-select-change', selectedHabitat);
  })


  PubSub.subscribe('Cryptid:types-ready', (evt) => {
    console.log('populating');
    this.populateTypeSelect(evt.detail);
  });

  this.typeSelectContainer.addEventListener('change', (evt) => {
    const selectedType = evt.target.value;
    PubSub.publish('SelectView:type-select-change', selectedType);
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


SelectView.prototype.populateCountrySelect = function (countries) {
  countries.forEach((country, index) => {
    if (country !== null) {
      const option = this.createCountryOption(country, index);
      this.countrySelectContainer.appendChild(option);
    }
  })
};

SelectView.prototype.createCountryOption = function (country, index) {
  const option = document.createElement('option');
  option.textContent = country;
  option.value = index;
  return option;
};


SelectView.prototype.populateTypeSelect = function (types) {
  types.forEach((type, index) => {
    if (type !== null) {
      const option = this.createTypeOption(type, index);
      this.typeSelectContainer.appendChild(option);
    }
  })
};

SelectView.prototype.createTypeOption = function (type, index) {
  const option = document.createElement('option');
  option.textContent = type;
  option.value = index;
  return option;
};


SelectView.prototype.populateHabitatSelect = function (habitats) {
  habitats.forEach((habitat, index) => {
    if (habitat !== null) {
      const option = this.createHabitatOption(habitat, index);
      this.habitatSelectContainer.appendChild(option);
    }
  })
};

SelectView.prototype.createHabitatOption = function (habitat, index) {
  const option = document.createElement('option');
  option.textContent = habitat;
  option.value = index;
  return option;
};

module.exports = SelectView;
