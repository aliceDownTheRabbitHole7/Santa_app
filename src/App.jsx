import React from 'react'
import SideBar from './components/SideBar/SideBar'
import About from './pages/About'
import Photos from './pages/Photos'
import Tracker from './pages/Tracker'
import DearSanta from './pages/DearSanta'
import Countdown from './pages/Countdown'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' exact element={(<About />)} />
          <Route path='/gallery' element={(<Photos />)} />
          <Route path='/tracker' element={(<Tracker />)} />
          <Route path='/countdown' element={(<Countdown />)} />
          <Route path='/dear-santa' element={(<DearSanta />)} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
