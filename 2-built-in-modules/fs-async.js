/*
Built-in modules
 - OS
 - PATH
 - FS
 - HTTP
*/
// When importing built-in modules, do not specify the './' This is so
// that NodeJS knows you're using a built-in or third party module
const { readFile, writeFile} = require('fs');
// Filesystems has synchronous and asynchronous functions to allow blocking and non-blocking code
// This file is using the asynchronous functions

// We need to provide a callback for async functions. So when a function is done, we do this code.
// The callback function takes an error and a result. If there's an error, log it. If everything's
// good, then do something with the result.
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        // if there's an error, console log it.
        console.log(err);
        return;
    }
    // If encoding value is not provided, you'll recieve a a buffer
    console.log(result);

    // Now because this is an async function, we cannot use result outside this callback
    // So for now, we'll store the first variable then call readFile again for the next file.
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            // if there's an error, console log it.
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here are the result ${first}, ${second}`
        , (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            // Result is undefined because we're not expecting anything back
        });
    });
});
// Nesting these callbacks is bad practice, so later on we'll use a better way to do this.