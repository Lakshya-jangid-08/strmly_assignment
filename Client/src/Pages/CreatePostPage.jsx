import axios from 'axios'
import React, { useState } from 'react'


function CreatePostPage() {
  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [videoFile, setVideoFile] = useState(null)

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (videoFile) {
      formData.append('video', videoFile);
    }

    const response = await axios.post(`${import.meta.env.VITE_API_URL}/post/upload`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response);
    console.log(response.data);
    
    if (response.status === 201) {
      alert("Post created successfully");
    }
    else {
      alert("Failed to create post");
    }
    

    // response handle

    setTitle("");
    setDescription("");
    setVideoFile(null);
  }

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-sky-300/70 px-10 py-4'>
      <h1 className='font-semibold text-2xl'>Upload Video</h1>
      <div className='px-4 py-4'>
        <form onSubmit={submitHandler}>
          <div className='mb-3'>
            <label className=' block text-lg font-semibold mb-1'>Title</label>
            <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-2 border outline-none border-gray-300 rounded' placeholder='Enter video title' required />
          </div>
          <div className='mb-3'>
            <label className='block text-lg font-semibold mb-1'>Description</label>
            <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}} className='w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-2 border outline-none border-gray-300 rounded' placeholder='Enter video description' required />
          </div>
          <div className='mb-5'>
            <label className='block text-lg font-semibold mb-1'>Upload video (MP4 only)</label>
            <input
              type="file"
              accept="video/mp4"
              onChange={e => setVideoFile(e.target.files[0])}
              className='block mb-2'
              required
            />
          </div>
          <button type='submit' className='w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-sky-400 hover:bg-sky-500 py-2 rounded-lg font-semibold'>Create Post</button>
        </form>
      </div>
    </div>
  )
}
export default CreatePostPage