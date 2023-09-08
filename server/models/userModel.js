const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your Name'],
        },
        email: {
            type: String,
            required: [true, 'Please add your Email'],
            unique: true,
            lowercase: true,
            index: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a Password']
        },
        blogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Blog'
            }
        ],
    },
    {
        timestamps: true
    }
)

// create the User model
const User = mongoose.model('User', userSchema)

module.exports = User;