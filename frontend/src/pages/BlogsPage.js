import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';

import BlogsList from "../components/BlogsList";
import UpdateBlog from "../components/UpdateBlog";
import CreateBlog from "../components/CreateBlog";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

const BlogsPage = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [buttonState, setButtonState] = useState(false);
  // state
  const [blogs, setBlogs] = useState(null);
  
  const [createForm, setCreateForm] = useState({
    title: '',
    date: '',
    body: '',
  });

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: '',
    date: '',
    body: '',
  })

  // use effect
  useEffect(() => {
    fetchBlogs()
  }, [])

  // functions
  const fetchBlogs = async () => {
    // fetch the blogs
    const res = await axios.get('/blogs')

    // set to state
    // console.log(res);
    // display latest blogs on top
    setBlogs(res.data.blogs.reverse());
    // console.log(res);
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    const {name, value} = e.target;
    
    setCreateForm({
      ...createForm,
      [name]: value,
    })
    console.log({name, value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    try {
      // create blog
      const res = await axios.post('/blogs', createForm);

      // update state
      setBlogs([res.data.blog, ...blogs])
      console.log(res)
      console.log(blogs)

      // clear the form state
      setCreateForm({
        title: '',
        date: '',
        body: '',
      })
    } catch (error) {
      console.log(error)
    }

  }

  // delete blog
  const deleteBlog = async (_id) => {
    console.log('delete blog')

    // delete the blog
    const res = await axios.delete(`/blogs/${_id}`)
    console.log(res)

    // update state
    const newBlogs = [...blogs].filter(blog => {
      return blog._id !== _id;
    })

    setBlogs(newBlogs)
  }

  // update blog
  const handleUpdate = (e) => {
      const {value, name} = e.target;

      setUpdateForm({
        ...updateForm,
        [name]: value,
      })
  }

  // toggle update
  const toggleUpdate = (blog) => {
      // console.log(blog)
      setButtonState(true)
      // set state on update form
      setUpdateForm({
        _id: blog._id,
        title: blog.title,
        date: blog.date,
        body: blog.body,
      })
  }

  const updateBlog = async (e) => {
    e.preventDefault();

    const title = updateForm.title;
    const date = Date.now();
    const body = updateForm.body;

    // send update request
    const res = await axios.put(`/blogs/${updateForm._id}`, {
      title: title,
      date: date,
      body: body,
    })

    console.log(res)

    // update state
    const newBlogs = [...blogs];
    const blogIndex = blogs.findIndex(blog => {
      return blog._id === updateForm._id;
    })
    newBlogs[blogIndex] = res.data.blog;

    setBlogs(newBlogs);

      // clear the update form state
      setUpdateForm({
        _id: null,
        title: '',
        date: '',
        body: '',
      })
  }

  return (
    <div>

      <Button fullWidth size='large' variant='contained' type='submit' onClick={handleOpen}>{!buttonState ? 'Create New Blog' : 'Update Blog'}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <UpdateBlog 
            updateForm={updateForm} 
            updateBlog={updateBlog} 
            handleUpdate={handleUpdate} 
        />

        <CreateBlog 
            updateForm={updateForm} 
            createForm={createForm} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
        />
        </Box>
      </Modal>

        {/* <UpdateBlog 
            updateForm={updateForm} 
            updateBlog={updateBlog} 
            handleUpdate={handleUpdate} 
        /> */}

        {/* <CreateBlog 
            updateForm={updateForm} 
            createForm={createForm} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
        /> */}

        <BlogsList 
            blogs={blogs} 
            deleteBlog={deleteBlog} 
            toggleUpdate={toggleUpdate} 
        />
    </div>
  )
}

export default BlogsPage