import React from 'react'

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const CreateBlog = ({updateForm, handleSubmit, handleChange, createForm}) => {

    if (updateForm._id) return <></>;

    return (
        <Box>
            <Typography variant='h6' sx={{paddingBottom: 1 }}>Create Blog</Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label='Title'
                    fullWidth 
                    size='small' 
                    sx={{paddingBottom: 1 }} 
                    onChange={handleChange} 
                    value={createForm.title} 
                    type="text" name="title" 
                    placeholder="Enter Title..." 
                />

                <TextField 
                    label='Blog'
                    fullWidth 
                    size='small' 
                    sx={{paddingBottom: 1 }} 
                    multiline
                    onChange={handleChange} 
                    value={createForm.body} 
                    name="body" 
                    rows="8" 
                    placeholder="Enter Blog..." 
                />
                <Button fullWidth size='large' variant='contained' type='submit'><CreateIcon /> Add Blog</Button>
            </form>
        </Box>
    )
}

export default CreateBlog