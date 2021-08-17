//npm -global command, comes with node
// npm --version

//local dependency - use it only in this perticular project
// npm -i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
//sudo npm -install -g <packagename> (mac)

//package.json - manifest file (stores inportant info about project/package)
// manual approach (create package.json in the root, create propertied etc)
//npm init (step by step, pressenter to skip)
//npm init -y (everything default)

const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)

console.log(newItems)