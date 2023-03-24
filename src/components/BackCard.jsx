import React from 'react'
import "../index.css"

const BackCard = (props) => {
  return (
    <section className={`${props.mainCardStyle} ${props.hideFrontCard !== false ? "opacity-100 -z-0" : "opacity-0 -z-10"} absolute transition-opacity duration-1000`}>
      <div className='grid gap-10 justify-items-center'>
        <img src="public/images/illustration-thank-you.svg" alt="thank-you-illustration" />
        <p className='text-orange bg-medium_grey bg-opacity-20 rounded-full h-[40px] grid items-center pl-4 pr-4'>You selected {props.ratingVal} out of 5</p>
      </div>
      <div className='grid gap-5 text-center'>
        <p className='text-white text-3xl font-medium'>Thank you!</p>
        <p className=' text-medium_grey'>
          We appreciate you taking the time to give a rating. 
          If you ever need more support, don't hesitate to
          get in touch
        </p>
      </div>
    </section>
  )
}

export default BackCard