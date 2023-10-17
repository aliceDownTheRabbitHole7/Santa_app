import React from 'react'
import SideBar from './components/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
