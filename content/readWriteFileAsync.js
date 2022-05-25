const { readFile, writeFileSync, read, writeFile } = require('fs');



const readMe = readFile('./content/subfolder/first.txt', 'utf8', (err, res) => {
    if (err) {
        return err;
    }

    const first = res;

    readFile('./content/subfolder/second.txt', (err, res) => {
        if (err) {
            return err;
        }

        const second = res;

        writeFile('./content/result-async-txt',
            `Here is the result:${first},${second}`, { flag: 'a' }, (err, res) => {
                if (err) {
                    return err;
                }
                console.log('result ready', res);
            })
    })
})