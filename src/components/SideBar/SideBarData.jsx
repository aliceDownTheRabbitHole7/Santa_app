import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa6'

export const SideBarData = [
    {
        path: '/',
        title: 'Home',
        icon: <FaIcons.FaCircleUser className='h-6 w-6' />,
        class: 'nav-text'
    },   
    {
        path: '/photos',
        title: 'Photos',
        icon: <FaIcons.FaImages className='h-7 w-7'/>,
        class: 'nav-text'
    }
]