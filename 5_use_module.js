const mymodules = require('./modules/mymodules.js')
const plus = require('./modules/mymodules').add

console.log(mymodules.getCurrentTime())
console.log(mymodules.add(100,2000))
console.log(mymodules.formatNumber(73400000))

console.log(plus(3000,3000))
