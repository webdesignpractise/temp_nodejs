//GLOBALS -NO WINDOW !!!!
//__dirname  - path to current directory
//__filename - file name
// require   - functionto use modules (commonJS)
// module    - info about current module (file)
// process   - info about env where the program is being executed
console.log(__dirname)
console.log(__filename)
setInterval(()=>{
    console.log('hello')
},1000) //1000ms=1sec means after every one second it print hello untill stop

//this is basically a terminal so all command of terminal are possible here also 