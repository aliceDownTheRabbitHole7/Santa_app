import React, { useState } from 'react'
import { PhotoData } from './PhotosData'
import * as FaIcons from 'react-icons/fa6'

function Photos() {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleMagnify = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const handleNext = () => {
        slideNumber + 1 === PhotoData.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    }

    const handlePrev = () => {
        slideNumber === 0 ? setSlideNumber(PhotoData.length - 1) : setSlideNumber( slideNumber - 1)
    }

    const photoList = PhotoData && PhotoData.map((slide, index) => {
        return(
            <div onClick={() => handleMagnify(index)} key={index} className='single'>
                <img src={slide.img}  className='photo cursor-pointer max-w-full'/>
            </div>
        )
    })

  return (
    <div className='gallery-wrap'>
        {openModal && 
            <div className="slider-wrap">
                <FaIcons.FaCircleChevronLeft className='cursor-pointer h-8 w-8 z-10 fixed text-white top-96 left-10' onClick={handleNext}/>
                <FaIcons.FaCircleXmark className='cursor-pointer h-8 w-8 z-10 fixed text-white top-10 right-10' onClick={handleClose} />
                <FaIcons.FaCircleChevronRight className='cursor-pointer h-8 w-8 z-10 fixed text-white top-96 right-10' onClick={handlePrev} />
                <div className="full-screen p-10 h-screen w-screen flex align-middle justify-center fixed top-0 pointer-events-none">
                    <img src={PhotoData[slideNumber].img} className='rounded-xl max-h-screen max-w-screen-lg'/>
                </div>
            </div>
        }
        <div className='gallery-wrap flex flex-wrap m-3 pr-5 justify-around w-screen'>
            {photoList}
        </div>
    </div>
  )
}

export default Photos
