import React, { useEffect } from 'react'
import { useState } from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import '../css/preloader.css'

const Preloader = () => {

    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setAnimationStarted(true);
      }, 3000);
    }, []);
  


  return (
     <>
     <div className={`preloader-left ${animationStarted ? "leftPreloadHide" : ""}`}></div> 
     <div className={`preloader-right ${animationStarted ? "rightPreloadHide" : ""}`}>
     <div className='preloader-icon'>
     <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
            
       />
     </div>
     </div>
     </>
  )
}

export default Preloader