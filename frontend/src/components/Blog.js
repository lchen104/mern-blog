import React from 'react'

import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';

const Blog = ({blog, deleteBlog, toggleUpdate}) => {
    
  return (
    <Box style={{width: '550px', border: '1px solid lightgrey', margin: '20px', padding: '10px'}} sx={{ mx: 'auto', width: 500 }}>
        <Typography mb={2}>{blog.date}</Typography>
        <Typography mb={2} variant='h6'>{blog.title}</Typography>
        
        <Typography mb={2}>{blog.body}</Typography>
        
        <Button sx={{marginRight: 1 }} variant='contained' onClick={() => deleteBlog(blog._id)}>Delete</Button>
        <Button variant='outlined' onClick={() => toggleUpdate(blog)}>Update</Button>
    </Box>
  )
}

export default Blog