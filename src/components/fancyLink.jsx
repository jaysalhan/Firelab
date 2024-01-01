import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function FancyLink({
  icon,
  text,
  link,
}) {
  return (
    <Row>
      <a href={link} className='text-decoration-none text-dark small'>
        <Image src={icon} alt="fancyLink" fluid />
        {' '}
        {text}
      </a>
    </Row>
  );
}

export default FancyLink;