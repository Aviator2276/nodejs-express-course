/*
Built-in modules
 - OS
 - PATH
 - FS
 - HTTP
*/
// When importing built-in modules, do not specify the './' This is so
// that NodeJS knows you're using a built-in or third party module
const { readFileSync, writeFileSync} = require('fs');
// Filesystems has synchronous and asynchronous functions to allow blocking and non-blocking code
// This file is using the synchronous functions

// You can specify the encoding with the second parameter
// Make sure you run this while within the directory of the fs.js file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);
// Using flag a, Node will append the contents to the file. Without it, Node will create
// a new file or overwrite an existing one.
writeFileSync(
    './content/result-sync.txt',
    `Here are the result ${first}, ${second}`,
    { flag: 'a'}
)