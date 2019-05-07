const uuid = require('uuid/v4')

module.exports = () => uuid().toUpperCase()

const getUUIDInUpperCase = require('feel-power-of-js')

console.log(getUUIDInUpperCase()) //5C91E01D-F89A-4E57-A533-1F45BD7A2430