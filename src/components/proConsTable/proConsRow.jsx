import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import FancyListItem from '../fancyList/fancyListItem';

import './proCons.css';

function ProConsRow({
  pro,
  con
}) {

  return (
    <section className='mt-1'>
      <Row>
        <Col className='list_border_col text-start fw-bold'>
          <FancyListItem
            text={pro}
          />
        </Col>
        <Col className='list_border_col text-start fw-bold'>
          <FancyListItem
            text={con}
          />
        </Col>
      </Row>
    </section>
  );
}

export default ProConsRow;