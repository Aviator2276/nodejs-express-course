require('dotenv').config();
require('express-async-errors');
// Async Errors

const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const notFoundMiddlware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const productsRouter = require('./routes/products');

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
})
app.use('/api/v1/products', productsRouter);

// Products Route
app.use(notFoundMiddlware);
app.use(errorMiddleware);


const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();