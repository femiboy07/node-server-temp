const { readFileSync, writeFileSync, read } = require('fs');
const readfile = readFileSync('./content/subfolder/first.txt', 'utf8');
const secondred = readFileSync('./content/subfolder/second.txt', 'utf8');
console.log(readfile, secondred);

const writeNewSync = writeFileSync('./content/result-sync-txt', `Here is the result ${readfile},${secondred}`, 'utf8',{flag:'a'} );
console.log(writeNewSync);