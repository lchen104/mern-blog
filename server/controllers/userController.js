const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const signup = async (req, res) => {

    try {
        // get the name and email off the body
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        // hash the password received
        const hashedPassword = bcrypt.hashSync(password, 8);

        // create new user with the data
        await User.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        // respond with success
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        // respond with error
        res.sendStatus('400')
    }
}

const login = (req, res) => {

}

const logout = (req, res) => {

}

module.exports = {
    signup: signup,
    login: login,
    logout: logout,
}