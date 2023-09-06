const mongoose = require('mongoose');

// create the blog model schema
const blogSchema = new mongoose.Schema({
    title: String,
    date: Date,
    body: String,
});

// create the Blog model
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;