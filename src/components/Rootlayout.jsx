import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import Animatedcursor from './Animatedcursor'
import NavBar from './NavBar'
import SmallDeviceNavbar from './SmallDeviceNavbar'
import { useSelector } from 'react-redux'
import ColorSwitcherPalette from './ColorSwitcherPalette'

import '../css/colorswitch.css'
import '../css/particle.css'
import { useState } from 'react'
import Preloader from './Preloader'


const Rootlayout = () => {
  
  let colorData = useSelector((state)=> state.color.colorChangeValue)
    document.body.classList = colorData 
   

  return (
    <>
 
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