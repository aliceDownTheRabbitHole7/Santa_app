import React from 'react'
import SideBar from './components/SideBar/SideBar'
import About from './pages/About'
import Photos from './pages/Photos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' exact element={(<About />)} />
          <Route path='/photos' element={(<Photos />)} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
