const names = require('./name')
const sayHi = require('./utils')
//console.log(names)
 sayHi('susan') 
 sayHi(names.john)
 sayHi(names.peter)
 const person1=require('./alternative_exports')
console.log(person1)
//calling function just by invoking in its module
require('./mind-grenade')