const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const Map = function(url) {
  this.url = url;

};

 Map.prototype.getData = function() {
   const request = new Request(this.url)
   request.get()
    .then((data) => {
      console.log(data);
      PubSub.publish('Map:data-loaded', data);
    });
 };





module.exports = Map;
