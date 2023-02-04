import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../components/Images'
import '../css/home.css'
import {FaFacebookSquare,FaLinkedin,FaTwitterSquare,FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import Tilt from 'react-parallax-tilt';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Commonbutton from '../components/Commonbutton'


const Home = () => {
  
  let [lineBrake,setLineBrake] = useState(false)
  useEffect(()=>{

  window.innerWidth < 991.98 ? setLineBrake(true) : setLineBrake(false)

  },[])
   // Create Ref element.
   const el = useRef(null);

   useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ["Front-end developer.", "Back-end developer.", "MERN-stack developer."], // Strings to display
       // Speed settings, try diffrent values untill you get good results
       startDelay: 300,
       typeSpeed: 100,
       backSpeed: 100,
       backDelay: 100,
       smartBackspace: true,
       loop: true,
       showCursor: true,
       cursorChar: "|"
     });
 
     // Destropying
     return () => {
       typed.destroy();
     };
   }, []);
  return (
    <>
    <title>Home | Hamza Altamas</title>
     <Container className='mt-lg-5 mt-md-0 mt-sm-0 '>
      <Row>
      <Col lg={6} className="d-flex justify-content-center ">
        <div className='mt-4 d-flex justify-content-center position-relative'>
          <div className='home-image-wrapper'>
        <Tilt>
         <div>
         <div className='home-image-wrapper-inner'>
            <Images className="w-100 h-auto d-block" src="https://i.postimg.cc/kXz7fGyV/pexels-italo-melo-2379005-removebg-preview.png"/>
          </div>
          <div className='report-wrapper'>
          <div className='report report-one'>
            <h3>5+</h3>
            <h6>Years of experience</h6>
          </div>
          <div className='report report-two'>
          <h3>6+</h3>
            <h6>Reputed Companies</h6>
          </div>
          <div className='report report-three'>
          <h3>12+</h3>
            <h6>Awards won</h6>
          </div>
          </div>
         </div>
         </Tilt>
          </div>
         
          <div className='social-links-wrapper'>
            <ul>
              <li><Tilt><a href=""><FaFacebookSquare/></a></Tilt></li>
              <li><Tilt><a href=""><FaInstagramSquare/></a></Tilt></li>
              <li><Tilt><a href=""><FaTwitterSquare/></a></Tilt></li>
              <li><Tilt><a href=""><FaLinkedin/></a></Tilt></li>
              <li><Tilt><a href=""><FaGithubSquare/></a></Tilt></li>
            </ul>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className='d-flex h-100 home-text-info-wrapper '>
           <h5>Hello I'm</h5>
           <h1>Hamza Altamas</h1>
           <h3 className={`${lineBrake && "d-flex flex-column gap-2"}`}><span>A passionate</span> <span><span className='typed-text'  ref={el}></span></span></h3>
           <p className='home-info py-3'>
           Welcome to my digital portfolio! I am a skilled web developer with a passion for crafting visually stunning and intuitive websites. From concept to launch, I specialize in creating responsive, user-friendly designs that drive results. Browse my portfolio to see some of my recent work and let's bring your online vision to life.
           </p>
           <div className='mt-2 mt-md-4 home-contact-btn'>
           <Commonbutton href="/contact" title="Contact me"/>
           </div>
        </div>
      </Col>
      </Row>
     </Container>
    </>
  )
}

export default Home 