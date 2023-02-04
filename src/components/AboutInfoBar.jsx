import React from 'react'
import '../css/aboutInfobar.css'

const AboutInfoBar = ({title}) => {
  return (
    <div className='infobar mb-5'><h4 className='ps-3 fw-bold '>{title}</h4></div>
  )
}

export default AboutInfoBar