/// enviroment_variables

// global variables
// _dirname,_filename,require,module,process

// console.log(__dirname);

// console.log(_filename);




//Modules Every file by default is a module


// const names = require("./names");
// const sayHi = require("./sayhi");
// const path = require('path');

// const getpath = path.join('/content', 'subfolder', 'txt.txt');

// console.log(getpath);
const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.write('Welcome to our Home Page');
    res.end();

})

server.listen(port, () => {
    console.log('server listening on', port);
})