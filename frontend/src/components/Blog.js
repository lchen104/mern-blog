import React from 'react'

import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';

const Blog = ({blog, deleteBlog, toggleUpdate}) => {
    // console.log(blog.date)
    // const today = new Date();
    // console.log(today)
    // const f = new Intl.DateTimeFormat("en-us", { 
    //   dateStyle: 'full',
    // })
    // console.log(f.format(today))

  return (
    <Box 
      border='1px solid lightgrey' 
      padding='20px' 
      marginTop='20px'
    >
        <Typography mb={2}>{blog.date}</Typography>
        <Typography mb={2} variant='h6'>{blog.title}</Typography>
        
        <Typography mb={2}>{blog.body}</Typography>
        
        <Button sx={{marginRight: 1 }} variant='contained' onClick={() => deleteBlog(blog._id)}>Delete</Button>
        <Button variant='outlined' onClick={() => toggleUpdate(blog)}>Update</Button>
    </Box>
  )
}

export default Blog