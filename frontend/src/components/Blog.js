import React from 'react'

import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Blog = ({blog, deleteBlog, toggleUpdate}) => {

  return (
    <Box 
      border='1px solid lightgrey' 
      padding='20px' 
      marginTop='20px'
    >
        <Typography mb={2}>{blog.date}</Typography>
        <Typography color='textPrimary' mb={2} variant='h6'>{blog.title}</Typography>
        
        <Typography color='textSecondary' paragraph mb={2}>{blog.body}</Typography>
        
        <Button color='secondary' sx={{marginRight: 1 }} variant='contained' onClick={() => deleteBlog(blog._id)}><DeleteIcon /> Delete</Button>
        <Button variant='outlined' onClick={() => toggleUpdate(blog)}><EditIcon /> Update</Button>
    </Box>
  )
}

export default Blog