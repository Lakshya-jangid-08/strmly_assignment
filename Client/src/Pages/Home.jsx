import React from 'react'
import SearchBar from '../Components/SearchBar'
import { useNavigate, useParams } from 'react-router-dom';
import VideoCard from '../Components/VideoCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const { input } = useParams();
  const safeInput = input || "";
  const [loading, setloading] = useState(true);
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/post/get-posts`)
      if (response.status === 200) {
        setPosts(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const filterPosts = posts.filter(post =>
    post.title.toLowerCase().includes(safeInput.toLowerCase())
  );
  
  useEffect(() => {
    const fetchAndSetData = async () => {
      await fetchData();
      setloading(false);
    }
    fetchAndSetData();
  }, []);


  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-300'>
        <h1 className='text-2xl font-bold'>Loading...</h1>
      </div>
    )
  } 


  return (
    <div className='bg-gradient-to-b from-sky-300/70 min-h-screen px-5 py-4' >
      <SearchBar />
      {safeInput.length !== 0 ?
        <div className='backdrop-blur-3xl px-3 flex gap-1 bg-white border-2 w-fit rounded-lg border-black'>
          <h1>{safeInput}</h1> <button className='text-xs' onClick={() => { navigate('/dashboard') }}>❌</button>
        </div>
        : ''}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mt-4'>
        {Array.isArray(filterPosts) && filterPosts.length > 0 ?
          filterPosts.map((post, _) => (
            <VideoCard key={post._id} data={post} />
          )) :
          <div className='col-span-3 text-center text-xl font-semibold text-gray-700'>No posts found</div>
        }
      </div>

    </div>
  )
}

export default Home