import React from 'react'
import { Route, Routes, useMatch, Navigate } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import CreatePostPage from './Pages/CreatePostPage'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();
  const authRoute = useMatch('/login') || useMatch('/sign-up');

  if(authRoute) {
    return (
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignupPage/>} />
      </Routes>
    )
  }
  
  const isAuthenticated = localStorage.getItem('token');
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/create-post' element={isAuthenticated ? <CreatePostPage/> : <LoginPage/>} />
        <Route path='/dashboard' element={<Home/>} />
        <Route path='/dashboard/:input' element={<Home/>} />
        <Route path='*' element={<Navigate to="/dashboard" replace={true} />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App