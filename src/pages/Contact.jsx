import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '../components/SectionHeading'
import '../css/contact.css'
import {BsFillTelephoneFill,BsFillChatDotsFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaFacebookF,FaYoutube,FaDribbble,FaUserAlt} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import Commonbutton from '../components/Commonbutton'
import {FaMapMarkedAlt} from 'react-icons/fa'

const Contact = () => {
  return (
    <>
     <title>Contact | Hamza Altamas</title>
    <Container className='mt-lg-5 mt-md-0 mt-sm-0 mb-5'>
      <div><SectionHeading title="Contact me"/></div>
     <Row className="mt-5">
        <Col lg={4}>
          <ul className='contact-leftside mb-4'>
          <li className='contact-list'><h5 className='contact-title'>Phone</h5><p className='mt-1 contact-details'><span className='contact-icon'><BsFillTelephoneFill/></span> <span className='contact-text'><a>+8801867654723</a></span></p></li>
          <li className='contact-list'><h5 className='contact-title'>Email</h5><p className='mt-1 contact-details'><span className='contact-icon'><MdEmail/></span> <span className='contact-text'><a>hamza.hamza@gmail.com</a></span></p></li>
          <li className='contact-list'><h5 className='contact-title'>Location</h5><p className='mt-1 contact-details'><span className='contact-icon'><FaMapMarkedAlt/></span> <span className='contact-text'><a>House-7,Road-16,Adabor-16,Mohammadpur,Dhaka-1207</a></span></p></li>
          </ul>
          <ul className='d-flex   gap-2 mb-5 mb-lg-0'> 
          <li  className='contact-social-icons'><a href='#'><FaFacebookF/></a></li>
          <li className='contact-social-icons'><a href='#'><FiInstagram/></a></li>
          <li className='contact-social-icons'><a href='#'><FaYoutube/></a></li>
          <li className='contact-social-icons'><a href='#'><FaDribbble/></a></li>
          </ul>
        </Col>
        <Col lg={8} >
          <form className='contact-form-wrapper '>
            <h5 className='contact-form-heading mb-1 text-center'>"Get in Touch: Let's Turn Your Ideas into Reality"</h5>
           
            <Row>
              <Col lg={6}>
                <div className='w-100 input-wrapper'>
                  <FaUserAlt className='input-icon'/>
                <input type="text" placeholder='Enter your name' className='input-box'/>
                </div>
              </Col>
              <Col lg={6}>
                <div className='w-100 input-wrapper mt-3 mt-lg-0'>
                  <MdEmail className='input-icon'/>
                <input type="text" placeholder='Enter your email' className='input-box'/>
                </div>
              </Col>
            </Row>
            <Row className='mt-4'>
            <div className='w-100 input-wrapper'>
            <BsFillChatDotsFill className='input-icon-textarea'/>
               <textarea placeholder='Enter your message' className='input-box textarea-box' >

               </textarea>
            </div>
            <div className='w-100 py-3 d-flex justify-content-center'>
              <Commonbutton title="Submit"/>
            </div>
            </Row> 
          </form>
        </Col>
     </Row>
    </Container>
    </>
  )
}

export default Contact