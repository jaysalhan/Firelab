import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import FreeTrialTitle from '../freeTrial/freeTrialTitle';
import firelabLogo from '../../firelab-logo.png';
import calendarIcon from '../../assets/icons/calendar.png';
import phoneIcon from '../../assets/icons/phone.png';
import emailIcon from '../../assets/icons/email.png';
import facebookIcon from '../../assets/icons/fb_icon.png';
import linkedinIcon from '../../assets/icons/linkedin_icon.png';
import twitterIcon from '../../assets/icons/twitter_icon.png';
import FancyLink from '../fancyLink';
import './footer.css'
import { ARIES_LINK_TRYUS } from '../../constants/generals';

function Footer() {
  return (
    <div className='firelab footer-container mb-5 mt-5'>
      <Container className='footer-container text-center mb-5 mt-5 border-top border-3'>
        <Image
          src={firelabLogo}
          className="footer-image mx-auto d-block"
          alt="firelab"
          fluid
        />
        <FreeTrialTitle hasLink={true} />
        <Row className='links-panel fw-light text-sm mx-auto mt-5'>
          <Col md={1}></Col>
          <Col md={5} className='text-start'>
            <h3 className='h6 fancy-underline text-uppercase fw-bold'>Quick Link</h3>
            <Row>
              <Col xs={6}>
                <a className='text-decoration-none text-dark' href="/">Home</a>
              </Col>
              <Col xs={6}>
                <a href={ARIES_LINK_TRYUS} className='text-decoration-none text-dark'>Try Us</a>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <a href="/about" className='text-decoration-none text-dark'>About</a>
              </Col>
              <Col xs={6}>
                <a href="/pricing" className='text-decoration-none text-dark'>Pricing</a>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <a href="/reports" className='text-decoration-none text-dark'>Reports</a>
              </Col>
              <Col xs={6}>
                <a href="/contact-us" className='text-decoration-none text-dark'>Contact</a>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className='text-start p-10'>
            <h3 className='h6 fancy-underline text-uppercase fw-bold'>Contact Us</h3>
            <FancyLink
              icon={emailIcon}
              text='hello@firelabinc.com'
              link={'mailto:hello@firelabinc.com'}
              smallText={true}
            />
            <FancyLink
              icon={phoneIcon}
              text='Call at 1-800-579-8710'
              link={'tel:1-800-579-8710'}
              smallText={true}
            />
            <FancyLink
              icon={calendarIcon}
              text='Mon-Fri 9AM-5PM EST.'
              link={'#'}
              smallText={false}
            />
          </Col>
        </Row>
        <Row className="lb-social-icons mt-5 mb-5 py-5">
          <ul>
            <li>
              <a href="https://www.facebook.com/Aries-435773553185312/" target='_blank' rel='noopener noreferrer'>
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AriesSoft" target='_blank' rel='noopener noreferrer'>
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </li> 
            <li>
              <a href="https://www.linkedin.com/company/firelabinc/" target='_blank' rel='noopener noreferrer'>
                <img src={linkedinIcon} alt="Linkedin"/>
              </a>
            </li>
          </ul>
        </Row>
        <Row className='mt-5'>
          <Col>
            <span className='text-decoration-none text-dark small m-2'>&copy; 2023 Firelab All Rights Reserved</span>
            <a href='./terms-of-use' className='text-decoration-none text-dark small m-2'>Terms of Use</a>
            <a href='./privacy-policy' className='text-decoration-none text-dark small m-2'>Privacy Policy</a>
            <a href='./master-subscription-agreement' className='text-decoration-none text-dark small m-2'>Subscription Agreement</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer