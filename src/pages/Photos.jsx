import React from 'react'
import { PhotoData } from './PhotosData'

function Photos() {

    const photoList = PhotoData.map((photo, index) => {
        return (
            <img src={photo.img} key={index} alt='' className='photo'/>
        )
    })

  return (
    <div className='flex flex-wrap m-3 pr-5 justify-around w-screen'>
        {
            photoList
        }
    </div>
  )
}

export default Photos
