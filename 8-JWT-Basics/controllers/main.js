const jwt = require('jsonwebtoken');
/*
Check username & password in post(login) request
If exist create new JWT
Send back to front-end

Setup authentication so only the request with JWT can access the dashboard.
*/
const {BadRequestError} = require('../errors/index');

const login = async (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password', 404 );
    }
    // Just for demo, normally provided by DB
    const id = new Date().getDate();

    // Try to keep payload small, better expreience for users
    // JUST FOR DEMO, when in product, use long, complex, and unguessable string value!
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
    
    res.status(200).json({ msg: 'user created', token });
}

const dashboard = async (req, res) => { 
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, Number ${luckyNumber}`
    });
}

module.exports = {
    login,
    dashboard
}