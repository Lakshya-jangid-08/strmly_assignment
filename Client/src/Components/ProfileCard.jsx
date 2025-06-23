import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ProfileCard({setshowCard}) {

    const [user, setUser] = useState({})
    const [loading, setloding] = useState(true);
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/dashboard');
        setshowCard(false);
    }

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }); 
            
            if (response.status !== 200) {
                throw new Error('Failed to fetch user data');
            }
            setUser(response.data.user);
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setloding(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className='w-56 h-72 rounded-lg bg-white text-black flex flex-col items-center justify-center px-4 shadow-md border-2 border-black fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-50'>
                <h1 className='text-xl font-semibold'>Loading...</h1>
            </div>
        );
    }

  return (
    <div className=' min-w-56 min-h-72 rounded-lg bg-white text-black  flex flex-col items-center justify-center px-4 shadow-md border-2 border-black fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-50'> 
        <button onClick={()=>{
            setshowCard(false)
        }} className='text-red-500 bg-white absolute top-1 right-1 border-2 border-black px-1 py-0.5 rounded-lg'>close</button>
        <div>
            <h1 className='text-2xl font-semibold'>{user.name}</h1>
            <h4 className='text-lg font-medium text-gray-500 underline'>{user.email}</h4>
        </div>
        <button onClick={()=>{logoutHandler()}} className='bg-red-500 text-white absolute bottom-1 right-1 px-1 py-1 rounded-lg'>Logout</button>
    </div>
  )
}

export default ProfileCard