// An Asynchronous Task Example
const { log } = require('console');
const { readFile } = require('fs');

console.log("Started First Task");

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) { 
        console.log(err);
        return;
    }
    console.log(result);
    console/log("Completed First Task");
});
// When running this file, it will start the next task right after
// starting the first task. This is an example of the Event Loop,
// running the immediate code first then the callbacks.
console.log("Starting Next Task");