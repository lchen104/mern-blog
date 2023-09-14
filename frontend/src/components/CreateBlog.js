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

import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const CreateBlog = ({updateForm, handleSubmit, handleChange, createForm}) => {

    if (updateForm._id) return <></>;

    return (
        <Box>
            <Typography align='center' variant='h6' sx={{paddingBottom: 2 }}>Create Blog</Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    required
                    label='Title'
                    fullWidth 
                    size='small' 
                    sx={{paddingBottom: 1 }} 
                    onChange={handleChange} 
                    value={createForm.title} 
                    type="text" 
                    name="title" 
                    placeholder="Enter Title..." 
                /> 
                {/* <TextField 
                    // required
                    // label='Image'
                    fullWidth 
                    size='small' 
                    sx={{paddingBottom: 1 }} 
                    onChange={handleChange} 
                    value={createForm.image} 
                    type="file" 
                    accept="image/*"
                    name="image" 
                    // placeholder="Select Image" 
                /> */}

                <Button 
                    component="label" 
                    fullWidth 
                    variant="outlined" 
                    startIcon={<CloudUploadIcon />}
                >
                    Upload Image
                    <VisuallyHiddenInput type="file" />
                </Button>

                <TextField 
                    required
                    // label='Blog'
                    fullWidth 
                    size='small' 
                    sx={{paddingBottom: 1, paddingTop: 1 }} 
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