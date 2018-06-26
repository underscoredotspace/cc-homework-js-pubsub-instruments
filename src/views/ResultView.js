const pubSub = require('../helpers/pub_sub')

const ResultView = function(element) {
  this.element = element
}

ResultView.prototype.bindEvents = function() {
  pubSub.subscribe('ResultView:details', event => {
    console.log(event)
    const instrumentFamily = event.detail
    this.render(instrumentFamily)
  })
}

ResultView.prototype.render = function(instrumentFamily) {
  this.element.textContent = instrumentFamily.description
}

module.exports = ResultView