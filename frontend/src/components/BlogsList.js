import React from 'react'
import Blog from './Blog'

const BlogsList = ({blogs, deleteBlog, toggleUpdate}) => {
  return (
    <div>
      <h1>Blogs</h1>
      {
          blogs && blogs.map((blog) => 
            (
                <Blog 
                    key={blog._id} 
                    blog={blog} 
                    deleteBlog={deleteBlog} 
                    toggleUpdate={toggleUpdate} 
                />
            )
          )
      }
    </div>
  )
}

export default BlogsList