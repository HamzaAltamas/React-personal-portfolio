import React from 'react'
import '../css/abouteducationItem.css'

const AboutEducationItem = ({edutitle,duration,eduinfo,instName}) => {
  return (
    <>
    <div className='mb-3 about-education-info-item'>
    <div className='d-flex justify-content-between align-items-center mb-1'>
      <h5 className=' mb-1'>{edutitle}</h5>
      <small>{duration}</small>
    </div>
    <h6>{instName}</h6>
    <hr className='pt-1'/>
    <small className='about-edu'>{eduinfo}</small>
    </div>
    </>
  )
}

export default AboutEducationItem