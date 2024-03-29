const express = require('express');
const path = require('path');
const app = express();

// Setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     Typically only used to add to static assets, not sending static assets
//     SSR
// });

app.all('*', (req, res) => {
    res.status(400).send('Resource Not Found');
});

app.listen(5000, ()=> {
    console.log("Server is listening on port 5000");
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use <-- Middlewares
//app.listen
