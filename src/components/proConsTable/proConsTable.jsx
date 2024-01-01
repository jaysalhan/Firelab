import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import ProConsRow from './proConsRow';
import ourSolutionIcon from '../../assets/images/our-solutions.png';

import listBorder from '../../assets/bgs/list-border.png';

import './proCons.css';
import SectionLayout from '../layouts/sectionLayout';

function ProConsTable({
  proConsList = []
}) {

  return (
    <SectionLayout>
      <Row className='mb-5'>
        <Col className='text-start'>
          <Image src={ourSolutionIcon} alt="our-solution"/>
        </Col>
        <Col className='text-start'>
          <Image src={ourSolutionIcon} alt="our-solution"/>
        </Col>
      </Row>
      <Row className='pro_cons_table'>
        <Col className='text-start'>
          <h2 className='fancy_title text-uppercase fw-bold'>Problem</h2>
        </Col>

        <Col className='text-start'>
          <h2 className='fancy_title text-uppercase fw-bold'>Our Solution</h2>
        </Col>
      </Row>
      <section className="pro_cons_rows">
        <Image className='line_border' src={listBorder}  alt='list-border'/>
        {proConsList.map((proCon, index) => (
          <ProConsRow 
            key={index}
            pro={proCon.pro}
            con={proCon.con}
          />
        ))}
      </section>
    </SectionLayout>
  );
}

export default ProConsTable;