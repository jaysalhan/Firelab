import { Container, Row, Col, Image } from "react-bootstrap";
import tryusImage from "../../../assets/images/Consultingbanner.png";
import "./tryUsBanner.css";

function TryUsBanner() {
  return (
    <Container className="mt-3" fluid>
      <Row>
        <Col md={6} className="tryus_banner_text">
          <div>
            <h1 className="tryus_title display-4 fw-bold">
              START YOUR
              <br />
              <span>FREE TRAIL TODAY</span>
            </h1>
            <p className="tryus_text">
              Give us a <span> test drive</span> risk free, we won’t ask for
              your credit card. Don’t wait to sign up, your competitors aren’t.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <Image src={tryusImage} alt="tryus-banner" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default TryUsBanner;
