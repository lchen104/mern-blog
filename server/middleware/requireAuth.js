const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {

    try {
        // read token off the cookie
        const token = req.cookies.Authorization;

        // decode the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        // check token expiration
        if (Date.now() > decoded.exp) return res.sendStatus(401);

        // find user using decoded sub (user._id)
        const user = await User.findById(decoded.sub);

        if (!user) return res.sendStatus(401);

        // attach user to req
        req.user = user;


        // continue on
        // console.log('In Middleware')
        next();
    } catch (error) {
        console.log(error)
        return res.sendStatus(401)
    }


}

module.exports = requireAuth;