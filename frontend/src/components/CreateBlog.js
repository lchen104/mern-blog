import React from 'react'

const CreateBlog = ({updateForm, handleSubmit, handleChange, createForm}) => {

    if (updateForm._id) return <></>;

    return (
        <div>
            <h2>Create Blog</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange} 
                    value={createForm.title} 
                    type="text" name="title" 
                    placeholder="Enter Title..." 
                /><br />

                <textarea 
                    onChange={handleChange} 
                    value={createForm.body} 
                    name="body" rows="4" 
                    placeholder="Enter Blog..." 
                /><br />
                <button type="submit">Create Blog</button>
            </form>
        </div>
    )
}

export default CreateBlog