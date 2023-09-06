import React from 'react'

const Blog = ({blog, deleteBlog, toggleUpdate}) => {
    
  return (
    <div>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
        <h3>{blog.date}</h3>
        <button onClick={() => deleteBlog(blog._id)}>Delete</button>
        <button onClick={() => toggleUpdate(blog)}>Update Blog</button>
    </div>
  )
}

export default Blog