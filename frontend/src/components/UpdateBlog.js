import React from 'react'

const UpdateBlog = ({updateForm, updateBlog, handleUpdate}) => {

if (!updateForm._id) return <></>;

  return (
    <div>
        <h2>Update Blog</h2>
        <form onSubmit={updateBlog}>
            <input 
            onChange={handleUpdate} 
            value={updateForm.title} 
            type="text" name="title"  
            /><br />

            <textarea 
            onChange={handleUpdate} 
            value={updateForm.body} 
            name="body" rows="4" 
            /><br />
            <button type="submit">Update Blog</button>
        </form>
    </div>
  )
}

export default UpdateBlog