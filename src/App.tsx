import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Footer from './components/Footer'
import AnimatedPage from './AnimatedPage'

function App() {
  return (
  <div className='flex flex-col h-full w-screen items-center roboto-regular bg-black text-white'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<AnimatedPage />} />
      </Routes>
      <Footer/>
    </Router>
  </div>
  )
}

export default App
