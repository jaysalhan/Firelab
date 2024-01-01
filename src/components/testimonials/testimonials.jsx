import React from 'react';
import { Carousel, Col, Row, Image } from 'react-bootstrap';
import './testimonials.css';

import quoteMark from '../../assets/icons/quote-mark.png';

function Testimonials({
  testimonialsList
}) {
  return (
    <div className='h-100'>
      <Carousel pause={false}>
        <Carousel.Item>
          <Row className='slide_page'>
            <Col className='custom_slide m-4'>
              <Image className='quote_mark' src={quoteMark} alt='quote-mark'/>
              <div className="testimonial_text position-relative shadow-sm p-5">
                <div style={{ height: "256px" }} className='d-flex align-items-center justify-content-center'>
                  <Image src={testimonialsList[0].image} width={"256px"} alt='testimonials-logos'/>
                </div>
                <div className='mt-5'>
                  {testimonialsList[0].paragraphs.map((paragraph, index) => {
                    return (
                      <p key={index}>{paragraph}</p>
                    )
                  })}
                </div>
              </div>
              <Row className='p-5 d-flex-end'>
                <Col md={2}>
                  <Image 
                    width={"64px"} height={"64px"}
                    src={testimonialsList[0].picture} 
                    className='rounded-circle border border-2'
                    alt='testimonials-icon'
                  />
                </Col>
                <Col className='text-start'>
                  <h3 className='small fw-bold'>{testimonialsList[0].name}</h3>
                  <p>{testimonialsList[0].company}</p>
                </Col>
              </Row>
            </Col>
            <Col className='custom_slide m-4'>
              <Image className='quote_mark' src={quoteMark} alt='quote-mark'/>
              <div className="testimonial_text position-relative shadow-sm p-5">
                <div style={{ height: "256px" }} className='d-flex align-items-center justify-content-center'>
                  <Image src={testimonialsList[1].image} width={"256px"} alt='testimonials-logos'/>
                </div>
                <div className='mt-5'>
                  {testimonialsList[1].paragraphs.map((paragraph, index) => {
                    return (
                      <p key={index}>{paragraph}</p>
                    )
                  })}
                </div>
              </div>
              <Row className='p-5'>
                <Col md={2}>
                  <Image 
                    width={"64px"} height={"64px"}
                    src={testimonialsList[1].picture}
                    className='rounded-circle border border-2'
                    alt='testimonials-icon'
                  />
                </Col>
                <Col className='text-start'>
                  <h3 className='small fw-bold'>{testimonialsList[1].name}</h3>
                  <p>{testimonialsList[1].company}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonials;