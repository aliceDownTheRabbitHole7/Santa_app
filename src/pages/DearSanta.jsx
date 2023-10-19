import React, { useState } from 'react'
import { formData } from './DearSantaData'
import './DearSanta.css'

function DearSanta()  {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    birthday: '',
    letter: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onAlter = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const formElements = formData.map((element, i) => {
    return (
      <div className='m-3' key={i}>
        <label htmlFor={element.for} className='mr-2 mb-2'>{element.text}</label>
        <input placeholder={element.placeholder} name={element.for} onChange={onAlter} type={element.type} id={element.id} className='text p-1' />
      </div>
    )
  })

  return (
    <div className='form-container w-screen h-screen flex justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-wrap flex-col justify-center font-extrabold rounded-xl p-10'>
          <div className='map-container flex flex-col justify-evenly'>
            {formElements}
          </div>
          <div className="text-container flex flex-col justify-evenly m-10">
            <h1 className='dear-header text-4xl'>Dear Santa...</h1>
            <textarea type="text" className='mt-5 p-2' placeholder='Write your letter to Santa here...'/>
          </div>
          <input type="submit" value='Submit' className='submit rounded-l bg-green-900 p-1'/>
        </form>
    </div>
  )

}

export default DearSanta