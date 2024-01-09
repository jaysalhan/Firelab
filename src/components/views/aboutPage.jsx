import { Col, Image, Row, Table, Card } from 'react-bootstrap';
import MainLayout from '../layouts/mainLayout';
import FreeTrialLarge from '../freeTrial/freeTrialLarge';
import "../../styles/aboutPage.css";

import listStyle from '../../assets/icons/list-style.png';
import aboutBanner from '../../assets/about/about-banner.png';
import aboutBannerWebP from '../../assets/about/about-banner.webp';
import aboutContent from '../../assets/about/about-content-bg.png';
import aboutContentWebP from '../../assets/about/about-content-bg.webp';
import aboutBetterEfficiency from '../../assets/about/better-efficiency.png';
import aboutBetterEfficiencyWebP from '../../assets/about/better-efficiency.webp';
import aboutCustomerSatisfaction from '../../assets/about/customer-satisfaction.jpg'; 
import aboutCustomerSatisfactionWebP from '../../assets/about/customer-satisfaction.webp'; 
import aboutFeaturesFlag from '../../assets/about/features-flag.png';
import aboutFeaturesFlagWebP from '../../assets/about/features-flag.webp';
import SectionLayout from '../layouts/sectionLayout';
import ImageWebP from '../imageWebP/imageWebP';
import {Helmet} from "react-helmet";


const howWeDoIt = [
  { title: 'Customizable Reports', description: 'Have The Report You Want' },
  { title: 'QuickBooks Integration', description: 'Automate Your Invoicing' },
  { title: 'NFPA References', description: 'Show Customers a Code Reference' },
  { title: 'Financial Dashboard', description: 'Quick Reference For Finances' },
  { title: 'Instant Messaging', description: 'Quickly Communicate With Your Team' },
  { title: 'Deficiencies', description: 'Track Your Deficiency Life Cycle' },
  { title: 'Spanish Version', description: 'Easily Convert to Español' },
  { title: 'Inventory', description: 'Monitor Your Parts and Tools' },
  { title: 'Any Hardware', description: 'Use With Apple, Android or Microsoft Products' },
  { title: 'Joint Commission and NFPA Complaint', description: 'Always Compliant With Regulations' },
  { title: 'TimeCard', description: 'Clock Your Teams Time to The Minute' },
  { title: 'Recurring Inspections', description: 'Be Reminded of Your Jobs Every Month' },
  { title: 'Bar Code / QR Code', description: 'Use Barcodes on Your Devices, Extinguishers Etc.' },
  { title: 'GPS', description: 'Know Where Your Techs Are' },
  { title: 'Customer Portal', description: 'Invite Your Customers to View Reports and Schedule Service' },
  { title: 'Memorized Reports', description: 'Never Have to Fill Out a Report Again' },
  { title: 'Work Orders', description: 'Complete Your Service Calls' },
  { title: 'Quotes', description: 'Give Your Customers Proposals' },
  { title: 'Photos', description: 'Attach Deficiency Photos to Your Reports' },
  { title: 'Scheduling and Dispatching', description: 'Your Field Techs Will Run Like A Swiss Watch' },
];

function AboutPage() {
    const howWeDoItRender = () => howWeDoIt.map((item, index) => (
      <tr key={`do-it-${index}`}>
        <td>
          <Image 
            src={listStyle}
            alt="fire"
            width={14}
            height={17}
            className='mx-3'
          />
            {item.title}
        </td>
        <td className='px-5'>:</td>
        <td> {item.description}</td>
      </tr>
    ));

    return (
      <MainLayout>
        {/* Section 1 */}
       <Helmet>
         <link rel="canonical" href="https://www.firelabinc.com/about" />
       </Helmet>

        <SectionLayout className='text-md-start text-sm-center'>
          <Row className='align-items-center'>
            <Col xs={12} md={6}>
              <h1 className='display-4 fw-bold'>WHAT <span className='highlight'>WE DO</span></h1>
              <p>
                Aries takes the things you’re doing every day, and some things you’re not doing, and turns them into a process. In other words, we help you go from good to great!
              </p>
            </Col>
            <Col xs={12} md={6}>
              <ImageWebP
                  srcNormal={aboutBanner}
                  srcWebP={aboutBannerWebP}
                  imgType={'png'}
                  className="mx-auto d-block"
                  alt="inspection"
                  width={541}
                  height={301}
                />
            </Col>
          </Row>
        </SectionLayout>

        {/* Section 2 */}
        <SectionLayout className='text-md-start text-sm-center'>
          <Row className='align-items-center'>
            <Col xs={12} md={6}>
              <Card className='border-0'>
                <ImageWebP
                  srcNormal={aboutContent}
                  srcWebP={aboutContentWebP}
                  imgType={'png'}
                  alt="Background Image"
                  width={600}
                  height={500}
                  style={{ width: '85%', height: '85%', float: 'left' }}
                />
                <Card.ImgOverlay>
                <ImageWebP
                    srcNormal={aboutBetterEfficiency}
                    srcWebP={aboutBetterEfficiencyWebP}
                    imgType={'png'}
                    alt="Better Eficiency Image"
                    className='text-end'
                    width={745}
                    height={440}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <p className='display-5 fw-bold'>Better <span className='highlight'>Efficiency</span><br/>Equals Better Profits</p>
              <p>
                Aries organizes your office and streamlines activities to help your staff get more done and get you more value out of your labor dollars. Aries also coordinates your field techs to help them be more productive. The increase in productivity leads to an increase in your profits.
              </p>
            </Col>
          </Row>
        </SectionLayout>

        {/* Section 3 */}
        <SectionLayout>
          <p className='display-5 fw-bold'><span className='highlight'>How</span> We DO it</p>
          <p className='highlight'>
            HERE IS A LIST OF SOME OF OUR MORE PROMINENT FEATURES
          </p>
          <div className='benefits_and_features'>
            <div className='flag_container'>
              <ImageWebP
                srcNormal={aboutFeaturesFlag}
                srcWebP={aboutFeaturesFlagWebP}
                imgType={'png'}
                width={244}
                height={1024}
              />
            </div>
            <div className='table_container'>
              <Table borderless hover variant='dark' className='text-start'>
                <tbody>
                  { howWeDoItRender() } 
                </tbody>
              </Table>
            </div>
            {/* <Col md={0}></Col> */}
          </div>    
        </SectionLayout>

        {/* Section 4 */}
        <SectionLayout>
          <FreeTrialLarge />
        </SectionLayout>

        
        {/* Section 5 */}
        <SectionLayout className='text-md-start text-sm-center'>
          <Row className='align-items-center'>
          <Col xs={12} md={7}>
            <ImageWebP
                srcNormal={aboutCustomerSatisfaction}
                srcWebP={aboutCustomerSatisfactionWebP}
                imgType={'jpg'}
                className="mx-auto d-block"
                alt="inspection"
                width={505}
                height={424}
              />
          </Col>
          <Col xs={12} md={5}>
            <p className='display-6 fw-bold'>Aries Will <span className='highlight'>Elevate</span> Your<br></br>Company's Image</p>
            <p>
              Try Aries fire systems inspection software and you’ll see how your customers can’t help but notice the difference.
            </p>
          </Col>
        </Row>
        </SectionLayout>
      </MainLayout>
    );
}

export default AboutPage;