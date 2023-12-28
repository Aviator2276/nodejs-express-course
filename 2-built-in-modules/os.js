/*
Built-in modules
 - OS
 - PATH
 - FS
 - HTTP
*/
// When importing built-in modules, do not specify the './' This is so
// that NodeJS knows you're using a built-in or third party module
const os = require('os');

// Info about the current user
const userInfo = os.userInfo();
console.log(userInfo);

// Method that returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime}`);

// Get OS information
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);