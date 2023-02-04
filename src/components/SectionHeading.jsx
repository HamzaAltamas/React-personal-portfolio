import React from 'react'
import '../css/sectionheading.css'

const SectionHeading = ({title}) => {
  return (
    <>
    <h2 className='section-heading py-3 '><span>{title}</span></h2>
    </>
  )
}

export default SectionHeading