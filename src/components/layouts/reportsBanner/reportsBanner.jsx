import { Col, Container, Image, Row } from "react-bootstrap";
import ReportsBannerImage from "../../../assets/images/reports-image.png";
import "./reportsBanner.css";

function ReportsBanner() {
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={6} className="text-container">
            <div>
              <h1 className="reports-title display-4 fw-bold">REPORTS</h1>
              <p className="reports-text">
                Aries creates <span> elegant</span> inspection reports that are
                <span> compliant</span> with NFPA and Joint Commission. You can
                also add or remove questions on our reports to tailor them to
                your needs.
              </p>
            </div>
          </Col>
          <Col md={6} className="">
            <Image
              src={ReportsBannerImage}
              alt="Reports-Image"
              className="mx-auto d-block"
              fluid
              width={444}
              height={244}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ReportsBanner;
