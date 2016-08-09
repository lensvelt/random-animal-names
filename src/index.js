import uniqueRandomArray from 'unique-random-array'
const starWarsNames = require('./random-animal-names.json')

const mainExport = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
