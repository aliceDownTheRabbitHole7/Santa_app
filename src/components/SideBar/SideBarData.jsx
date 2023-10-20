import React from 'react'
import * as FaIcons from 'react-icons/fa6'

export const SideBarData = [
    {
        path: '/',
        title: 'Home',
        icon: <FaIcons.FaCircleUser className='h-6 w-6' />,
    },   
    {
        path: '/gallery',
        title: 'Gallery',
        icon: <FaIcons.FaImages className='h-7 w-7'/>,
    },
    // {
    //     path: '/tracker',
    //     title: 'Tracker',
    //     icon: <FaIcons.FaGlobe className='h-6 w-6' />,
    // },
    {
        path: '/countdown',
        title: 'Countdown',
        icon: <FaIcons.FaClock className='h-6 w-6' />,
    },
    {
        path: '/dear-santa',
        title: 'Dear Santa',
        icon: <FaIcons.FaEnvelope className='h-6 w-6' />,
    },
]