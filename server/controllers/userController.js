const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

const signup = async (req, res) => {

    try {
        // get the name and email off the req body
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
        res.sendStatus(400)
    }
}

const login = async (req, res) => {

    try {
        // get name, email and password off req body
        const name = req.body.name;
        const email = req.body.email; 
        const password = req.body.password;

        // find the user with the requested id
        const user = await User.findOne({
            email: email,
        })

        // if user not found, send 401 error (unauthorized) and exit 
        if (!user) return res.sendStatus(401);

        // compare received password with found password
        const passwordMatch = bcrypt.compareSync(password, user.password);

        // if password doesnt match, send 401 error (unauthorized) and exit
        if (!passwordMatch) return res.sendStatus(401);

        // create jwt token (1000 = 1 second) / token expires in 30 days
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;

        const token = jwt.sign({ 
            sub: user._id, 
            exp: exp,
        }, process.env.SECRET_KEY);

        // set the cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        })

        // respond with status
        res.sendStatus(200)
    } catch (error) {
        console.log(err);
        // res.sendStatus(400);
    }
}

const logout = (req, res) => {
    try {
        // delete the cookie
        res.clearCookie("Authorization");
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

const checkAuth = (req, res) => {
    try {
        // console.log(req.user);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

module.exports = {
    signup: signup,
    login: login,
    logout: logout,
    checkAuth: checkAuth,
}