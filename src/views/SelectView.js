const pubSub = require('../helpers/pub_sub')

const SelectView = function(element) {
  this.element = element
}

SelectView.prototype.bindEvents = function() {
  this.element.addEventListener('change', event => {
    const instrumentFamilyName = event.target.value
    pubSub.publish('InstrumentFamilies:getFamily', instrumentFamilyName)
  })

  pubSub.subscribe('SelectView:instrumentFamilyNames', event => {
    const instrumentFamilyNames = event.detail
    this.addinstrumentFamilyNames(instrumentFamilyNames)
  })

  pubSub.publish('InstrumentFamilies:getNames')

}

SelectView.prototype.addinstrumentFamilyNames = function(instrumentFamilyNames) {
  for (instrumentFamilyName of instrumentFamilyNames) {
    const option = document.createElement('option')
    option.id = instrumentFamilyName
    option.textContent = instrumentFamilyName
    this.element.appendChild(option)
  }
}

module.exports = SelectView