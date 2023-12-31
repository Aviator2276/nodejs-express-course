const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// Static Assets
app.use(express.static('./methods-public'));
// Parse Form Data
app.use(express.urlencoded({ extended: false }));
// Parse JSON
app.use(express.json());

// Use the People Router
app.use('/api/people', people);
// Use the Auth Router
app.use('/login', auth);

app.listen(5000, () => {
    console.log("Listening on port 5000");
});