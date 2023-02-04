import React from 'react'
import '../css/backtotopbutton.css'
import {RxDoubleArrowUp} from 'react-icons/rx'

const BackToTopButton = ({style,onClick}) => {
  return (
    <div onClick={onClick} style={style} className='back-to-top-button'><RxDoubleArrowUp className='back-to-top-icon'/></div>
  )
}

export default BackToTopButton