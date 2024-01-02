const express = require('express');
require('dotenv').config();
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middlewares
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);


/*
app.get('/api/v1/tasks')        - Get all the tasks
app.post('/api/v1/tasks')       - Create a new task
app.get('/api/v1/tasks/:id')    - Get single task
app.patch('/api/v1/tasks/:id')  - Update task
app.delete('/api/v1/tasks/:id') - Delete task
*/

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();