import React from 'react'

import { Box } from '@mui/material';
import {Typography} from '@mui/material';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {TextField} from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Blog = ({blog, deleteBlog, toggleUpdate, updateBlog, handleUpdate, updateForm, setButtonState}) => {

  // console.log(toggleUpdate)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);

    // reset button state and toggle State 
    toggleUpdate({})
    setButtonState(false)
  }
  
  const handleUpdatedBlog = () => {
    toggleUpdate(blog)
    handleOpen()
  }

  const handleUpdateSubmit = (blog) => {
    updateBlog(blog)
    handleClose()
  }

  return (
    <Box 
      border='1px solid lightgrey' 
      padding='20px' 
      marginTop='20px'
    >


      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Box>
        <Typography variant='h6' sx={{paddingBottom: 1 }}>Update Blog</Typography>
        <form onSubmit={handleUpdateSubmit}>
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
            <Button fullWidth size='large' variant='contained' type="submit"><EditIcon /> Update Blog</Button>
        </form>
    </Box>
          </Typography>
        </Box>
      </Modal>

    
        <Typography color='textPrimary' mb={1} variant='h6'>{blog.title}</Typography>
        <Typography mb={20} variant='caption'>{blog.date}</Typography>
        <Typography color='textSecondary' paragraph mt={2} mb={2}>{blog.body}</Typography>
        
        <Button color='secondary' sx={{marginRight: 1 }} variant='contained' onClick={() => deleteBlog(blog._id)}><DeleteIcon /> Delete</Button>
        {/* <Button variant='outlined' onClick={() => toggleUpdate(blog)}><EditIcon /> Update</Button> */}
        <Button color='primary' variant='contained' onClick={handleUpdatedBlog}><EditIcon /> Edit</Button>
    </Box>
  )
}

export default Blog