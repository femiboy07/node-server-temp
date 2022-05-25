
const os = require('os');



const CurrentUser = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}


console.log(CurrentUser);