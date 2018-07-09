const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const Cryptid = function(url) {
  this.url = url;
};

Cryptid.prototype.bindEvents = function () {
  PubSub.subscribe('DirectoryView:li-clicked', (evt) => {
    const request = new Request(this.url + `/${evt.detail}`)
    request.get()
     .then((data) => {
       console.log(data);
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

Cryptid.prototype.showCryptidOnSidebar = function () {
  PubSub.subscribe('MapView: Pin-Selected', (evt)=>{
    const cryptid = [evt.detail];
    PubSub.publish('Cryptid:data-selected', cryptid);
  })
};
module.exports = Cryptid;
