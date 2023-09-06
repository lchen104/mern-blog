// load env 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// import dependencies
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/connectDb');
const blogController = require('./controllers/blogController');

// set port to listen
const PORT = process.env.PORT;

// create an express app
const app = express();

// configure express app
app.use(express.json());
app.use(cors())

// connect to database
connectDb();

// routing
app.get('/blogs', blogController.fetchBlogs)
app.get('/blogs/:id', blogController.fetchBlog)
app.post('/blogs', blogController.createBlog)
app.put('/blogs/:id', blogController.updateBlog)
app.delete('/blogs/:id', blogController.deleteBlog)


// start server
app.listen(PORT, console.log(`Listing on port: ${PORT}`))