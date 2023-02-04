import React from 'react'
import '../css/progressbar.css'
import Tilt from 'react-parallax-tilt'
const AnimatedProgressbar = ({percent,skillName}) => {
  
  return (


    <>
    <div className='w-100 d-flex justify-content-center progress-bar-wrapper'>
    <Tilt>
    <div  className='w-100  p-3 '>
   
        <h4 className='skill-name text-center fw-bold'>{skillName}</h4>
    </div> 
    </Tilt>
    </div>
        
    </>
  )
}

export default AnimatedProgressbar