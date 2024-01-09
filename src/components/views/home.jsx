import { Row, Col, Image } from 'react-bootstrap';
import MainLayout from '../layouts/mainLayout'
import FreeTrial from '../freeTrial/freeTrial';
import PromoVideo from '../promoVideo/promoVideo';
import FreeTrialLarge from '../freeTrial/freeTrialLarge';
import ProConsTable from '../proConsTable/proConsTable';
import SectionLayout from '../layouts/sectionLayout';
import ReportsProductsCards from '../layouts/reportsProductsCards/reportsProductsCards';
import ImageWebP from '../imageWebP/imageWebP';

import coverBg from '../../assets/bgs/cover-bg.jpg';
import coverBgWebP from '../../assets/bgs/cover-bg.webp';

import { Accordion, Card, Button } from 'react-bootstrap';
import '../../styles/homePage.css'

import { 
  LAST_FREE_TRIAL_PARAGRAPH,
  CALCULATOR_STEPS,
  TESTIMONIALS,
  HOME_ARTICLES,
  HOW_WE_DO_CARDS,
  PROBLEMS_LIST,
  OUR_SOLUTION_LIST,
  FREE_TRIAL_PARAGRAPH,
  WHY_ARIES_CARDS } from '../../constants/paragraphs';
import Article from '../article/article';
import Testimonials from '../testimonials/testimonials';
import InvestmentCalculator from '../investmentCalculator/investmentCalculator';
import {Helmet} from "react-helmet";

const whyAriesList = WHY_ARIES_CARDS.map((card) => {
  const imageImport = require(`../../assets/icons/${card.icon}`);

  return {
    image: imageImport,
    title: null,
    text: card.paragraph,
  }
});

const proConsList = PROBLEMS_LIST.map((problem, index) => { 
  return {
    pro: problem,
    con: OUR_SOLUTION_LIST[index]
  }
})

const howWeDoList = HOW_WE_DO_CARDS.map((card) => {
  const imageImport = require(`../../assets/images/${card.image}`);
  return {
    image: imageImport,
    title: card.title,
    text: card.paragraph,
  }
});

const articlesList = HOME_ARTICLES.map((article) => {
  const imageImport = require(`../../assets/images/${article.image}`);
  return {
    ...article,
    text: article.paragraph,
    image: imageImport
  }
});

const testimonialsList = TESTIMONIALS.map((testimonial) => {
  const imageImport = require(`../../assets/images/${testimonial.image}`);
  const photo = require(`../../assets/images/${testimonial.photo}`);
  return {
    ...testimonial,
    image: imageImport,
    picture: photo
  }
});

const calculatorData = CALCULATOR_STEPS.map( step => {
  return {
    ...step
  }
});




function Home() {

    return (
      <MainLayout>
        {/* MAIN COVER */}
        <Helmet>
          <link rel="canonical" href="https://www.firelabinc.com" />
        </Helmet>

        <SectionLayout
          hasMarginTop={false}
        >
          <div className='position-relative'>
            <Image
              src={coverBgWebP}
              width={"100%"}
              height={"100%"}
              alt="Background Cover Image"
            />
            <section className='cover-text'>
              <h2 className='fw-bold mt-3 text-white display-4 text-uppercase'>
                Inspection.&nbsp; testing.&nbsp; maintenance.
              </h2>
              {/* <p className='cover-caption mx-auto text-white fs-xxl'>
                One Software Platform To Run Your Entire<br />
                Fire Life Safety Business.
              </p> */}
              <h1 className='cover-caption mx-auto text-white fs-xxl'>One Fire Inspection Software Platform To Run Your Entire<br /> Fire Life Safety Business.</h1>
            </section>
          </div>          
        </SectionLayout>

        {/* COMPLETE FREE TRIAL */}
        <FreeTrial isBigSized={true} hasMarginTop={false} className={"mt-4"} />

        {/* PROMO VIDEO */}
        <PromoVideo />

        {/* FREE TRIAL BUTTONS */}
        <FreeTrialLarge 
          paragraph={FREE_TRIAL_PARAGRAPH} 
        />

        {/* OUR SOLUTIONS */}
        <ProConsTable 
          proConsList={proConsList}
        />

        {/* WHY ARIES */}
        <SectionLayout>
          {/* <h2 className='heading_lines display-2 fw-bold'>Why Aries</h2> */}
          <h2 className='heading_lines display-4 fw-bold'>Why Choose Aries For Your Fire <br />Inspection Software</h2>
           
          <Row>
            {
              whyAriesList.map((card, index) => {
                return (
                  <Col sm={6} lg={3} key={index}>
                    <div className="corner-patch"></div>
                    <ReportsProductsCards
                      key={index}
                      image={card.image}
                      text={card.text}
                    />
                  </Col>
                )
              })
            }
          </Row>
        </SectionLayout>
     
      <div className='feature-col'>
         <SectionLayout>
            <h2 className='heading_lines display-4 fw-bold'>What Sets Our Fire Alarm Inspection <br />Software Apart</h2>
            <div className="feature-list mt-5">
              <div className='row'>
                <div className='col-lg-4 col-sm-6'>
                    <div className='ctnt'>
                      <h5>Comprehensive Inspection Coverage</h5>
                      <p>Our software covers 17 different report categories, including a Quote form for sales and a Work Order form for repairs.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <div className='ctnt'>
                      <h5>User-Friendly Reporting</h5>
                      <p>Aries doesn't require extensive training. Even non-technical users can easily create and understand comprehensive inspection reports.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <div className='ctnt'>
                      <h5>Mobile Accessibility</h5>
                      <p>Inspectors can use our software in the field on any device type, not limited to a specific platform.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <div className='ctnt'>
                      <h5>Customization Options</h5>
                      <p>Predefined checklists for ease of use, with the flexibility to tailor inspection questions to match specific needs and standards.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <div className='ctnt'>
                      <h5>Compliance</h5>
                      <p>Reports are NFPA and Joint Commission compliant, strictly based on NFPA standards. Adopts all Joint Commission requirements for compliance.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <div className='ctnt'>
                      <h5>Precise Inspection and Testing</h5>
                      <p>Built specifically for fire protection companies, our platform is ready to use without the need for extensive tweaking.</p>
                    </div>
                </div>
              </div>
            </div>
          </SectionLayout>
      </div>

        {/* RETURN ON INVESTMENT CALCULATOR */}
        <SectionLayout>
            <Row>
              <Col xs={12} lg={5} className='text-start d-flex align-items-center'>
                <h2 className='display-5 fw-bold'>
                See How <span className='highlight'>Aries</span> fire inspection software                
                  Can Save You Money
                </h2>
              </Col>
              <Col sm={1} lg={1} className="d-none d-lg-flex align-items-center justify-content-center">
                <Image src={require('../../assets/bgs/separator-lines.png')} alt="Separator lines Image"/>
              </Col>
              <Col xs={12} lg={6} className="d-flex align-items-center">
                <InvestmentCalculator
                  steps={calculatorData}
                />
              </Col>  
            </Row>
        </SectionLayout>

        {/* HOW ARIES WORKS */}
        <SectionLayout>
          <h2 className='heading_lines display-2 fw-bold'>
            How
            <span className='highlight'> Aries </span> 
            fire inspection <br />Software Works
          </h2>
          <Row className='mt-2'>
            {howWeDoList.map((card, index) => {
                return (
                  <Col sm={6} lg={4} key={index} className='p-5'>
                    <ReportsProductsCards
                      key={index}
                      image={card.image}
                      title={card.title}
                      text={card.text}
                      fullWidthImage
                    />
                  </Col>
                )
              })
            }
          </Row>
        </SectionLayout>
        
        {/* ARTICLES */}
        {articlesList.map((article, index) => {
            return (
              <Article 
                key={index}
                title={article.title}
                paragraph={article.text}
                image={article.image}
                imageAlt={article.title}
                order={article.order}
              />
            )
          })
        }

        {/* TESTIMONIALS */}
        <SectionLayout>
          <h2 className='heading_lines display-2 fw-bold'>What Our Clients Say</h2>
          <Testimonials 
            testimonialsList={testimonialsList}
          />
        </SectionLayout>


        <FreeTrialLarge 
          paragraph={LAST_FREE_TRIAL_PARAGRAPH} 
        />


        <SectionLayout>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h5>Q1: What is fire inspection software?</h5></Accordion.Header>
            <Accordion.Body>
            <p style={{textAlign: 'left'}}>Fire inspection software is a digital tool designed to streamline and organize the process of conducting fire safety inspections, preparing sales quotes, and making repairs to fire life safety systems.  It provides inspection reminders, tracks inventory and timesheets, as well as manages deficiencies.  It also monitors inventory in the warehouse and on your vehicles.</p>
            </Accordion.Body>
          </Accordion.Item>
    
          <Accordion.Item eventKey="1">
            <Accordion.Header><h5>Q2: Why is fire inspection software essential for businesses?</h5></Accordion.Header>
            <Accordion.Body>
            <p style={{textAlign: 'left'}}>Fire inspection software is essential for businesses who ensure compliance with safety regulations because we provide the rails for compliance.  Using Aries will reduce errors made by techs, prevent incomplete data on reports, and give you the peace of mind that each inspection you perform meets regulatory standards.</p>
            </Accordion.Body>
          </Accordion.Item>
    
          <Accordion.Item eventKey="2">
            <Accordion.Header><h5>Q3: What features should I look for in the best fire inspection software?</h5></Accordion.Header>
            <Accordion.Body>
            <p style={{textAlign: 'left'}}>The best fire inspection software should work on any mobile device, it should work with or without Internet or cellular connection, and it should be made by fire protection experts.</p>
            </Accordion.Body>
          </Accordion.Item>
    
          <Accordion.Item eventKey="3">
            <Accordion.Header><h5>Q4: How can fire alarm inspection software benefit my organization?</h5></Accordion.Header>
            <Accordion.Body>
            <p style={{textAlign: 'left'}}>Fire alarm inspection software will benefit your organization in many ways.  But there are two benefits that rise above the others.  The first, is that will make sure that your techs are performing their inspections correctly.  The second, is that it will generate more monthly income for your company.</p>
            </Accordion.Body>
          </Accordion.Item>
    
          <Accordion.Item eventKey="4">
            <Accordion.Header><h5>Q5: What is the advantage of using fire extinguisher inspection software?</h5></Accordion.Header>
            <Accordion.Body>
            <p style={{textAlign: 'left'}}>Fire extinguisher inspection software simplifies the inspection process and reduces the data entry time to complete reports.</p>
            </Accordion.Body>
          </Accordion.Item>
    
          <Accordion.Item eventKey="5">
            <Accordion.Header><h5>Q6: How can fire sprinkler inspection software help maintain safety?</h5></Accordion.Header>
            <Accordion.Body>
            <p style={{textAlign: 'left'}}>Fire sprinkler inspection software facilitates Inspections, Testing, and Maintenance by establishing routine tests and repairs, to maintain operational status of these systems.  Aries won’t let you forget an inspection or a repair that needs to be made for any of your customers.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </SectionLayout>

      </MainLayout>
    );
}

export default Home;
