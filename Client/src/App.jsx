import React from 'react'
import { Route, Routes, useMatch, Navigate } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import CreatePostPage from './Pages/CreatePostPage'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  const isLogin = useMatch('/login');
  const isSignup = useMatch('/sign-up');
  const authRoute = isLogin || isSignup;
  const isAuthenticated = localStorage.getItem('token');


  if(authRoute) {
    return (
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignupPage/>} />
      </Routes>
    )
  }
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/create-post' element={isAuthenticated ? <CreatePostPage/> : <Navigate to="/login" replace={true} />} />
        <Route path='/dashboard' element={<Home/>} />
        <Route path='/dashboard/:input' element={<Home/>} />
        <Route path='*' element={<Navigate to="/dashboard" replace={true} />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App