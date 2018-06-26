const pubSub = require('./helpers/pub_sub')
const InstrumentFamilies = require('./models/instrument_families')
const SelectView = require('./views/SelectView')
const ResultView = require('./views/ResultView')

const instrumentFamilies = new InstrumentFamilies
instrumentFamilies.bindEvents()

const selectElement = document.querySelector('#instrument-families')
const selectView = new SelectView(selectElement)
selectView.bindEvents()

const resultElement = document.querySelector('#instrument-family-detail')
const resultView = new ResultView(resultElement)
resultView.bindEvents()