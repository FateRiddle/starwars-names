const names = require('./names.json')
const randomArray = require('unique-random-array')

module.exports = {
  all: names,
  random: randomArray(names),
}
