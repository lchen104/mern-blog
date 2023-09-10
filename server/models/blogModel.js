const mongoose = require('mongoose');

// create the blog model schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add blog title...'],
    },
    date: String,
    body: {
        type: String,
        required: [true, 'Enter something to blog...'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

// create the Blog model
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;