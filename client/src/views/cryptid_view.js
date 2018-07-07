const PubSub = require('../helpers/pub_sub.js');

const CryptidView = function(){

};

CryptidView.prototype.bindEvent = function () {
  PubSub.subscribe('Cryptid:data-loaded', (evt) => {
    console.log(evt.detail);
    // this.render(evt.detail);
  });
};


module.exports = CryptidView;
