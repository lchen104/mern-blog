import React from 'react'
import Blog from './Blog'

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const BlogsList = ({blogs, deleteBlog, toggleUpdate}) => {
  return (
    <div>
      {/* <h1>Blogs</h1> */}
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