import React from 'react'
import aboutImage from "../../../assets/about-image.svg";

export default function About() {
  return (
    <div className='p-32 bg-blue-100'>
      <div className='bg-white flex rounded'>
        <div className='w-8/12 px-16 py-12 '>
          <button className='bg-blue-600 px-5 py-2  text-white font-semibold rounded' >About Us</button>
          <h1 className='text-4xl font-semibold my-6'>
            Brilliant Toolkit to Build<br /> Nextgen Website Faster.</h1>
          <p className='text-gray-500'>The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables led by subject matter experts.
          </p><p className='text-gray-500 my-8'>
            The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.</p>
          <button className='bg-blue-600 px-5 py-4  text-white font-semibold text-lg rounded' >Learn More</button></div>
        <div className='w-6/12   '>
          <img className='w-full  rounded  ' src={aboutImage} alt="" /></div>
      </div>
    </div>
  )
}
