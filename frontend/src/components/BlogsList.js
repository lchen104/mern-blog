import React from 'react'
import Blog from './Blog'
import { Typography } from '@mui/material';

const BlogsList = ({blogs, deleteBlog, toggleUpdate, updateBlog, handleUpdate, updateForm}) => {
  return (
    <div>
      <Typography variant='h4' mt='50px' align='center'>
          Blogs
      </Typography>
      {
          blogs && blogs.map((blog) => 
            (
                <Blog 
                    key={blog._id} 
                    blog={blog} 
                    deleteBlog={deleteBlog} 
                    toggleUpdate={toggleUpdate} 
                    updateBlog={updateBlog}
                    handleUpdate={handleUpdate}
                    updateForm={updateForm}
                />
            )
          )
      }
    </div>
  )
}

export default BlogsList