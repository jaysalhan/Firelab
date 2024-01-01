import { Container, Row, Col, Image } from "react-bootstrap";
import contactBannerImage from "./../../../assets/images/contact-banner.png";
import "./contactBanner.css";

function ContactBanner() {
  return (
    <Container className="mt-3" fluid>
      <Row>
        <Col md={6} className="contact_banner_text">
          <div>
            <h1 className="contact_title display-4 fw-bold">
              CONTACT <span>US</span>
            </h1>
            <p className="contact_text">
              Feel free to contact us for any questions you may have. Below we
              have provided <span>3 convenient ways</span> to contact us. Choose
              the one you prefer.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <Image src={contactBannerImage} alt="contact-banner" fluid width={440} height={302}/>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactBanner;
