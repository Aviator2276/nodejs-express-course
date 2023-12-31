const express = require('express');
const app = express();
const {products} = require('./data');
const logger = require('./logger');
const auth = require('./auth');
// req => middleware => res

// 1. Use vs Route
// 2. options - our own / express / third-party

app.use('/api', logger, auth);
// Apply the middleware logger to the API path and anything that comes after
// If path is omitted, the middleware is applied everywhere

app.get('/', logger, (req, res) => {
    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    res.send('About');
});

app.get('/api/products', logger, (req, res) => {
    console.log(req.user);
    res.send('Products');
});

app.get('/api/items', logger, (req, res) => {
    res.send('items');
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});