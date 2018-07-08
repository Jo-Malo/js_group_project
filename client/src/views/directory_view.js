const PubSub = require('../helpers/pub_sub.js');

const DirectoryView = function(directoryContainer) {
  this.directoryContainer = directoryContainer;
}

DirectoryView.prototype.bindEvents = function () {
  this.populateDirectory();
};

DirectoryView.prototype.populateDirectory = function() {
  PubSub.subscribe('Cryptid:data-loaded', (evt) => {
    const cryptidData = evt.detail;
    console.log(cryptidData);
  });
};

module.exports = DirectoryView;
