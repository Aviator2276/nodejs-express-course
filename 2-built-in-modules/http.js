/*
Built-in modules
 - OS
 - PATH
 - FS
 - HTTP
*/
// Basic overview of HTTP Modules.
// When importing built-in modules, do not specify the './' This is so
// that NodeJS knows you're using a built-in or third party module
const http = require('http');

// Request is from the client
// Response is from the server
const server = http.createServer((req, res) => {
    // The request is a large object contain the client request details
    // console.log(req);

    // Respond with a short message.
    // res.write('Welcome to our home page');
    // res.end();

    // Looks at the request object URL to respond with the correct mesg
    if (req.url === '/') {
        // Shortcut for res.write and end
        res.end("Welcome to our homepage");
    }
    if (req.url === '/about') {
        res.end("Here is our short history");
    }
    // If none of the url matches, send this.
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">Back Home</a>
    `);
});

// Listen on port 5000
server.listen(5000);