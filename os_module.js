const os=require('os')

//info about current user
const user=os.userInfo();
console.log(user)

//methods returns the system uptime in seconds
console.log('The System Uptime is %d seconds',os.uptime())

const currentOS={

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)