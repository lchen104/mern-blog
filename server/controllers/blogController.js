const Blog = require('../models/blogModel')

// get all blogs
const fetchBlogs = async (req, res) => {
    try {
        // find blogs
        const blogs = await Blog.find(
            {
                user: req.user._id,
            }
        )

        // respond with all blogs
        res.json({blogs: blogs})

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
    
}

// get a blog
const fetchBlog = async (req, res) => {
    try {
        // get id off the url
        const blogId = req.params.id;
        const user = req.user._id;

        // find the blog with that id
        const blog = await Blog.findOne(
            {
                _id: blogId,
                user: user,
            }
        )

        // respond with the blog found
        res.json({blog: blog})

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }

}

// create a blog
const createBlog = async (req, res) => {
    try {
        // get sent in data off the request body
        const title = req.body.title;

        // const date = Date.now();
        const today = new Date();
        // console.log(today)
        const f = new Intl.DateTimeFormat("en-us", { 
          dateStyle: 'full',
        })
        // console.log(f.format(today));
        const date = f.format(today);

        const body = req.body.body;
        const user = req.user._id;

        // create a blog with it
        const blog = await Blog.create(
            {
                title: title,
                date: date,
                body: body,
                user: user,
            }
        )

        // respond with the new blog
        res.json({blog: blog})

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

// update blog
const updateBlog = async (req, res) => {
    try {
        // get blog id from url
        const blogId = req.params.id;
        const user = req.user._id;

        // get data off request body
        const title =  req.body.title;
        
        // const date = Date.now();
        const today = new Date();
        // console.log(today)
        const f = new Intl.DateTimeFormat("en-us", { 
          dateStyle: 'full',
        })
        // console.log(f.format(today));
        const date = f.format(today);

        const body = req.body.body;
        
        // find and upate blog 
        await Blog.findOneAndUpdate(
            {
                _id: blogId,
                user: user,
            }, 
            {
                title: title,
                date: date,
                body: body,
            }
        )

        // find the updated blog
        const blog = await Blog.findById(blogId)

        // respond with updated blog
        res.json({blog: blog})

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

// delete a blog
const deleteBlog = async (req, res) => {
    try {
        // get id from url
        const blogId = req.params.id;
        // const user = req.user._id;

        // delete the blog
        const blog = await Blog.findByIdAndRemove(blogId)
        // const blog = await Blog.deleteOne(
        //     {
        //         id: blogId, 
        //         user: user,
        //     }
        // )

        // respond with deleted blog
        res.json({blog: blog})

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

module.exports = {
    fetchBlogs: fetchBlogs,
    fetchBlog: fetchBlog,
    createBlog: createBlog,
    updateBlog: updateBlog,
    deleteBlog: deleteBlog,
}