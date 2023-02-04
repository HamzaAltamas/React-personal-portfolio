import React from 'react'
import '../css/aboutInfoItem.css'

const AboutInfoItem = ({title,info}) => {
  return (
    <>
    <div className='mb-5 d-flex about-info-item'>
    <h5 className=' mb-1 w-50'>{title}</h5>
    <h6 className='w-50 d-flex align-items-center'>{info}</h6>
    </div>
    </>
  )
}

export default AboutInfoItem