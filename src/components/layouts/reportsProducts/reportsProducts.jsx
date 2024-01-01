import { Row, Col, Container } from "react-bootstrap";
import ReportsProductsCards from "../reportsProductsCards/reportsProductsCards";
import {
  REPORTS_ALARM,
  REPORTS_BACKFLOW,
  REPORTS_EMERGENCY_EXITLIGHT,
  REPORTS_EXTINGUISHER,
  REPORTS_GREASE_CLEANING,
  REPORTS_HOOD_SYSTEM,
  REPORTS_HYDRANT,
  REPORTS_MONITORING,
  REPORTS_PUMP,
  REPORTS_SENSITIVITY,
  REPORTS_SPECIAL_HAZARD,
  REPORTS_WATER_TANK,
  REPORTS_STANDPIPE_HOSE,
  REPORTS_SUPPRESSION,
  REPORTS_SECURITY,
  REPORTS_FIRE_DOOR,
  REPORTS_SPRINKLER,
  REPORTS_QUOTE,
  REPORTS_WORK_ORDER,
} from "../../../constants/paragraphs";
import alarmIcon from "../../../assets/icons/alarm.png";
import backflowIcon from "../../../assets/icons/backflow.png";
import exitIcon from "../../../assets/icons/exit.png";
import extinguisherIcon from "../../../assets/icons/extinguisher.png";
import greesecleaningIcon from "../../../assets/icons/greesecleaning-1.png";
import hoodsystemIcon from "../../../assets/icons/hoodsystem.png";
import hydrantIcon from "../../../assets/icons/hydrant.png";
import monitoringIcon from "../../../assets/icons/monitoring-1.png";
import pumpIcon from "../../../assets/icons/pump.png";
import sensitivityIcon from "../../../assets/icons/sensitivity-1.png";
import specialhazardIcon from "../../../assets/icons/specialhazard.png";
import watertankIcon from "../../../assets/icons/watertank.png";
import hoseIcon from "../../../assets/icons/hose.png";
import suppressionIcon from "../../../assets/icons/suppression.png";
import securityIcon from "../../../assets/icons/security-1.png";
import firedoorIcon from "../../../assets/icons/firedoor.png";
import sprinklerIcon from "../../../assets/icons/sprinkler.png";
import quoteIcon from "../../../assets/icons/reportquote.png";
import workorderIcon from "../../../assets/icons/workorder.png";
import "./reportsProducts.css";

function ReportsProducts() {
  return (
    <Container className="fluid products-container mt-5">
      <Row>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={alarmIcon}
            title="ALARM"
            text={REPORTS_ALARM}
            className="products_image"
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={backflowIcon}
            title="BACKFLOW"
            text={REPORTS_BACKFLOW}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={exitIcon}
            title="EMERGENCY EXIT/LIGHT"
            text={REPORTS_EMERGENCY_EXITLIGHT}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={extinguisherIcon}
            title="EXTINGUISHER"
            text={REPORTS_EXTINGUISHER}
            width={220}
            height={95}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={greesecleaningIcon}
            title="GREASE CLEANING"
            text={REPORTS_GREASE_CLEANING}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={hoodsystemIcon}
            title="HOOD SYSTEM"
            text={REPORTS_HOOD_SYSTEM}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={hydrantIcon}
            title="HYDRANT"
            text={REPORTS_HYDRANT}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={monitoringIcon}
            title="MONITORING"
            text={REPORTS_MONITORING}
            width={220}
            height={95}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={pumpIcon}
            title="PUMP"
            text={REPORTS_PUMP}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={sensitivityIcon}
            title="SENSITIVITY"
            text={REPORTS_SENSITIVITY}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={specialhazardIcon}
            title="SPECIAL HAZARD"
            text={REPORTS_SPECIAL_HAZARD}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={watertankIcon}
            title="WATER TANK"
            text={REPORTS_WATER_TANK}
            width={220}
            height={95}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={hoseIcon}
            title="STANDPIPE / HOSE"
            text={REPORTS_STANDPIPE_HOSE}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={suppressionIcon}
            title="SUPPRESSION"
            text={REPORTS_SUPPRESSION}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={securityIcon}
            title="SECURITY"
            text={REPORTS_SECURITY}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={firedoorIcon}
            title="FIRE DOOR"
            text={REPORTS_FIRE_DOOR}
            width={220}
            height={95}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={sprinklerIcon}
            title="SPRINKLER"
            text={REPORTS_SPRINKLER}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={quoteIcon}
            title="QUOTE"
            text={REPORTS_QUOTE}
            width={220}
            height={95}
          />
        </Col>
        <Col sm={6} lg={3}>
          <div className="corner-patch"></div>
          <ReportsProductsCards
            image={workorderIcon}
            title="WORK ORDER"
            text={REPORTS_WORK_ORDER}
            width={220}
            height={95}
          />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ReportsProducts;
