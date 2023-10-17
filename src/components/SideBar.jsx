import React from 'react'
import * as FaIcons from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function SideBar({ children }) {
    const menuItem = [
        {
            path: '../pages/About',
            name: 'About Santa',
            icon: <FaIcons.FaCircleUser />,
        },   
        {
            path: '../pages/Photos',
            name: 'Photos',
            icon: <FaIcons.FaImages />,
        }
    ]

  return (
    <div className='nav-container'>
      <Link to='#' className='menu-bars'>
        <FaIcons.FaBars />
      </Link>
    </div>
  )
}

export default SideBar;
