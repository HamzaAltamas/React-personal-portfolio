import React, { useState } from 'react'
import { Col, Modal } from 'react-bootstrap'
import Commonbutton from './Commonbutton';
import Images from './Images'
import Tilt from 'react-parallax-tilt';
import {FaTimes} from 'react-icons/fa'
import { FaLink } from 'react-icons/fa';
import '../css/portfolio.css'

const PortfolioCard = ({projectName,projectDetails,imgsrc}) => {
    const [lgShow, setLgShow] = useState(false);
  return (
    <Col lg={4}>
        <Tilt>
        <div className='portfolio-card-wrapper'>
            <h5 className='project-title'>  {projectName}</h5>
            <div className='hover-overlay'></div>
         
            <div onClick={() => setLgShow(true)} className='project-detail-link'><span><FaLink className='mb-1'/></span></div>
          <Images src={imgsrc} className="portfolio-image"/>
        </div>
        </Tilt>
        {/* modal start */}
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header closeButton>
          <h2 className='modal-header'>
            {projectName}
          </h2>
          <FaTimes className='modal-close-btn' onClick={()=> setLgShow(false)}/>
          
        </Modal.Header>
        <Modal.Body>
            <Images className="project-details-image" src={imgsrc}/>
            <p className='project-details mb-5 mt-5'>{projectDetails}</p>
             <Commonbutton href="/#" title="Live Project Link"/>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default PortfolioCard