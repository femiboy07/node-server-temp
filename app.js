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
const http = require('http');

const server = http.createServer((req, res) => {
    if (req === '/') {
        res.end('Home Page');
    }

    if (req.url === '/About') {
        res.end('About Page')
    }
    res.end('Error Page');
})


server.listen(5000, () => {
    console.log('server is listening on 5000....');
})


const { readFile } = require('fs');

readFile('./content/subfolder/first.txt', (err, data) => {
    if (err) {
        return;
    } else {
        console.log(data);
    }
})

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })

    })
}

// getText('./content/subfolder/first.txt').then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

const start = async() => {
    try {
        const first = await getText('./content/subfolder/second.txt');
        console.log(first);
    } catch (err) {
        console.log(err);

    }


}

start();