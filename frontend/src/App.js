import { useState, useEffect } from "react";
import axios from 'axios';
import BlogsList from "./components/BlogsList";
import UpdateBlog from "./components/UpdateBlog";
import CreateBlog from "./components/CreateBlog";

function App() {
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
    const res = await axios.get('http://localhost:5001/blogs')

    // set to state
    console.log(res);
    setBlogs(res.data.blogs);
    console.log(res);
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

    // create blog
    const res = await axios.post('http://localhost:5001/blogs', createForm);

    // update state
    setBlogs([...blogs, res.data.blog])
    console.log(res)

    // clear the form state
    setCreateForm({
      title: '',
      date: '',
      body: '',
    })
  }

  // delete blog
  const deleteBlog = async (_id) => {
    console.log('delete blog')

    // delete the blog
    const res = await axios.delete(`http://localhost:5001/blogs/${_id}`)
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
    const res = await axios.put(`http://localhost:5001/blogs/${updateForm._id}`, {
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
    <div className="App">
    
        <BlogsList 
            blogs={blogs} 
            deleteBlog={deleteBlog} 
            toggleUpdate={toggleUpdate} 
        />

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

    </div>
  );
}

export default App;
