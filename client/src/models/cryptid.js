const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const Cryptid = function(url) {
  this.url = url;
  this.cryptids = [];
};

Cryptid.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:select-change', (evt) => {
    const selectedContinent = evt.detail;
    this.getCryptidData();
    PubSub.subscribe('Cryptid:data-set', (evt) => {
      const filteredData = this.filterDataByContinent(evt.detail, selectedContinent);
      PubSub.publish('Cryptid:filtered-data-loaded', filteredData);
    })
    // console.log(this.filterDataByContinent(this.cryptids, selectedContinent));
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

Cryptid.prototype.filterDataByContinent = function (data, continent) {
  let filteredData = [];
  filteredData.push(data.filter(cryptid => cryptid.continent === continent));
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
