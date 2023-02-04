import React from 'react'
import { useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap'
import {FaTimes} from 'react-icons/fa'
import Commonbutton from './Commonbutton'
import Tilt from 'react-parallax-tilt';

const ServicesCard = ({icon,cardTitle,details}) => {
    const [lgShow, setLgShow] = useState(false);
  return (
    <Col lg={4}>
       <Tilt>
       <div className='crad-wrapper' onClick={() => setLgShow(true)}>
        
            <div className='icon-wrapper'>
                <div className='icon-wrapper-inner'>
                   {icon}
                </div>
            </div>
            <h3 className='position-absolute service-text'>{cardTitle}</h3>
            <h4 className='position-absolute click-text'>Click to read more</h4>
            <div className='background-overlay'></div>
        </div>
       </Tilt>
       
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      
      >
        <Modal.Header closeButton className='modal-header'>
          <h2 className='modal-header'>
            {cardTitle}
          </h2>
          <FaTimes className='modal-close-btn' onClick={()=> setLgShow(false)}/>
        </Modal.Header>
        <Modal.Body>
            <p className='project-details mb-5'>{details}</p>
             <Commonbutton href="/contact" title="Let's start discussion"/>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ServicesCard
