const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectContainer) {
  this.selectContainer = selectContainer;
}

SelectView.prototype.bindEvents = function () {
  this.selectContainer.addEventListener('change', (evt) => {
    const selectedContinent = evt.target.value;
    console.log(selectedContinent);
    PubSub.publish('SelectView:select-change', selectedContinent);
  })
};

module.exports = SelectView;
