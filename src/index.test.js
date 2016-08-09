import {expect} from 'chai'
import randomAnimalNames from '.'

describe('random-animal-names', () => {
  it('should have a list of all available names', () => {
    expect(randomAnimalNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(randomAnimalNames.random()).to.satisfy(isIncludedIn(randomAnimalNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
