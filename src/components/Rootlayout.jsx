import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import Animatedcursor from './Animatedcursor'
import NavBar from './NavBar'
import SmallDeviceNavbar from './SmallDeviceNavbar'
import { useSelector } from 'react-redux'
import ColorSwitcherPalette from './ColorSwitcherPalette'
import ParticleBackground from 'react-particle-backgrounds'
import '../css/colorswitch.css'
import '../css/particle.css'
import { useState } from 'react'
import Preloader from './Preloader'


const Rootlayout = () => {
  let [colorParticle,setColorParticle] = useState()
  let colorData = useSelector((state)=> state.color.colorChangeValue)
  let particleColor = useSelector((state)=> state.color.particleColorValue)
    document.body.classList = colorData 
   

    useEffect(()=>{
      setColorParticle(particleColor)
    },[particleColor])

  
    const settings = {
      canvas: {
        canvasFillSpace: true,
        width: 200,
        height: 200,
        useBouncyWalls: false
      },
      particle: {
        particleCount: 50,
        color:colorParticle ? colorParticle : "#5569fa",
        minSize: 10,
        maxSize: 35  
      },
      velocity: {
        directionAngle: 0,
        directionAngleVariance: 360,
        minSpeed: .6,
        maxSpeed: .3
      },
      opacity: {
        minOpacity: 0,
        maxOpacity: 0.4,
        opacityTransitionTime: 9000
      }
    }  
  return (
    <>
    <ParticleBackground settings={settings} />
    <Preloader/>
    <NavBar/>
    <SmallDeviceNavbar/>
    <Animatedcursor/>
    <ColorSwitcherPalette/>
    <Outlet/>
    </>
  )
}

export default Rootlayout