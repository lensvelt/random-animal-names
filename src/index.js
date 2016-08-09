import uniqueRandomArray from 'unique-random-array'
const randomAnimalNames = require('./random-animal-names.json')

const mainExport = {
  all: randomAnimalNames,
  random: uniqueRandomArray(randomAnimalNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
