import React, { useEffect, useRef, useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { Navbar ,Nav} from 'react-bootstrap'
import {BsMoonFill,BsSunFill} from 'react-icons/bs'
import {RiNavigationFill} from 'react-icons/ri'
import "../css/smalldevicenavbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { theme } from '../Slices/ThemeChangeSlice'



const SmallDeviceNavbar = () => {
    let [smallDeviceNavWidth,setSmallDeviceNavWidth]= useState()
    let [navShow,setNavShow]= useState(false)
    let [themeToggle,setThemeToggle] = useState(false)
    let dispatch = useDispatch()
    let themeData = useSelector((state)=> state.theme.themeChangeValue)

    let themeClick = () =>{
      setThemeToggle((prev)=>!prev)
     document.body.classList.toggle("themeChanged")
     dispatch(theme(themeToggle))
     localStorage.setItem("theme", themeToggle)
       localStorage.getItem("theme")
     themeData ? document.body.id = "themeChanged" : document.body.id = ""
    }

    let smallDeviceNavRef = useRef()
    let smallDeviceNavButtonRef = useRef()

    useEffect(()=>{
        setSmallDeviceNavWidth(smallDeviceNavRef.current.clientWidth)
        document.addEventListener("click",(e)=>{
            smallDeviceNavButtonRef.current.contains(e.target) ? setNavShow(true) : setNavShow(false)
        })
    },[])
  return (
    <>
    <Navbar ref={smallDeviceNavRef} className='small-device-navbar' style={{ right: navShow ? "0" : `-${smallDeviceNavWidth}px`  }}>  
          <Nav className='small-device-navbar-list'>
            <Nav.Link as={Link} to="/"><AiFillHome/></Nav.Link>
            <Nav.Link as={Link} to="/about"><FaUserAlt/></Nav.Link>
            <Nav.Link as={Link} to="/service"><MdMiscellaneousServices/></Nav.Link>
            <Nav.Link as={Link} to="/portfolio"><MdHomeRepairService/></Nav.Link>
            <Nav.Link as={Link} to="/contact"><BsFillEnvelopeFill/></Nav.Link>
            <Nav.Link onClick={themeClick}><div className='theme-icon'>{themeData ? <BsMoonFill/> :  <BsSunFill/>}</div></Nav.Link>
          </Nav>
         <div ref={smallDeviceNavButtonRef } className='small-device-navbar-button' onClick={()=>setNavShow((prev)=>!prev)}><RiNavigationFill/></div>
    </Navbar>
    </>
  )
}

export default SmallDeviceNavbar