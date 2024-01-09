import { Button, Col, Row, Table } from 'react-bootstrap';
import MainLayout from '../layouts/mainLayout';

import { featuresSpark, featuresFlame, featuresBlaze, PLANS } from '../../constants/pricing';
import FreeTrialLinks from '../freeTrial/freeTrialLinks';
import pricingBanner from '../../assets/pricing/pricing-banner.png';
import pricingBannerWebP from '../../assets/pricing/pricing-banner.webp';
import subscriptionRocket from '../../assets/pricing/Subscription.png';
import subscriptionRocketWebP from '../../assets/pricing/Subscription.webp';

import '../../styles/pricingPage.css';
import SectionLayout from '../layouts/sectionLayout';
import ImageWebP from '../imageWebP/imageWebP';
import {Helmet} from "react-helmet";

const { SPARK, FLAME, BLAZE } = PLANS;

function PricingPage() {
  const renderSubscription = ({
    title,
    price,
    features,
    highlight,
    color,
    background,
    mostPopular,
  }) => {
    const renderFeatures = (features) => features.map((item, index) => {
      const icon = item.active ? 'fa fa-check check' : 'fa fa-close close';
      return (
        <tr key={`feat-${index}`}>
          <td>{ <i className={`${icon}`}></i> }</td>
          <td>{ item.title }</td>
        </tr>
    )});
    const mostPopularStyle = mostPopular ? 'most-popular' : 'no-most-popular';
    return (
    <Col md={4}>
      <Col md={12}>
        <div className={`py-2 text-center fw-bold ${mostPopularStyle}`}>
          { mostPopular ? 'MOST POPULAR' : '.'  }
        </div>
        <div className={`p-1 ${background} rounded`}>
          <div className={`${color}`}>
          <ImageWebP
              srcNormal={subscriptionRocket}
              srcWebP={subscriptionRocketWebP}
              imgType={'png'}
              alt="reocket"
              className='rounded-circle bg-white my-3'
              width={100}
              height={100}
            />
            <h2 className='h6 fw-bold'>{title}</h2>
            <h3 className={`h5 mb-4 ${highlight ? 'highlight' : ''}`}>${price}<br></br>/ per month</h3>
          </div>

          <div className={`${background} bg-white`}>
            <Table hover className='text-start' striped>
              <tbody>
                { renderFeatures(features) }
              </tbody>
            </Table>
            <Button href='./try-us' className={`mt-3 mb-5 ${color} ${background}`}>14 DAY FREE TRIAL</Button>
          </div>
        </div>
      </Col>
    </Col>
    );
  }

    return (
      <MainLayout>
      <Helmet>
        <link rel="canonical" href="https://www.firelabinc.com/pricing" />
      </Helmet>

        {/* Section 1 */}
        <SectionLayout className='text-md-start text-sm-center'>
          <Row className='align-items-center'>
            <Col xs={12} md={6} className='pb-sm-5'>
              <h1 className='display-4 fw-bold'>OUR <span className='highlight'>PRICING</span></h1>
              <p>
                Aries plans are all a flat-rate model. Which means, for the flat price you see below, you can have unlimited techs, unlimiteds reports, and unlimited customer support.
              </p>
            </Col>
            <Col xs={12} md={6} className='pb-sm-5'>
              <ImageWebP
                  srcNormal={pricingBanner}
                  srcWebP={pricingBannerWebP}
                  imgType={'png'}
                  className="mx-auto d-block"
                  alt="inspection"
                  width={640}
                  height={282}
                />
            </Col>
          </Row>
        </SectionLayout>

        {/* Section 2 */}
        <SectionLayout className='text-center'>
          <Row className='align-items-center'>
            { 
              renderSubscription({
                title: SPARK,
                price: 299,
                features: featuresSpark,
                highlight: true,
                color: 'text-dark',
                background: 'bg-third',
              })
            }
            { 
              renderSubscription({
                title: FLAME,
                price: 399,
                features: featuresFlame,
                mostPopular: true,
                color: 'color-white',
                background: 'bg-highlight',
              })
            }
            { 
              renderSubscription({
                title: BLAZE,
                price: 499,
                features: featuresBlaze,
                color: 'color-white',
                background: 'bg-first',
              })
            }
          </Row>
        </SectionLayout>

        {/* Section 3 */}
        <SectionLayout>
          <FreeTrialLinks />
        </SectionLayout>       
      </MainLayout>
    );
}

export default PricingPage;