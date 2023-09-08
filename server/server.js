// load env 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDb = require('./config/connectDb');
const blogController = require('./controllers/blogController');
const userController = require('./controllers/userController');
const requireAuth = require('./middleware/requireAuth');

// set port to listen
const PORT = process.env.PORT;

// create an express app
const app = express();

// configure express app
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: true,
        credentials: true,
    }));

// connect to database
connectDb();

// routing
app.post('/signup', userController.signup);
app.post('/login', userController.login);
app.get('/logout', userController.logout);

app.get('/check-auth', requireAuth, userController.checkAuth);

app.get('/blogs', requireAuth, blogController.fetchBlogs);
app.get('/blogs/:id', requireAuth, blogController.fetchBlog);
app.post('/blogs', requireAuth, blogController.createBlog);
app.put('/blogs/:id', requireAuth, blogController.updateBlog);
app.delete('/blogs/:id', requireAuth, blogController.deleteBlog);


// start server
app.listen(PORT, console.log(`Listing on port: ${PORT}`))