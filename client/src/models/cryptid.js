const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const Cryptid = function(url) {
  this.url = url;
  this.cryptids = [];
  this.continents = [];
  this.countries = [];
};

Cryptid.prototype.bindEvents = function () {


  PubSub.subscribe('SelectView:continent-select-change', (evt) => {
    const selectedContinentIndex = evt.detail;
    const selectedContinent = this.continents[selectedContinentIndex];
    console.log(this.continents);
    console.log(evt.detail);
    this.getCryptidData();
    PubSub.subscribe('Cryptid:data-set', (evt) => {
      const filteredData = this.filterDataByContinent(evt.detail, selectedContinent);
      PubSub.publish('Cryptid:filtered-data-loaded', filteredData);
    })
  })

  PubSub.subscribe('SelectView:country-select-change', (evt) => {
    const selectedCountryIndex = evt.detail;
    const selectedCountry = this.countries[selectedCountryIndex];
    this.getCryptidData();
    PubSub.subscribe('Cryptid:data-set', (evt) => {
      console.log(evt.detail);
      const filteredData = this.filterDataByCountry(evt.detail, selectedCountry);
      PubSub.publish('Cryptid:filtered-data-loaded', filteredData);
    })
  })

  PubSub.subscribe('DirectoryView:li-clicked', (evt) => {
    const request = new Request(this.url + `/${evt.detail}`)
    request.get()
     .then((data) => {
       PubSub.publish('Cryptid:data-selected', data);
     });
  });
};

Cryptid.prototype.getData = function() {
   const request = new Request(this.url)
   request.get()
    .then((data) => {
      PubSub.publish('Cryptid:data-loaded', data);
      this.cryptids = data;
      this.publishContinents(data);
      this.publishCountries(data);
  });
};

Cryptid.prototype.getCryptidData = function() {
   const request = new Request(this.url)
   request.get()
    .then((data) => {
      this.cryptids = [];
      this.cryptids.push(data);
      PubSub.publish('Cryptid:data-set', data);
  });
};




Cryptid.prototype.continentList = function () {
  const allContinents = this.cryptids.map(cryptid => cryptid.continent);
  return allContinents;
}

Cryptid.prototype.uniqueContinentList = function () {
  return this.continentList().filter((cryptid, index, array) => {
    return array.indexOf(cryptid) === index;
  });
}

Cryptid.prototype.publishContinents = function (data) {
  this.cryptids = data;
  this.continents = this.uniqueContinentList();
  PubSub.publish('Cryptid:continents-ready', this.continents);
}

Cryptid.prototype.countryList = function () {
  const allCountries = this.cryptids.map(cryptid => cryptid.country);
  return allCountries;
}

Cryptid.prototype.uniqueCountryList = function () {
  return this.countryList().filter((cryptid, index, array) => {
    return array.indexOf(cryptid) === index;
  });
}

Cryptid.prototype.publishCountries = function (data) {
  this.cryptids = data;
  this.countries = this.uniqueCountryList();
  PubSub.publish('Cryptid:countries-ready', this.countries);
}



Cryptid.prototype.filterDataByContinent = function (data, continent) {
  let filteredData = [];
  filteredData.push(data.filter(cryptid => cryptid.continent === continent));
  return filteredData;
};

Cryptid.prototype.filterDataByCountry = function (data, country) {
  let filteredData = [];
  filteredData.push(data.filter(cryptid => cryptid.country === country));
  return filteredData;
};





Cryptid.prototype.showCryptidOnSidebar = function () {
  PubSub.subscribe('MapView: Pin-Selected', (evt)=>{
    const cryptid = [evt.detail];
    PubSub.publish('Cryptid:data-selected', cryptid);
  })
};


Cryptid.prototype.reloadSidebar = function () {
  PubSub.subscribe('MapView:reloadData', (evt) => {
    const cryptids = evt.detail;
    PubSub.publish('Cryptid:data-loaded', cryptids)
  })
};




module.exports = Cryptid;
