import React from 'react'
import Blog from './Blog'
import { Typography } from '@mui/material';

const BlogsList = ({blogs, deleteBlog, toggleUpdate, updateBlog, handleUpdate, updateForm, setButtonState}) => {
  return (
    <div>
      {/* Display Blogs Heading if blogs are found */}
      { 
          (
            blogs === null || blogs.length !== 0) && (
            <Typography variant='h4' mt='20px' align='center'>
                Blogs
            </Typography>
          )
      }
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
                    setButtonState={setButtonState}
                />
            )
          )
      }
    </div>
  )
}

export default BlogsList