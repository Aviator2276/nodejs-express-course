/*
Built-in modules
 - OS
 - PATH
 - FS
 - HTTP
*/
// When importing built-in modules, do not specify the './' This is so
// that NodeJS knows you're using a built-in or third party module
const path = require('path');

// Finds platform specific seperator
console.log(path.sep);

// Gets the normalized path of the content, whether or not there is seperators in front or back.
const filePath = path.join('/content', 'subfolder/', 'test.txt');
console.log(filePath);

// Gets the the last portion of the file path.
const base = path.basename(filePath);
console.log(base);

// Gets the absolute path. __dirname will point to this files location
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);
// Very useful as an application may be used on different platforms