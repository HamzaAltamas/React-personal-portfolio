import React from 'react'
import { Link } from 'react-router-dom';
import "../css/commonbutton.css"
import { motion } from "framer-motion"

const Commonbutton = ({title,href}) => {
  return (
    <>
    <div className='common-button-wrapper'>
    <motion.div whileHover={{ scale: 1.1 }}>

<Link to={href}>
<button className='commonbutton'>
 <span>{title}</span>
 </button>
</Link>
</motion.div>
    </div>
      
    </>
  )
}

export default Commonbutton;