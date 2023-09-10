import React from 'react'

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const UpdateBlog = ({updateForm, updateBlog, handleUpdate}) => {

  if (!updateForm._id) return <></>;

  return (
    <Box sx={{ mx: 'auto', width: 600 }}>
        <Typography variant='h6' sx={{paddingBottom: 1 }}>Update Blog</Typography>
        <form onSubmit={updateBlog}>
            <TextField 
              label='Title'
              fullWidth 
              size='small' 
              sx={{paddingBottom: 1 }}  
              onChange={handleUpdate} 
              value={updateForm.title} 
              type="text" 
              name="title"  
            />

            <TextField 
              label='Blog'
              fullWidth 
              size='small' 
              sx={{paddingBottom: 1 }} 
              multiline 
              onChange={handleUpdate} 
              value={updateForm.body} 
              name="body" rows="8" 
            />
            <Button type="submit">Update Blog</Button>
        </form>
    </Box>
  )
}

export default UpdateBlog