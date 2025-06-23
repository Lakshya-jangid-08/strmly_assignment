import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const user = {
            name , email , password
        }
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, user)
        
        if (response.status === 201) {
            const token = response.data.token;
            localStorage.setItem("token",token);
            navigate('/dashboard')
        } else {
            alert("Login failed");
        }

        setName("");
        setEmail("");
        setPassword("");
    }
    
  return (
     <div className='min-h-screen flex items-center justify-center bg-gray-300'>
        <div className='bg-white p-8 rounded-2xl shadow-md w-96'>
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <h2 className='text-3xl font-bold mb-6 text-center'>Sign up</h2>
                <div className='mb-4'>
                    <label className='block text-lg font-medium mb-2'>Name</label>
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}  className='w-full p-2 border border-gray-300 rounded' placeholder='Enter your name' required />
                </div>
                <div className='mb-4'>
                    <label className='block text-lg font-medium mb-2'>Email</label>
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  className='w-full p-2 border border-gray-300 rounded' placeholder='Enter your email' required />
                </div>
                <div className='mb-4'>
                    <label className='block text-lg font-medium mb-2'>Password</label>
                    <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  className='w-full p-2 border border-gray-300 rounded' placeholder='Enter your password' required />
                </div>
                <p className='mb-3 text-sm'>Already have an account ? <a href='/login' className='cursor-pointer text-sm text-sky-600'>Log in</a></p>
                <button type='submit' className='w-full text-lg bg-sky-500 text-white p-2 rounded hover:bg-sky-600 transition duration-200'>
                    Sign up
                </button>
            </form>
        </div>
    </div> 
  )
}

export default SignupPage