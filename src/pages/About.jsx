import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '../components/SectionHeading'
import Images from '../components/Images';
import '../css/about.css'
import AboutInfoBar from '../components/AboutInfoBar';
import AboutInfoItem from '../components/AboutInfoItem';
import AboutEducationItem from '../components/AboutEducationItem';
import Tilt from 'react-parallax-tilt';
import Commonbutton from '../components/Commonbutton';



const About = () => {
  return (
    <>
     <title>About | Hamza Altamas</title>
    <Container className='mt-lg-5 mt-md-0 mt-sm-0'>
      <div><SectionHeading title="About me"/></div>
      <Row className='mt-5'>
      <Col lg={4} >
        <div>
          <h3 className='text-center mb-5 fw-bold about-greeting-text'>Hi, I am <span> Hamza Altamas </span></h3>
        <Tilt>
         <div className='d-flex mb-5 justify-content-center'>
          <div className="about-image-shape">
            <Images src="https://i.postimg.cc/kXz7fGyV/pexels-italo-melo-2379005-removebg-preview.png" />
           </div>
           <div className="about-image-shape-bg">
            </div> 
          </div>
         </Tilt>
         <div className='d-flex justify-content-center my-5 my-sm-5 my-md-5 my-lg-0 '>
         
            <Commonbutton title="Download CV" />
     
         </div>
        </div>
          </Col>
        <Col lg={4}>
  		     <div>
           <AboutInfoBar title="Personal Info"/>
           <AboutInfoItem title="First name" info="Hamza"/>
           <AboutInfoItem title="Last name" info="Altamas"/>
           <AboutInfoItem title="Age" info="23 years"/>
           <AboutInfoItem title="Nationality" info="Bangladeshi"/>
           <AboutInfoItem title="Languages" info="English , Bangla"/>
           <AboutInfoItem title="Address" info="Mohammadpur,Dhaka - 1207"/>
           <AboutInfoItem title="Freelance" info="Available"/>
           </div>
        </Col>
        <Col lg={4} className="mt-5 mt-lg-0">
        <AboutInfoBar title="Education" />
        <div>
           <AboutEducationItem edutitle="Bachelor of Science" duration="2022-2026" instName="University of California" eduinfo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora id maiores accusamus." />
           <AboutEducationItem edutitle="Masters of Science" duration="2022-2026" instName="University of California" eduinfo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora id maiores accusamus." />
           <AboutEducationItem edutitle="Bachelor of Science" duration="2022-2026" instName="University of California" eduinfo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora id maiores accusamus." />
           
           </div>
        </Col>
        <hr/>
      </Row>
      <Row>
        <div className='mt-5 mb-5'><SectionHeading title="My skills"/></div>
     
          {/* <Col lg={12} className='pb-5 '>
            <Row className='gap-lg-0 gap-3'>
            <Col lg={3} md={3} >
              <AnimatedProgressbar skillName="Frontend" percent="70"/>
            </Col>
            <Col lg={3} md={3} className="d-flex justify-content-center mt-sm-2">
              <AnimatedProgressbar skillName="Backend" percent="60"/>
              </Col>
            <Col lg={3} md={3} className="d-flex justify-content-center mt-sm-2">
              <AnimatedProgressbar skillName="App" percent="75" />
              </Col>
            <Col lg={3} md={3} className="d-flex justify-content-center mt-sm-2">
              <AnimatedProgressbar skillName="UX/UX" percent="50"/>
              </Col>
             </Row> 
          </Col> */}
          <Col lg={12} className='pb-5'>
            {/* <Row>
               <Col lg={6}>
                <HorizontalProgressBar title='HTML' value="70"/>
               </Col>
               <Col lg={6}>
                <HorizontalProgressBar title='CSS' value="80"/>
               </Col>
               <Col lg={6}>
                <HorizontalProgressBar title='JavaScript' value="60"/>
               </Col>
               <Col lg={6}>
                <HorizontalProgressBar title='React' value="90"/>
               </Col>
               <Col lg={6}>
                <HorizontalProgressBar title='Redux' value="95"/>
               </Col>
               <Col lg={6}>
                <HorizontalProgressBar title='Node' value="50"/>
               </Col>
            </Row> */}
          </Col>
    
      </Row>
    </Container>
    </>
  )
}

export default About