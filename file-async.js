const {readFile,writeFile}=require('fs')
console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    
    if(err){
        console.log(err);
        return
    }
    const first=result

    readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{

        if(err){

            console.log(err)
            return
        }
        const second=result
        writeFile(
            './content/result-async.txt',
            'Here is the result : '+first+','+second,
            (err,result)=>{ //callback function
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
                //console.log(result)
                //result will be undefined 
            }               //because here we not expecting
                            //anything back
        )
        
    })
})
console.log('starting for a next one')
