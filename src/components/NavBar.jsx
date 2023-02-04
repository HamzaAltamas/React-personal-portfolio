import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../css/navbar.css"
import Commonbutton from './Commonbutton'
import {BsMoonFill,BsSunFill}  from 'react-icons/bs'
import {ImCross,ImMenu}  from 'react-icons/im'
import {Link,NavLink} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { theme } from '../Slices/ThemeChangeSlice'
import { motion } from "framer-motion"

const NavBar = () => {
  let dispatch = useDispatch()
  let themeData = useSelector((state)=> state.theme.themeChangeValue)

  
  let [navToggle,setNavToggle] = useState(true)
  let [themeToggle,setThemeToggle] = useState(false)


   let themeClick = () =>{
     setThemeToggle((prev)=>!prev)
     dispatch(theme(themeToggle))
     localStorage.setItem("theme", themeToggle)
localStorage.getItem("theme")
     themeData ? document.body.id = "themeChanged" : document.body.id = ""
   }
  return (
    <>
    <Container className='navbar-container'>
    <Navbar>  
        <Navbar.Brand><Link to="/"><h2><span>&lt;</span>HAMZA<span>/&gt;</span></h2></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setNavToggle((prev)=> !prev)}>{navToggle ? <ImMenu/> : <ImCross/>}</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <motion.div whileHover={{ scale: 1.1 }} className="d-flex align-items-center">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="d-flex align-items-center">
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="d-flex align-items-center">
            <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="d-flex align-items-center">
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="d-flex align-items-center">
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="d-flex align-items-center">
            <Nav.Link onClick={themeClick}><div className='theme-icon'>
              {themeData ? <BsMoonFill/> : <BsSunFill/>   }
              </div>
              </Nav.Link>
          </motion.div>
          </Nav>
          <div className='navbar-button'><Commonbutton title="hire me"/></div>
        </Navbar.Collapse>
        
    </Navbar>
    </Container>
    </>
  )
}

export default NavBar