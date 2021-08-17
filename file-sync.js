const {readFileSync,writeFileSync}=require('fs')

console.log('start')

const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/subfolder/second.txt','utf-8')

// console.log(first)
// console.log(second)

writeFileSync(//if file not exists it will create file and then write
                        //if file exists then overide it contents by the new one
                        //if want to append then add flag component 
    './content/result-sync.txt',
    'Here is the result :'+first+' '+second,
     {flag : 'a'}    //now the result get appended to previous one
)

console.log('done with this task')
console.log('starting for the next one')