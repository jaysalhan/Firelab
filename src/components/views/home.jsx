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
              <h2 className='fw-bold mt-4 text-white display-4 text-uppercase'>
                Inspection.&nbsp; testing.&nbsp; maintenance.
              </h2>
              <p className='cover-caption mx-auto text-white fs-xxl'>
                One Software Platform To Run Your Entire<br />
                Fire Life Safety Business.
              </p>
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
          <h2 className='heading_lines display-2 fw-bold'>Why Aries</h2>
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

        {/* RETURN ON INVESTMENT CALCULATOR */}
        <SectionLayout>
            <Row>
              <Col xs={12} lg={5} className='text-start d-flex align-items-center'>
                <h2 className='display-5 fw-bold'>
                  See How
                  <span className='highlight'> Aries </span> 
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
            Works
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
      </MainLayout>
    );
}

export default Home;