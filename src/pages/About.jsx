import React from 'react'
import santaCloseup from '../assets/santa_closeup.jpg'
import * as FaIcons from 'react-icons/fa6'

function About() {
  const data = [
    {
      icon: <FaIcons.FaPhone className='icon h-6 w-6'/>,
      text: '(555) 555-5555'
    },
    {
      icon: <FaIcons.FaEnvelope className='icon h-6 w-6' />,
      text: 'santaclaus@northpole.com'
    },
    {
      icon: <FaIcons.FaLocationDot className='icon h-6 w-6' />,
      text: 'North Pole'
    },
  ]

  const infoData = data.map((info, i) => {
    return (
      <div className='flex justify-center m-5' key={i}>
        <span className="side-icon">{info.icon}</span>
        <span className='info-text'><b>{info.text}</b></span>
      </div>
    )
  })

  return (
    <div className='about-container flex flex-wrap justify-center'>
        <div className="info flex flex-col align-middle justify-center h-screen m-5 shadow-2xl rounded-2xl">
          <div className="flex justify-center pt-8 rounded-xl">
            <img src={santaCloseup} className='rounded-2xl w-72 shadow-2xl' alt="" />
          </div>
          <div className="flex flex-col justify-center align-middle h-auto mt-4">
            {infoData}
          </div>
        </div>

        <div className="bio mt-5 mb-5 rounded-2xl">
          <div className='flex flex-col justify-center'>
            <h1 className='bio-title text-center pt-5'>Santa Claus</h1>
            <div className="bio-paragraph px-10 pt-7">
              <p className='paragraph'>I call the North Pole my home, and it's where my trusted team of cheerful elves and I work tirelessly throughout the year, crafting toys and gifts for children everywhere. It's a busy place, but the joy of bringing smiles to kids' faces makes it all worth it.</p>
              <br></br>
              <p className='paragraph'>On the magical night of December 24th, I set out on my incredible journey in a sleigh pulled by my dear reindeer, with Rudolph leading the way. With my bottomless sack of gifts, I visit homes all over the world, sneaking down chimneys or finding other creative ways to leave presents under the Christmas tree.</p>
              <br></br>
              <p className='paragraph'>I want everyone to remember that this season is about more than just gifts; it's about spreading love, happiness, and goodwill to all. So, whether you're young or old, I hope my visits continue to warm your heart and remind you of the magic of the holiday season. Merry Christmas to all, and to all a good night! Ho ho ho!</p>
              <br></br>
              <br></br>
              <p className='signature text-center'>- Chris Kringle</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
